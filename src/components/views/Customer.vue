<template>
  <Header></Header>
  <Banner></Banner>
  <LatestPanel></LatestPanel>
  <ProductAbout></ProductAbout>
  <ProductInfo></ProductInfo>
  <ProductSale></ProductSale>
  <ProductList :cartData="cartData" @updateCartData="(data) => cartData = data"></ProductList>
  <CartPanel :cartData="cartData" @emitCartData="emitCartData"></CartPanel>
  <FormPanel></FormPanel>
  <Footer></Footer>
</template>

<script>
import Header from '/@/components/Header.vue';
import Banner from '/@/components/Banner.vue';
import ProductAbout from '/@/components/ProductAbout.vue';
import ProductInfo from '/@/components/ProductInfo.vue';
import LatestPanel from '/@/components/LatestPanel.vue';
import ProductSale from '/@/components/ProductSale.vue';
import ProductList from '/@/components/ProductList.vue';
import CartPanel from '/@/components/CartPanel.vue';
import FormPanel from '/@/components/FormPanel.vue';
import Footer from '/@/components/Footer.vue';
import { reactive } from 'vue';

export default {
  components: {
    Header,
    Banner,
    ProductAbout,
    ProductInfo,
    LatestPanel,
    ProductSale,
    ProductList,
    CartPanel,
    FormPanel,
    Footer,
  },
  props: {
    cartData: Object,
  },
  setup() {
    const cartData = reactive({ cartArr: [], });

    function emitCartData(arr) {
      cartData.cartArr = arr;
    }

    return {
      emitCartData,
      cartData,
    };
  }
}
</script>

<style>
</style>
