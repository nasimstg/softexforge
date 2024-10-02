import LayoutWrapper from "@/components/LayoutWrapper";
import { TagSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import ListLayout from "@/layouts/ListLayout";
import generateRss from "@/lib/generate-rss";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import { getAllTags } from "@/lib/tags";
import kebabCase from "@/lib/utils/kebabCase";
import fs from "fs";
import path from "path";

const root = process.cwd();

export async function generateStaticParams() {
  const tags = await getAllTags("blog");

  const params = Object.keys(tags).map((tag) => {
    return {
      tag: tag,
    };
  });

  return params;
}

export async function getPage(tag) {
  const allPosts = await getAllFilesFrontMatter("blog");
  const filteredPosts = allPosts.filter(
    (post) =>
      post.draft !== true && post.tags.map((t) => kebabCase(t)).includes(tag)
  );

  // rss
  if (filteredPosts.length > 0) {
    const rss = generateRss(filteredPosts, `tech/${tag}/feed.xml`);
    const rssPath = path.join(root, "public", "tech", tag);
    fs.mkdirSync(rssPath, { recursive: true });
    fs.writeFileSync(path.join(rssPath, "feed.xml"), rss);
  }

  return { posts: filteredPosts, tag: tag };
}

export default async function Tag({ params }) {
  const tag = params.tag;
  const { posts } = await getPage(tag);
  // Capitalize first letter and convert space to dash
  const title = tag[0].toUpperCase() + tag.split(" ").join("-").slice(1);
  return (
    <LayoutWrapper>
      <TagSEO
        title={`${tag} - ${siteMetadata.author}`}
        description={`${tag} tech - ${siteMetadata.author}`}
      />
      <ListLayout posts={posts} title={title} />
    </LayoutWrapper>
  );
}
