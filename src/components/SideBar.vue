<template>
  <section class="min-h-screen flex flex-row bg-gray-100 max-w-full">
    <div class="flex flex-col w-full bg-white overflow-hidden">
      <span class=" text-gray-400 pl-8 mt-3 text-lg">圓餅分析圖</span>
      <ul class="flex flex-col py-4">
        <li>
          <router-link :to="{ name: 'CategoryRevenueProportion' }" href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="fas fa-balance-scale"></i></span>
            <span class="text-sm font-medium">類別營收比重</span>
          </router-link>
        </li>
        <li>
          <a href="#" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="fas fa-balance-scale-left"></i></span>
            <span class="text-sm font-medium">品項營收比重</span>
          </a>
        </li>
      </ul>
      <span class=" text-gray-400 pl-8 mt-3 text-lg">訂單列表</span>
      <ul class="flex flex-col py-4">
        <li>
          <router-link :to="{ name: 'OrderTable' }" class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
            <span class="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400"><i class="fas fa-newspaper"></i></span>
            <span class="text-sm font-medium">訂單</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>