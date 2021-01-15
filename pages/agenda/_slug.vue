<template>
  <div class="container">
    <ClientOnly>
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
          <markdown-it-vue :content="lieu.descriptionLieu" :options="this.$store.state.options.plugins.markdown"/>
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
        <div v-for="(element, index) in artiste" class="agenda-content">
          <h4>{{element.titleArtiste}}</h4>
          <div class="agenda-thumbs" :style="element.thumbnailArtiste"></div>
          <markdown-it-vue :content="element.descriptionArtiste" :options="options"/>
          <a :href="element.linkArtiste" target="_blank">S'Y RENDRE</a>
        </div>
    </section>
    </ClientOnly>
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
  layout: 'default',
  scrollToTop: true,
  data() {
    return {
      options: this.$store.state.options.plugins.markdown
    };
  },
  async asyncData({ params }) {
    let page = await import('~/content/agenda/posts/' + params.slug + '.json');
    return page;
  },
};
</script>
