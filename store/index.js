import header from '~/content/configuration/header.json';
import generales from '~/content/configuration/generales.json';
import blog from '~/content/configuration/blog.json';
import sidebar from '~/content/configuration/sidebar.json';
import footer from '~/content/configuration/footer.json';
export const state = () => ({
  footer: footer,
  header: header,
  blog_options: blog,
  generales: generales,
  sidebar: sidebar,
  blog_posts: [],
  blog_cat: [],
  blog_tag: [],
  optionsMarkdown: {
    markdownIt: {
      linkify: true,
      html: true
    },
    linkAttributes: {
      attrs: {
        target: '_blank',
        rel: 'noopener'
      }
    }
  },
  swiperOptions: {
    loop: false,
    slidesPerView: 'auto',
    centeredSlides: true,
    parallax: true,
    autoplay: {
      delay: 10000,
    },
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true
    }
  }
});

export const actions = {
  async nuxtServerInit({ commit }) {
    const context = require.context('~/content/blog/posts/', false, /\.json$/);
    const blog_posts = context.keys().map(key => ({
      ...context(key),
      _path: `/blog/${key.replace('.json', '').replace('./', '')}`
    })).sort( ( a, b) => {return new Date(b.date) - new Date(a.date);});
    commit("setPosts", blog_posts);
    const blog_cat = Array.from(new Set(blog_posts.map(e => e.cts[0].label).sort()));
    commit("setCat", blog_cat);
    const blog_tag = Array.from(new Set(blog_posts.map(e => e.tgs[0].label).sort()));
    commit("setTag", blog_tag);
  }
};
export const mutations = {
  setPosts(state, blog_posts) {
    state.blog_posts = blog_posts;
  },
  setCat(state, blog_cat) {
    state.blog_cat = blog_cat;
  },
  setTag(state, blog_tag) {
    state.blog_tag = blog_tag;
  }
};
