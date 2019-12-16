<template>
  <div>
    <div v-for="data in datas" :key="data.id" class="img-box">
      <div class="img-box_left">
        <h1 v-if="data.title">
          {{ data.title }}
        </h1>
        <h3 v-if="data.content">
          {{ data.content }}
        </h3>
      </div>
      <div class="img-box_right">
        <div
          v-for="(image, i) in data.images"
          :key="i"
          class="image"
          :style="{
            backgroundImage: `url('${baseUrl}${image.url}')`
          }"
          @click="index = i"
        />
        <!-- <img
          v-for="(image, i) in data.images"
          :key="i"
          class="image"
          :src="`${baseUrl}${image.url}`"
          @click="index = i"
        /> -->
        <vue-gallery-slideshow
          :images="images"
          :index="index"
          @close="index = null"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VueMasonry from 'vue-masonry-css'
import VueGallerySlideshow from 'vue-gallery-slideshow'
Vue.use(VueMasonry)
Vue.use(VueGallerySlideshow)

export default {
  components: {
    VueGallerySlideshow
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/contentimages`)
    return { datas: data }
  },
  data() {
    return {
      baseUrl: null,
      index: null,
      images: []
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
    // console.log(process.env.baseUrl)
    this.baseUrl = process.env.baseUrl
  },
  methods: {
    sendPost() {
      const postData = {
        names: 'asd'
      }
      axios.post('http://localhost:1337/contentimages', postData).then(res => {
        // console.log('dane zostały dodane')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.img-box {
  display: flex;
  margin-bottom: 100px;

  &:last-of-type {
    margin-bottom: 0;
  }
  &_left {
    width: 500px;
    padding-right: 100px;
  }
  &_right {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    .image {
      background-position: center;
      background-size: cover;
      background-color: @black;
      width: 20%;
      height: 200px;
      filter: grayscale(1);
      .transition-duration(0.3s);
      opacity: 0.5;
      cursor: pointer;
      &:hover {
        filter: grayscale(0);
        opacity: 1;
      }
    }
  }
}

// <masonry :cols="4" :gutter="0">
// <img
// v-for="(image, index) in data.images"
// :key="index"
// :src="`${baseUrl}${image.url}`"
// class="item"
// />
// </masonry>
</style>
