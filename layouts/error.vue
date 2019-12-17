<template>
  <div class="page404">
    <div class="notfound">
      <h3>Strona o podanym adresie nie istnieje.</h3>
      <div class="notfound-404">
        <h1>
          404
        </h1>
      </div>
      <h2>
        Prawdopodobnie kliknąłeś w błędny lub stary link. Jeżeli widzisz ten
        komunikat po kliknięciu łącza na naszej witrynie
        <nuxt-link class="contact-link" :to="{ name: 'contact' }">
          poinformuj nas o tym.
        </nuxt-link>
      </h2>
      <h2>
        Zapraszamy na naszą
        <nuxt-link class="contact-link" to="/">
          stronę główną.
        </nuxt-link>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || '<%= messages.client_error %>'
    }
  },
  mounted() {
    // setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content:
            'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
        }
      ]
    }
  }
}
</script>

<style>
.__nuxt-error-page {
  padding: 1rem;
  background: #f7f8fb;
  color: #47494e;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: sans-serif;
  font-weight: 100 !important;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
  max-width: 450px;
}
.__nuxt-error-page .title {
  font-size: 1.5rem;
  margin-top: 15px;
  color: #47494e;
  margin-bottom: 8px;
}
.__nuxt-error-page .description {
  color: #7f828b;
  line-height: 21px;
  margin-bottom: 10px;
}
.__nuxt-error-page a {
  color: #7f828b !important;
  text-decoration: none;
}
.__nuxt-error-page .logo {
  position: fixed;
  left: 12px;
  bottom: 12px;
}
</style>
