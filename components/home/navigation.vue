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
        { id: 'link-home', title: 'Start', url: '/' },
        { id: 'link-about', title: 'O mnie', url: '/o-mnie' },
        { id: 'link-img', title: 'Zdjęcia', url: '/zdjecia' },
        { id: 'link-videos', title: 'Filmy', url: '/filmy' },
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
