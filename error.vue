<script lang="ts" setup >
import  { NuxtError } from "#app";

const props = defineProps({
  error: Object as () => NuxtError,
});
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <NuxtLink to="/">Go back homedasdasd </NuxtLink>
  </div>
</template>
