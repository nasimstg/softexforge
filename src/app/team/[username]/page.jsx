import LayoutWrapper from '@/components/LayoutWrapper';
import { MDXLayoutRenderer } from '@/components/MDXComponents'
import {
    formatSlug,
    getFileBySlug,
    getFiles,
  } from "@/lib/mdx";

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function generateStaticParams(){
    const members = await getFiles('team');
    const params = members.map((m) => {
        const slugArray = formatSlug(m).split('/');
        return {
            slug: slugArray,
        };
    });
    return params;
}

export async function getMemberData(username) {
  const memberDetails = await getFileBySlug('team', [username])
  const { mdxSource, frontMatter } = memberDetails
  return { mdxSource, frontMatter }
}

export default async function Member({ params }) {
  console.log("params", params);
  const { mdxSource, frontMatter } = await getMemberData(params.username)

  return (
    <LayoutWrapper>
        <MDXLayoutRenderer
        layout={frontMatter.layout || DEFAULT_LAYOUT}
        mdxSource={mdxSource}
        frontMatter={frontMatter}
        />
    </LayoutWrapper>
  )
}
