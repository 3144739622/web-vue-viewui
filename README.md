# managerweb
```
开发前请阅读！！！
```

## Project setup
```
cnpm install
```

### Compiles and hot-reloads for development
```
npm run serve
npm run serve:pro
npm run serve:test
```

### Compiles and minifies for production
```
npm run build
npm run build:dev
npm run build:test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### UI框架
```
使用 View Design
官网地址 https://www.iviewui.com/view-ui-plus/component/base/button
选择了按需引入方式

```

### style
```
使用Less对样式进行预处理
```

### 图片图标
```
图片图标文件尽量使用网络存储
图片使用 <img v-lazy="img.src" />
官方文档地址 https://www.npmjs.com/package/vue-lazyload
```

### 请求拦截提示
```
data中私有字段
requestToast => 是否在code != 正确码 时隐藏 toast提示
requestLoading => 是否隐藏请求中loading
```

### 脚手架

```
由于vue3底层性能更优，而语法考虑到团队普遍掌握熟练度不高依旧沿用vue2语法
```

### VUEX

```
若将vue创建 store 的时候传入 strict: true, 开启严格模式，那么任何修改state的操作，只要不经过 mutation 的函数，vue 就会抛出错误
使用 dispatch 和 commit 的区别在于，前者是异步操作，后者是同步操作，所以 一般情况下，推荐直接使用 commit
```
