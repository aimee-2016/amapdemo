// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

import VueAMap from 'vue-amap'
Vue.use(VueAMap)
// mapStyle: 'amap://styles/whitesmoke'
VueAMap.initAMapApiLoader({
	key: 'c15f11978d5c5ce0706cb55de6f2e28a',
	plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geocoder', 'AMap.Geolocation'],
	v: '1.4.5',
	uiVersion: '1.0',
})
import AMapLoader from '@amap/amap-jsapi-loader'
Vue.use(AMapLoader)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
