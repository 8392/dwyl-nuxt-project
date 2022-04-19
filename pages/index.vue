<template>
  <!-- <Tutorial /> -->
  <div class="home">
    {{city}}
    <div>{{$store.state.artist}}</div>
    <HeaderNav name="蔡博" />
    <ul>
      <li v-for="(item, index) in listData" :key="index">{{item.top_nav}}</li>
    </ul>
    <button @click="changeData">按钮</button>
    <button @click="goPageHome">跳转</button>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData({$axios}) {
    const data = await $axios.get('25365/main')
    // const promistFn = () => {
    //   return new Promise((resolve, reject) => {
    //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    //     setTimeout(() => {
    //       resolve(1000)
    //     }, 3000)
    //   })
    // }
    // await promistFn()
    // return {
    //   city: resData
    // }

    return {
      listData: data.data.res_body.data,
      city: 666
    }
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
// $red: #ccc;
.home{
  width: 300px;
  height: 300px;
  background-color: $red;
}
</style>
