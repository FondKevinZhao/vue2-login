import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/Layout.vue'
import Home from '../views/Home.vue'
const Login = () => import('../views/Login.vue')
const News = () => import('../views/News.vue')
const About = () => import('../views/About.vue')
const NotFound = () => import('../views/NotFound.vue')

Vue.use(VueRouter)

const routes = [
  {
    // path: '/',
    path: '', // 这里的斜线可以省略因为也是在根路径
    component: Layout,
    children: [
      {
        path: '/',
        component: Home,
        // 添加路由元信息
        meta: {
          isLogin: true
        }
      },
      {
        path: '/news',
        component: News,
        meta: {
          isLogin: true
        }
      },
      {
        path: '/about',
        component: About,
        meta: {
          isLogin: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: Login
  },
  // 不存在的路径 -- 重定向到 /login
  /* {
    path: '/*',
    redirect: '/login'
  } */
  
  // 不存在的路径 -- 跳转到 notfound 页面
  {
    path: '/*',
    // redirect: '/login'
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 1. 判断当前进入的组件是否需要登录
  if (to.meta.isLogin) {
    // 2. 判断用户是否登录。如果登录--直接进入。如果没登录--进入 /login 页面
    // 获取本地存储的user
    const user = localStorage.getItem('user');
    if (user) {
      next();
    } else {
      next('/login');
    }

  } else {
    // 不需要登录，那就直接放行
    next();
  }
})

export default router
