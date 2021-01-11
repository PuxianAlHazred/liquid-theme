<template>
  <div>
    <ui-menu></ui-menu>
    <div class="main">
      <ui-slider></ui-slider>
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
    mounted () {
    }
  }
</script>
