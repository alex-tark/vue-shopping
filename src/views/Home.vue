<template>
    <div class="home pv4">
        <div class="pa3 br3 bg-near-white w-100">
            <div class="flex">
                <div class="flex w-55">
                    <div class="flex flex-column items-start">
                        <span class="search-label">Price from</span>
                    </div>

                    <div class="flex flex-column items-start w-20">
                        <el-input class="mt2" v-model="filters.price.from"></el-input>
                    </div>

                    <div class="flex flex-column items-start">
                        <span class="search-label">to</span>
                    </div>

                    <div class="flex flex-column items-start w-20">
                        <el-input class="mt2 add-to-cart" v-model="filters.price.to"></el-input>
                    </div>
                </div>
            </div>

            <div class="flex">
                <el-button
                        class="mt3"
                        type="primary"
                        @click="handleSearch"
                        icon="el-icon-search">Find</el-button>
                <el-button
                        class="mt3"
                        type="warning"
                        plain
                        @click="handleClear"
                        icon="el-icon-close">Clear</el-button>
            </div>
        </div>

        <ul class="w-100 products">
            <li v-for="product in list" class="product" :key="product">
                <el-row type="flex" justify="start">
                    <el-col class="pa1" :span="6">
                        <img :src="product.image">
                    </el-col>

                    <el-col class="pa1 tl" :span="6">
                        <p>{{ product.name }}</p>
                        <p>{{ product.color }}</p>
                    </el-col>

                    <el-col class="pa1 tl" :span="6">
                        <p>{{ product.date }}</p>
                        <p>{{ formatter(product.inStock) }}</p>
                    </el-col>

                    <el-col class="pa1" :span="6">
                        <p>{{ product.price }} $</p>
                        <el-button type="success" :disabled="!product.inStock"
                                   @click="handleAddToCart(product)" class="add-to-cart">BUY ONE!
                        </el-button>
                    </el-col>
                </el-row>
            </li>
        </ul>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'home',
        data() {
            return {
                dialogVisible: false,
                filters: {
                    price: {
                        from: '',
                        to: ''
                    }
                }
            }
        },
        computed: {
            ...mapGetters([
                'list'
            ]),
        },
        methods: {
            ...mapActions([
                'getList',
                'addToCart'
            ]),

            handleSearch() {
                const params = Object.keys(this.filters).reduce((obj, k) => {
                    if (this.filters[k]) obj[k] = this.filters[k]
                    return obj
                }, {})
            },

            formatter(inStock) {
                return inStock ? 'In stock' : 'Out of stock'
            },

            handleClear() {
                this.filters = {
                    price: {
                        from: '',
                        to: ''
                    }
                }
                this.getList()
            },

            handleAddToCart(product) {
                this.addToCart(product)
            }
        },
        created() {
            this.getList()
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
        align-items: start;

        h1 {
            margin-bottom: 3rem;
        }

        .search-label {
            margin-top: 15px;
            padding-left: 20px;
            padding-right: 20px;
        }

        .products {
            list-style: none;
            padding-left: 0;

            .product {
                padding-left: 0;
                border: 1px solid #ddd;
                margin-bottom: 20px;

                p {
                    margin-bottom: 20px;
                    padding-top: 20px;
                }

                .add-to-cart {
                    margin-top: 15px;
                }
            }
        }
    }
</style>
