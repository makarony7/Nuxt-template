<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-if="show" class="cookie-alert">
    <div class="container">
      <div class="cookie-content">
        <div class="pull-right cookie-button-accept">
          <span class="icon-cancel" @click="userAgreed()">XX</span>
        </div>
        <div class="cookie-body">
          <div class="d-flex align-items-center">
            <div class="icon-img">
              <img
                src="@/assets/img/cookies.svg"
                alt="Cookies"
                class="img-fluid"
              />
            </div>
            <div class="cont">
              <b>Nasza strona internetowa wykorzystuje cookies (ciasteczka).</b>
              <a
                href="https://policies.google.com/technologies/cookies?hl=pl"
                target="_blank"
              >
                Dowiedz się więcej
              </a>
              o celu ich używania i zmianie ustawień cookies w przeglądarce.
              Korzystając ze strony wyrażasz zgodę na używanie cookie, zgodnie z
              aktualnymi ustawieniami przeglądarki.
            </div>
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
  z-index: 999;
  width: 100%;
  max-width: unset;
  margin: 0;
  background: lightcoral;
  padding: 25px 45px 15px;
  color: white;
  height: auto;
  bottom: 0;
  right: 0;
  position: fixed;

  @media (max-width: 1500px) {
    padding: 25px 0 15px;
  }

  @media (max-width: 991px) {
    padding: 25px 20px 15px;
  }

  @media (max-width: 575px) {
    padding: 25px 0px 15px;
  }

  .cookie-content {
    display: block;
    width: 100%;
    position: relative;
  }

  .cookie-button-accept {
    cursor: pointer;
    z-index: 100000;
    position: absolute;
    right: 25px;
    top: 8px;

    i {
      &::before {
        font-size: 30px;
        transition-duration: 0.3s;
      }
    }

    &:hover i::before {
      opacity: 0.8;
    }
  }

  .cookie-body {
    width: 100%;
    display: inline-block;

    .icon-img {
      fill: url(#icon-gradient) lightblue;

      display: inline-block;
      margin-right: 10px;

      img {
        width: 50px;

        @media (max-width: 1500px) {
          width: 45px;
        }
      }

      @media (max-width: 1500px) {
        margin-right: 0;
      }

      @media (max-width: 575px) {
        max-width: 37px;
      }
    }

    .cont {
      width: 56%;
      font-size: 14px;
      line-height: 22px;
      padding: 0 15px;
      display: inline-block;

      a {
        font-size: 14px;
        color: white;
        transition-duration: 0.3s;

        &:hover {
          color: lightgreen;
        }
      }

      @media (max-width: 1650px) {
        width: 68%;
      }

      @media (max-width: 991px) {
        font-size: 12px;
        line-height: 16px;
      }

      @media (max-width: 575px) {
        padding: 0 10px;
        font-size: 10px;
        line-height: 14px;

        a {
          font-size: 10px;
          line-height: 14px;
        }
      }
    }
  }
}
</style>
