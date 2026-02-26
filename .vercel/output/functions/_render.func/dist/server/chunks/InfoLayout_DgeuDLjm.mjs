import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate, e as renderComponent } from './astro/server_CHJvz4ud.mjs';
import { $ as $$RootLayout, W as WarpBackground } from './warp-background_Clxwny2v.mjs';
import clsx$1 from 'clsx';
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
  const pathname = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<footer class="py-4 px-4 sm:px-12 w-full fixed bottom-0 flex items-center gap-4 sm:gap-8 bg-zinc-900"> <div class="flex gap-1"> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/", "openNewTab": false }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="w-6 h-6 text-zinc-500 group-hover:text-zinc-100"> <title>Home</title> <path fill="currentColor" fill-rule="evenodd" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" clip-rule="evenodd"></path> </svg> ` })} <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path> <p class="text-zinc-600">/</p> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/projects", "openNewTab": false }, { "default": ($$result2) => renderTemplate` <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true"${addAttribute(clsx$1("w-6 h-6", pathname === "/projects" ? "text-zinc-100" : "text-zinc-500 group-hover:text-zinc-100"), "class")}> <title>Projects</title> <path fill="currentColor" fill-rule="evenodd" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" clip-rule="evenodd"></path> <path fill="currentColor" d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" opacity=".4"></path><path fill="currentColor" d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953l-.024.07a8 8 0 0 1 1.232-.253c1.08-.138 2.446-.138 4.032-.138h6.892c1.586 0 2.952 0 4.032.138c.42.054.834.133 1.232.253l-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953z" opacity=".7"></path> </svg> ` })} </div> ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/blog", "openNewTab": false }, { "default": ($$result2) => renderTemplate`Blog` })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/about", "openNewTab": false }, { "default": ($$result2) => renderTemplate`About` })} ${renderComponent($$result, "ExternalLink", $$ExternalLink, { "href": "/contact", "openNewTab": false }, { "default": ($$result2) => renderTemplate`Contact` })} </footer> <!-- place to get icons https://iconsvg.xyz -->`;
}, "/Users/maxis/Documents/portfolio/src/components/footer.astro", void 0);

const $$Astro = createAstro("https://crazykidboi.github.io");
const $$InfoLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$InfoLayout;
  const { title, description } = Astro2.props;
  Astro2.url.pathname;
  return renderTemplate`${renderComponent($$result, "RootLayout", $$RootLayout, { "title": title, "description": description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex relative gap-4 w-full max-w-screen-xl"> <nav class="relative w-4 md:min-w-2xs xl:min-w-sm sm:min-h-screen sm:ml-4 sm:pb-4"> <div class="w-full h-full max-sm:w-4 md:max-w-2xs xl:max-w-sm fixed -z-10 sm:bottom-4 sm:rounded-b-full overflow-hidden"> ${renderComponent($$result2, "WarpBackground", WarpBackground, { "color1": "#ffffff", "color2": "#27272a", "color3": "#52525b", "speed": 0.15, "swirl": 1.5, "swirlIterations": 10, "shapeScale": 0.3, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/maxis/Documents/portfolio/src/components/warp-background", "client:component-export": "default" })} </div> </nav> <main class="relative"> ${renderSlot($$result2, $$slots["default"])} ${renderComponent($$result2, "Footer", $$Footer, {})} </main> </div> ` })}`;
}, "/Users/maxis/Documents/portfolio/src/layouts/InfoLayout.astro", void 0);

export { $$InfoLayout as $, $$ExternalLink as a };
