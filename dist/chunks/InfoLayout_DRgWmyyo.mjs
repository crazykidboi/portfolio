import { f as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate, r as renderComponent } from './astro/server_WS2CD_x9.mjs';
import { a as $$RootLayout, W as WarpBackground } from './warp-background_gPCKGYfO.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro$2 = createAstro("https://crazykidboi.github.io");
const $$ExternalLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ExternalLink;
  const { href, openNewTab = true } = Astro2.props;
  const pathname = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute(openNewTab ? "_blank" : "_self", "target")}${addAttribute(clsx(
    "w-fit group flex items-center gap-1 text-base hover:text-zinc-100 cursor-pointer",
    pathname === href ? "text-zinc-100" : "text-zinc-500"
  ), "class")}> ${renderSlot($$result, $$slots["default"])} ${openNewTab && renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" class="-rotate-45 group-hover:rotate-0 transition-all duration-300 ease-in-out" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"> <title>Arrow Icon</title> <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 12h2.5M20 12l-6-6m6 6l-6 6m6-6H9.5"></path> </svg>`} </a>`;
}, "/Users/maxis/Documents/portfolio/src/components/external-link.astro", void 0);

const $$Astro$1 = createAstro("https://crazykidboi.github.io");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<footer class="py-4 px-4 sm:px-12 w-full fixed bottom-0 flex items-center gap-4 sm:gap-8 bg-zinc-900"> <div class="flex gap-0"> <!-- <ExternalLink href="/" openNewTab={false}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 text-zinc-500 group-hover:text-zinc-100">
                <title>Home</title>
                <path fill="currentColor" fill-rule="evenodd" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" clip-rule="evenodd"/>
            </svg>
        </ExternalLink> --> <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> </div> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/work", "openNewTab": false }, { "default": ($$result2) => renderTemplate`Work` })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/about", "openNewTab": false }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/contact", "openNewTab": false }, { "default": ($$result2) => renderTemplate`Contact` })} </footer> <!-- place to get icons https://iconsvg.xyz -->`;
}, "/Users/maxis/Documents/portfolio/src/components/footer.astro", void 0);

const $$Astro = createAstro("https://crazykidboi.github.io");
const $$InfoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoLayout;
  const { title, description } = Astro2.props;
  Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex relative gap-0 w-full"> <nav class="relative w-4 md:min-w-2xs xl:min-w-sm sm:min-h-screen sm:ml-4 sm:pb-4"> <div class="w-full h-full max-sm:w-4 md:max-w-2xs xl:max-w-sm fixed -z-10 sm:bottom-4 sm:rounded-b-full overflow-hidden"> ${renderComponent($$result2, "WarpBackground", WarpBackground, { "color1": "#111111", "color2": "#222222", "color3": "#eb533d", "speed": 0.05, "swirl": 1.4, "swirlIterations": 7, "shapeScale": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/maxis/Documents/portfolio/src/components/warp-background", "client:component-export": "default" })} </div> </nav> <main class="relative w-auto"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> </div> ` })}`;
}, "/Users/maxis/Documents/portfolio/src/layouts/InfoLayout.astro", void 0);

export { $$InfoLayout as $, $$ExternalLink as a };
