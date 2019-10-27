import Axios from "axios";

export default {
    getCepInfo(cep) {
        return Axios.get(`http://viacep.com.br/ws/${cep}/json/`);
    }
}