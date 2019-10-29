<template>
  <form>
    <CustomInput
      v-model="cep"
      :name="'CEP'"
      :inputType="'tel'"
      :customClasses="{
            'error': $v.cep.$dirty
                && $v.cep.$invalid
            }"
      :format="'#####-###'"
    />
    <CustomInput
      v-model="address"
      :name="'Endereço'"
      :customClasses="{
          'error': $v.address.$dirty
            && $v.address.$invalid
        }"
    />
    <CustomInput
      v-model="number"
      :name="'Número'"
      :customClasses="{
          'error': $v.number.$dirty
            && $v.number.$invalid
        }"
    />
    <CustomInput v-model="complement" :name="'Complemento'" :isRequired="false" />
    <CustomInput v-model="district" :name="'Bairro'" :isRequired="false" />
    <CustomInput
      v-model="city"
      :name="'Cidade'"
      :customClasses="{
          'error': $v.city.$dirty
            && $v.city.$invalid
        }"
    />
    <CustomInput
      v-model="state"
      :name="'Estado'"
      :customClasses="{
          'error': $v.state.$dirty
            && $v.state.$invalid
        }"
    />
    <NextButton @click="goNext" />
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import { mapActions } from 'vuex';

import CustomInput from "./CustomInput";
import NextButton from "./NextButton";
import { OFICINA } from '../store/modules';

export default {
    name: "AddressForm",
    components: {
        CustomInput,
        NextButton
    },
    data() {
        return {
            cep: "",
            address: "",
            number: "",
            complement: "",
            district: "",
            city: "",
            state: ""
        };
    },
    methods: {
        ...mapActions(OFICINA, [
            'fetchCepData',
        ]),
        goNext() {
            this.$v.$touch();

            if (! this.$v.$invalid) {
                this.$router.push({ name: 'CompletionPage' });
            }
        },
        getFormattedCep(cep) {
            return cep.replace('-', '');
        },
    },
    watch: {
        async cep(val) {
            const formattedCep = this.getFormattedCep(val);

            if (formattedCep.length !== 8) {
                return;
            }

            const cepInfo = await this.fetchCepData(this.cep);
            
            this.address = cepInfo.logradouro;
            this.city = cepInfo.localidade;
            this.state = cepInfo.uf;
            this.district = cepInfo.bairro;
            this.complement = cepInfo.complemento;
        }
    },
    validations: {
        cep: {
            required,
            minLength: minLength(9)
        },
        address: {
            required
        },
        number: {
            required
        },
        city: {
            required
        },
        state: {
            required
        }
    }
};
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>