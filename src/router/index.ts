import { createRouter, createWebHashHistory, RouterOptions } from "vue-router"
import { ElMessage } from 'element-plus'
const login = () => import("@/view/login.vue")
const article = () => import("@/view/article.vue")
const project = () => import("@/view/project.vue")
const intro = () => import("@/view/intro.vue")

const routes = [
  { path: "/", redirect: "/article" },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/article",
    name: "article",
    component: article,
  },
  {
    path: "/project",
    name: "project",
    component: project,
  },
  {
    path: "/intro",
    name: "intro",
    component: intro,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !localStorage.getItem('token')) {
    ElMessage.error('请先登录！')
    next({ name: 'login' })
  }
  else next()
})

export default router
