const debug = process.env.NODE_ENV !== "production";
module.exports = {
    reactStrictMode: true,
    exportPathMap: function () {
      return {
        "/": { page: "/" }
      }
    },
    images: {
      loader: 'imgix',
      path: '/',
    },
    assetPrefix: !debug ? 'https://probablyafire.com/' : '',
}