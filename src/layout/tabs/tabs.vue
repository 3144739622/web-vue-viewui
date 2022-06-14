<template>
  <PageHeader @on-tab-change="handleClickTab" :tab-list="tabsList" :tab-active-key="currentTab" hidden-breadcrumb/>
</template>
<script>
import { PageHeader } from "view-ui-plus";
import { mapGetters, mapMutations } from "vuex";
export default {
  name: "LayoutTabs",
  components: { PageHeader },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['tabsList', 'currentTab'])
  },
  methods: {
    ...mapMutations(['menu/SETTABSLIST']),
    handleClickTab(item) {
      this['menu/SETTABSLIST'](item);
      this.$router.push({ name: item.name })
    }
  }
};
</script>
<style lang="less" scoped>
.ivu-page-header{
  padding: 0 32px;
}
</style>