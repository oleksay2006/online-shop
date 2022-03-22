import axios from 'axios';

export default {
    GET_PRODUCTS_FROM_API({commit}) {
        return axios('http://localhost:3000/products', {
            method: 'GET'
        })
        .then(products => {
            commit('SET_PRODUCTS_TO_STATE', products.data);
            return products;
        })
        .catch((error) => {
            console.log(error);
            return error;
        })
    },

    SET_MOBILE({commit}) {
        commit('SWITCH_MOBILE')
    },
    SET_DESKTOP({commit}) {
        commit('SWITCH_DESKTOP')
    },
    ADD_TO_CART({commit}, product) {
        commit('SET_CART', product)
    },
    INCREMENT_CART_ITEM({commit}, index) {
        commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
        commit('DECREMENT', index)
    },
    DELETE({commit}, index) {
        commit('DELETE_CARD', index)
    }
}