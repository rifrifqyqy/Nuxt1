<template>
  <main class="mt-4 grid grid-cols-2 gap-4 max-md:grid-cols-1">
    <!-- carousel -->
    <HomeCarousel />
    <!-- carousel end -->
    <article class="grid gap-4">
      <div
        class="row-span-2 flex h-full w-full flex-col justify-between rounded-xl bg-neutral-800 px-4 py-2"
      >
        <h1 class="logo w-[60%]">
          <img src="/images/subway.png" alt="" />
        </h1>
        <p class="text-white">
          Spoil your taste buds with a selection of sandwiches, salads, and
          other healthy dishes from Subway. Every bite is filled with unbeatable
          flavors and fresh ingredients made to order..
        </p>
      </div>

      <section class="row-span-1 grid grid-cols-2 gap-4">
        <NuxtLink to="/our_menu">
          <div
            class="group relative flex h-full border-spacing-y-6 cursor-pointer overflow-hidden rounded-xl bg-hotdog1 bg-cover bg-center"
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
        </NuxtLink>
        <NuxtLink to="/promo">
          <div
            class="group relative flex h-full border-spacing-y-6 cursor-pointer overflow-hidden rounded-xl bg-resto1 bg-cover bg-center"
          >
            <div
              class="duration-600 absolute z-[2] h-full w-full bg-black/40 transition-all group-hover:bg-black/0"
            />
            <h1
              class="inset-0 z-10 m-auto text-2xl font-bold text-amber-300 transition-all group-hover:scale-110"
            >
              SUBWAY PROMO
            </h1>
          </div>
        </NuxtLink>
      </section>
    </article>
  </main>

  <section
    class="mx-auto mt-12 flex w-fit flex-wrap overflow-hidden rounded-lg border border-yellow-500 bg-white"
  >
    <HomeLabel imgSrc="/images/vege.png" styled="style">
      <template #text>
        Product from <br />
        Organic Farm
      </template>
    </HomeLabel>
    <HomeLabel imgSrc="/images/onlinefood.png" styled="style">
      <template #text>
        Online Deliveries <br />
        Available
      </template>
    </HomeLabel>
    <HomeLabel imgSrc="/images/onlinefood.png" styled="style">
      <template #text>
        Promotion of <br />
        The Week
      </template>
    </HomeLabel>
    <HomeLabel imgSrc="/images/onlinefood.png" styled="style">
      <template #text>
        Extra Size <br />
        Extra YUMMYY
      </template>
    </HomeLabel>
  </section>
  <div class="mt-12">
    <h1 class="styled h1">
      <span>#SUBWAYINDONESIA</span>
      PROMO
    </h1>
    <HomeCarouselPromo />
  </div>
</template>

<script>
const styled = "px-24";
</script>

<style scoped>
nav {
  li {
    color: rgb(255, 255, 255);
  }
}
.style {
  @apply w-max border-b-[3px] border-transparent px-12 py-6 hover:border-green-600 max-md:px-4 max-md:text-[14px];
}
.styled.h1 {
  @apply text-center text-3xl font-bold text-green-600;

  span {
    @apply italic;
  }
}
</style>
import type { UButton } from '#build/components'; import type { UButton } from
'#build/components';
