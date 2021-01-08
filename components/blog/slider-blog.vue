<template>
  <div>
  <div class="swiper" v-swiper:myDirectiveSwiper="this.$store.state.swiperOptions" @ready="onSwiperRedied" @click-slide="onSwiperClickSlide" @slide-change-transition-start="onSwiperSlideChangeTransitionStart">
    <div class="swiper-wrapper" >
      <div class="swiper-slide swiper-slide-blog" v-for="(element, index) in posts.slice(0,3)" :key="index">
        <div class="img-blur" :lazy-background="element.thumbnail"></div>
        <NuxtLink :to="element._path+'/'">
          <span data-swiper-parallax="-200" class="h3">{{ element.title }}</span>
          <p data-swiper-parallax="-400" class="h5">{{ element.date}}</p>
        </NuxtLink>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </div>
    </div>
</template>
<style>
.swiper-slide-blog a {
    position: absolute;
    width:100%;
    max-width: 1080px;
    color:#FFFFFF;
    text-decoration:none;

    padding:25px 0px;
}
.swiper-slide-blog a p{
    margin:0;
    color:#CFCFCF;
}
.img-blur {
  filter: blur(15px);
  position: absolute;
  display: block;
  width: 100vw;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
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
