<template>
  <div class="navigation">
    <nuxt-link
      v-for="(link, index) in links"
      :id="link.id"
      :key="index"
      :to="link.url"
      class="border-all-hover"
    >
      <span>{{ link.title }}</span>
    </nuxt-link>
  </div>
</template>

<script>
// import { Slide } from 'vue-burger-menu'

export default {
  data() {
    return {
      links: [
        { id: 'link-home', title: 'Strona Główna', url: '/' },
        { id: 'link-about', title: 'Kim jestem?', url: '/o-mnie' },
        { id: 'link-img', title: 'Fotografie', url: '/zdjecia' },
        { id: 'link-videos', title: 'Nagrania', url: '/filmy' },
        { id: 'link-equipment', title: 'Sprzęt', url: '/sprzet' }
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
