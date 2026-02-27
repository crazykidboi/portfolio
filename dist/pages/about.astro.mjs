import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_WS2CD_x9.mjs';
import { $ as $$H1 } from '../chunks/h1_cFANR6Sy.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_DRgWmyyo.mjs';
import { $ as $$Image } from '../chunks/warp-background_gPCKGYfO.mjs';
export { renderers } from '../renderers.mjs';

const headshot = new Proxy({"src":"/portfolio/_astro/liamHeadshot.9evkU2S-.jpg","width":5855,"height":3903,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxis/Documents/portfolio/src/assets/liamHeadshot.jpg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/maxis/Documents/portfolio/src/assets/liamHeadshot.jpg");
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh flex flex-col justify-between gap-15"> <div class="space-y-4 sm:space-y-12"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate` About Liam Lyons IV ` })} <div> ${renderComponent($$result2, "Image", $$Image, { "src": headshot, "alt": "", "width": 800, "quality": "max" })} </div> <p class="text-xl xl:text-xl text-zinc-500 text-balance">
Liam Lyons IV (also known as William Lyons IV) creates technical art for theaters, concerts, and tours.
                    Having worked with IPS in Nashville and local tours in Pittsburgh, and being Known for a tireless work ethic, 
                    he thrives on pushing creative limits while staying on schedule and under budget. 
                    Ready to travel—or relocate—so you can obtain flawless, immersive lighting that elevates every show.
</p> <p class="text-xl xl:text-xl text-zinc-500 text-balance">
He currently works at a variety of theaters in the Pittsburgh area, he loves to travel and see shows in the city when he can. 
                    In addition to lighting design, he has a BA in Film 
                    at Chatham University, so you can sometimes find him making short films, documentaries, music videos, 
                    and do photography here and there. On his off time he loves learning about new and
                    old technology. Coding is also a side project from time to time, including building this exact website. 
                    He loves to drum when he can, he is in two bands at the moment and often plays 
                    live and for studio recordings for friends. All around is always excited to try something new.
</p> </div> <div class="space-y-2 text-base sm:text-lg"> <h2 class="px-4 text-zinc-400 underline underline-offset-4 decoration-zinc-500">Skills</h2> <ul class="px-4 text-zinc-400 list-disc list-outside"> <li>MA3</li> <li>ETC Ion XE, ETC Element 2, ETC Puck</li> <li>MagicQ MQ50</li> <li>Qlab</li> <li>QLC+</li> <li>MEWP Certified</li> <li>Concert and Theatre lighting focus and hang</li> </ul> </div> <div class="space-y-2 text-base sm:text-lg"> <h2 class="px-4 text-zinc-400 underline underline-offset-4 decoration-zinc-500">Companies worked with</h2> <ul class="px-4 text-zinc-400 list-disc list-outside"> <li>Integrated Production Solutions (IPS)</li> <li>Flyspace Productions</li> <li>Kellystrayhorn Theater</li> <li>New Hazlett Theater</li> <li>Pearl Arts</li> <li>Art Yard Theater</li> <li>Shadyside Academy</li> <li>University of Pittsburgh</li> <li>Chatham University</li> <li>Fireside Events LLC</li> </ul> </div> </div> ` })}`;
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
