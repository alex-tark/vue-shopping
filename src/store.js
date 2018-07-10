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
    // Mock server request
    return new Promise(resolve => setTimeout(() => resolve(testData), 2000));
}

export default new Vuex.Store({
    state: {
        isSearching: false,
        searchQuery: '',
        list: [],
        filteredComponents: [],
        hasResults: false,
        activeComponent: null
    },

    getters: {
        list: (state) => state.list
    },

    mutations: {
        siteContent(state, data) {
            state.list = data
        }
    },
    actions: {
        getList({ commit }) {
            return getData().then(data => {
                commit('siteContent', data);
            });
        },

        filter({ commit }, params) {
            return api.get('', { params })
                .then(res => commit('getSiteContent', res))
                .catch(console.err) // eslint-disable-line no-console
        },
    },
})
