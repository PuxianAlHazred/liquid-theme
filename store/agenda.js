export const state = () => ({
  posts: [],
  cat: [],
  tag: []
});

export const actions = {
  async nuxtServerInit({ commit }) {
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
};

export const mutations = {
  // Agenda
  setPostsA(state, a_posts) {state.posts = a_posts;},
  setCatA(state, a_cat) {state.cat = a_cat;},
  setTagA(state, a_tag) {state.tag = a_tag;},
};
