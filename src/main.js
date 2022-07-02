import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';


Vue.config.productionTip = false;
// 定义全局过滤器
Vue.filter('toLowerCase', (val) => {
  return val.toLowerCase();
});

Vue.filter('toReverse', (val, split) => {
  return val
    .split('')
    .reverse()
    .join(split || '');
});
// =======================================================
new Vue({
  render: (h) => h(App),
}).$mount('#app');
