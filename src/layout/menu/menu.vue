<template>
  <Menu :class="menuitemClasses" :active-name="currentMenu" :open-names="openNames" ref="side_menu"
        theme="dark" width="auto">
    <Item :item-list="menuList" />
  </Menu>
</template>
<script>
import { Menu } from "view-ui-plus";
import { mapGetters, mapActions } from "vuex";
import Item from "./item.vue";
export default {
  name: "LayoutMenu",
  components: { Menu, Item },
  props: {
    isCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['menuList', 'openNames']),
    ...mapGetters(['currentMenu']),
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    }
  },
  watch: {
    openNames() {
      this.$nextTick(() => {
        this.$refs.side_menu.updateOpened();
      })
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    ...mapActions(['menu/GETMENULIST']),
    init() {
      this['menu/GETMENULIST']();
      this.$nextTick(() => {
        this.$refs.side_menu.updateOpened();
      })
    }
  }
};
</script>
<style lang="less" scoped>
.collapsed-menu {
  span {
    width: 0px;
    transition: width 0.2s ease;
  }
  i {
    transform: translateX(5px);
    transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
    vertical-align: middle;
    font-size: 22px;
  }
}
</style>