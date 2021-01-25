<template>
  <footer id="footer">
      <div class="grid-content">
          <div class="">
            <p class="text-left"><i class="lar la-copyright"></i> COPYRIGHT AND DESIGN BY <span class="text-gradient">PIKS-L</span></p>
          </div>
          <div class="">
            <p class="text-right"><a class="underline" @click="scrollToTop">Scroll to top <i class="las la-caret-up"></i></a></p>
          </div>
      </div>

  </footer>
</template>

<script>
  export default {
    methods: {
      scrollToTop() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) },
    }
  }
</script>
