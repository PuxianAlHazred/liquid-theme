<template>
  <div id="slider">
    <div class="swiper"
      v-swiper:myDirectiveSwiper="this.$store.state.options.plugins.swiper" @ready="onSwiperRedied" @click-slide="onSwiperClickSlide" @slide-change-transition-start="onSwiperSlideChangeTransitionStart">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(e, i) in this.$store.state.agenda.posts" :key="i" :lazy-background="e.thumbnail">
          <NuxtLink :to="e._path+'/'">
            <span>{{ e.title }}</span>
            <p>{{ e.date}}</p>
          </NuxtLink>
        </div>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-pagination" >
          <div v-for="(e, i) in this.$store.state.agenda.posts" :key="i" >
            <span>{{ e.date }}</span>
          </div>
        </div>
      </div>

    </div>
    <div class="swiper"
      v-swiper:myDirectiveSwiper="this.$store.state.options.plugins.swiper"
      @ready="onSwiperRedied"
      @click-slide="onSwiperClickSlide"
      @slide-change-transition-start="onSwiperSlideChangeTransitionStart">
      <div class="swiper-wrapper" >
        <div class="swiper-slide" v-for="(e, i) in this.$store.state.agenda.posts" :key="i" :lazy-background="e.thumbnail">
            <p>{{ e.date}}</p>
        </div>
      </div>
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
