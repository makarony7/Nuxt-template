<template>
  <div class="logo">
    <img src="~/assets/img/logo-white.png" alt="logo-white.png" />
    <h1>fishing with makarony7</h1>
  </div>
</template>

<script>
export default {
  name: 'Logo'
}
</script>

<style lang="less" scoped>
.logo {
  text-align: center;
  filter: brightness(0.3);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 150px;
    height: auto;
  }

  h1 {
    color: white;
    margin: 0;
    font-size: 20px;
    font-weight: 300;
  }
}
</style>
