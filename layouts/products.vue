<template>
  <div>
    <nav
      class="navbar sticky top-0 z-[999] mt-2 flex items-center justify-between px-24 py-3 transition-all duration-300"
    >
      <div class="flex items-center justify-between gap-12">
        <NuxtLink to="/">
          <img
            src="/images/logo.png"
            alt=""
            class="w-[180px] scale-75 transition-all hover:scale-110"
          />
        </NuxtLink>
        <ul class="flex gap-8 text-[20px] font-semibold text-green-700">
          <li>
            <NuxtLink to="/" :class="styledMenuNav">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/products" :class="styledMenuNav">Menu</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/promo" :class="styledMenuNav">Promo</NuxtLink>
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
    <section class="mx-12 my-4">
      <UBreadcrumb divider="/" :links="links" />
    </section>
    <!-- slot content -->
    <keep-alive>
      <div>
        <router-view />
      </div>
    </keep-alive>

    <footer class="mt-12 grid grid-cols-4 bg-zinc-800 px-24 py-8 text-white">
      <h1 class="col-span-2">NuxtProject</h1>
      <div class="menu-list">
        <h1>Navigation</h1>
        <ul class="mt-2 flex flex-col gap-2">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/products">Products</NuxtLink></li>
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

<script setup>
const transition = "transition-all duration-300";
const links = [
  {
    label: "Lobby Restaurant",
    icon: "i-heroicons-home",
    to: "/",
    labelClass: `group hover:text-green-500 peer-hover:text-green-500 ${transition}`,
    iconClass: `iconBreadCrumb peer group-hover:bg-green-500 ${transition}`,
  },

  {
    label: "Food Category",
    icon: "i-heroicons-document-duplicate",
    iconClass: "iconBreadCrumb",
  },
];

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
  @apply text-yellow-500;
}
.scrolled {
  @apply bg-white shadow-md;
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
import type { UBreadcrumb } from '#build/components'; import type { UBreadcrumb
} from '#build/components'; import type { UBreadcrumb } from
'#build/components';
