<template>
  <header class="menu">
    <div class="black-col" >
      <NuxtLink to="/" class="logo">
        <img :src="this.$store.state.options.menu.logo" :alt="this.$store.state.options.generales.seo.title" />
      </NuxtLink>
    </div>
    <nav class="main-menu" >
      <ul class="menu-list">
        <li v-for="item in this.$store.state.options.menu.menuList"><NuxtLink :to="item.url">{{ item.nomdepage }}</NuxtLink></li>
      </ul>
      <ul class="rs-list">
        <li v-for="item in this.$store.state.options.menu.rs"><NuxtLink :to="item.value"><i :class=" item.label "/></NuxtLink></li>
      </ul>
    </nav>
  </header>
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
    },
    computed: {
      
    }
  }
</script>
