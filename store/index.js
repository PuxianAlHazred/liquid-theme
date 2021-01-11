import header from '~/content/configuration/header.json';
import generales from '~/content/configuration/generales.json';
import agenda from '~/content/configuration/agenda.json';
import sidebar from '~/content/configuration/sidebar.json';
import footer from '~/content/configuration/footer.json';
export const state = () => ({
  footer: footer,
  header: header,
  agenda_options: agenda,
  generales: generales,
  sidebar: sidebar,
  agenda_posts: [],
  agenda_cat: [],
  agenda_tag: [],
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
    const context = require.context('~/content/agenda/posts/', false, /\.json$/);
    const agenda_posts = context.keys().map(key => ({
      ...context(key),
      _path: `/agenda/${key.replace('.json', '').replace('./', '')}`
    })).sort( ( a, b) => {return new Date(b.date) - new Date(a.date);});
    commit("setPosts", agenda_posts);
    const blog_cat = Array.from(new Set(agenda_posts.map(e => e.cts[0].label).sort()));
    commit("setCat", agenda_cat);
    const blog_tag = Array.from(new Set(agenda_posts.map(e => e.tgs[0].label).sort()));
    commit("setTag", agenda_tag);
  }
};
export const mutations = {
  setPosts(state, agenda_posts) {
    state.agenda_posts = agenda_posts;
  },
  setCat(state, agenda_cat) {
    state.agenda_cat = agenda_cat;
  },
  setTag(state, agenda_tag) {
    state.agenda_tag = agenda_tag;
  }
};
