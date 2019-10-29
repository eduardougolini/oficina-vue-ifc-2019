import Vue from 'vue';

import * as Types from './mutationTypes';

export default {
    [Types.SET_ADDRESS_DATA](state, data) {
        for (const [key, value] of Object.entries(data)) {
            Vue.set(state.addressData, key, value);
        }
    },
}