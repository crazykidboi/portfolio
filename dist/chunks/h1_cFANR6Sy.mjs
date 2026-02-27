import { f as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, e as renderSlot, a as renderTemplate } from './astro/server_WS2CD_x9.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro = createAstro("https://crazykidboi.github.io");
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { size = "default", className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(clsx(
    "text-text1 font-serif font-bold text-balance",
    size === "default" && "text-4xl md:text-6xl xl:text-8xl tracking-normal",
    size === "large" && "text-8xl md:text-[120px] lg:text-[160px] tracking-normal",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/maxis/Documents/portfolio/src/components/h1.astro", void 0);

export { $$H1 as $ };
