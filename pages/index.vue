<template>
  <main class="mt-4 grid grid-cols-2 gap-4 max-md:grid-cols-1">
    <div class="container relative mx-auto">
      <UCarousel
        ref="carouselRef"
        v-slot="{ item }"
        :items="itemsCarousel"
        :prev-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-left-20-solid',
          class: 'mt-[30%] max-md:mt-[110%] text-green-500',
        }"
        :next-button="{
          color: 'gray',
          icon: 'i-heroicons-arrow-right-20-solid',
          class:
            'mt-[30%] max-md:mt-[110%] left-0 w-fit ml-[64px] text-green-500',
        }"
        :ui="{
          item: 'basis-full',
        }"
        class="overflow-hidden rounded-xl"
        arrows
      >
        <img
          :src="item"
          class="h-[450px] w-full object-cover brightness-75"
          draggable="false"
        />
      </UCarousel>
    </div>

    <article class="grid gap-4">
      <div
        class="row-span-2 flex h-full w-full flex-col justify-between rounded-xl bg-neutral-800 px-4 py-2"
      >
        <h1 class="logo w-[60%]">
          <img src="/images/subway.png" alt="">
        </h1>
        <p class="text-white">
          Spoil your taste buds with a selection of sandwiches, salads, and
          other healthy dishes from Subway. Every bite is filled with unbeatable
          flavors and fresh ingredients made to order..
        </p>
      </div>

      <NuxtLink to="/products" class="row-span-1 grid grid-cols-2 gap-4">
        <div
          class="bg-hotdog1 group relative flex h-full border-spacing-y-6 cursor-pointer overflow-hidden rounded-xl bg-cover bg-center"
        >
          <div
            class="duration-600 absolute z-[2] h-full w-full bg-black/40 transition-all group-hover:bg-black/0"
          />
          <h1
            class="inset-0 z-10 m-auto text-2xl font-bold text-amber-300 transition-all group-hover:scale-110"
          >
            OUR MENU
          </h1>
        </div>
        <h2 class="rounded-xl bg-yellow-500">WAYAYA</h2>
      </NuxtLink>
    </article>
  </main>
</template>

<script setup>
import carousel1 from "/images/resto1.jpg";
import carousel2 from "/images/hotdog1.jpg";
import carousel3 from "/images/sandwich1.jpg";

const itemsCarousel = [
  "https://img.freepik.com/free-photo/smiley-teenagers-eating-burgers-outdoors-with-drink_23-2148666618.jpg?t=st=1717925858~exp=1717929458~hmac=d9affd7fcca57f4827e0d46189e7918256d17b4a06c184b8b7ae407011aa9500&w=1380",
  carousel1,
  carousel2,
  carousel3,
  "https://img.freepik.com/free-photo/vegan-sandwiches-lunch-beach_53876-74946.jpg?t=st=1717925813~exp=1717929413~hmac=b87d8533374394265a67b371b1a835b7d15c89358a048819b6c7bb5c419a81af&w=996",
];

const carouselRef = ref();

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return;

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0);
    }

    carouselRef.value.next();
  }, 3000);
});
</script>

<style scoped>
nav {
  li {
    color: rgb(255, 255, 255);
  }
}
</style>
import type { UButton } from '#build/components'; import type { UButton } from
'#build/components';
