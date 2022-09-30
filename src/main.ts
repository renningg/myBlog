import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import store from './store/index.js'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router'
const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')
