<template>
  <div class="video-container">
    <div v-for="(data, index) in datas" :key="index" class="video-box">
      <div class="video-box-left">
        <div class="video-box-ins">
          <iframe
            :src="data.name"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            frameborder="0"
            allowfullscreen
            class="video"
          >
          </iframe>
        </div>
      </div>
      <div class="video-box-right">
        <div class="video-box-right-ins">
          <h1 v-if="data.title">
            {{ data.title }}
          </h1>
          <h3 v-if="data.content">
            {{ data.content }}
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/videos`)
    return { datas: data }
  },
  data() {
    return {
      baseUrl: null
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
      axios.post('http://localhost:1337/videos', postData).then(res => {
        // console.log('dane zostały dodane')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.video-container {
  .video-box {
    margin-bottom: 100px;
    display: flex;
    &:nth-of-type(even) {
      flex-direction: row-reverse;
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    &-left {
      width: 50%;
      opacity: 0.5;
      filter: grayscale(1);
      position: relative;
      overflow: hidden;
      .transition-duration(0.3s);
      &:hover {
        opacity: 1;
        filter: grayscale(0);
        ~ .video-box-right {
          h1 {
            padding-bottom: 10px;
          }
          h3 {
            opacity: 1;
            padding-top: 10px;
            height: normal;
          }
        }

        &::before,
        &::after {
          border-width: 0;
        }
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        z-index: 1;
        .transition-duration(0.3s);
      }
      &::before {
        border-bottom: 300px solid transparent;
        border-left: 300px solid black;
        top: 0;
        left: 0;
      }
      &::after {
        border-top: 300px solid transparent;
        border-right: 300px solid black;
        bottom: 0;
        right: 0;
      }
    }
    &-right {
      width: 50%;
      align-self: center;
      text-align: center;
      h1 {
        margin-bottom: 0;
        padding-bottom: 0;
        .transition-duration(0.5s);
      }
      h3 {
        opacity: 0;
        padding-top: 0;
        height: 0;
        .transition-duration(0.5s);
      }
      &-ins {
        padding: 50px;
      }
    }
  }
}
// dont'touch below
.video-box-ins {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
