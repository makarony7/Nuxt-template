<template>
  <div>
    lorem ipsum
  </div>
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
  methods: {}
}
</script>

<style lang="less" scoped></style>
