<template>
  <div id="app" :style="cssVars">
    <ui-menu></ui-menu>
    <div class="main">
      <ui-slider :class="this.$route.name" :filtered="this.filtered.slice(0,this.highlight)"></ui-slider>
      <transition name="animate__fadeInUp" mode="out-in">
        <nuxt/>
      </transition>
      <ui-footer></ui-footer>
    </div>

  </div>
</template>

<style>
</style>
<script>
  import uiMenu from '~/components/ui/menu.vue'
  import uiSlider from '~/components/ui/slider.vue'
  import uiFooter from '~/components/ui/footer.vue'
  export default {
    components: {
        uiMenu,
        uiSlider,
        uiFooter
    },
    data() {
      return {
        filtered: this.$store.state.agenda.posts,
        highlight: this.$store.state.options.generales.highlight,
      }
    },
    computed: {
      cssVars() {
          return {
            "--gradient": this.$store.state.options.generales.theme.gradient,
          }
      },
      cssVars2() {
          return {
            "--gradient": this.$store.state.options.generales.theme.gradient,
          }
      },
    },
    beforeUpdate() {
      if ( this.$route.name === "agenda-slug" ) {
        console.log("beforeUpdate if")

        this.filtered = this.$store.state.agenda.posts.filter(a => {return a._path+'/' === this.$route.path});
      } else {
        console.log("beforeUpdate else")
        this.filtered = this.$store.state.agenda.posts
      }
    },
    async created() {
      if ( this.$route.name === "agenda-slug" ) {
        console.log("created else")
        this.filtered = this.$store.state.agenda.posts.filter(a => {return a._path+'/' === this.$route.path});
      } else {
        console.log("created else")
        this.filtered = this.$store.state.agenda.posts
      }
    },
  }
</script>
