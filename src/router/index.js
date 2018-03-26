import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/pages/login'
import Register from '@/pages/register'
import setPassword from '@/pages/findPassword/setPassword'
import findPassword from '@/pages/findPassword/findPassword'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '快速注册'
      }
    },
    {
      path: '/setPassword',
      name: 'setPassword',
      component: setPassword,
      meta: {
        title: '设置密码'
      }
    },
    {
      path: '/findPassword',
      name: 'findPassword',
      component: findPassword,
      meta: {
        title: '找回密码'
      }
    },

  ]
})
