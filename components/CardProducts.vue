<template>
  <div class="card bg-slate-400">
    <NuxtLink :to="`/products/${products.id} `">
      <div class="max-h-[300px] w-full overflow-hidden rounded-md bg-cyan-300">
        <img :src="products.image" alt="" class="h-max w-full object-contain" />
      </div>
      <h1>{{ products.title }}</h1>
    </NuxtLink>
    <UButton block>Lihat</UButton>
  </div>
</template>

<script setup>
const { products } = defineProps(["products"]);
</script>

<style scoped>
.card {
  @apply flex h-full max-h-fit w-[250px] flex-col justify-between rounded-lg p-2 shadow-md;
}
</style>
import type { UButton } from '#build/components';
