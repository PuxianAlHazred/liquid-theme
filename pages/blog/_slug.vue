<template>
    <div class="container animate__animated animate__fadeIn">
      <h2 class="align-center animate__animated animate__flipInX" style="animation-delay: 0.5s">{{title}}</h2>
      <div class="cover animate__animated animate__fadeIn" style="animation-delay: 0.7s" :lazy-background="thumbnail"></div>
      <main class="page-actu" :class="classSidebar">
        <section class="grid">
          <div class="meta slug animate__animated animate__flipInX" style="animation-delay: 1s">
            <div class="text-left ">
              <p>Écrit par <b>Piks-L</b> {{ date | moment("from", "now") | minimize}}</p>
            </div>
            <div  class="text-right">
              <p>Catégorie : <b>{{cts[0].label}}</b> - Tag : <b>{{tgs[0].label}}</b></p>
            </div>
          </div>
          <markdown-it-vue :content="body" class="text-justify animate__animated animate__fadeIn" style="animation-delay: 1.5s" :options="optionsMD"/>
          <div class="comments animate__animated animate__fadeInUp">
            <Disqus shortname='nomads-cms'/>
          </div>
          <div class="addMore">
            <nuxt-link class="return text-center" to="/blog/">Revenir sur le blog</nuxt-link>
          </div>
        </section>
        <blogSidebar class="animate__animated animate__fadeInUp" style="animation-delay: 1s"/>
      </main>
    </div>
</template>
<style>
.comments {
    background: #efefef;
    margin: 25px 0px;
    padding: 25px;
}
  .meta.slug{
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      background: #efefef;
      padding: 0 25px;
      margin: 25px 0;
  }
  .cover {
      height: 250px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
  }
</style>
<script>
import blogSidebar from '~/components/blog/sidebar-slug.vue'
export default {
  layout: 'default',
  scrollToTop: true,
  components: { blogSidebar },
  data() {
    return {
      optionsMD : this.$store.state.optionsMarkdown
    };
  },
  computed:{
    classSidebar() {
      if(this.$store.state.blog_options.sidebar[0].sidebarPosition === 'right'){return 'right-sidebar';}
      if(this.$store.state.blog_options.sidebar[0].sidebarPosition === 'left'){return 'left-sidebar';}
    }
  },
  async asyncData({ params }) {
    let page = await import('~/content/blog/posts/' + params.slug + '.json');
    return page;
  },
  created () {
    var momentLocal = this.$root.$moment.defineLocale('fr', {
      relativeTime : {
        future: "dans %s",
        past:   "Il y a %s",
        s  : 'quelques secondes',
        ss : '%d secondes',
        m:  "une minute",
        mm: "%d minutes",
        h:  "une heure",
        hh: "%d heurs",
        d:  "un jour",
        dd: "%d jours",
        w:  "une semaine",
        ww: "%d semaines",
        M:  "un mois",
        MM: "%d mois",
        y:  "un an",
        yy: "%d ans"
      }
    });
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 2000)
    })
  }
};
</script>
