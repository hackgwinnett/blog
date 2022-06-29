const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
  assetsPrefix: isProd ? process.env.NEXT_PUBLIC_BASE_PATH : "",
}
