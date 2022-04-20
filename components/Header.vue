<template>
  <div>
    <!-- Pc布局 -->
    <div class="dwyl-header">
      <div class="dwyl-header__left">
        <img src="@/assets/img/logo_white.png" />
      </div>
      <div class="dwyl-header__right">
        <div v-for="item in list" :key="item.id" :class="['dwyl-header__right--item', {'is-active': getCurrPath === item.path}]" @click="handelMenuUrl(item)">{{item.title}}</div>
      </div>
    </div>
    <!-- 移动端布局 -->
    <div class="dwyl-headerM">
      <div class="dwyl-headerM__left">
        <img src="@/assets/img/logo_white.png" />
      </div>
      <div class="dwyl-headerM__right" @click="handelOpenMenu">
        <i class="el-icon-menu"></i>
      </div>
      <div class="dwyl-headerM__menu" :style="menuStyle">
        <div v-for="item in list" :key="item.id" :class="['dwyl-headerM__menu--item', {'is-active': getCurrPath === item.path}]" @click="handelMenuUrl(item)">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {id: 1, title: '首页', path: '/home'},
        {id: 2, title: '平台介绍', path: '/platform'},
        {id: 3, title: '解决方案', path: '/solution'},
        {id: 4, title: '企业介绍', path: '/aboutcompany'},
        {id: 5, title: '商务合作', path: '/cooperation'},
        {id: 6, title: '人才招聘', path: '/jobposting'},
        {id: 7, title: '联系我们', path: '/contactus'},
        {id: 8, title: 'APP下载', path: '/app'}
      ],
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
  methods: {
    handelOpenMenu() {
      if(this.menuStyle.maxHeight === 0) {
        this.menuStyle = {
          maxHeight: '500px'
        }
      }else {
        this.menuStyle = {
          maxHeight: 0
        }
      }
    },
    /* 点击菜单 */
    handelMenuUrl(item) {
      this.$router.push(item.path)
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(header){
  height: 50px;
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    max-height: 0;
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

/* 智能手机 */ 
@media only screen and (max-width: 768px) { 
  .dwyl-headerM{
    display: flex;
  }
  .dwyl-header{
    display: none;
  }
} 
@media only screen and (min-width: 768px) { 
  .dwyl-header{
    display: flex;
  }
  .dwyl-headerM{
    display: none;
  }
} 
</style>