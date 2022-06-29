const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? "/blog" : "",
  assetsPrefix: isProd ? "/blog" : "",
}
