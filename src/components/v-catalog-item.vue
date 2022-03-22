<template>
  <div class="v-catalog-item">
    <img
      v-bind:src="require('../assets/images/' + product_data.image)"
      alt="Item"
    />
    <p class="name">{{ product_data.name }}</p>
    <p class="price">Price: {{ product_data.price }} грн</p>
    <button class="button" v-on:click="addToCart">Buy</button>
  </div>
</template>

<script>
export default {
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {},
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
  mounted() {
    this.$set(this.product_data, "quantity", 1);
  },
};
</script>
<style scoped>
.v-catalog-item img {
  width: 110px;
}
.v-catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: 16px;
  margin-bottom: 16px;
}
.button {
  padding: 8px 16px;
  background-color: #26ae68;
  color: #fff;
  outline: none;
  border: none;
  border-radius: 3px;
}
</style>