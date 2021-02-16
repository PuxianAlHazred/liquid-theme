export const state = () => ({
  posts: [],
  cat: [],
  tag: []
});

export const actions = {
  async nuxtServerInit({ commit }) {
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
};

export const mutations = {
  // Blog
  setPostsB(state, b_posts) {state.posts = b_posts;},
  setCatB(state, b_cat) {state.cat = b_cat;},
  setTagB(state, b_tag) {state.tag = b_tag;}
};
