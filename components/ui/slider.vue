<template>
  <div class="swiper"
    v-swiper:myDirectiveSwiper="this.$store.state.options.plugins.swiperOptions"
    @ready="onSwiperRedied"
    @click-slide="onSwiperClickSlide"
    @slide-change-transition-start="onSwiperSlideChangeTransitionStart"
  >
    <div class="swiper-wrapper" >
      <div class="swiper-slide" v-for="(e, i) in this.$store.state.agenda.posts" :key="i">
        <NuxtLink :to="e._path+'/'">
          <span>{{ e.title }}</span>
          <p>{{ e.date}}</p>
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
  methods: {
    onSwiperRedied(swiper) { },
    onSwiperSlideChangeTransitionStart() { },
    onSwiperClickSlide(index, reallyIndex) { },
  },
  data() {
    return {
      active: false,
    }
  }
}
</script>
