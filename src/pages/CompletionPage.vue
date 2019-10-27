<template>
    <div>
        <h2>Endereço cadastrado</h2>
        <img src="../assets/like.svg" />
    </div>
</template>

<script>
export default {
    name: 'CompletionPage'
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