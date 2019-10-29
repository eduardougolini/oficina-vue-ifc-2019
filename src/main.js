import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});