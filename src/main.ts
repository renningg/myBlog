import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import store from './store/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from './router'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
