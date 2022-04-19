<template>
  <!-- 平台介绍 -->
  <div class="dwyl-platform">
    <Header />
  </div>
</template>

<script>
export default {
  name: 'Platform',
  async asyncData({$axios}) {
   
  },
  methods: {
    async changeData() {
      // console.log('打印', this.$store)
      const data = await this.$axios.get('25365/main')

      this.city = '重庆'
      this.$store.dispatch('getCityData', '哈哈哈11')
      this.$message('你好啊')
    },
    goPageHome() {
      this.$router.push({
        path: '/home',
        query: {
          city: '北京'
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(platform) {
  background: rgb(40, 140, 242);
  width: 100%;
  height: 100%;
  // display: flex;
  // align-items: center;
}
</style>
