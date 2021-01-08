<template>
  <div>
    <section class="slider animate__animated animate__fadeIn" style="animation-delay: 0.2s">
      <Slider :posts="this.$store.state.blog_posts"></Slider>
    </section>
    <div class="container page-blog">
    <!-- SLIDER -->

    <main class="page-actu" :class="classSidebar">

      <!-- GRID -->
      <section class="grid">
        <transition-group mode="out-in" :duration="{ enter: 1000, leave: 1000 }" name="grid" enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
          <blogPosts
            v-for="(element, index) in filteredPosts" :key="element._path"
            :ind="index"
            :title="element.title"
            :date="element.date"
            :cat="element.cts[0].label"
            :tag="element.tgs[0].label"
            :description="element.description"
            :path="element._path+'/'"
            :thumbnail="element.thumbnail"
            :onClickCat="onClickCat"
            :onClickTag="onClickTag"
            :totalArticleFix="totalArticleFix"
            :totalArticle="totalArticle"
          ></blogPosts>
        </transition-group>
      </section>
      <!-- SIDEBAR -->
      <blogSidebar
        class="animate__animated animate__fadeInUp" style="animation-delay: 1s"
        :onClickCat="onClickCat"
        :onClickTag="onClickTag"
      ></blogSidebar>
    </main>
    <div class="addMore">
      <button v-if="filteredPosts.length !== this.$store.state.blog_posts.length" @click="addMore()">Voir plus d'articles <span>(+{{ totalArticleFix}})</span></button>
    </div>
  </div>
  </div>
</template>
<script>
import blogPosts from '~/components/blog/posts-blog.vue'
import blogSidebar from '~/components/blog/sidebar-blog.vue'
import Slider from '~/components/blog/slider-blog.vue'
export default {
  scrollToTop: true,
  layout: 'default',
  components: { blogPosts, blogSidebar, Slider },
  data() {
    return {
      totalArticle : this.$store.state.blog_options.totalArticle, // STATE BLOG TOTAL POSTS PER PAGE (no fix)
      totalArticleFix : this.$store.state.blog_options.totalArticle, // STATE BLOG TOTAL ADD POSTS PER NEW PAGE (fix)
      filteredPosts: [], // FILTER POSTS
        totalArticleCat : '', // TOTAL POSTS IN CAT SELECTED
        CatSelect: 'All', // filter cat
        selectedCat: 'All', // selection cat
        totalArticleTag : '', // TOTAL POSTS IN TAG SELECTED
        TagSelect: 'All', // filter tag
        selectedTag: 'All', // selection tag
    };
  },
  methods: {
    onClickCat(targetCat){
      var slugyQuery = targetCat; //.toLowerCase().replace(/^\s+|\s+$/g, '').replace(/\s+/g, '-')
      if (targetCat === 'All') {
        this.CatSelect = "All";
        this.selectedCat = "All";
        this.filteredPosts = this.$store.state.blog_posts;
        this.$router.push({path: this.$route.path, query: { cat: "All" }})
      } else {
        this.CatSelect = targetCat;
        this.selectedTag = "All";
        this.filteredPosts = this.$store.state.blog_posts.filter(e => {return e.cts[0].label === this.CatSelect});
        this.totalArticleCat = this.$store.state.blog_posts.filter(e => {return e.cts[0].label === this.CatSelect}).length;
        this.$router.push({path: this.$route.path, query: { cat: targetCat }})
      }
    },
    onClickTag(targetTag){
      if (targetTag === 'All') {
        this.TagSelect = "All"; // Passe en "ALL" le [tag selected]
        this.selectedTag = "All"; // Passe en "ALL" le [selected tag]
        this.filteredPosts = this.$store.state.blog_posts; // Passe en [blog posts = All] le "FilteredPosts"
        this.$router.push({path: this.$route.path, query: { tag: "All" }}) // Ajoute le "query : All" aprés l'url [blog/index.vue]
      } else {
        this.TagSelect = targetTag;
        this.selectedCat = "All"; // Passe en "ALL" le [cat selected] ( v1 = switch du query )
        this.filteredPosts = this.$store.state.blog_posts.filter(e => {return e.tgs[0].label === this.TagSelect}); // Filtre le [blog posts = onClick Cat] dans le "Blog"
        this.totalArticleTag = this.$store.state.blog_posts.filter(e => {return e.tgs[0].label === this.TagSelect}).length; // Calcule le nombre d'objet filtrer
        this.$router.push({path: this.$route.path, query: { tag: targetTag }}) // Ajoute le "query : All" aprés l'url [blog/index.vue]
      }
    },
    addMore() {
      this.totalArticle = this.totalArticle + this.totalArticleFix;
      if ( this.$route.query.cat ) {
        this.CatSelect = this.$route.query.cat;
        this.filteredPosts = this.$store.state.blog_posts.filter(e => {return e.cts[0].label === this.CatSelect}).slice(0,this.totalArticle);
      } if ( this.$route.query.cat === "All" ) {
        this.CatSelect = "All";
        this.filteredPosts = this.$store.state.blog_posts.slice(0,this.totalArticle);
      } if ( this.$route.query.tag ) {
        this.TagSelect = this.$route.query.tag;
        this.filteredPosts = this.$store.state.blog_posts.filter(e => {return e.tgs[0].label === this.TagSelect}).slice(0,this.totalArticle);
      } if ( this.$route.query.tag === "All" ) {
        this.TagSelect = "All";
        this.filteredPosts = this.$store.state.blog_posts.slice(0,this.totalArticle);
      }
    }
  },
  computed:{
    classSidebar() {
      if(this.$store.state.blog_options.sidebar[0].sidebarPosition === 'right'){return 'right-sidebar';}
      if(this.$store.state.blog_options.sidebar[0].sidebarPosition === 'left'){return 'left-sidebar';}
    }
  },
  async mounted() {
    console.log("Async Mounted")
    if ( this.$route.query.cat ) {
      this.CatSelect = this.$route.query.cat;
      this.filteredPosts = this.$store.state.blog_posts.filter(e => {return e.cts[0].label === this.CatSelect}).slice(0,this.totalArticle);
      console.log(this.$route.query.cat+" : async Mounted")
    } if ( this.$route.query.cat === "All" ) {
      this.CatSelect = "All";
      this.filteredPosts = this.$store.state.blog_posts.slice(0,this.totalArticle);
    } if ( this.$route.query.tag ) {
      this.TagSelect = this.$route.query.tag;
      this.filteredPosts = this.$store.state.blog_posts.filter(e => {return e.tgs[0].label === this.TagSelect}).slice(0,this.totalArticle);
      console.log(this.$route.query.tag+" : async Mounted")
    } if ( this.$route.query.tag === "All" ) {
      this.TagSelect = "All";
      this.filteredPosts = this.$store.state.blog_posts.slice(0,this.totalArticle);
    } else {
      this.filteredPosts = this.$store.state.blog_posts.slice(0,this.totalArticle);
    }
  },
  created () {
    var momentLocal = this.$root.$moment.defineLocale('fr', {
      relativeTime : {
        future: "dans %s",
        past:   "Il y a %s",
        s  : 'quelques secondes',
        ss : '%d secondes',
        m:  "une minute",
        mm: "%d minutes",
        h:  "une heure",
        hh: "%d heurs",
        d:  "un jour",
        dd: "%d jours",
        w:  "une semaine",
        ww: "%d semaines",
        M:  "un mois",
        MM: "%d mois",
        y:  "un an",
        yy: "%d ans"
      }
    });
  }
};
</script>
