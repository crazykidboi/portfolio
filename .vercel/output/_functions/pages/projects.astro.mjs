import { a as createComponent, e as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CHJvz4ud.mjs';
import { c as $$Image } from '../chunks/_astro_assets_BkKkjLbw.mjs';
import { $ as $$H1 } from '../chunks/h1_BAlJ3QoY.mjs';
import { $ as $$InfoLayout } from '../chunks/InfoLayout_DgeuDLjm.mjs';
export { renderers } from '../renderers.mjs';

const ACGenerator = new Proxy({"src":"/portfolio/_astro/ac-generator.DOBLFjwi.jpg","width":617,"height":900,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxis/Documents/portfolio/src/assets/ac-generator.jpg";
							}
							
							return target[name];
						}
					});

const FluidPropulsion = new Proxy({"src":"/portfolio/_astro/fluid-propulsion.BUBknHRd.jpg","width":736,"height":952,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxis/Documents/portfolio/src/assets/fluid-propulsion.jpg";
							}
							
							return target[name];
						}
					});

const ElectricMotor = new Proxy({"src":"/portfolio/_astro/electro-magnetic-motor.BVtX1Ou8.jpg","width":600,"height":800,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/maxis/Documents/portfolio/src/assets/electro-magnetic-motor.jpg";
							}
							
							return target[name];
						}
					});

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const projects = [
    {
      title: "AC Generator",
      description: "Transform mechanical energy into alternating current, powering the modern electric grid",
      image: ACGenerator
    },
    {
      title: "Fluid Propulsion",
      description: "Bladeless turbine using fluid dynamics for efficient, low-friction propulsion.",
      image: FluidPropulsion
    },
    {
      title: "Electro-Magnetic Motor",
      description: "Harness alternating current to produce smooth, efficient rotary motion.",
      image: ElectricMotor
    }
  ];
  return renderTemplate`${renderComponent($$result, "InfoLayout", $$InfoLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-4 sm:pt-8 sm:px-12 pb-20 min-h-dvh"> ${renderComponent($$result2, "H1", $$H1, {}, { "default": ($$result3) => renderTemplate` Projects ` })} <ul class="mt-4 sm:mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 sm:gap-8"> ${projects.map((project) => renderTemplate`<li> ${renderComponent($$result2, "Image", $$Image, { "src": project.image, "alt": project.title, "class": "aspect-[1/1.33] object-center object-cover rounded-lg shadow-lg mb-4 sm:mb-0 sm:mr-4" })} <div class="p-1 sm:p-2"> <h2 class="text-base text-zinc-100">${project.title}</h2> <p class="text-sm text-zinc-400 text-balance">${project.description}</p> </div> </li>`)} </ul> </div> ` })}`;
}, "/Users/maxis/Documents/portfolio/src/pages/projects.astro", void 0);

const $$file = "/Users/maxis/Documents/portfolio/src/pages/projects.astro";
const $$url = "/portfolio/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
