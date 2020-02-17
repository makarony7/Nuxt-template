<template>
  <div>
    <navigation />
    <transition name="page" mode="out-in">
      <router-view />
    </transition>

    <loader :loading="!pageLoaded" />

    <footer-content />
    <cookies />
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import cookies from '~/components/partials/cookies.vue'
import navigation from '~/components/home/navigation.vue'
import footerContent from '~/components/home/footer-content.vue'
import Loader from '@/components/partials/Loader'

// kick off the polyfill!
smoothscroll.polyfill()

export default {
  name: 'Default',
  components: {
    cookies,
    Loader,
    navigation,
    footerContent
  },
  computed: {
    pageLoaded() {
      return this.$store.state.pageLoaded
    },
    loaded() {
      return this.$store.state.loaded
    }
  },
  mounted() {
    setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
