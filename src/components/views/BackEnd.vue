<template>
  <header>
    <BackEndHeader></BackEndHeader>
  </header>
  <main>
    <div class=" grid grid-cols-12">
      <div class=" col-span-2">
        <SideBar></SideBar>
      </div>
      <div class=" col-span-10 bg-gray-100">
        <router-view></router-view>
      </div>
    </div>
  </main>
</template>

<script>
import BackEndHeader from '/@/components/BackEndHeader.vue';
import SideBar from '/@/components/SideBar.vue';
import OrderTable from '/@/components/OrderTable.vue';
import CategoryRevenueProportion from '/@/components/CategoryRevenueProportion.vue';

export default {
  components: {
    BackEndHeader,
    SideBar,
    OrderTable,
    CategoryRevenueProportion,
  }
}
</script>

<style>

</style>
