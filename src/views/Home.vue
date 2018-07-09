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
                        <el-input class="mt2" v-model="filters.price.to"></el-input>
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
    </div>
</template>

<script>
    import moment from 'moment'
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
                'list',
                'total',
            ]),
        },
        methods: {
            ...mapActions([
                'getList',
                'destroy',
                'filter',
                'create',
                'update'
            ]),
            formatDate({ date }) {
                return moment(date).format('DD.MM.YYYY')
            },
            handleSearch() {
                const params = Object.keys(this.filters).reduce((obj, k) => {
                    if (this.filters[k]) obj[k] = this.filters[k]
                    return obj
                }, {})
                this.filter(params)
            },
            handleClear() {
                this.filters = {
                    price: {
                        from: '',
                        to: ''
                    }
                }
                this.getList()
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
    }
</style>
