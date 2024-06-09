<template>
  <div v-if="product">
    <h1>Product details for {{ product.id }} {{ product.title }}</h1>
    <img :src="product.image" alt="" />
    <p>{{ product.description }}</p>
    <h2>{{ formattedPrice }}</h2>
  </div>
  <div v-else>
    <p>Product not found</p>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import productsData from "~/data/menu.json";

const route = useRoute();
const id = Number(route.params.id); // Convert id to a number
const products = JSON.parse(JSON.stringify(productsData));
const product = ref(products.find((product) => product.id === id));

// Compute formatted price
const formattedPrice = computed(() => {
  if (product.value) {
    return `$${product.value.price.toFixed(2)}`;
  }
  return "";
});
</script>

<style scoped></style>
