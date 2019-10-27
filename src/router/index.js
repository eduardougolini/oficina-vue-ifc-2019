import Vue from 'vue';
import Router from 'vue-router';
import AddressPage from '../pages/AddressPage';
import CompletionPage from '../pages/CompletionPage';

Vue.use(Router);

export default new Router({
    routes: [
      {
        path: '/',
        name: 'AddressPage',
        component: AddressPage,
      },
      {
        path: '/completed',
        name: 'CompletionPage',
        component: CompletionPage,
      },
    ]
});