<template>
  <div class="container">
    STRONA GŁÓWNA
  </div>
</template>

<script>
export default {
  layout: 'default',
  components: {},
  data() {
    return {}
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 300)
  }
}
</script>

<style lang="less" scoped></style>
