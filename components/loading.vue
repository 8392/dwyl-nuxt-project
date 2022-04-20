<template lang="html">
  <div v-if="false"></div>
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
