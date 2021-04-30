<template>
  <section id="banner" class="mb-24 lg:mb-48">
    <div class="swiper-pagination transform flex flex-col opacity-0 lg:opacity-100 mb-16"></div>
    <div class="swiper-container lg:ml-24 relative">
      <div class="swiper-wrapper">
        <div class="swiper-slide img-1"></div>
        <div class="swiper-slide img-2"></div>
        <div class="swiper-slide img-3"></div>
        <div class="swiper-slide img-4"></div>
        <div class="swiper-slide img-5"></div>
        <div class="swiper-slide img-6"></div>
        <div class="swiper-slide img-7"></div>
        <div class="swiper-slide img-8"></div>
      </div>
      <div class="clip-triangle absolute w-full xl:w-1/4 h-32 bg-transparent xl:bg-white left-0 bottom-0 z-10">
        <button type="button">
          <ChevronLeftIcon class="chevron-left-icon h-16 w-16 absolute left-0 md:left-7 bottom-0 text-gray-500 hover:text-gray-700 active:text-gray-900"></ChevronLeftIcon>
        </button>
        <button type="button">
          <ChevronRightIcon class="chevron-right-icon h-16 w-16 absolute left-10 md:left-20 bottom-0 text-gray-500 hover:text-gray-700 active:text-gray-900"></ChevronRightIcon>
        </button>
      </div>
      <div class="banner-filter filter blur-sm absolute right-0 bottom-0 bg-white opacity-50 z-10"></div>
    </div>
  </section>
</template>

<script>
import { onMounted } from 'vue';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js';

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },
  setup() {

    function handSwiper() {
      const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        speed: 1000,
        slidesPerView: 3.2,
        spaceBetween: 30,
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 20
          },
          1280: {
            slidesPerView: 2.2,
            spaceBetween: 30
          },
          1536: {
            slidesPerView: 3.2,
            spaceBetween: 30
          },
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.chevron-right-icon',
          prevEl: '.chevron-left-icon',
        },
      });
    }
    onMounted(() => {
      handSwiper();
    })
    return {};
  },
};
</script>

<style>
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}

.swiper-container {
  height: 666px;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff no-repeat center;
  background-size: cover;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-wrapper {

}

.clip-triangle {
  clip-path: polygon(0% 30%,0% 100%,100% 100%);
}

.swiper-pagination {
  width: auto !important;
  left: 45px !important;
  bottom: 50% !important;
  transform:  translateY(50%) !important;
}

.banner-filter {
  height: 150%;
  width: 70%;
}

@media (max-width: 1536px) {
  .banner-filter {
    @apply w-0;
  }
}

.swiper-wrapper .img-1 {
  background: url("/src/assets/images/photo-1547104443-442a7698bac4-2@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper {
  grid-column: span 11 / span 11 !important;
}

.swiper-wrapper .img-2 {
  background: url("/src/assets/images/photo-1549388604-817d15aa0110-3@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper .img-3 {
  background: url("/src/assets/images/photo-1552558636-f6a8f071c2b3-2@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper .img-4 {
  background: url("/src/assets/images/photo-1565620731358-e8c038abc8d1-2@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper .img-5 {
  background: url("/src/assets/images/photo-1576354302919-96748cb8299e-1@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper .img-6 {
  background: url("/src/assets/images/photo-1583250543752-11da1d6ebbe0@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper .img-7 {
  background: url("/src/assets/images/photo-1599243075095-7199cae2c164-2@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-wrapper .img-8 {
  background: url("/src/assets/images/photo-1600607687126-8a3414349a51-1@2x.png") no-repeat center center;
  background-size: cover;
}

.swiper-pagination-bullet {
  margin: 5px !important;
}
</style>
