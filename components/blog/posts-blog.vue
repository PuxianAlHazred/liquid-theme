<template>
    <article class="grid-item" v-show="showItems">
      <div class="thumb animate__animated animate__fadeIn" :lazy-background="thumbnail"></div>
      <div class="content-article">
        <h3 class="h6 animate__animated animate__fadeInUp">{{title}}</h3>
        <p class="meta animate__animated animate__fadeInUp" style="animation-delay: 0.5s"><b>{{ date | moment("from", "now")}}</b> dans <button :for="cat" @click="onClickCat(cat)" :value="cat">{{cat}}</button> et <button class="link" :for="tag" :value="tag" @click="onClickTag(tag)">{{tag}}</button></p>
        <p class="description animate__animated animate__fadeIn" style="animation-delay: 0.7s">{{description}}</p>
        <nuxt-link class="link animate__animated animate__fadeIn" style="animation-delay: 0.7s" :to="path">Lire la suite</nuxt-link>
      </div>
    </article>
</template>
<script>
export default {
  data() {
    return {
      showItems: false,
    }
  },
  props: {
    totalArticleFix: { type: Number, required: true },
    totalArticle: { type: Number, required: true },
    ind: { type: Number, required: true },
    thumbnail: { type: String, required: true },
    title: { type: String, required: true },
    path: { type: String, required: true },
    description: { type: String, required: true },
    tag: { type: String, required: true },
    cat: { type: String, required: true },
    date: { type: String, required: true },
    onClickCat: { type: Function, required: true },
    onClickTag: { type: Function, required: true },
  },
  mounted() {

    setTimeout(() => {
      this.startInterval();
    }, 1000)

  },
  methods: {

    startInterval() {

      if( this.ind < this.totalArticleFix ) {
        var delay = this.ind+"00" //X000 (X = de à [totalArticleFix])
        console.log('%c%s', 'color: white; background: black; font-size: 14px;',"posts-id-"+this.ind+" : delay = " +delay+"s")
        console.log('%cposts-id%c', 'color: #151515; background-color: #CFCFCF;');
      } else {
        var lol = this.ind % this.totalArticleFix //T000 (T = de [totalArticleFix] à "infini")
        var delay = lol+"00" ;
        console.log(delay)
      }
      setInterval(() => {
        this.$nextTick(()=>{
          this.showItems=true
        })
      }, delay);
    }
  }
}
</script>
