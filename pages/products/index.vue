<template>
  <div>
    <div class="mx-24 grid grid-cols-4 gap-4">
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
import productsData from "~/data/menu.json";
const products = JSON.parse(JSON.stringify(productsData));

</script>

<style scoped></style>
