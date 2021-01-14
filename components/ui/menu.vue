<template>
  <header class="menu">
    <div class="black-col" >
      <NuxtLink to="/" class="logo">
        <img :src="this.$store.state.options.menu.logo" :alt="this.$store.state.options.generales.seo.title" />
      </NuxtLink>
    </div>
    <div class="main-menu" :class="{active: MenuIsActive}" >
      <div id="menu-select"  @click="openMenu">
          <p></p>
          <span :style="bar1"></span>
          <span :style="bar2"></span>
          <span :style="bar3"></span>
      </div>
      <nav class="nav-list">
          <a class="ticket" :href="this.$store.state.options.menu.ticketLink" target="_blank">
              <i class="las la-ticket-alt"/>
              Billeterie
          </a>
          <h2>{{ this.$store.state.options.generales.seo.title }}</h2>
          <ul class="menu-list">
            <li v-for="item in this.$store.state.options.menu.menuList"><NuxtLink :to="item.url">{{ item.nomdepage }}</NuxtLink></li>
          </ul>
          <ul class="rs-list">
            <li v-for="item in this.$store.state.options.menu.rs"><NuxtLink :to="item.value"><i :class=" item.label "/></NuxtLink></li>
          </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  export default {
    data() {

      return {
        bar1: [],
        bar2: [],
        bar3: [],
        MenuIsActive: false
      }
    },
    methods: {
        scrollToTop() { window.scroll({ top: 0, left: 0, behavior: 'smooth' }) },
        openMenu: function (event) {
          this.MenuIsActive = !this.MenuIsActive;
        },

        equalizer(){
            const randomNumber = Math.floor(Math.random() * 50 + 20);
            const marg = (170 - randomNumber) / 2;
            return 'height:'+ randomNumber +'px;margin-bottom:'+ marg +'px; overflow:hidden;'
        },
        updateBars1() {
          this.bar1 = this.equalizer();
        },
        updateBars2() {
          this.bar2 = this.equalizer();
        },
        updateBars3() {
          this.bar3 = this.equalizer();
        },
        getDelay() {
          return Math.floor(Math.random() * 50 + 20) * 7.5;
        }


    },
    computed: {

    },
    mounted() {
        this.updateBars1();
        this.updateBars2();
        this.updateBars3();
        setInterval(this.updateBars1, this.getDelay());
        setInterval(this.updateBars2, this.getDelay());
        setInterval(this.updateBars3, this.getDelay());
    }
  }
</script>
