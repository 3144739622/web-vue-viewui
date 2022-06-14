<template>
  <div id="home-list-content-box">
    <Waves id-name="home-list-content-box" />
    我是首页列表
    <button @click="$router.push({name: 'homeEdit'})">homeEdit</button>
  </div>
</template>

<script>
import Waves from "@/components/common/waves.vue";

export default {
  name: "HomeListView",
  components: {
    Waves
  }
};
</script>

<style lang="less" scoped>
#home-list-content-box {
  width: 100%;
  height: 100%;
}
</style>
