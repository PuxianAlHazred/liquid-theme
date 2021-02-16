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
    agenda: true,
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
  async nuxtServerInit({ commit }, { state }) {

    if ( state.options.agenda === true ) {
      const context = require.context('~/content/agenda/posts/', false, /\.json$/);
      const a_posts = context.keys().map(key => ({
        ...context(key),
        _path: `/agenda/${key.replace('.json', '').replace('./', '')}`
      })).sort( ( a, b) => {return new Date(a.dateEvent) - new Date(b.dateEvent);});
        commit("setPosts", a_posts);
      const a_cat = Array.from(new Set(a_posts.map(e => e.meta.cat).sort()));
        commit("setCat", a_cat);
      const a_tag = Array.from(new Set(a_posts.map(e => e.meta.tags).sort()));
        commit("setTag", a_tag);
    } else { console.log("fail");}


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
