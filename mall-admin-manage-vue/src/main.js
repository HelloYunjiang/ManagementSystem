import Vue from 'vue'
import App from '../src/App'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts';

Vue.config.productionTip = false

//声明使用Element-UI
Vue.use(ElementUI);
// 
Vue.prototype.$echarts = echarts

new Vue({
  el: '#app',
  //配置路由
  router,
  render: h => h(App)
})
