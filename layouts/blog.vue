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
      }
    }
  }
</script>
