<template>
  <h1>Prodouct details for {{ products.id }}</h1>
  <p>{{ products.description }}</p>
  <h2>{{ products.price }}</h2>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  layout: "products",
});
const uri = "https://fakestoreapi.com/products/" + id;

const { data: products } = await useFetch(uri, { key: id });
</script>

<style scoped></style>
