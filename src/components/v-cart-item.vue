<template>
  <div class="v-cart-item">
    <img
      v-bind:src="require('../assets/images/' + cart_item_data.image)"
      alt=""
      class="cart-item-img"
    />
    <div class="info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ cart_item_data.price }}</p>
      <p>{{ cart_item_data.article }}</p>
    </div>
    <div class="quantity">
      <p>Qty:</p>
      <span>
        <span v-on:click="decrementItem">-</span>
        {{ cart_item_data.quantity }}
        <span v-on:click="incrementItem">+</span>
      </span>
    </div>
    <button v-on:click="deleteItem">Delete</button>
  </div>
</template>

<script>
export default {
  name: "v-cart-item",
  components: {},
  props: {
    cart_item_data: {
      type: Object,
      default() {},
    },
  },
  // mounted() {
  //   this.$set(this.cart_item_data, "quantity", 1);
  // },
  methods: {
    deleteItem() {
      this.$emit("deleteItem");
      // console.log(this.cart_item_data);
    },
    decrementItem() {
      this.$emit("decrement");
    },
    incrementItem() {
      this.$emit("increment");
    },
  },
};
</script>
<style scoped>
.v-cart-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}
.cart-item-img {
  max-width: 50px;
}
</style>