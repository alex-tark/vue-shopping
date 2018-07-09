<template>
    <div class="error">
        <h1>Page not found!</h1>
        <router-link to="/">Back</router-link>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .error {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>