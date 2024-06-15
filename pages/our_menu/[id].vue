<template>
  <Head>
    <Title>Subway | {{ product.title }}</Title>
    <Meta name="description" :content="product.description" />
  </Head>

  <section class="mt-12 grid grid-cols-2 border-b-2 pb-8">
    <aside class="">
      <div class="aspect-[3/2] max-w-[600px]">
        <img :src="product.image" alt="" class="h-full w-full object-contain " />
      </div>
    </aside>
    <main>
      <div
        class="mx-24 flex w-[500px] flex-col gap-4 rounded-sm border border-zinc-300 p-4"
      >
        <article class="flex flex-col gap-2">
          <div class="flex items-center justify-between">
            <h1 class="text-3xl font-semibold text-green-600">
              {{ product.title }}
            </h1>

            <h3 class="h-full text-2xl font-semibold text-yellow-500">
              {{ formattedPrice }}
            </h3>
          </div>
          <h2
            class="h-fit w-fit bg-yellow-300 px-4 py-1 text-xs font-medium uppercase text-green-700"
          >
            {{ product.category }}
          </h2>
          <p class="text-lg text-zinc-500">
            {{ product.description }}
          </p>
        </article>

        <Accordion
          id="accordion1"
          buttonClass="bg-transparent text-green-600  border-2 border-zinc-500 rounded-md text-lg text-zinc-600"
          contentStyled="grid grid-col-4"
        >
          <template #header> See Ingredients </template>
          <h1
            class="mb-4 border border-zinc-400 bg-zinc-200 py-2 text-center text-xl font-semibold uppercase"
          >
            {{ product.category }} Ingredients
          </h1>
          <div v-if="product" class="flex flex-wrap gap-5">
            <div
              v-if="filteredIngredients.length"
              class="grid w-full grid-cols-5 gap-4"
            >
              <div
                v-for="item in filteredIngredients"
                :key="item.id"
                class="ingredient flex flex-col items-center"
              >
                <img
                  :src="item.img"
                  alt="Ingredient Image"
                  class="h-[54px] w-[54px]"
                />
                <p class="text-center text-green-700">{{ item.name }}</p>
              </div>
            </div>
          </div>
        </Accordion>
        <buttonPrimary styled="w-full rounded-sm text-xl"
          >Order Now</buttonPrimary
        >
      </div>
    </main>
  </section>
  <section class="mt-8">
    <h1
      class="text-center text-3xl font-semibold uppercase italic text-green-600"
    >
      #Subwayindonesia
    </h1>
    <HomeCarouselPromo />
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import productsData from "~/data/menu.json";
import ingredientData from "~/data/ingredients.json";
const route = useRoute();
const id = Number(route.params.id); // Convert id to a number
const products = JSON.parse(JSON.stringify(productsData));
const ingredients = JSON.parse(JSON.stringify(ingredientData));
const product = ref(products.find((product) => product.id === id));

// Compute formatted price
const formattedPrice = computed(() => {
  if (product.value) {
    return `$${product.value.price.toFixed(2)}`;
  }
  return "";
});
const filteredIngredients = computed(() => {
  return ingredients[product.value.category] || [];
  // ingredients[product.value.category] digunakan untuk mencoba mengakses array bahan yang sesuai dengan kategori yang diberikan. Misalnya, jika product.value.category adalah 'wrap', maka ingredients['wrap'] akan mengembalikan array bahan dalam kategori tersebut (ingredients.wrap).
});
</script>

<style>
.accordionStyle {
  @apply flex w-full items-center justify-between bg-transparent text-green-600;
}
</style>
