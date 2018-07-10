import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testData = [
    {
        "id": 1,
        "name": "Some product",
        "color": "Red",
        "date": "1997-10-03",
        "price": 2.55,
        "rating": 4.76,
        "inStock": true,
        "image": "https://dummyimage.com/200x200/fff/000000.png"
    },
    {
        "id": 2,
        "name": "Other product",
        "color": "White",
        "date": "1997-10-03",
        "price": 2.55,
        "rating": 4.76,
        "inStock": false,
        "image": "https://dummyimage.com/200x200/fff/000000.png"
    },
    {
        "id": 2,
        "name": "Some product",
        "color": "Green",
        "date": "1997-10-03",
        "price": 2.55,
        "rating": 4.76,
        "inStock": true,
        "image": "https://dummyimage.com/200x200/fff/000000.png"
    }
]

function getData() {
    // axios?
    return new Promise(resolve => resolve(testData));
}

export default new Vuex.Store({
    state: {
        isSearching: false,
        searchQuery: '',
        list: [],
        filteredComponents: [],
        hasResults: false,
        activeComponent: null,
        cartItems: [],
        cartItemsNumber: 0
    },

    getters: {
        list: (state) => state.list,
        cartItems: (state) => state.cartItems,
        cartItemsNumber: (state) => state.cartItemsNumber
    },

    mutations: {
        siteContent(state, data) {
            state.list = data
        },

        addToCartContent(state, product) {
            state.cartItems.push(product)
            state.cartItemsNumber++
        }
    },

    actions: {
        getList({ commit }) {
            return getData().then(data => {
                commit('siteContent', data);
            });
        },

        addToCart({ commit }, product) {
            commit('addToCartContent', product)
        }
    },
})
