<template>
  <router-view v-slot="{ Component }">
    <keep-alive :include="includeList">
      <component :is="Component" />
    </keep-alive>
  </router-view>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "LayoutView",
  computed: {
    includeList() {
      return [];
    }
    // ...mapState({
    //   includeList: (state) => state.keepAlive.includeList || [],
    // }),
  }
};
</script>