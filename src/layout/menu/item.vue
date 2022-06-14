<template>
  <div>
    <div v-for="(dom,index) in itemList" :key="index">
      <Submenu :name="dom.name" v-if="dom.children">
        <template #title>
          <Icon :type="dom.meta&&dom.meta.icon" />
          {{ dom.meta&&dom.meta.title }}
        </template>
        <Item :key="dom.name" :item-list="dom.children" v-if="dom.children&&dom.children.length" />
      </Submenu>
      <div v-else>
        <MenuItem @click="handleClickMenu(dom)" :name="dom.name">
        <Icon :type=" dom.meta&&dom.meta.icon" />
        <span>{{ dom.meta&&dom.meta.title }}</span>
      </MenuItem>
      </div>
    </div>
  </div>
</template>

<script>
import { MenuItem, Submenu, Icon } from "view-ui-plus";
// import { mapMutations } from "vuex";
export default {
  name: "Item",
  components: { MenuItem, Submenu, Icon },
  props: {
    itemList: {
      type: Array,
      default: () => { return [] }
    }
  },
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    // ...mapMutations(['menu/SETTABSLIST']),
    handleClickMenu(item) {
      // this['menu/SETTABSLIST'](item);
      this.$router.push({ name: item.name })
    }
  }
};
</script>
<style lang="less" scoped>
.ivu-menu {
  z-index: 0;
}
.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item {
  span {
    display: inline-block;
    overflow: hidden;
    width: 69px;
    text-overflow: ellipsis;
    white-space: nowrap;
    vertical-align: bottom;
    transition: width 0.2s ease 0.2s;
  }
  i {
    transform: translateX(0px);
    transition: font-size 0.2s ease, transform 0.2s ease;
    vertical-align: middle;
    font-size: 16px;
  }
}
</style>