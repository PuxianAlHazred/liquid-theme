<template>
  <div class="container">
   <h2>WORKS</h2>
    <main class="page-works">

      <transition-group name="grid" mode="out-in">
        <article :key="element.title" v-for="element in posts"class="grid-item" :lazy-background="element.thumbnail">
          {{element.title}}<br>
          <span>{{ element.date | moment("from", "now")}}</span>
          <nuxt-link class="link" :to="element._path+'/'">Voir la suite</nuxt-link>
        </article>

      </transition-group>

    </main>
  </div>
</template>
<style>
</style>
<script>
export default {
  layout: 'default',
  data() {
    const context = require.context('~/content/works/posts/', false, /\.json$/);
    const posts = context.keys().map(key => ({
      ...context(key),
      _path: `/works/${key.replace('.json', '').replace('./', '')}`
    }));
    return {
      posts
    };
  }
};
</script>
