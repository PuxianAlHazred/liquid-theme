<template>
  <footer id="footer" class="footer parent">

      <div>
        <p class="text-left"><i class="lar la-copyright"></i> All rights reserved by</p>
      </div>
      <div>
        <p class="text-right"><a @click="scrollToTop">Scroll to top <i class="las la-caret-up"></i></a></p>
      </div>


  </footer>
</template>
<style>
  .parent {
    display: grid;
    grid-template-columns: 360px 1fr;
    grid-template-rows: 50px;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>
<script>
  export default {
    methods: {
      scrollToTop() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) },
    }
  }
</script>
