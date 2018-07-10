import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const testData = {
    "global": {
        "project_name": {
            "text": "Project title"
        },
        "search": {
            "form_placeholder": {
                "text": "Search..."
            },
            "no_results": {
                "text": "Sorry no results for '{0}' was found"
            },
            "search_text": {
                "text": "You are searching for '{0}' and there are {1} found"
            }
        }
    }
};

function getData() {
    // Mock server request
    return new Promise(resolve => setTimeout(() => resolve(testData), 2000));
}

export default new Vuex.Store({
    state: {
        isSearching: false,
        searchQuery: '',
        siteData: {},
        filteredComponents: [],
        hasResults: false,
        activeComponent: null
    },

    getters: {
        siteData: (state) => state.siteData
    },

    mutations: {
        siteContent(state, data) {
            state.data = data
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
