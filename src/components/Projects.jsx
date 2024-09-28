import { getAllFilesFrontMatter } from '@/lib/mdx'
import Link from "@/components/Link";
import Tag from '@/components/Tag';
import formatDate from "@/lib/utils/formatDate";

export const POSTS_PER_PAGE = 3

export async function getPosts() {
  const posts = await getAllFilesFrontMatter('blog')
  const initialDisplayPosts = posts.slice(0, POSTS_PER_PAGE)

  return { initialDisplayPosts}
}

export default async function Projects() {
    const { initialDisplayPosts } = await getPosts();
  return (
    <section id="projects" className="mb-10 scroll-mt-10 md:mb-16 lg:mb-20 lg:scroll-mt-20" aria-label="Our Projects">
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
    </div>
    <ul className="">
    {!initialDisplayPosts?.length && "No posts found."}
    {initialDisplayPosts?.map((frontMatter) => {
      const { slug, date, title, summary, tags } = frontMatter;
      return (
        <li key={slug} className="py-2 px-1">
          <article className="space-y-2 xl:grid group pb-1 transition-all relative lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <dl className="z-10">
              <dt className="sr-only">Published on</dt>
              <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                <time dateTime={date}>{formatDate(date)}</time>
              </dd>
            </dl>
            <div className="space-y-3 z-10">
              <div>
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <p
                      className=" text-xl inline-flex items-baseline font-medium leading-snug text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link"
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
              <div className="mt-2 text-sm leading-tight">{summary}</div>
              <ul
                className="mt-2 flex flex-wrap"
                aria-label="Technologies used"
              >
                {tags.map((tag) => (
                  <Tag key={tag} text={tag} num={''} />
                ))}
              </ul>
            </div>
          </article>
        </li>
      );
    })}
  </ul>
  <div className='mt-8 ml-2'>
    <Link 
      href={'/projects'}
      className="rounded-md py-2 px-4 text-sm font-medium leading-6 bg-white text-gray-900 hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 focus-visible:ring-teal-300 focus-visible:ring-opacity-50"
    >
      All Projects
    </Link>
  </div>
  </section>
  )
}
