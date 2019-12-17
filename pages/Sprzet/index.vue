<template>
  <div>
    <div v-for="(data, index) in datas" :key="index" class="mb-130">
      <h1 v-if="data.title" class="equip-title">
        {{ data.title }}
        <a v-if="data.link" :href="data.link" target="_blank">
          <i class="icon-play-circled"></i>
        </a>
      </h1>
      <div class="equipment-box">
        <div class="left">
          <h3 v-if="data.content">
            {{ data.content }}
          </h3>
        </div>
        <div class="right">
          <parallax-container class="parallax-container">
            <parallax-element :parallax-strength="5" class="parallax-element">
              <img :src="`${baseUrl}${data.image.url}`" />
            </parallax-element>
          </parallax-container>
        </div>
      </div>
    </div>
  </div>
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
    const { data } = await $axios.get(`${process.env.baseUrl}/equipment`)
    return { datas: data }
  },
  data() {
    return {
      baseUrl: null
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 1000)
    this.baseUrl = process.env.baseUrl
  },
  methods: {
    sendPost() {
      const postData = {
        names: 'asd'
      }
      axios.post('http://localhost:1337/equipment', postData).then(res => {})
    }
  }
}
</script>

<style lang="less" scoped>
.equip-title {
  display: inline-block;
  position: relative;
  a {
    text-decoration: none;
    position: absolute;
    top: 10px;
    right: -30px;
    display: block;
    i {
      display: block;
      &::before {
        color: red;
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
  &:last-of-type {
    margin-bottom: 0;
  }
}
.equipment-box {
  display: flex;
  align-items: center;

  .left {
    width: 40%;
    padding-right: 100px;
  }
  .right {
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
      &:hover {
        filter: grayscale(0) brightness(1);
      }
    }
  }
}

.equip-title:hover {
  ~ .equipment-box .right {
  }
}
</style>
