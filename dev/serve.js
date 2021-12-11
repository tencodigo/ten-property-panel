import Vue from 'vue';
import Dev from './serve.vue';
import form from 'ten-form'

Vue.config.productionTip = false;
Vue.use(form);

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
