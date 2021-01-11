<template>
      <div class="container animate__animated animate__fadeIn">
        {{cts[0].label}}
      </div>
</template>
<style>
</style>
<script>
export default {
  layout: 'default',
  scrollToTop: true,
  data() {
    return {
      optionsMD : this.$store.state.optionsMarkdown
    };
  },
  async asyncData({ params }) {
    let page = await import('~/content/agenda/posts/' + params.slug + '.json');
    return page;
  },
  created () {
  },
  async mounted() {
  }
};
</script>
