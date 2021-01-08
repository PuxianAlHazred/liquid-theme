<template>
  <aside ref="sidebar" class="sidebar" :class="{ sticky: this.$store.state.blog_options.sidebar[0].sidebarSticky}"  v-if="this.$store.state.blog_options.sidebar[0].sidebarPosition !== 'none'" >
      <div class="last-posts">
        <span>Articles récent :</span>
          <div class="last-post" :key="e.title" v-for="(e, index) in this.$store.state.blog_posts.slice(0,3)" >
            <nuxt-link :to="e._path+'/'">
              <p class="last-post-title animate__animated animate__fadeInUp" :style="'animation-delay: '+index+'.5s'">{{e.title}}</p>
              <div class="thumb animate__animated animate__fadeInUp" :style="'animation-delay: '+index+'.7s'" :lazy-background="e.thumbnail"></div>
              <p class="last-post-date animate__animated animate__fadeInUp" :style="'animation-delay: '+index+'.9s'">{{ e.date | moment("from", "now")}}<i class="far fa-eye"></i></p>
            </nuxt-link>
          </div>
          <div class="sidebar-widget animate__animated animate__fadeInUp" :style="'animation-delay: '+index+'.9s'"  v-for="(element, index) in this.$store.state.blog_options.sidebar[0].sidebarWidget" :key="index">
            <span>{{ element.title }} :</span>
            <markdown-it-vue :content="element.code" :options="optionsMD"/>
          </div>
      </div>
  </aside>
</template>
<script>
export default {
  data: function() {
   return {
       optionsMD : this.$store.state.optionsMarkdown,
   };
  },
  methods: {
    matchHeight() {
        var getsidebar = this.$refs["sidebar"];
        var heightString = getsidebar.clientHeight + 'px';
        var sidebarInit = getsidebar.style.height = heightString;
    }
  },
  mounted() {
      this.matchHeight();
  }
}
</script>
