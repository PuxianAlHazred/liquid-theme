<template>
  <div class="menu-popup" >
    MENU
  </div>
</template>
<script>
  export default {
    data() {
      return {
        header : this.$store.state.header,
      }
    },
    methods: {
      scrollToTop() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) },
    }
  }
</script>
