import menu from '~/content/configuration/menu.json';
import generales from '~/content/configuration/generales.json';
import footer from '~/content/configuration/footer.json';
export const state = () => ({
  agenda: {
    posts: [],
    cat: [],
    tag: [],
  },
  options: {
    menu: menu,
    generales: generales,
    footer: footer,
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
    },
  }
});

export const actions = {
  async nuxtServerInit({ commit }) {
    const context = require.context('~/content/agenda/posts/', false, /\.json$/);
    const a_posts = context.keys().map(key => ({
      ...context(key),
      _path: `/agenda/${key.replace('.json', '').replace('./', '')}`
    })).sort( ( a, b) => {return new Date(b.date) - new Date(a.date);});
      commit("setPosts", a_posts);
    const a_cat = Array.from(new Set(a_posts.map(e => e.cts[0].label).sort()));
      commit("setCat", a_cat);
    const a_tag = Array.from(new Set(a_posts.map(e => e.tgs[0].label).sort()));
      commit("setTag", a_tag);
  }
};
export const mutations = {
  setPosts(state, a_posts) {
    state.agenda.posts = a_posts;
  },
  setCat(state, a_cat) {
    state.agenda.cat = a_cat;
  },
  setTag(state, a_tag) {
    state.agenda.tag = a_tag;
  }
};
