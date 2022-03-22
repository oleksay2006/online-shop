// import axios from 'axios';
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions/actions'
import mutations from './mutations/mutations'
import getters from './getters/getters'

Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
        isMobile: false,
        isDesktop: true
    },
    actions,
    mutations,
        // DELETE_CARD: (state, article) => {
        //     state.cart = state.cart.filter((t) => t.article !== article);
        // }
    getters,
});

export default store;