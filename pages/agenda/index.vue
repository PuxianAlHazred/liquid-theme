<template>
  <div class="container grid-content">
      <section class="content-slug agenda">
        <div class="agenda-header">
          <h3>AGENDA</h3>
          <div class="list-content">
              <article v-for="element in filtered" class="grid-item">
                <div class="agenda-thumbs" :lazy-background="element.thumbnail"></div>
                <div class="content-right">
                    <p class="style"><span>{{ element.meta.cat }}</span> - <span>{{ element.meta.tags }}</span></p>
                    <ul class="artistes">
                      <small class="title-event">{{ element.title }}</small>
                      <li v-for="(a, i) in element.artiste" :key="i" >{{ a.titleArtiste }}</li>
                    </ul>
                    <p class="date">{{ element.dateEvent | moment("DD/MM/YYYY") }}</p>
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
  layout: 'default',
  data() {
    return {
      filtered: this.$store.state.agenda.posts
    }
  },
  methods: {

  }

}
</script>
