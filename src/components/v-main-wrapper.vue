<template>
  <div class="v-main-wrapper">
    <!-- <h2>Online shop</h2> -->
    <!-- <vCatalog />
    <vCart v-if="CART.length" v-bind:card_data="CART" /> -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import vCatalog from "./v-catalog.vue";
// import vCart from "./v-cart.vue";
// import { mapGetters } from "vuex";

export default {
  name: "v-main-wrapper",
  // components: {
  //   vCatalog,
  //   vCart,
  // },
  // computed: {
  //   ...mapGetters(["CART"]),
  // },
};
</script>
<style scoped>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>