<template>
  <div>
    <template>
      <div class="page-wrapper">
        <div>
          <transition name="page" mode="out-in">
            <router-view />
          </transition>
        </div>

        <loader :loading="!pageLoaded" />
      </div>
      <cookies />
    </template>
  </div>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'
import cookies from '~/components/partials/cookies.vue'
import Loader from '@/components/partials/Loader'

// kick off the polyfill!
smoothscroll.polyfill()

export default {
  name: 'MainPageLayout',
  components: {
    cookies,
    Loader
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
    // setTimeout(() => this.$store.commit('setPageLoaded', true), 500)
    // console.log('janek blablabla')
    // window.test = 'paula blablablablablabla'
  }
}
</script>

<style lang="less" scoped>
.container {
  max-width: 100%;
  padding: 0;
  margin-left: 0;
  margin-right: 0;
}
</style>
