<template>
    <div id="menu">
        <el-row type="flex" justify="start">
            <el-menu router="true" :default-active="activeIndex" class="flex w-100">
                <el-col index="/" class="flex flex-column w-70">
                    <el-menu-item index="/" class="flex flex-column w-10 hover-bg-white sign-button active">
                        Home
                    </el-menu-item>
                </el-col>

                <el-menu-item index="sign-up" class="flex flex-column w-10 hover-bg-white sign-button">
                    Sign up
                </el-menu-item>

                <el-menu-item index="sign-in" class="flex flex-column w-10 hover-bg-white sign-button">
                    Log in
                </el-menu-item>

                <el-button @click="handleCart" class="cart w-10 hover-bg-white" icon="el-icon-goods">
                    Cart
                </el-button>
            </el-menu>
        </el-row>
    </div>
</template>

<script>
    export default {
        name: 'menu',
        props: {
        },
        data() {
            return {
                activeIndex: '/'
            }
        },
        methods: {
            handleCart() {
                console.log('handle cart!');
            }
        }
    }
</script>

<style lang="scss">
    #menu {
        .cart {
            font-size: 1em;
            border: none;
        }

        .sign-button {
            font-size: 1em;
        }
    }
</style>
