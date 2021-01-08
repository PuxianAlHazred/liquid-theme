<template>
<section class="search-input" >
  <input ref="search"
    v-on:keyup="onKeyupSearch($event)" type="text" placeholder="Rechercher dans le blog"
    v-if="this.$store.state.blog_options.sidebar[0].zoneRecherche"
  />
  <div class="results-search">
    <div :key="e.title" v-for="(e, index) in this.searchPosts" >
      <nuxt-link class="results-search-grid " :to="e._path+'/'">
        <div class="results-search-thumbnail thumb" :lazy-background="e.thumbnail"></div>
        <p class="results-search-title last-post-title" >{{e.title}} </p>
        <p class="results-search-meta last-post-date" >{{ e.date | moment("from", "now")}}<i class="lar la-eye"></i></p>
      </nuxt-link>
    </div>
  </div>
</section>
</template>
<style>

</style>
<script>
export default {
  data: function() {
   return {
     search: '', // SEARCH GET ON SIDEBAR
     searchPosts: [], // SEARCH POSTS
   };
  },
  methods: {
    onKeyupSearch(event) {
      if (event) {
        this.search = event.target.value
        this.searchPosts = this.$store.state.blog_posts.filter(e => {return e.title.toLowerCase().includes(this.search.toLowerCase())})
        //this.filteredPosts = this.$store.state.blog_posts;
        this.$router.push({path: this.$route.path, query: { s: '' }})
        console.log("Recherche : " + this.search);
      } if ( this.search == '') {
        this.search = event.target.value
        this.searchPosts = []
        //this.filteredPosts = this.$store.state.blog_posts;
        this.$router.push({path: this.$route.path})
        console.log("Recherche : " + this.search);
      } else {
        this.search = event.target.value
        this.searchPosts = this.$store.state.blog_posts.filter(e => {return e.title.toLowerCase().includes(this.search.toLowerCase())})
        this.$router.push({path: this.$route.path, query: { s: this.search }})

        console.log("Recherche vide");
      }
    }
  },
  async mounted() {
    if ( this.$route.query.s ) {
      this.search = this.$route.query.s;
      this.searchPosts = this.$store.state.blog_posts.filter(e => {return e.title.toLowerCase().includes(this.search.toLowerCase())})
      this.$refs.search.value = this.search
    } else {
      this.search = ""
      this.searchPosts = []
    }
  }
}
</script>
