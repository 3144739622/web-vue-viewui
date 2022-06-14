const getters = {
  token: state => state.common.token,
  menuList: state => state.menu.menuList.filter(item => item.meta && item.meta.menuShow),
  currentMenu: state => state.menu.currentMenu,
  tabsList: state => state.menu.tabsList && state.menu.tabsList.map(item => {
    return { ...item, label: item.meta && item.meta.title }
  }) || [],
  currentTab: state => state.menu.currentTab,
  breadcrumbList: state => state.menu.breadcrumbList,
  openNames: state => state.menu.openNames
}
export default getters
