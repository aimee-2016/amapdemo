import Vue from 'vue'
import Router from 'vue-router'
import amap from '@/views/amap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'amap',
      component: amap
    }
  ]
})
