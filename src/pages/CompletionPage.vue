<template>
    <div>
        <h2>Endereço cadastrado</h2>
        <img src="../assets/like.svg" />
        <CustomButton @click="goBack" :text="'Voltar'" />
    </div>
</template>

<script>
import CustomButton from '../components/CustomButton';

export default {
    name: 'CompletionPage',
    components: {
        CustomButton
    },
    methods: {
        goBack() {
            this.$router.push({ name: 'AddressPage' });
        }
    }
}
</script>

<style scoped>
    h2 {
        color: var(--primary-color);
        text-align: center;
    }

    div {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    img {
        width: 30%;
    }
</style>