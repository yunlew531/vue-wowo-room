<template>
  <section class="product-sale h-96 relative mb-112">
    <div class=" flex justify-center">
      <img src="/src/assets/images/caption_storeinfo.png" class=" absolute left-96 h-612 -top-40">
      <a href="#" class="relative group w-96 mt-20 h-650">
        <div class=" overflow-hidden">
          <div class=" duration-3000 ease-in product-1 relative transform group-hover:rotate-6 group-hover:scale-110">
            <div class=" duration-300 ease-in filter blur-sm absolute h-full w-full bg-black opacity-0 group-hover:opacity-50"></div>
          </div>
        </div>
        <div class=" duration-500 ease-out absolute ml-16 pt-7 pb-10 pl-8 -bottom-18 bg-white z-10 group-hover:mb-20">
          <h3 class=" text-5xl">NEWSOFA(WOWOROOM)</h3>
          <h4 class=" text-lg mb-5 italic">NOW ON SALE<i class="fas fa-long-arrow-alt-right ml-2"></i></h4>
          <h5 class=" duration-500 opacity-0 group-hover:opacity-100">
            # SOFA-WOWOROOM X JAPAN SOFA COLLATION<br>
            # JAPAN ITEM
          </h5>
        </div>
      </a>
      <a href="#" class=" group w-80 mt-20 ml-32">
        <div class=" overflow-hidden">
          <div class="duration-3000 ease-in product-2 relative transform group-hover:rotate-6 group-hover:scale-110">
            <div class=" duration-300 ease-in filter blur-sm absolute h-full w-full bg-black opacity-0 group-hover:opacity-50"></div>
          </div>
          <div class=" duration-500 ease-out absolute -top-4 bg-white z-10 group-hover:mt-12">
            <h3 class=" text-5xl">ONLINE STORE</h3>
            <h4 class=" text-lg mb-5 italic">ST.WOWOROOM<i class="fas fa-long-arrow-alt-right ml-2"></i></h4>
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {

}
</script>


<style scoped>
.product-sale::before {
  content: '';
  position: absolute;
  width: 600px;
  height: 720px;
  background: #000;
  left: 0;
  top: 0;
  display: block;
  z-index: -5;
}
.product-1 {
  height: 515px;
  background-size: cover;
  background-position: center;
  background-image: url("/src/assets/images/photo-1511401139252-f158d3209c17.jfif");
}
.product-2 {
  height: 445px;
  background-size: cover;
  background-position: center;
  background-image: url("/src/assets/images/photo-1611967164521-abae8fba4668.jfif");
}
.h-612 {
  height: 612px;
}
.h-650 {
  height: 650px;
}
.duration-3000 {
  transition-duration: 3s;
}
.mb-112 {
  margin-bottom: 550px;
}
.-bottom-18{
  bottom: -70px;
}
</style>