<template>
  <div class="slug-content">
    <ClientOnly>
      <div class="container grid-content">
          <section class="content-slug">
            <div class="content-markdown">
                <markdown-it-vue :content="body" :options="options"/>
            </div>
          </section>
          <Disqus shortname='nomads-cms'/>
      </div>
      <div class="other-event">
        <div class="grid-content">
          <article v-for="element in otherPost.slice(0,1)" class="grid-item">
            <div class="agenda-thumbs" :lazy-background="element.thumbnail"></div>

            <div class="content-right">
                <p class="style"><span>{{ element.meta.cat }}</span> - <span>{{ element.meta.tags }}</span></p>
                <ul class="artistes">
                  <small class="title-event">{{ element.title }}</small>
                  <li v-for="(a, i) in element.artiste" :key="i" >{{ a.titleArtiste }}</li>
                </ul>
                <p class="date">{{ element.dateEvent  | moment("DD/MM/YYYY") }}</p>
                <nuxt-link class="link glitchy" :to="element._path+'/'">EN SAVOIR PLUS</nuxt-link>
            </div>
          </article>
          <div class="select-other">
              <h4 class="underline">AUTRES ARTICLES</h4>
          </div>
          <article v-for="element in otherPost.slice(1,2)" class="grid-item ">
            <div class="agenda-thumbs" :lazy-background="element.thumbnail"></div>
            <div class="content-right">
                <p class="style"><span>{{ element.meta.cat }}</span> - <span>{{ element.meta.tags }}</span></p>
                <ul class="artistes">
                  <small class="title-event">{{ element.title }}</small>
                  <li v-for="(a, i) in element.artiste" :key="i" >{{ a.titleArtiste }}</li>
                </ul>
                <p class="date">{{ element.dateEvent  | moment("DD/MM/YYYY") }}</p>
                <nuxt-link class="link glitchy" :to="element._path+'/'">EN SAVOIR PLUS</nuxt-link>
            </div>
          </article>

        </div>
      </div>
    </ClientOnly>
  </div>
</template>
<script>
export default {
  layout: 'blog',
  data() {
    return {
      options: this.$store.state.options.plugins.markdown,
      otherPost: []
    };
  },
  mounted() {
    setTimeout(this.countdown, 1);
    var allId = this.$store.state.blog.posts.map((e, i) => {if(e.title != this.title) {this.otherPost.push(e)} else {}}).slice(0,1);
  },
  async asyncData({ params }) {
    let page = await import('~/content/blog/posts/' + params.slug + '.json');
    return page;
  },
  methods: {

  }

}
</script>
