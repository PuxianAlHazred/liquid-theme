<template>
  <header id="header" :class="textAlign" class="animate__animated animate__fadeInDown">
      <NuxtLink to="/" class="logo aligned" v-if="this.$store.state.header.logo">
        <img class="animate__animated animate__jackInTheBox" style="animation-delay: 1.2s" :src="this.$store.state.header.logo"/>
        <p class="logo-title animate__animated animate__flipInY" style="animation-delay: 1.2s">{{this.$store.state.header.title}}</p>
      </NuxtLink>
      <NuxtLink to="/" :class="{active: MenuIsActive}" class="title-logo aligned" v-else>
        <p class="logo-title animate__animated animate__flipInY" style="animation-delay: 1.2s">{{this.$store.state.header.title}}</p>
      </NuxtLink>
      <div class="" v-if="this.$store.state.header.hamburgerActive === true">
        <nav :class="{ hamburgerActive: this.$store.state.header.hamburgerActive}">
            <div v-on:click="openMenu" class="hamburger hamburger--spring js-hamburger animate__animated animate__jackInTheBox" style="animation-delay: 1.2s" :class="{active: MenuIsActive}">
              <div class="hamburger-box">
                <div class="hamburger-inner"></div>
              </div>
            </div>
            <div class="menu-popup" :class="{active: MenuIsActive}">
                <NuxtLink to="/" class="logo" v-if="this.$store.state.header.logo" >
                  <img :src="this.$store.state.generales.thumbnail" :alt="this.$store.state.header.title" @click="openMenu"/>
                  <p class="logo-title" @click="openMenu">{{ this.$store.state.header.title }} lol</p>
                </NuxtLink>
                <NuxtLink to="/" :class="{active: MenuIsActive}" class="title-logo" v-else>
                  <p class="logo-title" @click="openMenu">{{ this.$store.state.header.title }}</p>
                </NuxtLink>
                <div class="center" >
                    <ul>
                      <li v-for="item in this.$store.state.header.menuList" @click="openMenu"><NuxtLink :to="item.url">{{ item.nomdepage }}</NuxtLink></li>
                    </ul>
                </div>
                <div class="social-media" >
                    <a :href="this.$store.state.header.rs[0].value" target="_blank">
                        <i :class="this.$store.state.header.rs[0].label"/>
                    </a>
                </div>
            </div>
        </nav>
      </div>
      <div class="" v-else-if="this.$store.state.header.hamburgerActive === false">
          <div class="social-media" >
              <a :href="this.$store.state.header.rs[0].value" target="_blank">
                  <i :class="this.$store.state.header.rs[0].label"></i>
              </a>
          </div>
          <nav class="no-deploy">
              <ul><li v-for="item in this.$store.state.header.menuList"><NuxtLink :to="item.url">{{ item.nomdepage }}</NuxtLink></li></ul>
          </nav>
      </div>
      <div v-on:click="openSearch" class="search animate__animated animate__fadeIn"><i v-bind:class="{ 'la-search-minus': toggleSearch, 'la-search-plus': !toggleSearch}" class="las la-1x"></i></div>
      <Search v-show="toggleSearch" v-bind:class="{ 'animate__animated animate__fadeIn': toggleSearch, 'animate__animated animate__fadeOut': !toggleSearch}"></Search>
  </header>
</template>
<style>

</style>
<script>
  import Search from "~/components/blog/search-blog.vue";
  export default {
    components: {
      Search
    },
    data() {
      return {
        header : this.$store.state.header,
        MenuIsActive: false,
        toggleSearch: false,
      }
    },
    methods: {
      openSearch: function (event) {
        this.toggleSearch = !this.toggleSearch
      },
      openMenu: function (event) {
        this.MenuIsActive = !this.MenuIsActive;
      }
    },
    computed:{
      textAlign() {
         if(this.$store.state.header.MenuPosition === "left"){
           if(this.$store.state.header = true){
             return 'sticky align-left';
           }else{ return 'align-left'; }
         };
         if(this.$store.state.header.MenuPosition === "right"){
           if(this.$store.state.header.sticky = true){
             return 'sticky align-right';
           }else{ return 'align-right'; }
         };
         if(this.$store.state.header.MenuPosition === "center"){
           if(this.$store.state.header.sticky = true){
             return 'sticky align-center';
           }else{ return 'align-center'; }
         };
      }
    }
  }
</script>
