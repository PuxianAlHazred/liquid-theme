<template>
  <div class="container">
    <section class="ticket">
      <i class="las la-info-circle"></i>
      <div class="countdown"></div>
      <a target="_blank" :href="lieu.ticketLink">Réserver maintenant votre place</a>
    </section>
    <section class="lieu">
        <div class="agenda-header">
          <h3>{{lieu.titleLieu}}</h3>
          <div>
            <i class="las la-map-marked-alt"></i>
            <a :href="lieu.linkLieu" target="_blank">S'Y RENDRE</a>
          </div>
        </div>
        <div class="agenda-content">
          <div class="agenda-thumbs" :lazy-background="lieu.thumbnailLieu" ></div>
          <markdown-it-vue :content="lieu.descriptionLieu" :options="optionsMD"/>
        </div>
    </section>
    <section class="artistes">
      <div class="agenda-header">
        <h3>ARTISTES</h3>
        <div>
          <i class="las la-user-tag"></i>
          <p>{{cts[0].label}}</p>
        </div>
      </div>
      <div v-for="(el, i) in artiste" :key="i" class="agenda-content">
        <h4>{{el.titleArtiste}}</h4>
        <div class="agenda-thumbs" :lazy-background="el.thumbnailArtiste" ></div>
        <markdown-it-vue :content="el.descriptionArtiste" :options="optionsMD"></markdown-it-vue>
        <a :href="el.linkArtiste" target="_blank">S'Y RENDRE</a>
      </div>
    </section>
  </div>
</template>
<style>
.agenda-thumbs{
  width:200px;
  height:200px;
  background-position:center center;
  background-size:cover;
}
</style>
<script>
export default {
  name: 'a-slug',
  layout: 'default',
  scrollToTop: true,
  data() {
    return {
      optionsMD: this.$store.state.options.plugins.markdown,
    };
  },
  async asyncData({ params }) {
    let page = await import('~/content/agenda/posts/' + params.slug + '.json');
    return page;
  },
  created () {
  },
  async mounted() {
  }
};
</script>
