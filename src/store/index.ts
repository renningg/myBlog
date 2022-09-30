import { createStore } from 'vuex'
import login from './modules/login.js'
// 创建一个新的 store 实例
const store = createStore({
    modules: {
        login,
    }
})
export default store;