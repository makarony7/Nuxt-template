<template>
  <main>
    <article
      v-for="(data, index) in datas"
      :key="index"
      class="mb-130 equip-box b-vert-l"
    >
      <h2 v-if="data.title" class="equip-title">
        {{ data.title }}
        <a v-if="data.link" :href="data.link" target="_blank">
          <i class="icon-play-circled"></i>
        </a>
      </h2>
      <div class="equipment-box">
        <div class="left">
          <h3 v-if="data.content">
            {{ data.content }}
          </h3>
        </div>
        <div class="right">
          <parallax-container class="parallax-container">
            <parallax-element :parallax-strength="10" class="parallax-element">
              <img :src="`${data.image.url}`" />
            </parallax-element>
          </parallax-container>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
Vue.component('parallax-container', ParallaxContainer)
Vue.component('parallax-element', ParallaxElement)

export default {
  components: {},
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/equipments.json`)

    return { datas: [...Object.values(data)] }
  },
  data() {
    return {
      baseUrl: null
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
    this.baseUrl = process.env.baseUrl
  },
  methods: {
    sendPost() {
      const postData = {
        names: 'asd'
      }
      axios.post('http://localhost:1337/equipment', postData).then(res => {})
    }
  },
  head() {
    return {
      title: 'Sprzęt | fishing with makarony7',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Sprzęt | fishing with makarony7'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Sprzęt | fishing with makarony7'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: '/img/og-image.jpg'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'website'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'Sprzęt | fishing with makarony7'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.equip-title {
  display: inline-block;
  position: relative;
  @media @w-767 {
    display: block;
    text-align: center;
  }
  a {
    text-decoration: none;
    position: absolute;
    top: 4px;
    right: -30px;
    display: block;
    @media @w-767 {
      display: none;
    }
    i {
      display: block;
      &::before {
        color: @color-primary;
        font-size: 24px;
        display: block;
        .transition-duration(0.3s);
      }
    }

    &:hover {
      i::before {
        color: @white;
      }
    }
  }
}
.mb-130 {
  margin-bottom: 130px;
  @media @w-1199 {
    margin-bottom: 100px;
  }
  @media @w-991 {
    margin-bottom: 80px;
  }
  @media @w-767 {
    margin-bottom: 120px;
  }
  &:last-of-type {
    margin-bottom: 0;
  }
}
.equip-box:last-of-type {
  &::after {
    content: none;
  }
}

.equipment-box {
  display: flex;
  align-items: center;

  @media @w-767 {
    flex-direction: column;
    align-items: flex-start;
  }
  .left {
    width: 40%;
    padding-right: 100px;
    @media @w-767 {
      width: 100%;
      padding-right: 0;
      margin-bottom: 30px;
    }
  }
  .right {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media @w-767 {
      width: 100%;
      justify-content: center;
    }
    .parallax-container {
      margin: 0 auto;
    }
    img {
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      max-height: 250px;
      .transition-duration(0.3s);
      filter: grayscale(1) brightness(0.7);
      @media @w-1199 {
        max-height: 200px;
      }
      @media @w-991 {
        // max-height: 150px;
      }
      @media @w-767 {
        max-width: 80%;
        display: block;
        filter: grayscale(0) brightness(1);
      }
      @media @w-575 {
        max-height: 200px;
        max-width: 95%;
      }
      @media @w-469 {
        max-width: 100%;
      }
      &:hover {
        filter: grayscale(0) brightness(1);
      }
    }
  }
}
</style>
