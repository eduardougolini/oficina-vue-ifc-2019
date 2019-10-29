import actions from './actions';
import mutations from './mutations';

const state = {
    addressData: {
        cep: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
    }
};

export default {
    namespaced: true,
    state,
    actions,
    mutations
};