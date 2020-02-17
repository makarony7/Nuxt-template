<template>
  <nav class="navigation">
    <router-link
      v-for="link in links"
      :id="link.id"
      :key="link.id"
      :to="link.url"
      class="border-all-hover"
    >
      <span>{{ link.title }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { id: 'link-home', title: 'Start', url: '/' },
        { id: 'link-about', title: 'Lorem', url: '/lorem' },
        { id: 'link-img', title: 'Ipsum', url: '/ipsum' }
      ]
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
  }
}
</script>

<style lang="less" scoped>
.navigation {
  a {
    text-transform: uppercase;
    color: red;
    font-size: 24px;
  }
}
</style>
