import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});