import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import { getField } from 'vuex-map-fields';

const state = {
    cep: '',
    address: '',
    number: '',
    complement: '',
    district: '',
    city: '',
    state: ''
};

Vue.use(Vuex);

const store = new Vuex.Store({
    state,
    actions,
    getters: {
        getField
    },
    mutations
});

export default store;