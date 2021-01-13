<template>
  <div  :style="cssVars">
    <ui-menu></ui-menu>
    <div class="main">
      <ui-slider :class="this.$route.name"></ui-slider>
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
    computed: {

      cssVars() {
        return {
          "--gradient-one": this.$store.state.options.generales.theme.colorOne,
          "--gradient-two": this.$store.state.options.generales.theme.colorTwo
        }
      }

    }
  }
</script>
