<script lang="ts" setup>
import { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <main class="flex h-dvh w-full flex-col items-center">
    <nav class="nav-styled">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/our_menu">Menu</NuxtLink>
      <NuxtLink to="/promo">Promo</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
    </nav>
    <div class="error-box">
      <img src="/images/logo.png" alt="" class="w-[500px]" />
      <h1 class="text-center text-6xl font-semibold">{{ error.statusCode }}</h1>
      <p class="w-fit">{{ error.message }}</p>
      <p>{{ error.description }}</p>
      <buttonPrimary>
        <NuxtLink to="/" class="w-fit">Go back Lobby</NuxtLink>
      </buttonPrimary>
    </div>
  </main>
</template>

<style scoped>
body,
html {
  @apply bg-zinc-50;
}

.nav-styled {
  @apply mt-16 flex w-fit gap-8 self-center rounded-lg border-2 border-green-600 px-12 py-4 font-semibold;
  > {
    @apply transition-all duration-200 hover:text-yellow-500;
  }
}
.error-box {
  @apply mt-24 flex w-fit flex-col items-center justify-center gap-4 rounded-md border border-zinc-300 p-4;
}
</style>
