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
            <NuxtLink to="/our_menu" :class="styledMenuNav">Menu</NuxtLink>
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

    <div>
      <slot />
    </div>

    <footer class="mt-16 bg-green-800">
      <section class="grid grid-cols-5 px-24 py-12 text-white">
        <img src="/images/subway.png" alt="" class="col-span-2 w-[200px]" />
        <div class="menu-list">
          <h1>Navigation</h1>
          <ul class="mt-2 flex flex-col gap-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Menu</NuxtLink></li>
          </ul>
        </div>
        <div class="menu-list">
          <h1>Follow Us</h1>
          <ul class="mt-2 flex flex-col gap-2">
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/about">About</NuxtLink></li>
            <li><NuxtLink to="/our_menu">Menu</NuxtLink></li>
          </ul>
        </div>
        <div class="flex flex-col gap-4">
          <h1 class="text-xl">Stay Connected</h1>
          <form action="" method="post" class="flex w-fit">
            <input
              type="email"
              name=""
              id=""
              placeholder="enter your email address"
              class="px-4 py-3 text-green-600"
            />
            <buttonPrimary
              styled="rounded-none bg-yellow-500 p-0 h-full w-max flex p-2"
            >
              <img src="/images/Send.svg" alt="" class="h-full w-full" />
            </buttonPrimary>
          </form>
        </div>
      </section>

      <div class="col-span-5 mt-4 flex justify-center bg-green-700 py-2">
        <h1 class="text-md w-fit text-white">
          © 2024 Subway IP LLC by PT Sari Sandwich Indonesia | All rights
          reserved. Designed by Rifqy Hamdani | Made with Nuxt3
        </h1>
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
  @apply border-b border-green-600 bg-white;
}
footer {
 
  section .menu-list {
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
