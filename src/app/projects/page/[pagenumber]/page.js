import { PageSEO } from "@/components/SEO";
import siteMetadata from "@/data/siteMetadata";
import { getAllFilesFrontMatter } from "@/lib/mdx";
import ListLayout from "@/layouts/ListLayout";
import LayoutWrapper from "@/components/LayoutWrapper";

const POSTS_PER_PAGE = 5;

export async function generateStaticParams() {
  const posts = await getAllFilesFrontMatter("blog");
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const params = Array.from({ length: totalPages }, (_, i) => ({
    pagenumber: String(i + 1),
  }));

  return params;
}

export default async function PostPage({ params }) {
  console.log(params);
  const posts = await getAllFilesFrontMatter("blog");
  const pageNumber = parseInt(params.pagenumber);
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE),
  };
  return (
    <LayoutWrapper>
      <PageSEO
        title={siteMetadata.title}
        description={siteMetadata.description}
      />
      <ListLayout
        posts={posts}
        initialDisplayPosts={initialDisplayPosts}
        pagination={pagination}
        title="All Posts"
      />
    </LayoutWrapper>
  );
}
