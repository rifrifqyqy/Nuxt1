<template>
  <div class="card bg-zinc-50">
    <NuxtLink :to="`/products/${products.id} `">
      <div class="h-[200px] w-full overflow-hidden rounded-md">
        <img :src="products.image" alt="" class="h-full w-full object-cover" />
      </div>
      <div class="body mt-2 flex flex-col">
        <h1 class="title">{{ products.title }}</h1>
        <p class="line-clamp-2">{{ products.description }}</p>
        <h2 class="price">{{ formatPrice(products.price) }}</h2>
      </div>
    </NuxtLink>
    <UButton block class="mt-4 text-xl bg-green-600 hover:bg-green-600/80">Lihat</UButton>
  </div>
</template>

<script setup>
const { products } = defineProps(["products"]);
const formatPrice = (price) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};
</script>

<style scoped>
.card {
  @apply flex h-full max-h-fit w-[260px] flex-col justify-between rounded-lg p-2 shadow-md;

  .title {
    @apply text-xl font-semibold text-green-600;
  }
  .price {
    @apply text-xl font-bold text-yellow-500;
  }
}
</style>
import type { UButton } from '#build/components';
