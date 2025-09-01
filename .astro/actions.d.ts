declare module "astro:actions" {
	type Actions = typeof import("/Users/maxis/Documents/portfolio/src/actions")["server"];

	export const actions: Actions;
}