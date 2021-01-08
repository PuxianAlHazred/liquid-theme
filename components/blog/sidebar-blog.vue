<template>
  <aside class="sidebar" :class="{ sticky: this.$store.state.blog_options.sidebar[0].sidebarSticky}"  v-if="this.$store.state.blog_options.sidebar[0].sidebarPosition !== 'none'" >
    <span>Filteuse :</span>
    <Accordion class="animate__animated animate__flipInX" style="animation-delay: 1.5s" :name="'Catégorie : '+ this.selectedCat">
      <button for="All" value="All" @click="onClickCat('All'), selectedCat = 'All'" :class="{highlight:selectedCat == 'All'}">All<i class="las la-eye"></i></button>
      <button :id="filter" v-for="filter in this.$store.state.blog_cat" :for="filter" :value="filter" @click="onClickTag('All'), onClickCat(filter), selectedCat = filter, selectedTag = 'All'" :class="{highlight:selectedCat == filter}">{{filter}}<i class="las la-eye"></i></button>
    </Accordion>
    <Accordion class="animate__animated animate__flipInX" style="animation-delay: 1.7s" :name="'Tag : '+ this.selectedTag">
      <button for="All" value="All" @click="onClickTag('All'), selectedTag = 'All'" :class="{highlight:selectedTag == 'All'}">All<i class="las la-eye"></i></button>
      <button :id="filter" v-for="(filter, index) in this.$store.state.blog_tag" :for="filter" :value="filter" @click="onClickCat('All'), onClickTag(filter), selectedTag = filter, selectedCat = 'All'" :class="{highlight:selectedTag == filter}">{{filter}}<i class="las la-eye"></i></button>
    </Accordion>
    <Accordion class="animate__animated animate__fadeInUp grey" style="animation-delay: 2s" name="Articles récents">
      <div class="last-posts">
        <div class="last-post" :key="e.title" v-for="(e, index) in this.$store.state.blog_posts.slice(0,3)" >
          <nuxt-link :to="e._path+'/'">
            <p class="last-post-title animate__animated animate__fadeIn" :style="'animation-delay: '+index+'.5s'">{{e.title}}</p>
            <div class="thumb animate__animated animate__fadeIn" :style="'animation-delay: '+index+'.7s'" :lazy-background="e.thumbnail"></div>
            <p class="last-post-date animate__animated animate__fadeIn" :style="'animation-delay: '+index+'.9s'">{{ e.date | moment("from", "now")}}<i class="las la-eye"></i></p>
          </nuxt-link>
        </div>
      </div>
    </Accordion>
    <div class="sidebar-widget animate__animated animate__fadeInUp" :style="'animation-delay: '+index+'.9s'"  v-for="(element, index) in this.$store.state.blog_options.sidebar[0].sidebarWidget" :key="index">
      <span>{{ element.title }} :</span>
      <markdown-it-vue :content="element.code" :options="optionsMD"/>
    </div>
  </aside>
</template>
<style>




</style>
<script>
import Accordion from "~/components/plugins/accordion.vue";
import Search from "~/components/blog/search-blog.vue";
export default {
  components: {
    Accordion,
    Search
  },
  props: {
    onClickCat: { type: Function, required: true },
    onClickTag: { type: Function, required: true },
  },
  data: function() {
   return {
       selectedCat: 'All',
       selectedTag: 'All',
       optionsMD : this.$store.state.optionsMarkdown,
   };
  }
}
</script>
