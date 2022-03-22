export default {
    SWITCH_MOBILE: (state) => {
        state.isMobile = true
        state.isDesktop = false
    },
    SWITCH_DESKTOP: (state) => {
        state.isMobile = false
        state.isDesktop = true
    },
    DELETE_CARD: (state, index) => {
        state.cart.splice(index, 1)
    },
    INCREMENT: (state, index) => {
        state.cart[index].quantity++
    },
    DECREMENT: (state, index) => {
        if (state.cart[index].quantity > 1) {
            state.cart[index].quantity--

        }
    },
    SET_PRODUCTS_TO_STATE: (state, products) => {
        state.products = products;
    },


    SET_CART: (state, product) => {
        if (state.cart.length) {
            let isProduct = false;
            state.cart.map(function(item) {
                if (item.article === product.article) {
                    isProduct = true;
                    item.quantity++;
                }
            })
            if (!isProduct) {
                state.cart.push(product)
            }
        } else {
            state.cart.push(product)
        }
    },
}