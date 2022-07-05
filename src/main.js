import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import axios from 'axios'
// axios默认拼接根地址
axios.defaults.baseURL = "http://www.liulongbin.top:3006"
// Vue 原型挂载 axios 方便在所有组件中调用（this.$axios）
Vue.prototype.$axios = axios

new Vue({
  // el: "#app", // vue实例编译后的模板挂载到index.html的id叫app的标签上
  render: h => h(App),
}).$mount("#app")
