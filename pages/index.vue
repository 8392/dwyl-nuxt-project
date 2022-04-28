<template>
  <div class="dwyl-home">
    <Header />
    <div class="dwyl-home__banner">
      <swiper ref="bannerSwiperRef" class="dwyl-home__banner--swiper" :options="swiperOption" @mouseover.native="swiperOver" @mouseout.native="swiperOut">
        <swiper-slide class="dwyl-home__banner--list">
          <img src="@/assets/img/banner1.png" alt="">
        </swiper-slide>
        <swiper-slide class="dwyl-home__banner--list">
          <img src="@/assets/img/banner1.png" alt="">
        </swiper-slide>
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
    <!-- 应用场景 -->
    <div class="dwyl-home__scenario">
      <div class="w">
        <div class="dwyl-home__bgcdes">
          <div class="dwyl-home__bgcdes--bgc">Usage scenario</div>
          <div class="dwyl-home__bgcdes--title">
            <div class="icon"></div>
            <span class="title">应用场景</span>
            <div class="icon"></div>
          </div>
        </div>
        <div class="dwyl-home__scenario--main">
          <div class="dwyl-home__scenario--left">
            <div v-for="item in scenarioList" :key="item.id" :class="['list', {active: scenarioActive === item.id}]"  @click="hanldeBtn(item.id)">
              <div class="des">{{item.title}}</div>
              <div class="line"></div>
            </div>
          </div>
          <div class="dwyl-home__scenario--right">
            <swiper class="swiper" :options="swiperOption2">
              <swiper-slide v-for="item in getScenarioItem" :key="item.id">
                <img :src="item.img" alt="">
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="dwyl-home__solution">
      <div class="w">
        <div class="dwyl-home__bgcdes">
          <div class="dwyl-home__bgcdes--bgc">SOLUTION</div>
          <div class="dwyl-home__bgcdes--title">
            <div class="icon"></div>
            <span class="title">解决方案</span>
            <div class="icon"></div>
          </div>
        </div>
        <div class="dwyl-home__solution--main">
          <div v-for="item in solutionList" :key="item.id" :style="{backgroundImage: `url(${item.img})`}" :class="['list', {active: soluActive === item.id}]" @click="handelSolutionList(item.id)">
            <div class="mantle">
              <div class="title">{{item.title}}</div>
              <div class="content">{{item.des}}</div>
            </div>
          </div> 
        </div>
      </div>
    </div>
    <div class="dwyl-home__realdata">
      <div class="dwyl-home__bgcdes">
        <div class="dwyl-home__bgcdes--title">
          <div class="icon"></div>
          <span class="title">企业实力数据</span>
          <div class="icon"></div>
        </div>
      </div>
    </div>
    <div class="dwyl-home__classcase">
      <div class="dwyl-home__bgcdes">
        <div class="dwyl-home__bgcdes--bgc">CASE</div>
        <div class="dwyl-home__bgcdes--title">
          <div class="icon"></div>
          <span class="title">经典案例</span>
          <div class="icon"></div>
        </div>
      </div>
      <div class="dwyl-home__classcase--des">
        消智云消防物联网产品已应用在全国多个省份，在古建筑、小微场所、工业园区、家庭住宅、小区物业等行业有广泛覆盖  
      </div>
      <div class="w">
        <div class="dwyl-home__classcase--top">
          <div class="l">
            <i class="el-icon-back"></i>
            <i class="el-icon-right active"></i>
          </div>
          <div class="r">更多案例></div>
        </div>
        <div class="dwyl-home__classcase--bottom">
          <div class="wrap">
            <div class="dwyl-home__classcase--left">
              <img src="@/assets/img/xzy_gw_sy_jdal.png" alt="">
            </div>
            <div class="dwyl-home__classcase--right">
              <div class="title">成都市高新区-“智慧应急”和“涉稳隐患预测预警”平台项目</div>
              <div class="des">项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在三行内。项目介绍，控制在</div>
              <div class="btn">查看详情</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="dwyl-home__news">
      <div class="dwyl-home__bgcdes">
        <div class="dwyl-home__bgcdes--bgc">NEWS</div>
        <div class="dwyl-home__bgcdes--title">
          <div class="icon"></div>
          <span class="title">新闻中心</span>
          <div class="icon"></div>
        </div>
      </div>
      <div class="w">
        <div class="w-main">
          <swiper ref="newSwiperRef" class="swiper" :options="swiperOption3">
            <swiper-slide>Slide 1</swiper-slide>
            <swiper-slide>Slide 2</swiper-slide>
            <swiper-slide>Slide 3</swiper-slide>
            <swiper-slide>Slide 4</swiper-slide>
            <swiper-slide>Slide 5</swiper-slide>
            <swiper-slide>Slide 6</swiper-slide>
          </swiper>
          <div class="dwyl-home__news--prev" @click="handleNewsBtn(1)"></div>
          <div class="dwyl-home__news--next" @click="handleNewsBtn(2)"></div>
          <div ref="newProcessRef" class="newProcess">
            <div class="newProcessLine" :style="newsLineStyle"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="dwyl-home__partner">
      <div class="w">
        <div class="dwyl-home__bgcdes">
          <div class="dwyl-home__bgcdes--bgc">PARTNER</div>
          <div class="dwyl-home__bgcdes--title">
            <div class="icon"></div>
            <span class="title">合作伙伴</span>
            <div class="icon"></div>
          </div>
        </div>
        <div class="dwyl-home__partner--des">
          联手合作伙伴开创新业务，实现合作共赢，助力城市消防安全  
        </div>
        <div class="bgc"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { homeScenarioList, homeSolutionList } from '@/utils/staticData.js'
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
      },
      swiperOption2: {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
          // rotate: 180,
          // stretch: 90,
          // depth: 40,
          // modifier: 9,
          // slideShadows: true

          rotate: 0,
          stretch: 100, // 拉伸值，值越大间隔越近  
          depth: 50, // 位置深度，值越大图越小  
          modifier: 9,
          // slideShadows: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      },
      swiperOption3: {
        slidesPerView: 2.6,
        spaceBetween: 39,
        pagination: {
          el: '.swiper-pagination3',
          type: 'progressbar'
        },
        navigation: {
          nextEl: '.swiper-button-next3',
          prevEl: '.swiper-button-prev3'
        },
        on:{
          slideChange:(res) => {
            const swiper = this.$refs.newSwiperRef.$swiper
            const newsWidth = this.$refs.newProcessRef.offsetWidth
            const leg = swiper.slidesGrid.length
            const itemW = Math.floor(newsWidth / leg)
            const allWidth = (swiper.activeIndex + 3) * itemW + 'px'
            this.newsLineStyle.width = allWidth
          }
        },
      },
      scenarioList: homeScenarioList,
      solutionList: homeSolutionList,
      scenarioActive: 1,
      soluActive: 1,
      newsLineStyle: {
        width: '100px'
      }
    }
  },
  computed: {
    getScenarioItem() {
      return this.scenarioList.find(item => item.id === this.scenarioActive).child
    }
  },
  mounted() {
    const newSwiper = this.$refs.newSwiperRef.$swiper
    console.log('newSwiperres', newSwiper)
    const slideChange = newSwiper.eventsListeners.slideChange
    console.log('slideChange', slideChange)

  },
  methods: {
    swiperOver() {
      this.$refs.bannerSwiperRef.$swiper.autoplay.stop()
    },
    swiperOut() {
      this.$refs.bannerSwiperRef.$swiper.autoplay.start()
    },
    hanldeBtn(id) {
      this.scenarioActive = id
    },
    handelSolutionList(id) {
      this.soluActive = id
    },
    handleNewsBtn(type) {
      const swiper = this.$refs.newSwiperRef.$swiper
      if(type === 1) {
        swiper.slidePrev()
      }else {
        swiper.slideNext()
      }
      const newsWidth = this.$refs.newProcessRef.offsetWidth
      const leg = swiper.slidesGrid.length
      const itemW = Math.floor(newsWidth / leg)
      const allWidth = (swiper.activeIndex + 3) * itemW + 'px'
      this.newsLineStyle.width = allWidth
    }
  }
}
</script>

<style lang="scss">
@include b(home) {
  position: relative;
  min-width: 1200px;
  @include e(bgcdes) {
    position: relative;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    @include m(bgc) {
      font-size: 40px;
      font-weight: bold;
      color: rgba(22, 126, 255, 0);
      line-height: 60px;
      -webkit-text-stroke: 1px #d2e5ff;
      text-stroke: 1px #d2e5ff;
      letter-spacing: 6px;
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
        letter-spacing: 6px;
      }
    }
  }
  @include e(banner) {
    @include m(swiper) {
      position: relative;
      // height: 598px;
      min-width: 1200px;
    }
    @include m(list) {
      // max-height: 598px;
      height: 31vw;
      img{
        width: 100%;
        height: 100%;
      }
    }
  }
  @include e(product) {
    height: 598px;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    padding-top: 78px;
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
  @include e(scenario) {
    height: 805px;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    .w{
      width: 1200px;
      margin: 0 auto;
      padding-top: 78px;
      background: url('@/assets/img/xzy_gw_sy_yycj.png') no-repeat 0 65px;
      background-size: 220px 220px;
    }
    @include m(main) {
      display: flex;
    }
    @include m(left) {
      padding-top: 357px;
      width: 250px;
      .list{
        height: 52px;
        margin-bottom: 52px;
        width: 161px;
        cursor: pointer;
        .des{
          height: 48px;
          line-height: 48px;
          text-align: center;
          font-size: 24px;
          color: #6E7279;
        }
        .line{
          width: 0;
          background-color: #FF9E00;
          height: 4px;
        }
        &.active{
          .des{
            color: #292A2C;
            background: linear-gradient(180deg, #fff, rgba(255, 158, 0, 0.2));
            transition: all 0.3s;
          }
          .line{
            width: 100%;
            transition: width 0.3s;
          }
        }
      }
    }
    @include m(right) {
      // height: 460px;
      padding-top: 110px;
      padding-bottom: 50px;
      width: calc(100% - 250px);
      .swiper {
        height: 100%;
        width: 100%;
        .swiper-slide {

          display: flex;
          justify-content: center;
          align-items: center;
          width: 600px;
          height: 400px;
          text-align: center;
          font-weight: bold;
          font-size: 24px;
          background-color: #2C8DFB;
          background-position: center;
          background-size: cover;
          color: #fff;
        }
        .swiper-pagination {
          /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
            background-color: #fff;
          }
        }
      }
    }
  }
   @include e(solution) {
    height: 734px;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    padding-top: 78px;
    .w{
      width: 1200px;
      margin: 0 auto;
    }
    @include m(main) {
      padding-top: 90px;
      display: flex;
      align-items: center;
      .list{
        color: #fff;
        height: 450px;
        background: #222;;
        flex: 1;
        cursor: pointer;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: 600px 450px;
        .mantle{
          height: 100%;
          background-color: rgba($color: #167EFF, $alpha: 0.2);
          padding: 80px 35px;
          .title{
            font-size: 20px;
            font-weight: bold;
          }
          .content{
            padding-top: 35px;
            font-size: 16px;
            line-height: 30px;
            @include ellipsis(8);
          }
        }
        &.active{
          flex: 3;
          transition: all .3s ease-in-out;
          .mantle{
            background-color: rgba($color: #112339, $alpha: 0.8);
          }
        }
      }
    }
  }
  @include e(realdata) {
    // height: 734px;
    min-width: 1200px;
    height: 38.23vw;
    background: url('@/assets/img/xzy_gw_sy_qyslsj.png') no-repeat center center;
    background-size: 100% 100%;
    .dwyl-home__bgcdes--title{
      top: 78px;
      .title{
        color: #fff;
      }
    }
  }
  @include e(classcase) {
    padding: 80px 0;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    .w{
      // width: 1200px;
      margin: 0 auto;
      padding-left: 18.7vw;
    }
    @include m(des) {
      font-size: 20px;
      color: #6E7279;
      line-height: 36px;
      text-align: center;
      padding-top: 20px;
    }
    @include m(top) {
      padding-left: 525px;      
      display: flex;
      align-items: center;
      max-width: 1200px;
      justify-content: space-between;
      padding-top: 100px;
      .l{
        i{
          color: #D1D5DA;
          margin-right: 20px;
          font-size: 20px;
          cursor: pointer;
          font-weight: 600;
          &.active{
            color: #6E7279;
          }
        }
      }
      .r{
        font-size: 18px;
        color: #167EFF;
        cursor: pointer;
      }
    }
    @include m(bottom) {
      height: 496px;
      background: #FFFFFF;
      box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.1);
      // opacity: 0.6;
      margin-top: 30px;
      .wrap{
        max-width: 1200px;
        display: flex;
        align-items: center;
        height: 100%;
      }
    }
    @include m(left) {
      padding: 0 51px 43px 51px;
      position: relative;
      width: 420px + 102px;
      height: 100%;
      img{
        width: 420px;
        height: 520px;
        position: absolute;
        left: 51px;
        top: -67px;
      }
    }
    @include m(right) {
      flex: 1;
      padding-top: 80px;
      height: 100%;
      overflow: hidden;
      .title{
        color: #292A2C;
        font-size: 24px;
        @include ellipsis;
      }
      .des{
        color: #6E7279;
        font-size: 18px;
        padding-top: 60px;
        line-height: 30px;
        @include ellipsis(3);
      }
      .btn{
        font-size: 20px;
        color: #167EFF;
        background: url('@/assets/img/bg_sy_sousuo.png') no-repeat center center;
        background-size: 100% 100%;
        width: 232px;
        height: 95px;
        line-height: 88px;
        text-align: center;
        cursor: pointer;
        margin-top: 100px;
      }
    }
  }
  @include e(news) {
    padding-top: 78px;
    height: 767px;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    .w{
      padding-left: 18.7vw;
      // height: 100%;
      padding-top: 50px;
      .w-main{
        height: 100%;
        position: relative;
      }
    }
    .newProcess{
      max-width: 1200px;
      height: 4px;
      background: #F4F6FA;
      border-radius: 2px;
      margin-top: 83px;
      position: relative;
      .newProcessLine{
        position: absolute;
        width: 187px;
        height: 10px;
        background: #E0E5EE;
        border-radius: 5px;
        left: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        transition: width 0.3s ease-in-out;
      }
    }
    @include m(prev) {
      width: 103px;
      height: 103px;
      background: url('@/assets/img/icon_xwzx_jt.png') no-repeat center center;
      background-size: 100% 100%;
      cursor: pointer;
      position: absolute;
      top: 109px;
      z-index: 999;
      left: -130px;
    } 
    @include m(next) {
      width: 103px;
      height: 103px;
      background: url('@/assets/img/icon_xwzx_jt.png') no-repeat center center;
      background-size: 100% 100%;
      cursor: pointer;
      transform: rotate(180deg);
      position: absolute;
      z-index: 999;
      top: 109px;
      left: 52vw;
    }
    .swiper {
      height: 430px;
      width: 100%;
      position: relative;
      .swiper-pagination3{
        position: absolute;
        // top: 480px;
        width: 1200px;
        height: 4px;
        background: #f00 !important;
        border-radius: 2px;
        z-index: 10000;
      }
      .swiper-slide {
        display: flex;
        background-color: #ddd;
        // justify-content: center;
        // align-items: center;
        // width: 600px;
        // height: 400px;
        // text-align: center;
        // font-weight: bold;
        // font-size: 24px;
        // background-color: #2C8DFB;
        // background-position: center;
        // background-size: cover;
        // color: #fff;
      }
      // .swiper-pagination {
      //   /deep/ .swiper-pagination-bullet.swiper-pagination-bullet-active {
      //     background-color: #fff;
      //   }
      // }
    }
  }
  @include e(partner) {
    height: 530px;
    background: linear-gradient(180deg, rgba(245, 248, 254, 0.5), #fff);
    .w{
      padding-top: 78px;
      width: 1200px;
      margin: 0 auto;
    }
    @include m(des) {
      font-size: 20px;
      color: #6E7279;
      line-height: 36px;
      text-align: center;
      padding-top: 20px;
    }
    .bgc{
      height: 303px;
      background: url('@/assets/img/xzy_gw_sy_hzhb.png') no-repeat center center;
      background-size: 1378px 100%;
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
