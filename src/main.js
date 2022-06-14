import { createApp } from 'vue'

import 'view-ui-plus/dist/styles/viewuiplus.css'

import App from '@/App.vue'
import router from '@/router'
import '@/router/routerPermission'
import store from '@/store'
import '@/styles/index.less'

import directives from "@/directives";

const app = createApp(App)

app.use(store)
  .use(router)
  .use(directives)
  .mount('#app')
