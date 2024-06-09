<template>
  <div>
    <div class="mx-24 grid grid-cols-5 gap-4">
      <div v-for="p in products">
        <CardProducts :products="p" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch("https://fakestoreapi.com/products");
</script>

<style scoped></style>
