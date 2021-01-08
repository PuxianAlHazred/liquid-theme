<template>
  <div>
    <ui-header></ui-header>
    <div class="main">
      <transition  name="animate__fadeInUp" mode="out-in">
        <nuxt/>
      </transition>
    </div>
    <ui-footer></ui-footer>
  </div>
</template>

<style>
</style>
<script>
  import uiHeader from '~/components/ui/header.vue'
  import uiFooter from '~/components/ui/footer.vue'
  import TransitionPage from '~/components/ui/transition-page.vue';
  export default {
    components: {
        uiHeader,
        uiFooter,
        TransitionPage
    },
    mounted () {
    }
  }
</script>
