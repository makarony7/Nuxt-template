<template>
  <div class="about-me">
    <div class="am-image">
      <img
        src="~/assets/img/logo-white.png"
        alt="white-big.png"
        class="white-big"
      />
      <img
        src="~/assets/img/logo-male-biale.png"
        alt="white-small.png"
        class="white-small"
      />
      <img
        src="~/assets/img/logo-kolorowe2.png"
        alt="color-big.png"
        class="color-big"
      />
    </div>
    <div class="carousel-3d">
      <carousel-3d
        :controls-visible="true"
        :controls-prev-html="'&#10092;'"
        :controls-next-html="'&#10093;'"
        :controls-width="30"
        :controls-height="400"
        :clickable="true"
        :width="500"
        :height="350"
      >
        <slide v-for="(data, index) in datas" :key="index" :index="index">
          <div class="ins-sl">
            <div class="ins-in">
              <h2 v-if="data.title">
                {{ data.title }}
              </h2>
              <h3 v-if="data.content">
                {{ data.content }}
              </h3>
            </div>
          </div>
        </slide>
      </carousel-3d>
    </div>

    <div class="about-content">
      <div v-for="(data, index) in datas" :key="index" class="ab-ins b-vert-l">
        <h2 v-if="data.title">
          {{ data.title }}
        </h2>
        <p v-if="data.content">
          {{ data.content }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
import axios from 'axios'

export default {
  components: {
    Carousel3d,
    Slide
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/abouts`)

    // data.forEach(async d => {
    //   const response = await $axios.post(
    //     'https://fishing-with-makarony7.firebaseio.com/abouts.json',
    //     d
    //   )

    //   console.log(response, 'data.forEach')
    // })

    return { datas: data }
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
      axios.post('http://localhost:1337/abouts', postData).then(res => {})
    }
  },
  head() {
    return {
      title: 'O mnie | fishing with makarony7',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'O mnie | fishing with makarony7'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'O mnie | fishing with makarony7'
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
          content: 'O mnie | fishing with makarony7'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
// CORNERS START
.ins-sl::before,
.ins-sl::after,
.carousel-3d-slide::before,
.carousel-3d-slide::after {
  display: block;
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 2;
}
.ins-sl {
  width: 100%;
  height: 100%;
  cursor: pointer;
  &::before {
    top: 0;
    left: 0;
    border-top: 2px solid @color-primary-slider;
    border-left: 2px solid @color-primary-slider;
  }
  &::after {
    bottom: 0;
    right: 0;
    border-bottom: 2px solid @color-primary-slider;
    border-right: 2px solid @color-primary-slider;
  }
}
.carousel-3d-slide {
  &::before {
    bottom: 0;
    left: 0;
    border-bottom: 2px solid @color-primary-slider;
    border-left: 2px solid @color-primary-slider;
  }
  &::after {
    top: 0;
    right: 0;
    border-top: 2px solid @color-primary-slider;
    border-right: 2px solid @color-primary-slider;
  }
}
// CORNERS END
.carousel-3d-slide {
  background-color: @black;
  cursor: pointer;
  .ins-sl {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    h3,
    p {
      padding: 0 30px;
    }
  }
  // &.current
}
/deep/ .carousel-3d-controls {
  transform: translateY(-50%);
  margin-top: 0;
  .prev,
  .next {
    top: 50%;
    transform: translateY(-50%);
    color: @color-primary;
    background: black;
    span {
      text-align: center;
      .transition-duration(0.3s);
      filter: brightness(1);
      position: relative;
    }
    &:hover {
      opacity: 1;
      span {
        filter: brightness(1.5);
      }
    }
  }
  .prev {
    left: 0;
    span {
      left: 4px;
    }
  }
  .next {
    right: 0;
    span {
      right: 4px;
    }
  }
}

.carousel-3d {
  @media @w-575 {
    display: none !important;
  }
}
.about-content {
  display: none !important;
  @media @w-575 {
    display: block !important;
    .ab-ins {
      margin-bottom: 80px;
      &:last-of-type {
        margin-bottom: 0;

        &.b-vert-l::after {
          display: none;
        }
      }
      &.b-vert-l {
        &::after {
          bottom: -40px;
        }
      }
      h2 {
        text-align: center;
      }
      p {
      }
    }
  }
}
.am-image {
  width: 500px;
  max-width: 100%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  @media @w-991 {
    width: 400px;
  }
  @media @w-767 {
    width: 350px;
  }
  @media @w-575 {
    width: 300px;
  }
  img {
    max-width: 100%;
    height: auto;
  }
  .white-small,
  .color-big {
    position: absolute;
    top: 0;
    left: 0;
    .transition-duration(0.5s);
  }
  &::after {
    font-family: 'fontello';
    content: '\e804';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-size: 40px;
    opacity: 1;
    color: @color-primary;
    .transition-duration(0.5s);
  }
  &:hover {
    .white-small,
    .color-big {
      opacity: 1;
    }
    &::after {
      opacity: 0;
      font-size: 10px;
    }
  }
  .white-small {
    opacity: 0;
    z-index: 3;
  }
  .color-big {
    opacity: 0;
    z-index: 2;
  }
}
.ins-about {
  margin-bottom: 40px;
  h2 {
    margin-bottom: 15px;
  }
}
.d-fishing {
  position: relative;
  .bg-fishing {
    background-image: url('/img/s-img.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 500px;
    filter: grayscale(1) brightness(0.3);
  }
}
</style>
