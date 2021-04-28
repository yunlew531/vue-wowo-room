<template>
  <section id="latest-panel" class="mb-24 lg:mb-48">
    <div class=" flex justify-center mr-20">
      <div class=" mr-12">
        <img src="src/assets/images/latestTitle.webp" alt="">
        <div class="latest-decoration-ani text-center mt-5 text-xl">
          <p class=" mb-1"><i class="fas fa-caret-down"></i></p>
          <p class=" mb-1"><i class="fas fa-caret-down"></i></p>
          <p><i class="fas fa-caret-down"></i></p>
        </div>
      </div>
      <a href="#" class="mr-6 group" v-for="item in data" :key="item.url">
        <p class=" mb-1">{{ item.time }}</p>
        <div class="w-72 h-60 mb-1 relative overflow-hidden">
          <div class="duration-500 ease-in opacity-0 bg-black group-hover:opacity-50 w-full h-full absolute z-10"></div>
          <div
            :style="{ 'background-image': 'url('+ item.url +')' }"
            class="duration-5000 ease-in bg-no-repeat bg-center bg-cover w-full h-full absolute transform  group-hover:rotate-6 group-hover:scale-110"></div>
          </div>
        <h3 class=" text-xl mb-2">{{ item.title }}</h3>
        <h4 class="ease-in duration-500 group-hover:ml-3 text-sm">READ<i class="fas fa-long-arrow-alt-right ml-2"></i></h4>
      </a>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue';

export default {
  setup() {
    const data = reactive([
      {
        time: '',
        title: 'ETHICAL PRODUCTS',
        url: '/src/assets/images/photo-1576354302919-96748cb8299e-1@2x.png'
      },
      {
        time: '',
        title: 'el 2021 SUMMER',
        url: '/src/assets/images/photo-1599243075095-7199cae2c164-2@2x.png'
      },
      {
        time: '',
        title: 'SUMMER #1',
        url: '/src/assets/images/photo-1565620731358-e8c038abc8d1-2@2x.png'
      }
    ]);

    function getTime() {
      let now = Date.now();
      data.forEach((item, key) => {
        if (key > 0) now -= 5 * 24 * 60 * 60 * 1000;
        const date = new Date(now);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const timeStr = `${year}.${month}.${day}`;
        item.time = timeStr;
      });
    }

    onMounted(() => {
      getTime();
    });

    return {
      data,
    };
  },
}
</script>

<style>
.duration-5000 {
  transition-duration: 5s;
}
</style>
