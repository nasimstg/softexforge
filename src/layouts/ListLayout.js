"use client";
import Link from "@/components/Link";
import Tag from "@/components/Tag";
import siteMetadata from "@/data/siteMetadata";
import { useState } from "react";
import Pagination from "@/components/Pagination";
import formatDate from "@/lib/utils/formatDate";

export default function ListLayout({
  posts,
  title,
  initialDisplayPosts = [],
  pagination,
}) {
  const [searchValue, setSearchValue] = useState("");
  const filteredProjects = posts?.filter((frontMatter) => {
    const searchContent =
      frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ");
    return searchContent.toLowerCase().includes(searchValue.toLowerCase());
  });

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue
      ? initialDisplayPosts
      : filteredProjects;

  return (
    <>
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-400 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            {title}
          </h1>
          <div className="relative max-w-lg">
            <input
              aria-label="Search articles"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search articles"
              className="block w-full rounded-md px-4 py-2 focus:border-primary-500 focus:ring-primary-500 border-gray-900 bg-gray-800 text-gray-100"
            />
          </div>
        </div>
        <ul className="">
          {!filteredProjects?.length && "No posts found."}
          {displayPosts?.map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter;
            return (
              <li key={slug} className="py-4 px-4">
                <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0 group pb-1 transition-all relative lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <dl className="z-10">
                    <dt className="sr-only">Published on</dt>
                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      <time dateTime={date}>{formatDate(date)}</time>
                    </dd>
                  </dl>
                  <div className="space-y-3 xl:col-span-3 z-10">
                    <div>
                      <h3 className="font-medium leading-snug text-slate-200">
                        <div>
                          <p
                            className=" text-2xl inline-flex items-baseline font-medium leading-snug text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link"
                            href="https://www.klaviyo.com"
                            target="_blank"
                            rel="noreferrer noopener"
                            aria-label="Senior Frontend Engineer, Accessibility at Klaviyo (opens in a new tab)"
                          >
                            <span>
                              <Link href={`/projects/${slug}`}>{title}</Link>
                              <span className="inline-block">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="inline-block h-6 w-6 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                    clipRule="evenodd"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </p>
                        </div>
                      </h3>
                    </div>
                    <div className="mt-2 text-lg leading-normal">{summary}</div>
                    <ul
                      className="mt-2 flex flex-wrap"
                      aria-label="Technologies used"
                    >
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </>
  );
}
