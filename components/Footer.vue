<template>
  <div class="dwyl-footer">
    <div class="w">
      <div class="dwyl-footer__main">
        <div class="dwyl-footer__left">
          <div v-for="(item, index) in footerData" :key="index" class="dwyl-footer__left--column">
            <div class="title">{{item.title}}</div>
            <div class="main">
              <div v-for="child in item.list" :key="child.title" class="list">
                <span @click="goPage(child)">{{child.title}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="dwyl-footer__right">
          <div class="dwyl-footer__right--title">智慧消防小程序</div>
          <div class="dwyl-footer__right--ewm"></div>
          <div class="dwyl-footer__right--des">
            <div class="tit">咨询热线：</div>
            <div class="phone">4007 028 119</div>
          </div>
        </div>
      </div>
      <div class="dwyl-footer__copy">© 2009-2021域名   版权所有 增值电信业务经营许可证： *****   域名注册服务机构许可： ******************888         浙公网安备  ******************888</div>
    </div>
  </div>
</template>

<script>
import { footerData } from '@/utils/staticData.js'

export default {
  data() {
    return {
      footerData
    }
  },
  methods: {
    goPage(item) {
      console.log('跳转', item)
    }
  }
}
</script>

<style lang="scss" scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
@include b(footer){
  height: 406px;
  background: #494E5A;
  @include e(main) {
    display: flex;
    padding-top: 57px;
    padding-bottom: 28px;
    @include e(left) {
      flex: 1;
      display: flex;
      @include m(column) {
        flex: 1;
        gap: 131px;
        .title{
          font-size: 16px;
          color: #fff;
          border-bottom: 2px solid #fff;
          padding-bottom: 12px;
          width: 64px;
        }
        .main{
          padding-top: 10px;
          .list{
            >span{
              line-height: 30px;
              opacity: 0.5;
              font-size: 14px;
              color: #fff;
              cursor: pointer;
              &:hover{
                color: #167EFF;
                opacity: 1;
              }
            }
          }
        }
      }
    }

    @include e(right) {
      border-left: 1px solid #585b66;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: center;
      width: 375px;
      @include m(title) {
        font-size: 14px;
        color: #fff;
        padding-bottom: 12px;
      }
      @include m(ewm) {
        width: 161px;
        height: 161px;
        background: url('@/assets/img/pic_sy_erweima.png') no-repeat center center;
        background-size: 100% 100%;
      }
      @include m(des) {
        display: flex;
        align-items: center;
        .tit{
          font-size: 14px;
          color: #fff;
          opacity: 0.5;
        }
        .phone{
          font-size: 22px;
          font-weight: bold;
          color: #FFFFFF;
          padding-left: 15px;
        }
      }
    }
  }
  @include e(copy) {
    border-top: 1px solid #585b66;
    padding-top: 30px;
    font-size: 14px;
    color: #FFFFFF;
    opacity: 0.5;
    text-align: center;
  }
}
</style>