import menu from '~/content/configuration/menu.json';
import generales from '~/content/configuration/generales.json';
import footer from '~/content/configuration/footer.json';

export const state = () => ({
  agenda: {
    posts: [],
    cat: [],
    tag: [],
  },
  blog: {
    posts: [],
    cat: [],
    tag: [],
  },
  options: {
    menu: menu,
    generales: generales,
    footer: footer,
    agenda: false,
    blog: true,
    plugins: {
      markdown: {
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
      swiper: {
        allowTouchMove:false,
        loop: false,
        slidesPerView: '3',
        centeredSlides: true,
        parallax: {
          enabled : true
        },
        autoplay: {
          delay: 10000,
        },
        spaceBetween: 0,
        effect: 'fade',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    },
  }
});
export const actions = {
  async nuxtServerInit({ commit }) {
    const a_boolean = true;
      commit("setBooleanA", a_boolean);
    if (a_boolean === true) {
      // Agenda
      const context = require.context('~/content/agenda/posts/', false, /\.json$/);
      const a_posts = context.keys().map(key => ({
        ...context(key),
        _path: `/agenda/${key.replace('.json', '').replace('./', '')}`
      })).sort( ( a, b) => {return new Date(a.dateEvent) - new Date(b.dateEvent);});
        commit("setPostsA", a_posts);
      const a_cat = Array.from(new Set(a_posts.map(e => e.meta.cat).sort()));
        commit("setCatA", a_cat);
      const a_tag = Array.from(new Set(a_posts.map(e => e.meta.tags).sort()));
        commit("setTagA", a_tag);
    }
    const b_boolean = true;
      commit("setBooleanB", b_boolean);
    if (b_boolean === true) {
      // Blog
      const context = require.context('~/content/blog/posts/', false, /\.json$/);
      const b_posts = context.keys().map(key => ({
        ...context(key),
        _path: `/blog/${key.replace('.json', '').replace('./', '')}`
      })).sort( ( a, b) => {return new Date(b.meta.date) - new Date(a.meta.date);});
      commit("setPostsB", b_posts);
      const b_cat = Array.from(new Set(b_posts.map(e => e.meta.cat).sort()));
      commit("setCatB", b_cat);
      const b_tag = Array.from(new Set(b_posts.map(e => e.meta.tags).sort()));
      commit("setTagB", b_tag);
    }
  }
};
export const mutations = {
  setPostsA(state, a_posts) {state.agenda.posts = a_posts;},
  setCatA(state, a_cat) {state.agenda.cat = a_cat;},
  setTagA(state, a_tag) {state.agenda.tag = a_tag;},
  setBooleanA(state, a_boolean) {state.options.agenda = a_boolean;},
  // Blog
  setPostsB(state, b_posts) {state.blog.posts = b_posts;},
  setCatB(state, b_cat) {state.blog.cat = b_cat;},
  setTagB(state, b_tag) {state.blog.tag = b_tag;},
  setBooleanB(state, b_boolean) {state.options.blog = b_boolean;}
};
