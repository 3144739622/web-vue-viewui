import Layout from '@/layout';

const HomeRoute = {
  path: '/home',
  name: 'home',
  component: Layout,
  redirect: '/home/list',
  meta: {
    menuShow: true,
    title: '首页',
    icon: 'ios-keypad'
  },
  children: [{
    path: 'list',
    name: 'homeList',
    component: () => import('@/views/home/list'),
    meta: {
      title: '首页列表',
      icon: 'ios-keypad'
    }
  }, {
    path: 'edit',
    name: 'homeEdit',
    component: () => import('@/views/home/edit'),
    meta: {
      title: '列表编辑',
      icon: 'ios-keypad'
    }
  }]
}

export default HomeRoute;