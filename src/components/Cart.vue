<template>
    <div class="pa4">
        <ul class="w-100 products">
            <li v-for="product in items" class="product pa1" :key="product">
                <h5 class="ma0 pa0 tl">{{ product.name }}</h5>

                <el-row type="flex" justify="start">
                    <el-col class="pa1" :span="6">
                        <img :src="product.image">
                    </el-col>

                    <el-col class="pa1 ma3 tl" :span="3">
                        <p>{{ product.color }}</p>
                    </el-col>

                    <el-col class="pa1 ma3 tl" :span="6">
                        <p>{{ product.date }}</p>
                    </el-col>

                    <el-col class="pa1 ma3" :span="6">
                        <p>{{ product.price }} $</p>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props: {
            products: {
                type: Array,
                required: true
            }
        },
        computed: {
            items() {
                return this.products
            }
        }
    }
</script>

<style lang="scss">
    .products {
        padding-left: 0;
        list-style: none;

        .product {
            border-bottom: 1px solid #eee;
            p {
                font-size: .8em;
            }
        }
    }
</style>
