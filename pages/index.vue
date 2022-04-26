<template>
  <div class="dwyl-home">
    <Header />
    <div class="dwyl-home__banner">
      <swiper ref="bannerSwiperRef" class="dwyl-home__banner--swiper" :options="swiperOption" @mouseover.native="swiperOver" @mouseout.native="swiperOut">
        <swiper-slide class="dwyl-home__banner--list">
          <img src="@/assets/img/banner1.png" alt="">
        </swiper-slide>
        <swiper-slide class="dwyl-home__banner--list">
          <!-- <img src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fseopic.699pic.com%2Fphoto%2F50064%2F2346.jpg_wh1200.jpg&refer=http%3A%2F%2Fseopic.699pic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1653551324&t=71972df3c16b9bedd9dfdcea92c83b86" alt=""> -->
          <img src="@/assets/img/banner1.png" alt="">
        </swiper-slide>
        <!-- <div slot="button-prev" class="swiper-button-prev"></div>
        <div slot="button-next" class="swiper-button-next"></div> -->
        <div slot="pagination" class="swiper-pagination swiper-pagination-bullets"></div>
      </swiper>
    </div>
    <div class="dwyl-home__product">
      <div class="dwyl-home__bgcdes">
        <div class="dwyl-home__bgcdes--bgc">PRODUCT</div>
        <div class="dwyl-home__bgcdes--title">
          <div class="icon"></div>
          <span class="title">产品中心</span>
          <div class="icon"></div>
        </div>
      </div>
      <div class="dwyl-home__product--des">
        零平台建设成本、租用式云服务，24小时在线防火告警通知服务  
      </div>
      <div class="dwyl-home__product--productInfo">
        <div class="list">
          <div class="title">
            <i>01</i>
            <span>物联网</span>
          </div>
          <div class="icon">
            <img src="@/assets/img/xzy_gw_sy_cpzx_wlw.png" alt="">
          </div>
          <div class="des">文字介绍文字介绍文字介绍 文字介绍</div>
        </div>
        <div class="list">
          <div class="title">
            <i>02</i>
            <span>城市</span>
          </div>
          <div class="icon">
            <img src="@/assets/img/xzy_gw_sy_cpzx_cd.png" alt="">
          </div>
          <div class="des">文字介绍文字介绍文字介绍 文字介绍</div>
        </div>
        <div class="list">
          <div class="title">
            <i>03</i>
            <span>联网单位</span>
          </div>
          <div class="icon">
            <img src="@/assets/img/xzy_gw_sy_cpzx_lwdw.png" alt="">
          </div>
          <div class="des">文字介绍文字介绍文字介绍 文字介绍</div>
        </div>
        <div class="list">
          <div class="title">
            <i>04</i>
            <span>家庭</span>
          </div>
          <div class="icon">
            <img src="@/assets/img/xzy_gw_sy_cpzx_jt.png" alt="">
          </div>
          <div title="文字介绍文字介绍文字介绍 文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍" class="des">文字介绍文字介绍文字介绍 文字介绍文字介绍文字介绍文字介绍文字介绍文字介绍</div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  async asyncData({$axios}) {
   
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        observeParents: true,
        observer: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          bulletClass: 'my-bullet',// 需设置.my-bullet样式
          bulletActiveClass: 'my-bullet-active',
        }
      }
    }
  },
  mounted() {

  },
  methods: {
    swiperOver() {
      this.$refs.bannerSwiperRef.$swiper.autoplay.stop()
    },
    swiperOut() {
      this.$refs.bannerSwiperRef.$swiper.autoplay.start()
    },
  }
}
</script>

<style lang="scss">
@include b(home) {
  position: relative;
  @include e(bgcdes) {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    @include m(bgc) {
      font-size: 40px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(22, 126, 255, 0);
      line-height: 60px;
      -webkit-text-stroke: 1px #d2e5ff;
      text-stroke: 1px #d2e5ff;
    }
    @include m(title) {
      display: flex;
      align-items: center;
      position: absolute;
      top: 19px;
      .icon{
        width: 8px;
        height: 8px;
        background: url('@/assets/img/icon_jiahao.png') no-repeat center center;
        background-size: 100% 100%;
      }
      .title{
        font-size: 30px;
        font-weight: bold;
        color: #167EFF;
        line-height: 60px;
        padding: 0 10px;
      }
    }
  }
  @include e(banner) {
    @include m(swiper) {
      position: relative;
      // height: 598px;
    }
    @include m(list) {
      max-height: 598px;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  @include e(product) {
    height: 598px;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    @include m(des) {
      font-size: 20px;
      color: #6E7279;
      line-height: 36px;
      text-align: center;
      padding-top: 20px;
    }
    @include m(productInfo) {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 40px;
      .list{
        display: flex;
        align-items: center;
        flex-flow: column;
        width: 205px;
        .title{
          display: flex;
          align-items: center;
          i{
            font-size: 40px;
            font-weight: 600;
            color: #ff9e00;
          }
          span{
            font-size: 24px;
            color: #292A2C;
          }
        }
        .icon{
          width: 205px;
          height: 205px;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .des{
          font-size: 18px;
          color: #6E7279;
          line-height: 30px;
          padding-top: 10px;
          @include ellipsis(2);
        }
      }
    }
  }
}

 .my-bullet{
  display: block;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s;
  width: 20px;
  height: 3px;
  background: #DDE2EC;
}

.my-bullet-active{
  // width: 40px;
  // height: 5px;
  background-color: #FF9E00;
}
</style>
