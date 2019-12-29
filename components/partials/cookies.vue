<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="show" class="cookie-alert">
    <div class="container">
      <div class="cookie-content">
        <div class="cookie-body">
          <div class="left">
            <div class="img">
              <img
                src="@/assets/img/cookies.png"
                alt="Cookies"
                class="img-fluid"
              />
            </div>
            <div class="content">
              Strona internetowa wykorzystuje cookies (ciasteczka).
              <a
                href="https://policies.google.com/technologies/cookies?hl=pl"
                target="_blank"
                class="vert-line-hover"
              >
                Dowiedz się więcej
              </a>
              o celu ich używania i zmianie ustawień cookies w przeglądarce.
              Korzystając ze strony wyrażasz zgodę na używanie cookie, zgodnie z
              aktualnymi ustawieniami przeglądarki.
            </div>
          </div>
          <div class="right">
            <i class="icon-cancel vert-line-hover" @click="userAgreed()"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from 'vue-cookies'
export default {
  props: {
    expires: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      cookieName: 'cookie-alert',
      accepted: false
    }
  },
  computed: {
    show() {
      return !this.accepted && !cookies.isKey(this.cookieName)
    }
  },
  mounted() {},
  methods: {
    userAgreed() {
      cookies.set(this.cookieName, 'accepted', `${this.expires}d`)
      this.accepted = true
    }
  }
}
</script>

<style lang="less" scoped>
.cookie-alert {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 999;
  width: 100%;
  background: @black;

  .cookie-content {
    display: block;
    width: 100%;
  }

  .cookie-body {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .left {
      display: flex;
      align-items: center;
      .img {
        width: 45px;
        margin-right: 20px;
        img {
          max-width: 100%;
          height: auto;
        }
      }
      .content {
        width: 70%;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.5px;
        @media @w-991 {
          font-size: 14px;
          line-height: 20px;
        }
        a {
          color: @white;
          text-decoration: none;
        }
      }
    }
    .right {
      i {
        padding: 0 3px;
        display: inline-block;
        cursor: pointer;
        &::before {
          font-size: 40px;
          .transition-duration(0.3s);
        }
        &:hover {
          &::before {
            .rotate(15deg);
          }
        }
      }
    }
  }
}
</style>
