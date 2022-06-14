/**
 *   左侧菜单 面包屑 顶部tabs标签
 */
import router from "@/router";
const defaultMenu = [{
  name: 'rootIndex',
  icon: 'ios-navigate',
  title: '欢迎',
  path: '/',
  meta: {
    title: '欢迎'
  }
}];

export default {
  namespaced: true, // 开启命名空间
  state: {
    currentMenu: "rootIndex", // 当前选中的菜单
    menuList: defaultMenu, // 菜单列表
    breadcrumbList: defaultMenu, // 面包屑
    currentTab: "", // 当前选中的tab
    tabsList: JSON.parse(sessionStorage.getItem('tabsList')) || [], // 顶部tab 默认取sessionStorage
    openNames: JSON.parse(sessionStorage.getItem('openNames')) || [] // 展开的菜单 默认取sessionStorage
  },
  mutations: {
    // 设置菜单列表
    SETMENULIST(state, menuList) {
      state.menuList = menuList;
      sessionStorage.setItem('menuList', JSON.stringify(menuList));
    },
    // 设置面包屑列表
    SETBREADCRUMBLIST(state, breadcrumbList) {
      state.breadcrumbList = breadcrumbList;
      sessionStorage.setItem('breadcrumbList', JSON.stringify(breadcrumbList));
    },
    // 设置顶部tab
    SETTABSLIST(state, tab) {
      const tabsList = state.tabsList;
      const tabs = tabsList.length ? state.tabsList.filter(item => item.name == tab.name) : [];
      if (!tabs || tabs.length == 0) {
        state.tabsList = [...state.tabsList, tab];
        sessionStorage.setItem('tabsList', JSON.stringify(state.tabsList || []));
      }
    },
    // 设置当前选中菜单
    SETCURRENTMENU(state, currentMenu) {
      state.currentMenu = currentMenu;
      sessionStorage.setItem('currentMenu', JSON.stringify(currentMenu));
    },
    // 设置当前选中tab
    SETCURRENTTAB(state, currentTab) {
      state.currentTab = currentTab;
      sessionStorage.setItem('currentTab', JSON.stringify(currentTab));
    },
    // 设置当前展开的菜单
    SETOPENNAMES(state, openNames) {
      state.openNames = openNames;
      sessionStorage.setItem('openNames', JSON.stringify(openNames));
    }
  },
  actions: {
    // 获取远程菜单列表
    async GETMENULIST({ commit }) {
      // 远程获取的菜单列表
      // 假如有全部权限
      let list = router.options.routes;
      commit('SETMENULIST', list);
      // 设置默认选中菜单
      // commit('SETCURRENTMENU', list[0].name);
      // 设置面包屑
      // commit('SETBREADCRUMBLIST', list);
      // 添加顶部tab 判断当前tabs缓存中是否已有当前路由
      // let sessionRoutes = state.tabsList.filter;
      // 设置顶部tab
      // commit('SETTABSLIST', list[0]);
    }
  }
}
