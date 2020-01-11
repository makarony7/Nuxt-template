<template>
  <div>
    <div v-for="(data, i) in datas" :key="data.id" class="img-box b-vert-l">
      <div class="img-box_left">
        <h2 v-if="data.title">
          {{ data.title }}
        </h2>
        <h3 v-if="data.content">
          {{ data.content }}
        </h3>
      </div>
      <div v-if="mappedImages" class="img-box_right">
        <!-- :class="{ 'img-zoom': actives[i][index] }" -->
        <div
          v-for="(image, index) in data.images"
          :key="image.id"
          class="image"
          :style="{
            backgroundImage: `url('${baseUrl}${image.url}')`
          }"
          @mouseover="handleActiveState(i, index)"
          @click="() => showImg(i, index)"
        />
        <vue-easy-lightbox
          :visible="visibles[i]"
          :index="indexes[i]"
          :imgs="mappedImages[i]"
          @hide="handleHide(i)"
        />
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
import pick from 'lodash/pick'
Vue.use(Lightbox)

export default {
  components: {},
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/contentimages`)
    return {
      datas: data,
      indexes: Array(data.length).fill(null),
      visibles: Array(data.length).fill(false)
    }
  },
  data() {
    return {
      indexes: [],
      images: [],
      visibles: [],
      actives: [],
      imgs: []
    }
  },
  computed: {
    mappedImages() {
      // const tmpActives = []
      return this.datas.map(imgData => {
        // tmpActives.push(imgData.images.map(() => false))
        return imgData.images.map(img => `${process.env.baseUrl}${img.url}`)
      })

      // this.actives = [...tmpActives]
    },
    baseUrl() {
      return process.env.baseUrl
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
    // console.log(process.env.baseUrl)

    // const imgBox = document.querySelectorAll('img-box_right')

    // for (var i = 0; i < imgBox.length; i++) {
    //   imgBox.onmouseover = function() {
    //     this.classList.add('img-zoom')
    //   }
    //   imgBox.onmouseout = function() {
    //     this.classList.remove('img-zoom')
    //   }
    // }
  },
  methods: {
    handleActiveState(index) {
      const tmpActives = [...this.actives.map(active => false)]
      tmpActives[index] = true

      this.actives = [...tmpActives]
    },
    sendPost() {
      const postData = {
        names: 'asd'
      }
      axios.post('http://localhost:1337/contentimages', postData).then(res => {
        // console.log('dane zostały dodane')
      })
    },
    showImg(foundIndex, index) {
      // const foundIndex = this.datas.findIndex(d => d.id === data.id)
      // this.indexes[foundIndex] = index
      // this.visibles[foundIndex] = true

      console.log(foundIndex, index, 'showImg')

      const tmpIndexes = [...this.indexes]
      tmpIndexes[foundIndex] = index

      this.indexes = [...tmpIndexes]

      const tmpVisibles = [...this.visibles]
      tmpVisibles[foundIndex] = true

      this.visibles = [...tmpVisibles]
    },
    handleHide(index) {
      const tmpVisibles = [...this.visibles]
      tmpVisibles[index] = false

      this.visibles = [...tmpVisibles]
    },
    getImage(index) {
      // console.log(_map(gallery.images, 'url'))
      // return _map(gallery.images, 'url')
    }
  },
  head() {
    return {
      title: 'Zdjęcia | fishing with makarony7',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Zdjęcia | fishing with makarony7'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Zdjęcia | fishing with makarony7'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'this.page.og_image'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Zdjęcia | fishing with makarony7'
        }
      ]
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
