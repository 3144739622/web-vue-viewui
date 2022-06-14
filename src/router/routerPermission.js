import router from '@/router'
import store from '@/store'

// const LOGIN_PAGE_NAME = 'login'
// const whitePath = name => [LOGIN_PAGE_NAME, 'index', 'home', 'homeList'].includes(name) // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  let data = JSON.parse(JSON.stringify(to));
  document.title = `闪葱共享快充-${data.meta && data.meta.title}` || '闪葱共享快充管理后台';
  store.commit('menu/SETBREADCRUMBLIST', data.matched); // 设置面包屑为当前路由
  store.commit('menu/SETCURRENTMENU', data.name); // 设置当前选中的菜单
  store.commit('menu/SETCURRENTTAB', data.name); // 设置当前选中的tab
  store.commit('menu/SETTABSLIST', data); // 校验是否添加进tabs列表中
  store.commit('menu/SETOPENNAMES', [data.matched[0].name]); // 设置当前展开的菜单
  // const token = store.getters.token
  // if (!token && !whitePath(data.name)) {
  //   // 未登录且要跳转的页面不是白名单页面
  //   next({
  //     name: LOGIN_PAGE_NAME // 跳转到登录页
  //   })
  // } else if (!token && data.name === LOGIN_PAGE_NAME) {
  //   // 未登陆且要跳转的页面是登录页
  //   next()
  // } else if (token && data.name === LOGIN_PAGE_NAME) {
  //   next({
  //     name: 'index'
  //   })
  // } else {
  next()
  // }
})
