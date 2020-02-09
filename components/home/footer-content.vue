<template>
  <footer class="footer">
    <nuxt-link to="/" class="logo-out">
      <logo />
    </nuxt-link>
    <div class="footer-nav">
      <div class="left navigation">
        <nuxt-link to="about" class="vert-line-hover">
          O mnie
        </nuxt-link>
        <nuxt-link to="images" class="vert-line-hover">
          Zdjęcia
        </nuxt-link>
      </div>
      <div class="center">
        <social-media />
      </div>
      <div class="right navigation">
        <nuxt-link to="videos" class="vert-line-hover">
          Filmy
        </nuxt-link>
        <nuxt-link to="equipment" class="vert-line-hover">
          Sprzęt
        </nuxt-link>
      </div>
    </div>
    <div class="all-rights">
      <p>
        Projekt i wykonanie: Jan Słuszkiewicz
      </p>
      <p>
        © 2020 Wszelkie prawa zastrzeżone
      </p>
    </div>
  </footer>
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
  filter: brightness(0.5);
  .transition-duration(0.3s);
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 64px;
    left: 0;
    height: 1px;
    width: 100%;
    display: block;
    background: @white;
    z-index: -1;
    pointer-events: none;
  }
  @media @w-1199 {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media @w-991 {
    padding-left: 60px;
    padding-right: 60px;
    &::before {
      top: 59px;
    }
  }
  @media @w-767 {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media @w-575 {
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 20px;
  }
  @media @w-359 {
    padding-left: 10px;
    padding-right: 10px;
  }
  &:hover {
    filter: brightness(1);
  }
  .logo-out {
    display: block;
    width: 160px;
    margin: 0 auto;
    text-decoration: none;
    /deep/ .logo {
      background-color: @black;
      filter: brightness(1);
      img {
        max-width: 100%;
        width: 100px;
        @media @w-991 {
          width: 80px;
        }
      }
      h1 {
        font-size: 18px;
        @media @w-991 {
          font-size: 16px;
        }
      }
    }
  }
  .footer-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 900px;
    margin: 30px auto;
    @media @w-991 {
      justify-content: center;
      margin: 20px auto;
    }
    @media @w-575 {
      justify-content: center;
      margin: 15px auto;
    }
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
      @media @w-991 {
        display: none;
      }
    }
    .center {
      /deep/ .sm-ico {
        flex-direction: row;
        height: auto;
        width: 150px;
        margin: 0 auto;
        a {
          margin-bottom: 0;
        }
      }
    }
  }
  .all-rights {
    @media @w-991 {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @media @w-575 {
      flex-direction: column;
    }
    p {
      text-align: center;
    }
  }
}
</style>
