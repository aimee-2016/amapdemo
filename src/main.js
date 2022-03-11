// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import AMap from 'vue-amap';
Vue.use(AMap);
 
  // 初始化vue-amap
AMap.initAMapApiLoader({
  // 高德key
  key: 'b3ac16f85cfa3076d614bbd329b9f23d',
  // 插件集合 （插件按需引入）
  plugin: ['AMap.Geolocation']
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
