<template>
  <div class="layout-box">
    <Layout>
      <Sider
        v-model="isCollapsed"
        :collapsed-width="78"
        hide-trigger
        collapsible
      >
        <LayoutMenu :is-collapsed="isCollapsed" ref="side1" />
      </Sider>
      <Layout>
        <LayoutHeader
          @changeSider="(e) => (isCollapsed = e)"
          :is-collapsed="isCollapsed"
        />
        <LayoutTabs />
        <Content
          :style="{
            margin: '20px',
            background: '#fff',
            height: '100%',
            overflow: 'hidden auto',
          }"
        >
          <RouterView />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import { Layout, Sider, Content } from "view-ui-plus";
import LayoutMenu from "./menu/menu.vue";
import LayoutHeader from "./header/header.vue";
import LayoutTabs from "./tabs/tabs.vue";
import RouterView from "./routerView/routerView.vue";
export default {
  components: {
    Layout,
    Sider,
    Content,
    LayoutMenu,
    LayoutHeader,
    LayoutTabs,
    RouterView
  },
  data() {
    return {
      isCollapsed: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.layout-box {
  height: 100%;
  overflow: hidden;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  .ivu-layout {
    height: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
