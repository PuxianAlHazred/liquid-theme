<template>
  <div id="app" :style="cssVars">
    <ui-menu></ui-menu>
    <div class="main">
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
  import uiFooter from '~/components/ui/footer.vue'
  export default {
    components: {
        uiMenu,
        uiFooter
    },
    data() {
      return {
        filtered: this.$store.state.blog.posts,
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
      if ( this.$route.name === "blog" ) {
        console.log("beforeUpdate if")

        this.filtered = this.$store.state.blog.posts.filter(a => {return a._path+'/' === this.$route.path});
      } else {
        console.log("beforeUpdate else")
        this.filtered = this.$store.state.blog.posts
      }
    },
    async created() {
      if ( this.$route.name === "blog" ) {
        console.log("created else")
        this.filtered = this.$store.state.blog.posts.filter(a => {return a._path+'/' === this.$route.path});
      } else {
        console.log("created else")
        this.filtered = this.$store.state.blog.posts
      }
    }
  }
</script>
