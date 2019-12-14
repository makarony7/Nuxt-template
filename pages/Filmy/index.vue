<template>
  <div>
    <div v-for="data in datas" :key="data.id" class="img-box">
      asd
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/contentimages`)
    return { datas: data }
  },
  data() {
    return {
      baseUrl: null
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
    // console.log(process.env.baseUrl)
    this.baseUrl = process.env.baseUrl
  },
  methods: {
    sendPost() {
      const postData = {
        names: 'asd'
      }
      axios.post('http://localhost:1337/contentimages', postData).then(res => {
        // console.log('dane zostały dodane')
      })
    }
  },
  head() {
    return {
      script: [
        {
          src: 'https://apis.google.com/js/api.js'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>

// apiKey: 'AIzaSyDQsBW4_456PgwJj9sw7ZcJDfjGuta8eRU',
