<template>
  <div class="dwyl-child">
    我是第一个孩子
    <div class="dwyl-child__warp">
      inner
      <div class="dwyl-child--error">
        error
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@include b(child) {
  width: 200px;
  height: 200px;
  background: rgb(143, 132, 243);
  @include e(warp) {
    color: #f00;
  }
  @include m(error) {
    color: #ccc;
  }
}
</style>