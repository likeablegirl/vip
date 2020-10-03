import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import MintUI from 'mint-ui'
import router from './assets/js/router.js'
import { MessageBox } from 'mint-ui';
import Vuex from 'vuex'
// 每一个组件/实例对象都可以vuex
Vue.use(Vuex)

// 引入css
import '../node_modules/mint-ui/lib/style.css'
// 为每一个实例配置可以使用axios
Vue.prototype.$http = axios
// 为每一个实例配置可以使用路由
Vue.use(VueRouter);

// 引入css
import './assets/css/common.css'

// 引入数据
import store from './assets/js/data.js'

Vue.use(MintUI);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})