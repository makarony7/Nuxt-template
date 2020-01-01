<template>
  <div>
    <div>
      <div class="left-wrapper p-fix p-fix-left">
        <social-media />
      </div>

      <div class="page-wrapper center-wrapper">
        <div class="p-fixed">
          <div class="top-nav-def-rwd">
            <nuxt-link to="/">
              <logo />
            </nuxt-link>
            <slide right width="320">
              <navigation />
            </slide>
          </div>
        </div>

        <div class="top-nav-def t-padding">
          <div>
            <navigation />
          </div>
        </div>

        <div class="container def-styles center-margin">
          <transition name="page" mode="out-in">
            <router-view />
          </transition>
        </div>

        <loader :loading="!pageLoaded" />
      </div>

      <div class="right-wrapper p-fix p-fix-right">
        <slide right width="450" no-overlay>
          <navigation />
        </slide>
      </div>
    </div>

    <footer-content />
    <cookies />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import { Slide } from 'vue-burger-menu'
import logo from '@/components/home/logo'
import cookies from '~/components/partials/cookies.vue'
import navigation from '~/components/home/navigation.vue'
import footerContent from '~/components/home/footer-content.vue'
import Loader from '@/components/partials/Loader'
import socialMedia from '@/components/partials/social-media.vue'

// kick off the polyfill!
smoothscroll.polyfill()

export default {
  name: 'Default',
  components: {
    cookies,
    Loader,
    navigation,
    socialMedia,
    Slide,
    footerContent,
    logo
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
    setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
    // const allLink = document.getElementsByClassName('border-all-hover')
    // allLink.onclick = function() {
    //   document.body.classList.remove('bm-overlay')
    // }
  },
  methods: {
    // handleOpenMenu(event) {
    //   console.log('open burger')
    // },
    // handleCloseMenu(event) {
    //   console.log('close burger')
    // }
  }
}
</script>

<style lang="less" scoped>
/deep/ .bm-burger-button {
  top: 50%;
  left: 50% !important;
  right: auto !important;
  height: 25px;
  transform: translate(-50%, -50%);

  .line-style {
    .transition-duration(0.3s);
    @media @w-991 {
      margin-right: 5px;
    }
    @media @w-575 {
      margin-right: 0;
    }
  }
  &:hover {
    .line-style {
      background: @color-primary;
      &:nth-child(1) {
        left: -7px;
      }
      &:nth-child(2) {
        left: -20px;
      }
      &:nth-child(3) {
        left: -7px;
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
  padding-top: 0;
  @media @w-575 {
    // width: 100% !important;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: @black;
    opacity: 0.5;
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
    margin: 0 15px;
    @media @w-991 {
      margin: 0 10px;
    }
    @media @w-767 {
      margin: 0 5px;
      font-size: 20px;
      span {
        padding: 8px 16px;
      }
    }
    @media @w-575 {
      font-size: 26px;
      span {
        padding: 10px 20px;
      }
    }
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
  justify-content: center;
  position: relative;
  z-index: 10;
  .m-a {
    text-decoration: none;
    h1 {
      display: inline;
      color: @white;
      text-transform: uppercase;
      font-weight: 300;
    }
  }
  @media @w-575 {
    display: none;
  }
}

.p-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}

.top-nav-def-rwd {
  @media only screen and (min-width: 576px) {
    display: none;
  }
  @media @w-575 {
    background: @black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    a {
      text-decoration: none;
    }
    /deep/ .logo {
      flex-direction: row;
      filter: brightness(1);
      img {
        width: 70px;
      }
      h1 {
        font-size: 16px;
        filter: brightness(0.7);
      }
    }
    /deep/ .bm-burger-button {
      left: auto !important;
      right: 0 !important;
    }
    /deep/ .cross-style {
      top: 15px;
      right: 19px !important;
    }
  }

  // @media @w-359 {
  //   padding-left: 10px;
  //   padding-right: 10px;
  //   /deep/ .bm-burger-button {
  //     right: 0px !important;
  //   }
  //   /deep/ .cross-style {
  //     right: 15px !important;
  //   }
  // }
}
</style>
