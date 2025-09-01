import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CHJvz4ud.mjs';
import { $ as $$H1 } from '../chunks/h1_BAlJ3QoY.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_DgeuDLjm.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh flex flex-col justify-between gap-32"> <div class="space-y-4 sm:space-y-12"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate` Get to know Nikola ` })} <p class="text-xl xl:text-2xl text-zinc-500 text-balance"> <a href="https://en.wikipedia.org/wiki/Nikola_Tesla" target="_blank" class="underline underline-offset-4 decoration-zinc-400 hover:text-zinc-50 hover:decoration-zinc-200">
Nikola Tesla
</a>
(1856-1943) was a Serbian-American inventor, engineer, and futurist
                    best known for his pioneering work in electricity and electromagnetism.
                    His innovations laid the foundation for modern alternating current
                    (AC) power systems and many technologies still in use today.
</p> </div> <div class="space-y-2 text-base sm:text-lg"> <h2 class="px-4 text-zinc-400 underline underline-offset-4 decoration-zinc-500">Achievements</h2> <ul class="px-4 text-zinc-400 list-disc list-outside"> <li>Alternating Current (AC) System</li> <li>Tesla Coil</li> <li>Induction Motor</li> <li>Wireless Transmission</li> <li>Radio and Remote Control</li> <li>Hydroelectric Power at Niagara Falls</li> <li>X-Ray Imaging</li> </ul> </div> </div> ` })}`;
}, "/Users/maxis/Documents/portfolio/src/pages/about.astro", void 0);

const $$file = "/Users/maxis/Documents/portfolio/src/pages/about.astro";
const $$url = "/portfolio/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
     __proto__: null,
     default: $$About,
     file: $$file,
     url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
