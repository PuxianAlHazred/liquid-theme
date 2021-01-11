<template>
  <div class="swiper" v-swiper:myDirectiveSwiper="this.$store.state.swiperOptions" @ready="onSwiperRedied" @click-slide="onSwiperClickSlide" @slide-change-transition-start="onSwiperSlideChangeTransitionStart">
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(element, index) in posts" :key="index">
        <NuxtLink :to="element._path+'/'">
          <span>{{ element.title }}</span>
          <p>{{ element.date}}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="swiper-wrapper-tabs" >
      <div class="swiper-slide-tabs" v-for="(element, index) in posts" :key="index" :lazy-background="element.thumbnail"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  props: {
    posts: { type: Array },
  },
  methods: {
    onSwiperRedied(swiper) { },
    onSwiperSlideChangeTransitionStart() { },
    onSwiperClickSlide(index, reallyIndex) { },
  },
  data() {
    return {
      active: false
    }
  }
}
</script>
