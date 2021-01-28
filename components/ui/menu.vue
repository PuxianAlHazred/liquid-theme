<template>
  <header class="menu">
    <div class="black-col" >
      <ul class="rs-list">
        <li v-for="item in this.$store.state.options.menu.rs"><a :href="item.value" target="_blank"><i :class=" item.label "/></a></li>
      </ul>
    </div>
    <div class="main-menu" :class="{active: MenuIsActive}" >
      <div id="menu-select"  @click="openMenu">
          <img class="logo-menu" :src="this.$store.state.options.generales.theme.favicon" :alt="this.$store.state.options.generales.theme.title" />
          <p><i class="las la-times"></i></p>
          <span :style="bar1"></span>
          <span :style="bar2"></span>
          <span :style="bar3"></span>
      </div>
      <nav class="nav-list">
          <a class="ticket" :href="this.$store.state.options.menu.ticketLink" target="_blank">
              <i class="las la-ticket-alt"/>
              Billeterie
          </a>
          <img class="logo" :src="this.$store.state.options.menu.logo" :alt="this.$store.state.options.generales.theme.title" />
          <ul class="menu-list">
            <li v-for="item in this.$store.state.options.menu.menuList" @click="openMenu"><NuxtLink :to="item.url">{{ item.nomdepage }}</NuxtLink></li>
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
        updateBars() {
          this.bars1 = this.equalizer();
          this.bars2 = this.equalizer();
          this.bars3 = this.equalizer();
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
