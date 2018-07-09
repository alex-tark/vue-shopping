<template>
    <div id="app">
        <div id="menu" class="flex w-100">
            <a class="flex flex-column tr w-60">
                <router-link to="/">Sign up</router-link>
            </a>

            <a class="flex flex-column tc w-20">
                <router-link to="/">Login</router-link>
            </a>

            <a class="flex flex-column tc w-20">
                Cart
            </a>
        </div>

        <router-view/>
    </div>
</template>

<script>
    export default {
        name: "App"
    }
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
    #menu {
        padding-top: 20px;
    }
</style>