var webpack = require('webpack');
var glob = require('glob');
var path = require('path');
var dynamicRoutes = getDynamicPaths({
  '/agenda': 'agenda/posts/*.json',
  '/blog': 'blog/posts/*.json'
});
module.exports = {
  env: { BASE_URL: process.env.BASE_URL || 'http://localhost:3000' },
  router: {},
  components: true,
  css: [
    '~/assets/css/style.css',
    '~/assets/css/plugins.css',
    '~/assets/css/transitions.css',
    '~/assets/css/components.css',
    /**/
  ],
  generate: { routes: dynamicRoutes },
  /*** Headers of the page */
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: "My Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Welcome to my website."
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/uploads/favicon.png" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" },
      { rel: "stylesheet", href: "https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
    ]
  },
  loading: '~/components/ui/loading.vue',
  pageTransition: {
    name: 'page',
    mode: 'out-in',
    beforeEnter (el) {
      console.log('Before enter...');
    }
  },
  layoutTransition: {
    name: 'layout',
    mode: 'out-in'
  },
  /*** Modules call */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxtjs/google-analytics',
    'nuxt-lazy-load'
  ],

  /*** Plugins call */
  plugins: [
    { src: '@/plugins/swiper', mode: 'client' },
    { src: '@/plugins/filters.js'},
    { src: '@/plugins/moment.js'},
    { src: '@/plugins/vue-gallery.client.js'},
    { src: '@/plugins/countdown.js'},
    { src: '@/plugins/markdown.js', ssr: false },
    { src: '@/plugins/disqus.js'},
  ],
  /*** Google analytics configuration */
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID, // Use as fallback if no runtime config is provided
    //id: 'UA-XXX-X'
  },
  publicRuntimeConfig: {
    googleAnalytics: { id: process.env.GOOGLE_ANALYTICS_ID }
  },
  /*** Robots configuration */
  robots: {
    Disallow: [
      '/admin'
    ],
    Sitemap: `${process.env.WEBSITE_URL}/sitemap.xml`
  },
  /*** Sitemap configuration */
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://liquid-theme.netlify.app/',
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
    exclude: [
      '/admin/',
      '/admin/**'
    ],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    routes: []
  },
  /*** Build configuration */
  build: {
    /*** Run ESLint on save */
    extend(config, { isDev }) {
      if (isDev && process.client) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  }
};
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
};
