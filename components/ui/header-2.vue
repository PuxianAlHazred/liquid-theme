<template>
  <header id="header">

    <b-navbar mobile-burger="false" fixed-top="true" active="true" centered="true" class="is-dark animate__animated animate__fadeInDown" >
      <template slot="brand">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <img v-if="this.$store.state.header.logo" :src="this.$store.state.header.logo" class="animate__animated animate__jackInTheBox" style="animation-delay: 1.1s">
            <p class="logo-title animate__animated animate__flipInY" style="animation-delay: 1.2s">{{this.$store.state.header.title}}</p>
        </b-navbar-item>
      </template>
      <template slot="end">
        <b-navbar-item tag="div">
          <b-navbar-item class="animate__animated animate__fadeInDown" :style="'animation-delay:1.'+index+'s'" v-for="(item, index) in this.$store.state.header.menuList" @click="openMenu" tag="router-link" :to="item.url">{{ item.nomdepage }}</b-navbar-item>
        </b-navbar-item>
      </template>

    </b-navbar>
  </header>
</template>
<script>
  export default {
    data() {
      return {
        header : this.$store.state.header,
        MenuIsActive: false
      }
    },
    methods: {

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
