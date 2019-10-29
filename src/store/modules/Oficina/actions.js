import ViacepService from '../../../services/viacep.service';

import * as Mutations from './mutationTypes';

export default {

    async fetchCepData(context, cep) {
        try {
            const { data } = await ViacepService.getCepInfo(cep);
        
            return data;
        } catch (e) {
            /* eslint-disable-next-line */
            console.error(`Falha ao trazer dados do cep ${cep}`, e);
        }
    
        return {};
    },
    setAddressData({ commit }, data) {
        commit(Mutations.SET_ADDRESS_DATA, data);
    },
}