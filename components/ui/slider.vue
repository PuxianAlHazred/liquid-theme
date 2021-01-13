<template>
  <div id="slider" ref="slider" :class="this.$route.name">
    <div class="swiper" ref="swiperTop"
      v-swiper:myDirectiveSwiper="this.$store.state.options.plugins.swiper"
      @ready="onSwiperRedied"
      @slide-change="onSwiperSlideChange"
      @click-slide="onSwiperClickSlide">
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
      <div class="swiper-thumbs">
        <ul>
          <li :ref="'thumbs'+i" class="swiper-thumbs-button"
          v-for="(e, i) in filtered" :key="i"
          @click="toSlide(i)">
            {{ e.date }}
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>
<style>
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
.agenda-slug .swiper{height:100vh;}
</style>
<script>

export default {
  name: 'Slider',
  data() {
    return {
      active: false,
      filtered: this.$store.state.agenda.posts,
    }
  },
  methods: {
    onSwiperRedied(swiper) {
      console.log("Swiper ready")
    },
    onSwiperSlideChange() {
      console.log( "Slider change")
    },
    onSwiperClickSlide(i, reallyIndex) {
      console.log( "Slider : "+ i)
    },
    toSlide(i) {
      this.$refs.swiperTop.swiper.slideTo(i);
      console.log( "To slider : "+ i)
    }
  }

}
</script>
