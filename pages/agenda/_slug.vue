<template>
  <div>
    <ClientOnly>
    <section class="ticket">
      <div class="grid-content">
          <i class="las la-info-circle"></i>
          <div class="countdown"></div>
          <a target="_blank" :href="lieu.ticketLink">Réserver maintenant votre place</a>
      </div>
    </section>
    <div class="container grid-content">
        <section class="content-slug place">
            <div class="agenda-header">
              <h3>{{lieu.titleLieu}}</h3>
              <a class="map" :href="lieu.linkLieu" target="_blank">
                <i class="las la-map-marked-alt"></i>
                <div class="triangle"></div>
                <div class="map-link"><div class="text-gradient"><p>S'Y RENDRE</p></div></div>
              </a>
            </div>
            <div class="agenda-content">
              <div class="agenda-thumbs" :lazy-background="lieu.thumbnailLieu" ></div>
              <div class="content-markdown">
                  <markdown-it-vue :content="lieu.descriptionLieu" :options="this.$store.state.options.plugins.markdown"/>
              </div>
            </div>
        </section>
        <section class="content-slug artistes">
            <div class="agenda-header">
              <h3>ARTISTES</h3>
              <div class="map">
                <i class="las la-user-tag"></i>
                <div class="map-link"><div class="text-gradient"><p>{{cts[0].label}}</p></div></div>
              </div>
            </div>
            <div v-for="(element, index) in artiste" class="agenda-content">
              <div class="agenda-thumbs" :lazy-background="element.thumbnailArtiste"></div>
              <div class="content-markdown">
                  <h4>{{element.titleArtiste}}</h4>
                  <markdown-it-vue :content="element.descriptionArtiste" :options="options"/>
                  <a class="artiste-link" :href="element.linkArtiste" target="_blank">S'Y RENDRE</a>
              </div>
            </div>
        </section>
    </div>
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
