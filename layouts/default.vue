<template>
  <div>
    <div>
      <div class="left-wrapper p-fix p-fix-left">
        <social-media />
      </div>

      <div class="page-wrapper center-wrapper">
        <div class="top-nav-def t-padding">
          <nuxt-link to="/" class="m-a vert-line-hover">
            <h1>fishing with makarony7</h1>
          </nuxt-link>
          <div>
            <navigation />
          </div>
        </div>

        <div class="container">
          <nuxt />
        </div>

        <loader :loading="!pageLoaded" />
      </div>

      <div class="right-wrapper p-fix p-fix-right">
        <slide right width="450">
          <navigation />
        </slide>
      </div>
    </div>

    <footer-content class="t-padding" />
    <cookies />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import { Slide } from 'vue-burger-menu'
import cookies from '~/components/partials/cookies.vue'
import navigation from '~/components/home/navigation.vue'
import footerContent from '~/components/home/footer-content.vue'
import Loader from '@/components/partials/Loader'
import socialMedia from '@/components/partials/social-media.vue'

// kick off the polyfill!
smoothscroll.polyfill()

export default {
  components: {
    cookies,
    Loader,
    navigation,
    socialMedia,
    Slide,
    footerContent
  },
  computed: {
    pageLoaded() {
      return this.$store.state.pageLoaded
    },
    loaded() {
      return this.$store.state.loaded
    }
  },
  mounted() {
    // const allLink = document.getElementsByClassName('border-all-hover')
    // allLink.onclick = function() {
    //   document.body.classList.remove('bm-overlay')
    // }
  }
}
</script>

<style lang="less" scoped>
.sm-ico {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 111px;
}
/deep/ .bm-burger-button {
  top: 50%;
  left: 50% !important;
  right: auto !important;
  height: 25px;
  transform: translate(-50%, -50%);
  .line-style {
    .transition-duration(0.3s);
  }
  &:hover {
    .line-style {
      &:nth-child(1) {
        left: -10px;
      }
      &:nth-child(2) {
        left: -30px;
      }
      &:nth-child(3) {
        left: -10px;
      }
    }
  }
}
/deep/ .line-style {
  height: 5px;
}
/deep/ .bm-burger-bars {
  background-color: @white;
  &.line-style {
    height: 3px;
    &:nth-child(1) {
      top: 0 !important;
    }
    &:nth-child(2) {
      top: 11px !important;
    }
    &:nth-child(3) {
      top: 22px !important;
    }
  }
}
/deep/ .bm-menu {
  background-image: url('/img/c.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: @black;
    opacity: 0.7;
    z-index: 1;
  }
}
/deep/ .cross-style {
  top: 30px;
  right: 30px !important;
  z-index: 2;
}
/deep/ .bm-cross-button {
  height: 40px;
  width: 40px;
  &:hover {
    /deep/ .bm-cross:first-child {
      .rotate(-70deg) !important;
      top: -12px;
    }
    /deep/ .bm-cross:last-child {
      .rotate(70deg) !important;
      top: 4px;
    }
  }
}
/deep/ .bm-cross {
  top: -4px;
  left: 19px;
  height: 48px !important;
  background: @white;
  .transition-duration(0.3s);
}
/deep/ .bm-item-list {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  margin-left: 0;
  z-index: 2;
  .navigation {
    flex-direction: column;
    text-align: center;
    /deep/ a {
      margin: 5px 0;
    }
  }
}
.navigation {
  text-align: center;
  /deep/ a {
    margin: 0 8px;
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
    &.border-all-hover {
      &::before,
      &::after {
        width: 0;
      }
      span {
        &::before,
        &::after {
          height: 0;
        }
      }
      &:hover {
        &::before {
          right: 0;
          top: 0;
          width: 100%;
        }
        &::after {
          left: 0;
          bottom: 0;
          width: 100%;
        }
        span {
          &::before {
            left: 0;
            bottom: 0;
            height: 100%;
          }
          &::after {
            right: 0;
            top: 0;
            height: 100%;
          }
        }
      }
    }
    &.nuxt-link-exact-active {
      &.border-all-hover {
        &::before {
          right: 0;
          top: 0;
          width: 100%;
        }
        &::after {
          left: 0;
          bottom: 0;
          width: 100%;
        }
      }
      span {
        &::before {
          left: 0;
          bottom: 0;
          height: 100%;
        }
        &::after {
          right: 0;
          top: 0;
          height: 100%;
        }
      }
    }
  }
}
.top-nav-def {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .m-a {
    text-decoration: none;
    h1 {
      display: inline;
      color: @white;
      text-transform: uppercase;
      font-weight: 300;
    }
  }
}
</style>
