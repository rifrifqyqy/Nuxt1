<template>
  <div>
    <nav
      class="navbar sticky top-0 z-[999] mt-2 flex items-center justify-between rounded-xl px-24 py-3 transition-all duration-300"
    >
      <div class="flex items-center justify-between gap-12">
        <NuxtLink to="/">
          <h1 class="text-[24px] font-semibold text-green-500">NuxtProject</h1>
        </NuxtLink>
        <ul class="flex gap-8 text-[20px] font-semibold text-green-700">
          <li>
            <NuxtLink to="/" :class="styledMenuNav">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" :class="styledMenuNav">Menu</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" :class="styledMenuNav">Promo</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" :class="[styledMenuNav]">About</NuxtLink>
          </li>
        </ul>
      </div>

      <UButton
        class="rounded-lg bg-green-700 px-5 text-[20px] text-yellow-300 ring-inset ring-green-400 hover:bg-green-700/80 active:ring-2"
        >Order Now</UButton
      >
    </nav>

    <div class="mx-24">
      <slot />
    </div>

    <footer class="mt-16 grid grid-cols-4 bg-green-800 px-24 py-8 text-white">
      <h1 class="col-span-2">NuxtProject</h1>
      <div class="menu-list">
        <h1>Navigation</h1>
        <ul class="mt-2 flex flex-col gap-2">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Menu</NuxtLink></li>
        </ul>
      </div>
      <div class="menu-list">
        <h1>Follow Us</h1>
        <ul class="mt-2 flex flex-col gap-2">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<!-- el scripto -->
<script setup>
const styledMenuNav =
  "hover:text-amber-400 transition-all duration-300 hover:border-b-2 border-amber-400";

import { onMounted, onUnmounted } from "vue";

const handleScroll = () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.router-link-exact-active {
  @apply text-amber-400;
}
.scrolled {
  @apply bg-white;
}
footer {
  h1 {
    font-size: 32px;
    font-weight: 600;
  }
  .menu-list {
    h1 {
      font-size: 20px;
      font-weight: 600;
    }
  }
}
</style>
