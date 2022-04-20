<template>
  <!-- 平台介绍 -->
  <div class="dwyl-PageMain">
    <div class="dwyl-PageMain__mMenu">
      <div class="dwyl-PageMain__mMenu--title" @click="viewAllMeth">查看全部</div>
      <div v-show="isMenList" class="dwyl-PageMain__mMenu--wrap">
        <div v-for="item in menuList" :key="item.id" :class="['dwyl-PageMain__mMenu--list', {'is-active': activeMenu === item.id}]" @click="handleMenu(item)">{{item.title}}</div>
      </div>
    </div>  
    <div class="dwyl-PageMain__content">
      <!-- eslint-disable vue/no-v-html -->
      <div ref="mainLeftRef" class="dwyl-PageMain__left" v-html="getCurrHtml"></div>
      <div class="dwyl-PageMain__right">
        <div v-for="item in menuList" :key="item.id" :class="['dwyl-PageMain__right--item', {'is-active': activeMenu === item.id}]" @click="handleMenu(item)">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageMain',
  props: {
    menuList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeMenu: 1,
      isMenList: false
    }
  },
  computed: {
    getCurrHtml() {
      const data = this.menuList.find(item => item.id === this.activeMenu)
      return data.html || '没有数据'
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
      this.isMenList = false
      /* 切换元素时，滚动到顶部 */
      const leftRef = this.$refs.mainLeftRef
      leftRef.scrollTo(0, 0)
    },
    /* 查看全部 */
    viewAllMeth() {
      this.isMenList = !this.isMenList
    }
  }
}
</script>

<style lang="scss" scoped>
@include b(PageMain) {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  background-color: #fff;
  flex: 1;
  overflow: hidden;
  @include e(mMenu) {
    position: relative;
    @include m(title) {
      height: 45px;
      line-height: 45px;
      text-align: center;
      width: 30vw;
      cursor: pointer;
      background-color: $main_color;
      color: #fff;
    } 
    @include m(wrap) {
      position: absolute;
      width: 100vw;
      box-shadow: 0 6px 12px #ddd;
      background-color: #fff;
      border-radius: 6px;
      transition: all 0.3s;
    }
    @include m(list) {
      cursor: pointer;
      padding: 15px;
      color: #999;
      margin: 5px 0 5px 0;
      &:hover{
        color: $main_color;
      }
      @include when(active) {
        background-color: $main_color;
        color: #fff;
      }
    }
  }
  @include e(content) {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
  @include e(left) {
    flex: 1;
    padding: 50px;
    line-height: 40px;
    font-size: 14px;
    overflow: auto;
    /deep/ img{
      width: 100%;
    }
  }
  @include e(right) {
    width: 220px;
    background-color: #efefef;
    overflow: auto;
    @include m(item) {
      margin-bottom: 10px;
      color: #222;
      padding: 16px;
      cursor: pointer;
      font-size: 14px;
      line-height: 24px;
      &:hover{
        color: $main_color;
      }
      @include when(active) {
        background-color: $main_color;
        color: #fff;
      }
    }
  }
}

/* 媒体查询 */
@include media-type(mobile) {
  .dwyl-PageMain__right{
    display: none;
  }
  .dwyl-PageMain__mMenu{
    display: block;
  }
  .dwyl-PageMain{
    width: 100%;
  }
}
@include media-type(pc) {
  .dwyl-PageMain__right{
    display: block;
  }
  .dwyl-PageMain__mMenu{
    display: none;
  }
  .dwyl-PageMain{
    width: 70%;
  }
}
</style>
