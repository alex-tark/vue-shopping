<template>
    <div>
        <el-row type="flex" justify="start">
            <el-menu :router="true" :default-active="activeIndex" class="flex w-100">
                <el-col class="flex flex-column w-70">
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

                <el-button @click="handleDialogOpen" class="cart w-10 hover-bg-white" icon="el-icon-goods">
                    Cart
                </el-button>
            </el-menu>
        </el-row>

        <el-dialog
                title="Cart"
                width="30%"
                :visible.sync="dialogVisible"
                @close="handleDialogClose">

            <Cart/>

            <span slot="footer" class="dialog-footer">
                <el-button type="warning" class="confirm-cart" @click="handleDialogSubmit">
                    <b>Confirm</b>
                </el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import Cart from './Cart.vue'

    export default {
        name: 'menu',
        components: {
            Cart
        },
        data() {
            return {
                activeIndex: '/',
                dialogVisible: false
            }
        },
        methods: {
            handleDialogOpen(index, item) {
                this.dialogVisible = true
            },
            handleDialogClose() {
                this.dialogVisible = false
            },
            handleDialogSubmit() {
                this.dialogVisible = false
            }
        }
    }
</script>

<style lang="scss">
    .cart {
        font-size: 1em;
        border: none;
    }

    .sign-button {
        font-size: 1em;
    }

    .el-dialog__body {
        padding: 0;
    }

    .confirm-cart {
        font-size: .8em;
    }
</style>
