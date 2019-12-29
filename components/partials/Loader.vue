<template>
  <div class="loader-wrapper" :class="{ hidden: !loading }">
    <div class="center-loader">
      <div class="loader loader1">
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.loader-wrapper {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: @black;
  opacity: 1;
  z-index: 5;
  transition: all 0.5s;
  &.hidden {
    opacity: 0;
    pointer-events: none;
    transition: all 0.5s;
  }
  .center-loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
@-webkit-keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes rotate {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes rotate2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border-top-color: rgba(0, 0, 255, 0.5);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
}
@keyframes rotate2 {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
  50% {
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
    border-top-color: rgba(0, 0, 255, 0.5);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
    border-top-color: rgba(0, 0, 0, 0.5);
  }
}
* {
  box-sizing: border-box;
}

.loader {
  position: relative;
  width: 150px;
  height: 150px;
  display: block;
  overflow: hidden;
}
.loader div {
  height: 100%;
}

.loader1,
.loader1 div {
  border-radius: 50%;
  padding: 8px;
  border: 2px solid transparent;
  -webkit-animation: rotate linear 3.5s infinite;
  animation: rotate linear 3.5s infinite;
  border-top-color: rgba(red 0.5);
  border-bottom-color: rgba(red, 0.5);
}

.loader,
.loader * {
  will-change: transform;
}
</style>
