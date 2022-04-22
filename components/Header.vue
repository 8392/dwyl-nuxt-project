<template>
  <div ref="homeRef">
    <!-- Pc布局 -->
    <div :class="['dwyl-header', 'hidden-pc', {'headerActive': isHeaderAni}]">
      <div class="dwyl-header__left">
        <img src="@/assets/img/logo_white.png" />
      </div>
      <div class="dwyl-header__right">
        <div v-for="item in list" :key="item.id" :class="['dwyl-header__right--item', {'is-active': getCurrPath === item.path}]" @click="handelMenuUrl(item)">{{item.title}}</div>
      </div>
    </div>
    <!-- 移动端布局 -->
    <div class="dwyl-headerM hidden-mobile">
      <div class="dwyl-headerM__left">
        <img src="@/assets/img/logo_white.png" />
      </div>
      <div class="dwyl-headerM__right" @click="handelOpenMenu">
        <i class="el-icon-menu"></i>
      </div>
      <el-collapse-transition>
        <div v-show="isMenu" class="dwyl-headerM__menu">
        <!-- <div class="dwyl-headerM__menu" :style="menuStyle"> -->
          <div v-for="item in list" :key="item.id" :class="['dwyl-headerM__menu--item', {'is-active': getCurrPath === item.path}]" @click="handelMenuUrl(item)">{{item.title}}</div>
        </div>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
// import ElCollapseTransition from 'element-ui/src/transitions/collapse-transition';
export default {
  // components: {
  //   ElCollapseTransition
  // },
  data() {
    return {
      list: [
        {id: 1, title: '首页', path: '/'},
        {id: 2, title: '平台介绍', path: '/platform'},
        {id: 3, title: '解决方案', path: '/solution'},
        {id: 4, title: '企业介绍', path: '/aboutcompany'},
        {id: 5, title: '商务合作', path: '/cooperation'},
        {id: 6, title: '人才招聘', path: '/jobposting'},
        {id: 7, title: '联系我们', path: '/contactus'},
        {id: 8, title: 'APP下载', path: '/app'}
      ],
      isMenu: false,
      isHeaderAni: false,
      menuStyle: {
        maxHeight: 0,
      }
    }
  },
  computed: {
    getCurrPath() {
      return this.$route.path
    }
  },
  created() {
    // console.log('router', this.$route.path)
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('scroll', (e) => {
        // console.log('打印', e.target.body.scrollTop)
        // console.log('打印', e.target.body.offsetTop)
        // console.log('homeRef', this.$refs.homeRef.scrollTop)
        console.log('homeRef', document.documentElement.scrollTop)
        if(document.documentElement.scrollTop >= 50) {
          this.isHeaderAni = true
        }else{
          this.isHeaderAni = false
        }
      })
    })
  },
  methods: {
    scrollWraper(e) {
      console.log('滚动', e)
    },
    handelOpenMenu() {
      this.isMenu = !this.isMenu
      // if(this.menuStyle.maxHeight === 0) {
      //   this.menuStyle = {
      //     maxHeight: '500px'
      //   }
      // }else {
      //   this.menuStyle = {
      //     maxHeight: 0
      //   }
      // }
    },
    /* 点击菜单 */
    handelMenuUrl(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes fadeInDown {
  0%{
    opacity: 0;
    transform: translateY(-20px)
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}

.headerActive{
  animation-duration: 1s;
  animation-name: fadeInDown;
  background-color: #fff;
  .dwyl-header__right--item{
    color: #222;
  }
}

@include b(header){
  height: 50px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @include e(left) {
    img{
      width: 127px;
      height: 40px;
      cursor: pointer;
    }
  }
  @include e(right) {
    display: flex;
    @include m(item) {
      height: 50px;
      display: flex;
      align-items: center;
      padding: 0 1vw;
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      &:hover{
        color: $main_color;
      }
       @include when(active) {
        background-color: $main_color;
        color: #fff;
        &:hover{
          color: #000;
          background-color: #e7e7e7;
        }
      }
    }
  }
}

@include b(headerM){
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  background-color: #333;
  @include e(left) {
    img{
      width: 127px;
      height: 40px;
      cursor: pointer;
    }
  }
  @include e(right) {
    display: flex;
    @include m(item) {
      padding: 15px;
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      &:hover{
        color: $main_color;
      }
    }
    .el-icon-menu{
      color: #fff;
      font-size: 32px;
      cursor: pointer;
    }
  }
  @include e(menu) {
    position: absolute;
    top: 50px;
    left: 0;
    width: 100%;
    transition: all 0.3s;
    overflow: hidden;
    background-color: #333;
    // max-height: 0;
    z-index: 100;
    @include m(item) {
      line-height: 40px;
      width: 100%;
      cursor: pointer;
      color: #fff;
      font-size: 14px;
      padding: 0 10px;
      &:hover{
        color: $main_color;
      }
      @include when(active) {
        background-color: $main_color;
        color: #fff;
        &:hover{
          color: #000;
          background-color: #e7e7e7;
        }
      }
    }
  }
}



// /* 媒体查询 */ 
// @include media-type(mobile) {
//   .dwyl-headerM{
//     display: flex;
//   }
//   .dwyl-header{
//     display: none;
//   }
// }
// @include media-type(pc) {
//   .dwyl-header{
//     display: flex;
//   }
//   .dwyl-headerM{
//     display: none;
//   }
// }
</style>