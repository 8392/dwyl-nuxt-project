<template>
  <!-- 平台介绍 -->
  <div class="common-route-main">
    <Header />
    <page-main :menu-list='menuList' />
  </div>
</template>

<script>
import PageMain from '../../components/PageMain.vue'
export default {
  name: 'Solution',
  components: { PageMain },
  async asyncData({$axios}) {
   
  },
  data() {
    return {
      menuList: [
        {id: 1, title: '城市级智慧消防解决方案', html: '<p>啊实打实打算 阿斯顿</p><img src="http://www.zlya.net/images/platform/firecontrolsystem/introduce.jpg" />'},
        {id: 2, title: '智慧消防维保解决方案', html: '<p>实打实打算</p><img src="http://www.zlya.net/images/platform/maintenance/introduce.jpg" />'},
        {id: 3, title: '养老院智慧消防解决方案养老院智慧消防解决方案', html: '<p>实打实打算</p><img src="http://www.zlya.net/images/platform/maintenance/app.png" />'},
      ],
      activeMenu: 1
    }
  },
  methods: {
    async changeData() {
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
    },
    handleMenu(item) {
      this.activeMenu = item.id
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
