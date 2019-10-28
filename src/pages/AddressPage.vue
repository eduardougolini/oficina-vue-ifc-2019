<template>
    <div>
        <h2>Cadastro de endereço</h2>
        <AddressForm />
    </div>
</template>

<script>
import AddressForm from '../components/AddressForm';

export default {
    name: 'AddressPage',
    components: {
        AddressForm
    }
}
</script>

<style scoped>
h2 {
    color: var(--primary-color);
    text-align: center;
    margin-bottom: 50px;
}
</style>