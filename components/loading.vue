<template lang="html">
  <div v-if="false" class="loading-page">
    <p>加载中...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: null,
  }),
  methods: {
    start() {
      // this.loading = true;
      this.loading = this.$loading({
        lock: true,
        text: '加载中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });
    },
    finish() {
      this.loading.close()
    },
  },
};
</script>

<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding-top: 200px;
  font-size: 30px;
  font-family: sans-serif;
  color: #4a4a4a;
  z-index: 100;
}
</style>