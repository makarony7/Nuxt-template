<template>
  <div class="video-container">
    <div v-for="(data, index) in datas" :key="index" class="video-box b-vert-l">
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
          <h2 v-if="data.title">
            {{ data.title }}
          </h2>
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
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
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
    // flex-direction: column-reverse;
    @media @w-991 {
      flex-direction: column-reverse;
      margin-bottom: 120px;
      &:last-of-type {
        &::after {
          content: none;
        }
      }
    }
    @media @w-767 {
      margin-bottom: 100px;
      &::after {
        bottom: -50px;
      }
    }
    &:nth-of-type(even) {
      flex-direction: row-reverse;
      @media @w-991 {
        flex-direction: column-reverse;
      }
    }
    &:last-of-type {
      margin-bottom: 0;
    }

    &-right {
      width: 50%;
      align-self: center;
      text-align: center;
      @media @w-991 {
        width: 100%;
        align-self: flex-start;
        text-align: left;
        margin-bottom: 30px;
      }
      h2 {
        margin-bottom: 0;
        padding-bottom: 0;
        .transition-duration(0.5s);
      }
      h3 {
        opacity: 0;
        margin-top: 0;
        height: 24px;
        .transition-duration(0.5s);
        @media @w-1299 {
          opacity: 1;
          padding-top: 10px;
          height: auto;
        }
      }
      &-ins {
        padding: 50px;
        .transition-duration(0.5s);
        @media @w-1499 {
          padding: 10px 30px;
        }
        @media @w-991 {
          padding: 0;
        }
      }
    }
    &-left {
      width: 50%;
      opacity: 0.5;
      filter: grayscale(1);
      position: relative;
      overflow: hidden;
      .transition-duration(0.3s);
      @media @w-1299 {
        filter: grayscale(0);
        opacity: 1;
      }
      @media @w-991 {
        width: 70%;
        margin: 0 auto;
      }
      @media @w-767 {
        width: 80%;
      }
      @media @w-575 {
        width: 100%;
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

        @media @w-1499 {
          border-bottom: 100px solid transparent;
          border-left: 100px solid black;
        }

        @media @w-1299 {
          border-bottom: 0 solid transparent;
          border-left: 0 solid black;
        }
        top: 0;
        left: 0;
      }
      &::after {
        border-top: 300px solid transparent;
        border-right: 300px solid black;

        @media @w-1499 {
          border-top: 100px solid transparent;
          border-right: 100px solid black;
        }

        @media @w-1299 {
          border-top: 0 solid transparent;
          border-right: 0 solid black;
        }
        bottom: 0;
        right: 0;
      }

      &:hover {
        opacity: 1;
        filter: grayscale(0);
        ~ .video-box-right {
          h3 {
            opacity: 1;
            margin-top: 10px;
            height: auto;
            @media @w-991 {
              padding-top: 0;
            }
          }
        }

        &::before,
        &::after {
          border-width: 0;
        }
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
