<template>
  <div class="w flexPage">
    <!-- 666 -->
    <div v-for="x in 12" :key="x" class="list"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.w{
  width: 1200px;
  margin: 0 auto;
  background-color: #f1f1f1;
}
.flexPage{
  display: flex;
  align-items: center;
  // justify-content: space-between;
  flex-flow: wrap;
  padding: 20px;
  gap: 10px;
}
.list{
  width: 220px;
  height: 240px;
  border: 1px solid #ddd;
  margin-bottom: 15px;
}
</style>