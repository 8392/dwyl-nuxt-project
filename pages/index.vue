<template>
  <div class="common-route-main">
    <Header class="header" />
    <!-- <page-main :menu-list='menuList' /> -->
    <div class="dwyl-home__main">
      <div class="dwyl-home__main--list">
        <div v-for="x in 1" :key="x" class="item wow animate__zoomIn"></div>
      </div>
    </div>
    <swiper ref="mySwiper" class="swiper__main wow animate__zoomIn" :options="swiperOption" @mouseover.native="swiperOver" @mouseout.native="swiperOut">
      <swiper-slide class="swiper__main--li">Slide 1</swiper-slide>
      <swiper-slide class="swiper__main--li">Slide 2</swiper-slide>
      <swiper-slide class="swiper__main--li">Slide 3</swiper-slide>
      <div slot="button-prev" class="swiper-button-prev"></div>
      <div slot="button-next" class="swiper-button-next"></div>
      <div slot="pagination" class="swiper-pagination swiper-pagination-bullets"></div>
    </swiper>
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
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
        {id: 1, title: '城市级智慧消防解决方案', html: '<p>模块化消防站管理系统是在现有各类消防站（包括微信消防站）及新建消防站中设置一套智慧消防管理系统，负责对消防站管理半径内的建（构）筑物的消防设施进行远程集中管理，一旦发生火情系统将在第一时间进行报警，通知并引导消防站消防员前往进行处置。同时，还可对消防站日常管理、训练记录、出警记录等进行远程管理，相关数据与上级消部门实现数据交互与共享，并接受上级部门的调度指令，极大提升消防站管理效率，不断提升消防站的应急抢险及日常管理能力。</p><img src="http://www.zlya.net/images/platform/firestation/introduce.jpg" /><img src="http://www.zlya.net/images/platform/firestation/introduce.jpg" />'},
        {id: 2, title: '智慧消防维保解决方案', html: '<p>实打实打算</p><img src="http://www.zlya.net/images/platform/maintenance/introduce.jpg" />'},
        {id: 3, title: '养老院智慧消防解决方案养老院智慧消防解决方案', html: '<p>实打实打算</p><img src="http://www.zlya.net/images/platform/maintenance/app.png" />'},
      ],
      btnplay: true, // 默认播放
      swiperOption: {
        loop: true,
        observeParents: true,
        observer: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          // reverseDirection: true, // 开启反向自动轮播。
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          // dynamicBullets: true,
          bulletClass: 'my-bullet',// 需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active',
          // currentClass : 'my-pagination-current',// 分式类型分页器的当前索引的类名
          // renderBullet(index, className) {
          //   return `<span class="${className} swiper-pagination-bullet-custom">${index + 1}</span>`
          // }
        }
      }
    }
  },
  mounted() {
    // eslint-disable-next-line nuxt/no-env-in-hooks
    if (process.browser) {
      this.$nextTick(() => {
        const { WOW } = require('wowjs')
        new WOW({
          boxClass: 'wow',
          animateClass: 'animate__animated',
          offset: 0,
          mobile: true,
          live: true
        }).init()
      });
    }
  },
  methods: {
    swiperOver() {
      // console.log('swiperOver', this.$refs.mySwiper)
      // this.swiper.autoplay.stop();
      this.$refs.mySwiper.$swiper.autoplay.stop()
    },
    swiperOut() {
      // console.log('swiperOut')
      // this.swiper.autoplay.start();
      this.$refs.mySwiper.$swiper.autoplay.start()
    },
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
    }
  }
}
</script>

<style lang="scss" >
@include b(home) {
  @include e(main) {
    @include m(list) {
      .item {
        width: 200px;
        height: 200px;
        background-color: #ddd;
      }
    }
  }
}
.swiper__main{
  &--li{
    width: 100%;
    height: 200px;
    cursor: pointer;
  }
}

.swiper-pagination-bullets{
  display: flex;
  align-items: center;
  justify-content: center;
}

 .my-bullet{
  width: 20px;
  height: 5px;
  background-color: #ccc;
  display: block;
  border-radius: 10px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s;
}

.my-bullet-active{
  width: 40px;
  height: 5px;
  background-color: #f00;
}
.my-pagination-current{
  width: 80px;
  height: 20px;
  background-color: #f00;
}
.common-route-main{
  padding-top: 50px;
  position: relative;
}
.header{
  position: fixed;
  width: 100%;
  top: 0;
}
</style>
