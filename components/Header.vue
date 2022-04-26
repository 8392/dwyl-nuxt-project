<template>
  <div class="dwyl-header">
    <div class="dwyl-header__left">
      <div class="dwyl-header__logo"></div>
      <div class="dwyl-header__menu">
        <div v-for="item in menuList" :key="item.id" :class="['dwyl-header__menu--item', {active: !!item.children}]">
          {{item.title}}
          <div v-if="item.children" class="dwyl-header__menu--child">
            <div v-for="child in item.children" :key="child.id" class="list">{{child.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="dwyl-header__right">
      <div class="dwyl-header__right--icon"></div>
      <div class="dwyl-header__right--phone">4007-028-119</div>
      <div class="dwyl-header__right--btn">申请试用</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          id: 1,
          title: '首页',
        },{
          id: 2,
          title: '产品',
          children: [
            {
              id: 6,
              title: '云平台',
            },
            {
              id: 7,
              title: '小程序',
            },
            {
              id: 8,
              title: '硬件终端',
            }
          ]
        },{
          id: 3,
          title: '解决方案',
        },{
          id: 4,
          title: '客户案例',
        },{
          id: 5,
          title: '关于我们',
        }
      ]
    }
  },
  computed: {

  },
  created() {

  },
  mounted() {
    this.$nextTick(() => {
 
    })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@include b(header) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 1px 0px 0px rgba(196, 198, 200, 0.2);
  padding-left: 40px;
  position: fixed;
  width: 100%;
  z-index: 10;
  @include e(left) {
    display: flex;
    align-items: center;
  }
  @include e(logo) {
    width: 118px;
    height: 25px;
    background: url('../assets/img/logo.png') no-repeat center center;
    background-size: 100% 100%;
  }
  @include e(menu) {
    display: flex;
    align-items: center;
    padding-left: 50px;
    @include m(item) {
      font-size: 18px;
      color: #6E7279;
      cursor: pointer;
      padding: 10px 30px;
      position: relative;
      position: relative;
      &:hover{
        color: #167EFF;
        font-weight: bold;
        .dwyl-header__menu--child{
          display: block;
          color: #6E7279;
          font-weight: 400;
        }
      }
      &.active{
        display: flex;
        &:hover{
          &::after {
            top: -6px;
            border-top: inherit;
            border-bottom: 6px solid #167EFF;
          }
        }
        &::after {
          content: "";
          position: relative;
          left: 10px;
          top: 10px;
          border: 6px solid transparent;
          border-top: 6px solid #5D6064;
        }
      }
    } 
    @include m(child) {
      position: absolute;
      width: 133px;
      background: #FFFFFF;
      box-shadow: 0px 0px 10px 0px rgba(227, 227, 227, 0.5);
      padding: 20px 0;
      top: 44px;
      display: none;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 999;
      .list{
        text-align: center;
        margin-bottom: 22px;
        font-size: 16px;
        &:hover{
          color: #167EFF;
        }
        &:last-child{
          margin-bottom: 0;
        }
      }
    }
  }
  @include e(right) {
    display: flex;
    align-items: center;
    height: 100%;
    @include m(icon) {
      width: 14px;
      height: 15px;
      background: url('../assets/img/phone.png') no-repeat center center;
      background-size: 100% 100%;
    }
    @include m(phone) {
      font-size: 18px;
      font-weight: bold;
      color: #167EFF;
      padding: 0 40px 0 8px;
    }
    @include m(btn) {
      @include flex-center;
      width: 160px;
      height: 100%;
      font-size: 18px;
      color: #FFFFFF;
      background: #167EFF;
      cursor: pointer;
    }
  }
}
</style>