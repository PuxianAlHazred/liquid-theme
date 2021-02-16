<template>
  <div class="container grid-content">
      <section class="content-slug agenda">
        <div class="agenda-header">
          <h3>BLOG</h3>

        </div>
      </section>
  </div>
</template>
<script>
export default {
  head: {
    htmlAttrs: {
      lang: 'fr',
    },
    title: "Blog - My Website",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Welcome to my website."
      }
    ]
  },
  layout: 'blog',
  data() {
    return {
      filtered: []
    }
  },
  methods: {
  }
}
</script>
