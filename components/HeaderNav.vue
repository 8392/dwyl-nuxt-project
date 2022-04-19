<template>
  <div>
    头部
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  asyncData() {
    return {
      headerData: 666
    }
  }
}
</script>

<style>

</style>