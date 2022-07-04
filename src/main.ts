import 'ant-design-vue/dist/antd.variable.less'

import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './router/router-guards'

createApp(App)
  .use(router)
  .use(createPinia())
  .mount('#app')
