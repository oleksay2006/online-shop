<template>
  <div class="v-cart">
    <router-link :to="{ name: 'catalog' }">
      <div class="link_to_cart">Back to Catalog</div>
    </router-link>
    <h1>Cart</h1>
    <p v-if="!CART.length">There are no products in cart!</p>
    <vCartItem
      v-for="(item, index) in CART"
      :key="item.article"
      :cart_item_data="item"
      v-on:deleteItem="deleteItem(index)"
      @increment="increment(index)"
      @decrement="decrement(index)"
    />
    <div class="total">
      <p class="total_name">Total:</p>
      <p>{{ cartTotalCost }}</p>
    </div>
  </div>
</template>

<script>
import vCartItem from "./v-cart-item.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "v-cart",
  components: {
    vCartItem,
  },
  props: {
    card_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    ...mapMutations(["DELETE_CARD"]),
    ...mapActions(["INCREMENT_CART_ITEM", "DECREMENT_CART_ITEM", "DELETE"]),
    deleteItem(index) {
      this.DELETE(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    },
  },
  computed: {
    ...mapGetters(["CART"]),
    cartTotalCost() {
      let result = [];
      console.log(this.card_data);
      if (this.card_data.length) {
        for (let item of this.card_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function (sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style scoped>
.v-cart {
  margin-bottom: 100px;
}
.total {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  background-color: #26ae68;
  color: #fff;
  font-size: 20px;
}
.total_name {
  margin-right: 16px;
}
.link_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid 1px #aeaeae;
}
</style>