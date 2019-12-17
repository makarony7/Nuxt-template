<template>
  <div class="footer">
    <nuxt-link to="/" class="logo-out">
      <logo />
    </nuxt-link>
    <div class="footer-nav">
      <div class="left navigation">
        <nuxt-link to="o-mnie" class="vert-line-hover">
          O mnie
        </nuxt-link>
        <nuxt-link to="zdjecia" class="vert-line-hover">
          Zdjęcia
        </nuxt-link>
      </div>
      <div class="center">
        <social-media />
      </div>
      <div class="right navigation">
        <nuxt-link to="filmy" class="vert-line-hover">
          Filmy
        </nuxt-link>
        <nuxt-link to="sprzet" class="vert-line-hover">
          Sprzęt
        </nuxt-link>
      </div>
    </div>
    <div class="all-rights">
      <p>
        Projekt i wykonanie: fishing with makarony7
      </p>
      <p>
        © 2020 Wszelkie prawa zastrzeżone
      </p>
    </div>
  </div>
</template>

<script>
import logo from '@/components/home/logo'
import socialMedia from '@/components/partials/social-media.vue'

export default {
  name: 'FooterContent',
  components: {
    logo,
    socialMedia
  },
  mounted() {
    // const els = document.getElementsByClassName('border-all-hover')
    // function removeClasses() {
    //   els[0].classList.remove('border-all-hover')
    //   if (els[0]) removeClasses()
    // }
    // removeClasses()
  }
}
</script>

<style lang="less" scoped>
.footer {
  overflow: hidden;
  padding: 20px 85px;
  .logo-out {
    display: block;
    width: 160px;
    margin: 0 auto;
    text-decoration: none;
    position: relative;
    /deep/ .logo {
      background-color: @black;
      filter: brightness(1);
      img {
        max-width: 100%;
        width: 100px;
      }
      h1 {
        font-size: 18px;
      }
    }
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 1px;
      width: 800%;
      display: block;
      background: @white;
      z-index: -1;
    }
  }
  .footer-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    margin: 30px auto;
    .navigation {
      display: flex;
      flex-direction: column;
      text-align: center;
      a {
        text-transform: uppercase;
        color: @white;
        font-size: 24px;
        position: relative;
        text-decoration: none;
        margin-bottom: 10px;
        &::after {
          bottom: -1px;
        }
        &:last-of-type {
          margin-bottom: 0;
        }
        &.nuxt-link-exact-active {
          &::after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
    .center {
      /deep/ .sm-ico {
        flex-direction: row;
        height: auto;
        width: 150px;
        margin: 0 auto;
      }
    }
  }
  .all-rights {
    p {
      text-align: center;
    }
  }
}
</style>
