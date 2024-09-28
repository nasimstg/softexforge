import { existsSync, readFileSync, writeFileSync } from "fs";
import globby from "globby";
import matter from "gray-matter";
import { resolveConfig, format } from "prettier";
import { siteUrl } from "../data/siteMetadata";
(async () => {
  const prettierConfig = await resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.js",
    "pages/*.tsx",
    "data/blog/**/*.mdx",
    "data/blog/**/*.md",
    "public/tags/**/*.xml",
    "!pages/_*.js",
    "!pages/_*.tsx",
    "!pages/api",
  ]);

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                // Exclude drafts from the sitemap
                if (page.search(".md") >= 1 && existsSync(page)) {
                  const source = readFileSync(page, "utf8");
                  const fm = matter(source);
                  if (fm.data.draft) {
                    return;
                  }
                  if (fm.data.canonicalUrl) {
                    return;
                  }
                }
                const path = page
                  .replace("pages/", "/")
                  .replace("data/blog", "/blog")
                  .replace("public/", "/")
                  .replace(".js", "")
                  .replace(".tsx", "")
                  .replace(".mdx", "")
                  .replace(".md", "")
                  .replace("/feed.xml", "");
                const route = path === "/index" ? "" : path;

                if (
                  page.search("pages/404.") > -1 ||
                  page.search(`pages/blog/[...slug].`) > -1
                ) {
                  return;
                }
                return `
                        <url>
                            <loc>${siteUrl}${route}</loc>
                        </url>
                    `;
              })
              .join("")}
        </urlset>
    `;

  const formatted = format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
})();
