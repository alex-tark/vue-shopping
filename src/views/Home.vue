<template>
    <div class="home pv4">
        <div class="pa3 br3 bg-near-white w-100">
            <div class="flex">
                <div class="flex flex-column items-start w-25">
                    <span class="f6">Ключевые слова</span>

                    <el-input class="mt2" v-model="filters.search"></el-input>
                </div>

                <div class="flex flex-column items-start w-25 ml4">
                    <span class="f6">Сортировать по</span>

                    <el-select v-model="filters.field" placeholder="Select" class="mt2 w-100" clearable>
                        <el-option
                                v-for="(item, index) in ['title', 'author', 'description', 'date']"
                                :key="index"
                                :label="item"
                                :value="item">
                        </el-option>
                    </el-select>
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

        <el-table
                class="w-100 mt4"
                :data.sync="list">
            <el-table-column
                    align="left"
                    prop="title"
                    label="Заголовок">
            </el-table-column>
            <el-table-column
                    align="left"
                    prop="author"
                    label="Автор">
            </el-table-column>
            <el-table-column
                    align="left"
                    prop="description"
                    label="Описание">
            </el-table-column>
            <el-table-column
                    align="left"
                    prop="date"
                    label="Дата публикации">
                <template slot-scope="scope">
                    {{ formatDate(scope.row) }}
                </template>
            </el-table-column>
            <el-table-column
                    align="left"
                    prop="date"
                    label="Действия">
                <template slot-scope="scope">
                    <el-button
                            @click="handleDialogOpen(scope.$index, scope.row)">Редактировать</el-button>
                    <el-button
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">Удалить</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import moment from 'moment'
    import { mapGetters, mapActions } from 'vuex'
    import BookForm from '@/components/BookForm.vue'
    import Cart from '@/components/Cart.vue'

    export default {
        name: 'home',
        components: {
            BookForm,
            Cart
        },
        data() {
            return {
                dialogVisible: false,
                book: {},
                filters: {
                    search: ''
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
            handleDelete(index, v) {
                this.destroy(v.id)
                    .then(() => this.getList())
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
                    search: ''
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
    }
</style>
