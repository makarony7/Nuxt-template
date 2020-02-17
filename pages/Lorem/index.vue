<template>
  <div>lorem ipsum</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
  },
  methods: {},
  head() {
    return {
      title: 'lorem',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'lorem'
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'lorem'
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: 'lorem'
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: 'lorem'
        },
        {
          hid: 'og:description',
          name: 'og:description',
          content: 'lorem'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
