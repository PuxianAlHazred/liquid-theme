<template>
  <div class="container grid-content">
      <section class="content-slug blog">
        <div class="blog-header">
          <h3>BLOG</h3>
          <div class="list-content">
              <article v-for="element in filtered" class="grid-item">
                <div class="agenda-thumbs" :lazy-background="element.thumbnail"></div>
                <div class="content-right">
                    <p class="style"><span>{{ element.meta.cat }}</span> - <span>{{ element.meta.tags }}</span></p>
                    <ul class="artistes">
                      <p class="title-event">{{ element.title }}</p>
                      <small>{{ element.description }}</small>
                    </ul>
                    <p class="date">{{ element.meta.date | moment("DD/MM/YYYY") }}</p>
                    <nuxt-link class="link" :to="element._path+'/'">En savoir plus</nuxt-link>
                </div>
              </article>
          </div>
        </div>
      </section>
  </div>
</template>
<script>
export default {
  head: {
    htmlAttrs: {
      lang: 'fr'
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
      filtered: this.$store.state.blog.posts
    }
  },
  methods: {
  }
}
</script>
