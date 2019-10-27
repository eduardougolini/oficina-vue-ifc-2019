<template>
    <div>
        <h2>Cadastro de endereço</h2>
        <AddressForm />
    </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';

import AddressForm from '../components/AddressForm';

export default {
    name: 'AddressPage',
    components: {
        AddressForm
    },
    data() {
        return {
            cep: '',
            address: '',
            number: '',
            complement: '',
            district: '',
            city: '',
            state: '',
        };
    },
    validations: {
        cep: {
            required,
            minLength: minLength(9),
        },
        address: {
            required,
        },
        number: {
            required,
        },
        city: {
            required,
        },
        state: {
            required,
        },
    },
}
</script>

<style scoped>
h2 {
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 50px;
}
</style>