<template>

  <div>
    <section class="section">
      <div class="container is-fluid">
        <div class="swiper" v-swiper:myDirectiveSwiper="optionsSW">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="index in 6" :key="index">
              <span>Slide {{ index }}</span>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-bullets"></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</p>
        <p><i>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</i></p>
        <p><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.</b></p>
        <hr>
        <h1>Je suis un H1</h1>
        <p class="h1">Je suis un paragraphe de style H1</p>
        <h2>Je suis un H2</h2>
        <p class="h2">Je suis un paragraphe de style H2</p>
        <h3>Je suis un H3</h3>
        <p class="h3">Je suis un paragraphe de style H3</p>
        <h4>Je suis un H4</h4>
        <p class="h4">Je suis un paragraphe de style H4</p>
        <h5>Je suis un H5</h5>
        <p class="h5">Je suis un paragraphe de style H5</p>
        <h6>Je suis un H6</h6>
        <p class="h6">Je suis un paragraphe de style H6</p>

      </div>
    </section>
    <section class="section">
      <div class="container">

      </div>
    </section>
    <section class="section">
      <Accordion name="Accordion Name 1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
      </Accordion>
      <Accordion name="Accordion Name 2"><p>mon zbi</p></Accordion>
      <Accordion name="Accordion Name 3"><p>your zbi</p></Accordion>
    </section>
  </div>

</template>
<style>
.tabs {
  position: relative;
  min-height: 200px;
  width: 500px;
  margin: 25px 0;
}
.tab {
  float: left;
}
.tab label {
  background: #ddd;
  padding: 10px;
  border: 1px solid #ccc;
  cursor: pointer;
  margin-left: -1px;
}
.tab:first-child label {
  margin-left: 0;
}
.tab input[type=radio] {
  display: none;
}
.tab-content {
  position: absolute;
  top: 28px;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 20px;
  border: 1px solid #ccc;
  display: none;
}
input[type=radio]:checked ~ label {
  background: white;
  border-bottom: 1px solid white;
}
input[type=radio]:checked ~ label ~ .tab-content {
  display: block;
}
</style>
<script>
  import Accordion from "~/components/plugins/accordion.vue";
  import tabs from "~/components/plugins/tabs.vue";
  import tab from "~/components/plugins/tab.vue";
  export default {
    data () {
      return {
        optionsSW : this.$store.state.swiperOptions
      }
    },
    components: {
      Accordion, tab, tabs
    },
    methods: {
    }
  }
</script>
