<template>
  <div class="container">
    <div class="black-bg">
      <div class="img-grid">
        <div id="h-m-1" class="home-img">
          <img src="~/assets/img/a.jpg" alt="fishing-image-1" />
        </div>
        <div id="h-m-2" class="home-img">
          <img src="~/assets/img/b.jpg" alt="fishing-image-2" />
        </div>
        <div id="h-m-3" class="home-img">
          <img src="~/assets/img/c.jpg" alt="fishing-image-3" />
        </div>
        <div id="h-m-4" class="home-img">
          <img src="~/assets/img/d.jpg" alt="fishing-image-4" />
        </div>
      </div>
      <navigation />
      <social-media />
      <parallax-container class="parallax-container">
        <parallax-element :parallax-strength="10" class="parallax-element">
          <logo />
        </parallax-element>
      </parallax-container>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { ParallaxContainer, ParallaxElement } from 'vue-mouse-parallax'
import logo from '@/components/home/logo'
import navigation from '@/components/home/navigation'
import socialMedia from '@/components/partials/social-media.vue'
Vue.component('parallax-container', ParallaxContainer)
Vue.component('parallax-element', ParallaxElement)

export default {
  layout: 'main-page-layout',
  components: {
    logo,
    navigation,
    socialMedia
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)

    const linkAbout = document.getElementById('link-about')
    const hM1 = document.getElementById('h-m-1')
    linkAbout.onmouseover = function() {
      hM1.classList.add('img-zoom')
    }
    linkAbout.onmouseout = function() {
      hM1.classList.remove('img-zoom')
    }

    const linkImg = document.getElementById('link-img')
    const hM2 = document.getElementById('h-m-2')
    linkImg.onmouseover = function() {
      hM2.classList.add('img-zoom')
    }
    linkImg.onmouseout = function() {
      hM2.classList.remove('img-zoom')
    }

    const linkVideos = document.getElementById('link-videos')
    const hM3 = document.getElementById('h-m-3')
    linkVideos.onmouseover = function() {
      hM3.classList.add('img-zoom')
    }
    linkVideos.onmouseout = function() {
      hM3.classList.remove('img-zoom')
    }

    const linkEquipment = document.getElementById('link-equipment')
    const hM4 = document.getElementById('h-m-4')
    linkEquipment.onmouseover = function() {
      hM4.classList.add('img-zoom')
    }
    linkEquipment.onmouseout = function() {
      hM4.classList.remove('img-zoom')
    }
  }
}
</script>

<style lang="less" scoped>
.home-img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    .transform3v(-50%, -50%, -45deg, 1);
    width: 230%;
    height: auto;
    filter: brightness(0.3);
    transition-duration: 0.3s;
  }
  &.img-zoom {
    img {
      .transform3v(-50%, -50%, -45deg, 1.1);
      filter: brightness(0.8);
    }
  }
}

.black-bg {
  height: 100vh;
  width: 100%;
  overflow: hidden;
  position: relative;
  background: @black;
}
.img-grid {
  width: 1000px;
  height: 1000px;
  transform: rotate(45deg);
  display: grid;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  z-index: 2;
  grid-template-columns: repeat(2, 2fr);
  grid-gap: 5px;
  @media @w-1499 {
    width: 800px;
    height: 800px;
  }
  @media @w-1199 {
    width: 800px;
    height: 800px;
  }
  @media @w-991 {
    width: 700px;
    height: 700px;
  }
  @media @w-767 {
    width: 600px;
    height: 600px;
  }
}
.navigation {
  position: absolute;
  z-index: 3;
  top: 48.3%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 840px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 100%;
  /deep/ a {
    &:nth-child(2) {
      margin-left: 20px;
    }
    &:nth-child(5) {
      margin-right: 20px;
    }
    &:first-child {
      display: none;
    }
  }
  @media @w-575 {
    flex-direction: column;
    /deep/ a {
      margin: 10px;
      width: 130px;
      text-align: center;
      &:nth-child(2) {
        margin-left: 10px;
      }
      &:nth-child(5) {
        margin-right: 10px;
      }
    }
  }
}
.logo {
  position: absolute;
  z-index: 2;
  bottom: 30px;
  right: 30px;
  @media @w-991 {
    bottom: 10px;
    right: 10px;
    /deep/ img {
      width: 100px;
    }
    /deep/ h1 {
      font-size: 16px;
    }
  }
  @media @w-575 {
    bottom: auto;
    top: 10px;
    right: auto;
    left: 50%;
    transform: translateX(-50%);
    filter: brightness(1);
  }
}
/deep/ .sm-ico {
  position: absolute;
  z-index: 3;
  top: calc(50% - 1px);
  left: 28.5px;
  transform: translateY(-50%);
  @media @w-1499 {
    top: auto;
    bottom: 20px;
    left: 20px;
    transform: none;
  }
  @media @w-991 {
    flex-direction: row;
    height: auto;
    bottom: 10px;
    left: 10px;
    a {
      padding: 10px;
      margin: 0 5px;
      &:first-of-type {
        margin-left: 0;
      }
      &:last-of-type {
        margin-right: 0;
      }
    }
  }
}
.parallax-container,
.parallax-element {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.parallax-container {
  position: relative;
  z-index: 2;
}
</style>
