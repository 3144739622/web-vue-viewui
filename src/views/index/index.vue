<template>
  <div class="index-box">
    <img v-lazy="img" />
    <div v-hasPerm="'test.add'">{{ title }} 我是权限</div>
    <div v-hasPerm="'test.delete'">我是删除</div>
    <Button @click="$router.push({ name: 'homeList' })">去首页</Button>
    <Button @click="showImg = !showImg"> 显示动画 </Button>
    <transition name="myfade">
      <div v-show="showImg">
        首页内容动画
        <img v-lazy="img" />
      </div>
    </transition>
    <div>
      <p>验证代码块层级</p>
      <p>验证</p>
      <p>验证</p>
      <div></div>
    </div>
  </div>
</template>

<script>
import { Button } from 'view-ui-plus'
import { login } from '@/service/mine/index.js'

export default {
  components: { Button },
  data() {
    return {
      img: 'https://qiniu.pisenpower.com/ty2_gz.png',
      showImg: false,
      title: '222'
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // this.login()
    },
    login() {
      login({ systemType: 25, requestLoading: true }).then(res => {
        console.log('login', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@keyframes moveanimation {
  0% {
    width: 0;
    height: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    width: 500px;
    height: 500px;
    opacity: 0;
  }
}
.index-box {
  padding: 24px;
  .myfade-enter-to,
  .myfade-leave-to {
    // animation: moveanimation 3s 1s linear;
    animation: moveanimation 5s linear infinite;
    animation-delay: calc(0.5s * var(--i));
  }
}
</style>
