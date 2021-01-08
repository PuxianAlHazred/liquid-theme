<template>
  <div class="menu-popup" :class="{active: MenuIsActive}">
      <NuxtLink to="/" class="logo" v-if="this.$store.state.header.logo" >
        <img :src="this.$store.state.generales.thumbnail" :alt="this.$store.state.header.title" @click="openMenu"/>
        <p class="logo-title" v-html="this.$store.state.header.title" @click="openMenu"></p>
      </NuxtLink>
      <NuxtLink to="/" :class="{active: MenuIsActive}" class="title-logo" v-else>
        <p class="logo-title" v-html="this.$store.state.header.title" @click="openMenu"></p>
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
</template>
<script>
  export default {
    data() {
      return {
        header : this.$store.state.header,
      }
    },
    methods: {
      scrollToTop() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) },
    }
  }
</script>
