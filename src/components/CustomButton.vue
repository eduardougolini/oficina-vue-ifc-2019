<template>
    <button type="submit" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script>
export default {
    name: 'NextButton',
    props: {
        text: {
            type: String,
            required: true,
        }
    }
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