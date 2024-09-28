import Link from "@/components/Link";
import { PageSEO } from "@/components/SEO";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { getAllTags } from "@/lib/tags";
import kebabCase from "@/lib/utils/kebabCase";
import LayoutWrapper from "@/components/LayoutWrapper";

export default async function Tags() {
  const tags = await getAllTags("blog");

  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a]);
  return (
    <LayoutWrapper>
      <PageSEO
        title={`Tech - ${siteMetadata.author}`}
        description="Things I blog about"
      />
      <div className="flex flex-col items-center justify-center divide-y divide-gray-700">
        <div className="space-x-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:px-6 md:text-6xl md:leading-14">
            Technologies
          </h1>
        </div>
        <div className="flex max-w-lg flex-wrap">
          {Object.keys(tags).length === 0 && "No tags found."}
          {sortedTags.map((t) => {
            return (
              <ul key={t} className="mt-2 mb-2 mr-5">
                <Tag text={t} num={`(${tags[t]})`} />
              </ul>
            );
          })}
        </div>
      </div>
    </LayoutWrapper>
  );
}
