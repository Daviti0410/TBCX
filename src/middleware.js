import middleware from "next-intl/middleware";

const createMiddleware = middleware.default;

export default createMiddleware({
  locales: ["en", "ka"],

  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ka|en)/:path*"],
};
