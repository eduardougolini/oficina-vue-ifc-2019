<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
export default {
    name: "app"
};
</script>

<style>
* {
    font-family: 'Arimo', sans-serif;
    --primary-color: #42b983;
    --bg-color: #F3F9F9;
}
body {
    background: var(--bg-color);
}
</style>