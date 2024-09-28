import fs from "fs";
import PageTitle from "@/components/PageTitle";
import generateRss from "@/lib/generate-rss";
import { MDXLayoutRenderer } from "@/components/MDXComponents";
import {
  formatSlug,
  getAllFilesFrontMatter,
  getFileBySlug,
  getFiles,
} from "@/lib/mdx";
import LayoutWrapper from "@/components/LayoutWrapper";

const DEFAULT_LAYOUT = "PostLayout";

export async function generateStaticParams() {
  const posts = await getFiles("blog");
  const params = posts.map((p) => {
    const slugArray = formatSlug(p).split("/");
    return {
      slug: slugArray,
    };
  });
  return params;
}

export async function getPost(slug) {
  const allPosts = await getAllFilesFrontMatter("blog");
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === slug.join("/")
  );
  const prev = allPosts[postIndex + 1] || null;
  const next = allPosts[postIndex - 1] || null;
  const post = await getFileBySlug("blog", slug.join("/"));
  const authorList = post.frontMatter.authors || ["default"];
  const authorPromise = authorList.map(async (author) => {
    const authorResults = await getFileBySlug("authors", [author]);
    return authorResults.frontMatter;
  });
  const authorDetails = await Promise.all(authorPromise);

  // rss
  if (allPosts.length > 0) {
    const rss = generateRss(allPosts);
    fs.writeFileSync("./public/feed.xml", rss);
  }

  const mdxSource = post.mdxSource;
  const toc = post.toc;
  const frontMatter = post.frontMatter;

  const postdata = {
    mdxSource,
    toc,
    frontMatter,
    authorDetails,
    prev,
    next,
  };

  return postdata;
}

export default async function Blog({ params }) {
  const postdata = await getPost(params.slug);

  const { mdxSource, toc, frontMatter, authorDetails, prev, next } = postdata;

  return (
    <LayoutWrapper>
      {frontMatter.draft !== true ? (
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          toc={toc}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
          authorDetails={authorDetails}
          prev={prev}
          next={next}
        />
      ) : (
        <div className="mt-24 text-center">
          <PageTitle>
            Under Construction{" "}
            <span role="img" aria-label="roadwork sign">
              🚧
            </span>
          </PageTitle>
        </div>
      )}
    </LayoutWrapper>
  );
}
