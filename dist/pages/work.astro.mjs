import { c as createComponent, r as renderComponent, b as renderScript, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_WS2CD_x9.mjs';
import { g as getCollection, f as formatDate } from '../chunks/utils_D9jxf-JY.mjs';
import { $ as $$H1 } from '../chunks/h1_cFANR6Sy.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_DRgWmyyo.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allArticles = await getCollection("articles");
  const articles = allArticles.filter((article) => !article.data.isDraft).sort((a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime());
  const categories = [...new Set(articles.map((article) => article.data.category))].filter(Boolean);
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": async ($$result3) => renderTemplate` Work ` })} <ul class="mt-6 flex items-center gap-4" id="category-nav"> <li> <a href="/work" data-category="all" class="category-link w-fit px-4 py-1 text-sm bg-transparent rounded-full transition-all duration-300 ease-in-out text-white bg-zinc-100/20 outline-2 outline-offset-2 outline-zinc-100/20">
All
</a> </li> ${categories.map((category) => renderTemplate`<li> <a${addAttribute(`/work?category=${category.toLowerCase()}`, "href")}${addAttribute(category.toLowerCase(), "data-category")} class="category-link w-fit px-4 py-1 text-lg bg-transparent rounded-full transition-all duration-300 ease-in-out text-zinc-400 hover:text-zinc-200"> ${category} </a> </li>`)} </ul> <ul class="grid max-w-300 grid-cols-3 gap-6 mt-3 space-y-2" id="portfolio-grid"> ${articles.map((article) => (
    // We attach the category as a data attribute for our script to read
    renderTemplate`<li class="portfolio-item"${addAttribute(article.data.category?.toLowerCase(), "data-category")}> <a class="space-y-0.8 group max-w-300"${addAttribute(`/work/${article.data.slug}`, "href")}> <h2 class="text-lg text-zinc-300 group-hover:text-white text-balance underline group-hover:underline-offset-2 decoration-transparent group-hover:decoration-zinc-500"> ${article.data.title} </h2> <p class="text-sm text-zinc-500 italic"> ${formatDate(article.data.pubDate)} &middot;${" "} ${article.data.mainRole} </p> <img${addAttribute(article.data.cover, "src")} class="w-300 aspect-3/4 h-auto overflow-hidden object-cover rounded-lg"> </a> </li>`
  ))} </ul> </div> ` })} ${renderScript($$result, "/Users/maxis/Documents/portfolio/src/pages/work/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/maxis/Documents/portfolio/src/pages/work/index.astro", void 0);

const $$file = "/Users/maxis/Documents/portfolio/src/pages/work/index.astro";
const $$url = "/portfolio/work";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
