<template>
  <div class="container">
    <NuxtLink to="/works">Works page</NuxtLink>
    <h2>{{title}}</h2>
    <hr>
    <vue-gallery :images="galeries.images" :index="index" @close="index = null"></vue-gallery>
    <div class="image" v-for="(img, imageIndex) in galeries.images" :key="imageIndex" @click="index = imageIndex" :style="{ backgroundImage: 'url(' + img.href + ')', width: '100%', height: '200px' }"></div>
    <markdown-it-vue :content="body"/>
  </div>
</template>

<script>
export default {
  layout: 'default',
  async asyncData({ params }) {
    let page = await import('~/content/works/posts/' + params.slug + '.json');
    return page;
  },
  data() {
    return {
      index: null,
      img: [],
    };
  }
};
</script>
