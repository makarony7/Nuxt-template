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
// import { Slide } from 'vue-burger-menu'

export default {
  data() {
    return {
      links: [
        { id: 'link-home', title: 'Start', url: '/' },
        { id: 'link-about', title: 'O mnie', url: '/about' },
        { id: 'link-img', title: 'Zdjęcia', url: '/images' },
        { id: 'link-videos', title: 'Filmy', url: '/videos' },
        { id: 'link-equipment', title: 'Sprzęt', url: '/equipment' }
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
    color: @white;
    font-size: 24px;
    position: relative;
    text-decoration: none;
  }
}
</style>
