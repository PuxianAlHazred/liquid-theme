<template>
  <div class="container">
    <h2>{{title}}</h2>
    <div :class="element.css" key="element.title" v-for="element in section">
      <markdown-it-vue :content="element.body" :options="options"/>
    </div>

    <Accordion name="Accordion Name 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
    </Accordion>

  </div>
</template>

<script>
import Accordion from "@/components/plugins/accordion.vue";
export default {
  layout: 'default',
  components: {
    Accordion
  },
  data() {
    return {
      options : this.$store.state.optionsMarkdown,
    }
  },
  async asyncData({ params }) {
    let page = await import('~/content/pages/page/' + params.slug + '.json');
    return page;
    this.$refs.myMarkdownItVue.use(MyMarkdownItPlugin)
  }
};
</script>
