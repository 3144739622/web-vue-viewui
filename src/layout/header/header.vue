<template>
  <Header class="layout-header-bar">
    <Icon
      @click="collapsedSider"
      :class="rotateIcon"
      type="md-menu"
      size="24"
    />
    <div class="breadcrumb-box">
      <Breadcrumb>
        <BreadcrumbItem
          v-for="item in breadcrumbList"
          :key="item.name"
          :to="item.path"
        >{{ item.meta&&item.meta.title || '' }}</BreadcrumbItem
        >
      </Breadcrumb>
    </div>
  </Header>
</template>
<script>
import { Header, Icon, Breadcrumb, BreadcrumbItem } from "view-ui-plus";
import { mapGetters } from "vuex";
export default {
  name: "LayoutHeader",
  components: { Header, Icon, Breadcrumb, BreadcrumbItem },
  props: {
    isCollapsed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['breadcrumbList']),
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  mounted() {
  },
  methods: {
    collapsedSider() {
      this.$emit("changeSider", !this.isCollapsed);
    }
  }
};
</script>
<style lang="less" scoped>
.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  height: 40px;
  line-height: 40px;
  .breadcrumb-box {
    display: inline-block;
    padding-left: 20px;
  }
}
</style>