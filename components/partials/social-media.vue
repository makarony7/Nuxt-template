<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="sm-ico">
    <a
      v-for="(icon, index) in icons"
      :key="index"
      :href="icon.url"
      target="_blank"
      :title="icon.title"
    >
      <i :class="icon.class"></i>
    </a>
  </div>
</template>

<script>
export default {
  name: 'SocialMedia',
  data() {
    return {
      icons: [
        {
          url: 'https://www.facebook.com/fishingwithmakarony7/',
          class: 'icon-facebook',
          title: 'Facebook'
        },
        {
          url: 'https://www.youtube.com/channel/UCbbjevlzlJ67CcRuvUPBS_w',
          class: 'icon-youtube',
          title: 'Youtube'
        },
        {
          url: 'https://www.instagram.com/fishing_with_makarony7/',
          class: 'icon-instagram',
          title: 'Instagram'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
a {
  padding: 3px;
  i {
    &::before {
      color: @white;
      font-size: 20px;
      .transition-duration(0.3s);
    }
  }
  &:hover {
    i::before {
      color: @color-primary;
    }
  }
  &:focus,
  &:active {
    outline: none;
    background: none;
  }
}
</style>
