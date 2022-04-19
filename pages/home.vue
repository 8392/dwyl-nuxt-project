<template>
  <div class="home">
    我是home页面
    <button @click="goBack">返回</button>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  // layout: 'nav',
  layout(content) {
    return 'navCom'
  },
  validate(ctx) {
    // console.log('你好啊', ctx)
    return true
  },
  async asyncData({$axios}) {
    const data = await $axios.get('25365/main')
    return {
      listData: data.data.res_body.data,
      city: 666
    }
  },
  methods: {
    changeData() {
      this.city = '重庆'
    },
    goBack() {
      this.$router.go(-1)
    },
  },
}
</script>

<style lang="scss" scoped></style>
