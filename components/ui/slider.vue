<template>
  <div id="slider" ref="slider" >
    <div class="swiper" ref="swiperTop"
      v-swiper:myDirectiveSwiper="this.$store.state.options.plugins.swiper"
      @ready="swiperRedied"
      @slide-change="slideChange"
      @click-slide="clickSlide">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(e, i) in filtered" :key="i" :lazy-background="e.thumbnail">
          <NuxtLink :to="e._path+'/'">
            <span>{{ e.title }}</span>
            <p>{{ e.date}}</p>
          </NuxtLink>
        </div>
      </div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>

    </div>
    <div class="swiper-thumbs" >
      <ul>
        <li v-for="(e, i) in filtered" :key="i" :class="{ active: indexed === i }" class="swiper-thumbs-button" @click="toSlideTop(i)">
          {{ e.date }}
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.swiper {
    height: 70vh;
    width: 100vw;
}
.swiper-thumbs {
    position: absolute;
    top: 0;
    width: 50px;
    height: 70vh;
    z-index: 9;
    cursor: pointer;
    right: 0px;
    background: red;
}
.swiper-thumbs .swiper-thumbs-button {
    width: 30px;
    height: 100px;
    writing-mode: vertical-rl;
    text-orientation: mixed;
    line-height: 30px;
    left: -40px;
    top: -16px;
    position: relative;
    padding: 10px;
    text-align: center;
    list-style: none;
    background: blue;
}
.swiper-thumbs .swiper-thumbs-button:hover {
    background: green;
}
.swiper-thumbs .swiper-thumbs-button.active {
    background: pink;
}
.agenda-slug .swiper{
  height:100vh;


}
</style>
<script>
export default {
  name: 'Slider',
  data() {
    return {
      active: false,
      filtered: this.$store.state.agenda.posts,
      indexed: 0,
    }
  },
  methods: {
    swiperRedied(swiper) {
      console.log("Swiper ready !")
    },
    slideChange(i, reallyIndex) {
      this.indexed = this.$refs.swiperTop.swiper.activeIndex;
      console.log( "Slider change : "+ this.indexed )

    },
    clickSlide(i, reallyIndex) {
      console.log( "Click on slider : "+ i)
      this.indexed = i
    },

    toSlideTop(i) {
      this.$refs.swiperTop.swiper.slideTo(i);
      this.indexed = i
      console.log( "To slider : "+ i)
    }
  }

}
</script>
