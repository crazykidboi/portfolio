import { c as createComponent, m as maybeRenderHead, e as renderSlot, a as renderTemplate, f as createAstro, r as renderComponent, d as addAttribute } from '../../chunks/astro/server_WS2CD_x9.mjs';
import { r as renderEntry, g as getCollection, f as formatDate } from '../../chunks/utils_D9jxf-JY.mjs';
import 'clsx';
import { $ as $$InfoLayout } from '../../chunks/InfoLayout_DRgWmyyo.mjs';
export { renderers } from '../../renderers.mjs';

const $$Prose = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="prose dark:prose-invert prose:space-y-1 prose:text-balance
    prose-h1:text-3xl prose-h1:text-zinc-50 prose-h1:font-semibold
    prose-h2:text-xl prose-h2:text-zinc-100 prose-h2:font-semibold
    prose-p:text-base prose-p:text-zinc-300 prose-p:leading-7
    prose-strong:text-zinc-300
    prose-blockquote:text-zinc-200 prose-blockquote:font-normal
    prose-img:rounded-xl prose-img:w-full prose-img:aspect-auto prose-img:object-top prose-img:object-cover"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/maxis/Documents/portfolio/src/components/prose.astro", void 0);

const $$Astro = createAstro("https://crazykidboi.github.io");
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { article } = Astro2.props;
  const { Content } = await renderEntry(article);
  const allArticles = await getCollection("articles");
  const relatedArticles = allArticles.filter(
    (relatedArticle) => relatedArticle.data.category === article.data.category && relatedArticle.id !== article.id
  );
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, { "title": article.data.title, "frontmatter": article.data }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh"> <p class="mt-0.5 text-sm text-zinc-600"> ${formatDate(article.data.pubDate)}
&middot; ${article.data.mainRole} </p> ${renderComponent($$result2, "Prose", $$Prose, {}, { "default": async ($$result3) => renderTemplate` ${renderComponent($$result3, "Content", Content, {})} ` })} ${relatedArticles.length > 0 && renderTemplate`<div> <h2 class="mt-8 sm:mt-12 text-xl text-zinc-700 font-medium italic">
Related Articles
</h2> <ul class="mt-2.5"> ${relatedArticles.map((article2) => renderTemplate`<li class="group"> <a${addAttribute(`/work/${article2.data.slug}`, "href")}> <h3 class="text-xl text-zinc-700 group-hover:text-white underline underline-offset-2 decoration-transparent group-hover:decoration-zinc-500"> ${article2.data.title} </h3> <p class="mt-0.5 text-sm text-zinc-700 italic"> ${formatDate(article2.data.pubDate)}
&middot; ${article2.data.mainRole} </p> </a> </li>`)} </ul> </div>`} </section> ` })}`;
}, "/Users/maxis/Documents/portfolio/src/pages/work/[...slug].astro", void 0);

const $$file = "/Users/maxis/Documents/portfolio/src/pages/work/[...slug].astro";
const $$url = "/portfolio/work/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
