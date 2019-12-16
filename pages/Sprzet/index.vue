<template>
  <div>
    <div v-for="data in datas" :key="data.id">
      asd
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {},
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`${process.env.baseUrl}/equipment`)
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
      axios.post('http://localhost:1337/equipment', postData).then(res => {
        // console.log('dane zostały dodane')
      })
    }
  }
}
</script>

<style lang="less" scoped></style>
