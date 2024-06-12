<template>
  <section class="relative mt-12">
    <Swiper
      :effect="'coverflow'"
      :grabCursor="true"
      :centeredSlides="true"
      :slidesPerView="'auto'"
      :spaceBetween="150"
      :loop="true"
      :pagination="{
        el: '.swiper-pagination',
        clickable: true,
      }"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
      class="mySwiper"
      ref="swiperRef"
      :coverflowEffect="{
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 1,
        slideShadows: true,
      }"
      :autoplay="{
        delay: 3000,
        disableOnInteraction: true,
      }"
    >
      <swiper-slide v-for="slide in slides" :key="slide.id">
        <img :src="slide.imgUrl" alt="" />
      </swiper-slide>
    </Swiper>
    <div class="swiper-button-prev btnprev">
      <img src="/images/arrowl.svg" alt="" class="w-[32px]" />
    </div>
    <div class="swiper-button-next btnnext">
      <img src="/images/arrowr.svg" alt="" class="w-[32px]" />
    </div>
    <div class="mt-24">
      <div class="swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const modules = [Pagination, Navigation, EffectCoverflow, Autoplay];

    const slides = [
      {
        id: 1,
        imgUrl: "/images/ads1.png",
      },
      {
        id: 2,
        imgUrl: "/images/ads2.png",
      },
      {
        id: 3,
        imgUrl: "/images/kwave.png",
      },
      {
        id: 4,
        imgUrl: "/images/adsway3.png",
      },
      {
        id: 5,
        imgUrl: "/images/adsway1.png",
      },
      {
        id: 6,
        imgUrl: "/images/adsway2.png",
      },
    ];
    return { modules, slides };
  },
};
</script>

<style>
.swiper {
  width: 100%;
  height: 100%;
  @apply w-[1200px] overflow-hidden px-12;
}

.swiper-slide {
  @apply h-[350px] w-[350px] overflow-hidden rounded-lg;
}

.swiper-slide img {
  @apply h-full w-full;
}

.swiper-button-prev,
.swiper-button-next {
  cursor: pointer;
  @apply h-fit w-fit rounded-full bg-green-600 p-2 transition-all active:scale-90;

  &::after {
    @apply hidden;
  }
}

.swiper-button-prev:hover,
.swiper-button-next:hover {
  @apply bg-opacity-80;
}

.swiper-pagination {
  @apply mb-[-50px] flex items-center justify-center text-lime-600;
  .swiper-pagination-bullet {
    @apply bg-green-600 opacity-30 transition-all duration-500 ease-in-out;
  }
  .swiper-pagination-bullet-active {
    @apply h-3 w-8 rounded-lg bg-green-600 opacity-100;
  }
}
</style>
