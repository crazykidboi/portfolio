declare module "astro:actions" {
	type Actions = typeof import("/Users/maxis/Documents/portfolio/src/actions/index.ts")["server"];

	export const actions: Actions;
}