<template>
    <button type="submit" @click="$emit('click')">
        Adicionar
    </button>
</template>

<script>
export default {
    name: 'NextButton'
}
</script>

<style scoped>
button {
    background-color: var(--primary-color);
    border-radius: 5px;
    border: none;
    color: white;
    margin-top: 40px;
    padding: 15px 30px;
    width: 80%;
}
</style>