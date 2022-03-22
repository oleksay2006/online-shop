<template>
  <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: { card_data: CART } }">
      <div class="link_to_cart">Cart: {{ CART.length }}</div>
    </router-link>
    <h1>Catalog</h1>
    <div class="filters">
      <v-select
        :selected="selected"
        :options="categories"
        @select="sortByCategories"
        :isExpanded="IS_DESKTOP"
      />
      <div class="range-slider">
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          v-model.number="minPrice"
          @change="setRangeSlider"
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          v-model.number="maxPrice"
          @change="setRangeSlider"
        />
      </div>
      <div class="range-values">
        <p>Min: {{ minPrice }}</p>
        <p>Max: {{ maxPrice }}</p>
      </div>
    </div>
    <div class="list">
      <vCatalogItem
        v-for="product in filteredProducts"
        :key="product.article"
        v-bind:product_data="product"
        v-on:addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import vCatalogItem from "./v-catalog-item.vue";
import { mapActions, mapGetters } from "vuex";
import vSelect from "./v-select";

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
    vSelect,
  },
  data() {
    return {
      categories: [
        { name: "Все", value: "ALL" },
        { name: "Мужские", value: "м" },
        { name: "Женские", value: "ж" },
      ],
      selected: "Все",
      sortedProducts: [],
      minPrice: 0,
      maxPrice: 10000,
    };
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let tmp = this.maxPrice;
        this.maxPrice = this.minPrice;
        this.minPrice = tmp;
      }
      this.sortByCategories();
    },
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategories(category) {
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS];
      this.sortedProducts = this.sortedProducts.filter(function (item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice;
      });
      if (category) {
        this.sortedProducts = this.sortedProducts.filter(function (item) {
          vm.selected === category.name;
          return item.category === category.name;
        });
      }
    },
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then((response) => {
      if (response.data) {
        console.log("Data arrived!");
        this.sortByCategories();
      }
    });
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART", "IS_MOBILE", "IS_DESKTOP"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    },
  },
};
</script>
<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.link_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: solid 1px #aeaeae;
}

.filters {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.range-slider {
  width: 200px;
  margin: auto 16px;
  text-align: center;
  position: relative;
}
.range-slider svg,
.range-slider input[type="range"] {
  position: absolute;
  left: 0;
  bottom: 0;
}

input[type="range"]::-webkit-slider-thumb {
  z-index: 2;
  position: relative;
  top: 2px;
  margin-top: -7px;
}
</style>