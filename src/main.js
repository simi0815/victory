import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/common.css'
import 'animate.css'//动画库
import Antd from 'ant-design-vue'// 引入Ant Design Vue组件
import 'ant-design-vue/dist/antd.css' // 引入Ant Design Vue样式
import './assets/css/myicon.css'//图标symbol文件
import  './assets/js/icon'
import './assets/js/live2d'//萌萌哒的少女
Vue.use(Antd) //挂载到vue中

Vue.config.productionTip = true//build的时候改成false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
