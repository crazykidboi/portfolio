import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderSlot, d as renderTemplate } from './astro/server_CHJvz4ud.mjs';
import 'clsx';
import clsx from 'clsx/lite';

const $$Astro = createAstro("https://crazykidboi.github.io");
const $$H1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$H1;
  const { size = "default", className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<h1${addAttribute(clsx(
    "text-white font-bold text-balance",
    size === "default" && "text-4xl md:text-6xl xl:text-8xl tracking-tight",
    size === "large" && "text-8xl md:text-[120px] lg:text-[160px] tracking-tighter",
    className
  ), "class")}> ${renderSlot($$result, $$slots["default"])} </h1>`;
}, "/Users/maxis/Documents/portfolio/src/components/h1.astro", void 0);

export { $$H1 as $ };
