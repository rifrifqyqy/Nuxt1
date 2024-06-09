<template>
  <div>
    <nav
      class="sticky top-0 flex items-center justify-between border-b-2 border-green-700 bg-green-500 px-12 py-3"
    >
      <div class="flex items-center justify-between gap-12">
        <NuxtLink to="/" class="text-[24px] font-semibold"
          >NuxtProducts</NuxtLink
        >
      </div>

      <UButton
        class="rounded-lg bg-neutral-700 px-5 text-[20px] hover:bg-neutral-700/80"
        >Login</UButton
      >
    </nav>
    <section class="mx-16 mt-4">
      <UBreadcrumb divider="/" :links="links" />
    </section>
    <!-- slot content -->
    <div>
      <slot />
    </div>

    <footer class="grid grid-cols-4 bg-zinc-800 px-24 py-8 text-white">
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
    label: "Home",
    icon: "i-heroicons-home",
    to: "/",
    labelClass: `group hover:text-green-500 peer-hover:text-green-500 ${transition}`,
    iconClass: `iconBreadCrumb peer group-hover:bg-green-500 ${transition}`,
  },

  {
    label: "Products",
    icon: "i-heroicons-circle-stack",
    iconClass: "iconBreadCrumb",
  },
];
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(255, 255, 255);
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
