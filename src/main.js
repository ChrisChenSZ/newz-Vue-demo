import Vue from 'vue'
import App from './App.vue'
//引用axios
import axios from 'axios'
//引用jsonp
import jsonp from 'jsonp'
import VueRouter from 'vue-router'
import routerConfig from './router.config'
import store from './store/index'
//引入过渡转动
import loading from './components/loading/index'
//引入全局过滤器
import filters from './components/filters'
//设置给Vue
Object.keys(filters).forEach(function (key) {
    Vue.filter(key,filters[key]);
});


Vue.use(loading);
Vue.use(VueRouter);

const router = new VueRouter({
  routes:routerConfig,
  mode: 'history', //切换路径模式，变成history模式
  scrollBehavior : ( ) => ({ y: 0 }), // 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置

});

//发送请求
axios.interceptors.request.use(function (config) {
    store.dispatch('LOADING_SHOW');
    return config;
},function (error) {
    return Promise.reject(error)
});
axios.interceptors.response.use(function (response) {
    store.dispatch('LOADING_HIDE');
    return response;
},function (error) {
    return Promise.reject(error)
})

Vue.prototype.$http = axios;
Vue.prototype.$jsonp = jsonp;
require('./assets/css/base.css');
new Vue({
  el: '#app',
    store,
    router,
  render: h => h(App)
})
