<template>
  <div class="common-route-main">
    <Header />
    <page-main :menu-list='menuList' />
  </div>
</template>

<script>
export default {
  name: 'Cooperation',
  async asyncData({$axios}) {
    const data = await $axios.get('25365/main')
    return {
      listData: data.data.res_body.data,
      city: 666
    }
  },
  data() {
    return {
      menuList: [
        {id: 1, title: '城市级智慧消防解决方案', html: '<p>模块化消防站管理系统是在现有各类消防站（包括微信消防站）及新建消防站中设置一套智慧消防管理系统，负责对消防站管理半径内的建（构）筑物的消防设施进行远程集中管理，一旦发生火情系统将在第一时间进行报警，通知并引导消防站消防员前往进行处置。同时，还可对消防站日常管理、训练记录、出警记录等进行远程管理，相关数据与上级消部门实现数据交互与共享，并接受上级部门的调度指令，极大提升消防站管理效率，不断提升消防站的应急抢险及日常管理能力。</p><img src="http://www.zlya.net/images/platform/firestation/introduce.jpg" />'},
        {id: 2, title: '智慧消防维保解决方案', html: '<p>实打实打算</p><img src="http://www.zlya.net/images/platform/maintenance/introduce.jpg" />'},
        {id: 3, title: '养老院智慧消防解决方案养老院智慧消防解决方案', html: '<p>实打实打算</p><img src="http://www.zlya.net/images/platform/maintenance/app.png" />'},
      ],
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
