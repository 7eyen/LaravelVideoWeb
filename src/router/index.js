import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Videos from '@/components/Videos'
import Page from '@/components/Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack: false, //用于判断上一个页面是哪个
      }
    },
    {
      path: '/videos/:tid?',
      name: 'Videos',
      component: Videos,
      meta: {
        keepAlive: true, //此组件需要被缓存
        isBack: false, //用于判断上一个页面是哪个
      }
    },
    {
      path: '/page/:lessonId',
      name: 'Page',
      component: Page
    },
  ]
})
