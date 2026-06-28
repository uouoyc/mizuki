import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	const { pathname, search } = context.url;
	if (pathname.length > 1 && pathname.endsWith("/")) {
		return context.redirect(`${pathname.slice(0, -1)}${search}`, 308);
	}
	return next();
});
