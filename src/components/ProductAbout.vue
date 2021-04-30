<template>
  <section id="product-about" class="ml-20 mb-24 lg:mb-48">
    <div class="product-about grid grid-cols-12 grid-rows-12 gap-4 px-5 xl:px-0">
      <div class="div col-start-1  xl:col-start-3 row-span-8 flex justify-end pr-6 xl:pr-12">
        <img src="/src/assets/images/caption_aboutJeanasis.png" class="side-decoration" alt="">
      </div>
      <h2 class="text-4xl row-span-1 font-bold col-start-2 col-end-13 lg:text-6xl lg:col-end-9 xl:col-start-4 z-10 leading-tight mt-3">無甲醛、無毒、環保、品質、天然原木、溫潤質感。</h2>
      <p class="leading-normal mb-12 text-2xl col-start-2 col-end-8  hidden lg:block lg:row-start-6 xl:col-start-4">
        避開有甲醛疑慮的人造板材，挑選真正無毒健康原木板材，窩窩木材兼具耐用與視覺感受。<br>
        原木板材的截面木紋與正面應延續不斷點，擁有明顯凹凸樹節，且木紋會從此延伸而出。<br>
        天然木紋花色不會重複!
      </p>
      <div class=" product-about-bg col-start-2 lg:col-start-8 col-end-13 xl:col-end-12 row-start-3 row-end-13 lg:row-start-2"></div>
    </div>
  </section>
</template>

<script>
export default {
  
};
</script>

<style scoped>
.product-about {
  height: 600px;  
}

.product-about-bg {
  background: center;
  background-size: cover;
  background-image: url('/src/assets/images/photo-1590635022668-81cc8696a19d.png');
}

.side-decoration {

}

.leading-tight {
  line-height: 1.25;
}

@layer components {
  .grid-rows-12 {
    grid-template-rows:  repeat(12, minmax(0, 1fr));
  }
  .row-span-8 {
    grid-row: span 8 / span 8;
  }
  .row-start-8 {
    grid-row-start: 8;
  }
  .row-end-13 {
    grid-row-end: 13;
  }
}
</style>
