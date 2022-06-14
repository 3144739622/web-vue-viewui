import Layout from '@/layout';

const IndexRoute = {
  path: '/',
  name: 'root',
  component: Layout,
  meta: {
    menuShow: true,
    title: '欢迎',
    icon: 'ios-keypad'
  },
  children: [{
    path: '/',
    name: 'rootIndex',
    component: () => import('@/views/index'),
    meta: {
      title: '欢迎',
      icon: 'ios-keypad'
    }
  }]
}

export default IndexRoute;