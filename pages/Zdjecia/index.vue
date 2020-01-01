<template>
  <div>
    <div v-for="data in datas" :key="data.id" class="img-box b-vert-l">
      <div class="img-box_left">
        <h2 v-if="data.title">
          {{ data.title }}
        </h2>
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
          @click="() => showImg(index)"
        />
        <!-- <vue-easy-lightbox
          v-for="(image, x) in data.images"
          :key="x"
          :visible="visible"
          :imgs="`${baseUrl}${image.url}`"
          @hide="handleHide"
        />
      </div> -->
      </div>
    </div>
  </div>
</template>

<script src="path/to/vue.js"></script>
<script src="path/to/vue-easy-lightbox.umd.min.js"></script>
<script>
import axios from 'axios'
import Vue from 'vue'
import Lightbox from 'vue-easy-lightbox'
Vue.use(Lightbox)

export default {
  components: {},
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/contentimages`)
    return { datas: data }
  },
  data() {
    return {
      baseUrl: null,
      index: null,
      images: [],
      visible: false,
      imgs: [`${process.env.baseUrl}/contentimages`]
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
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
    },
    showImg(index) {
      this.index = index
      this.visible = true
    },
    handleHide() {
      this.visible = false
    }
  }
}
</script>

<style lang="less" scoped>
.img-box {
  display: flex;
  margin-bottom: 100px;

  @media @w-767 {
    flex-direction: column;
    margin-bottom: 80px;
    &::after {
      bottom: -40px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
    &::after {
      content: none;
    }
  }
  &_left {
    width: 500px;
    padding-right: 100px;
    @media @w-1299 {
      padding-right: 70px;
    }
    @media @w-767 {
      width: 100%;
      padding-right: 0;
      margin-bottom: 30px;
      h2 {
        text-align: center;
      }
    }
  }
  &_right {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    &:hover {
      .image {
        filter: grayscale(1);
        opacity: 0.5;
      }
    }
    .image {
      background-position: center;
      background-size: cover;
      background-color: @black;
      width: 25%;
      height: 200px;
      @media @w-1399 {
        height: 180px;
      }
      @media @w-1299 {
        height: 170px;
      }
      @media @w-1199 {
        height: 160px;
      }
      @media @w-1099 {
        height: 140px;
      }
      @media @w-991 {
        width: 50%;
      }
      @media @w-767 {
        width: 25%;
        height: 120px;
      }
      @media @w-469 {
        width: 50%;
        height: 120px;
      }
      .transition-duration(0.3s);
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
