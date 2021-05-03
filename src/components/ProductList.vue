<template>
  <section id="product-list" class="product-list bg-gray-100 py-20">
    <div class=" max-w-screen-lg m-auto">
      <h2 class=" text-3xl text-center mb-8 font-bold text-shadow">WOWOROOM</h2>
      <div class=" flex justify-between items-center mb-16 text-base">
        <select name="" class=" h-11 w-32 pl-3 ml-3 rounded shadow" v-model="categorySeclect" @change="filterProductByCategory">
          <option value="" selected>全部品項</option>
          <option :value="item" v-for="item in categoryArr" :key="item">{{ item }}</option>
        </select>
        <div class="relative mr-6">
          <input type="text" v-model="searchProductText" @keydown.enter="searchProduct"
            class="bg-purple-white shadow rounded border-0 p-3" placeholder="搜尋商品...">
          <i @click="searchProduct" 
            class="fas fa-search absolute right-3.5 top-3 text-lg text-gray-400 hover:text-gray-600 active:text-gray-900">
          </i>
        </div>
      </div>
      <div class="grid grid-cols-12 gap-5">
        <a href="javascript:;" class=" flex justify-between flex-col duration-200 col-span-4 p-1 bg-white shadow rounded-lg mb-6 hover:shadow-xl"
          v-for="item in renderProductArr.renderProductArr" :key="item.id">
          <div>
            <div class=" bg-no-repeat bg-cover bg-center h-48 rounded-t-lg"
              :style="{'background-image': 'url('+ item.images +')'}">
            </div>
            <div class=" p-1 flex flex-col justify-between">
              <h3 class=" text-2xl my-3">{{ item.title }}</h3>
              <p class=" flex justify-between items-center mb-3">
                <span class="line-through text-lg">${{ item.origin_price.toLocaleString() }}</span>
                <span class=" text-2xl">${{ item.price.toLocaleString() }}</span>
              </p>
            </div>
          </div>
          <div class=" flex justify-between items-center p-1 text-lg">
            <div>
              <button @click="item.quantity = item.quantity < 2 ? item.quantity : item.quantity - 1" type="button"
                class=" text-gray-500 hover:text-gray-800 active:text-black">
                <i class="fas fa-minus"></i>
              </button>
              <span class=" mx-3">{{ item.quantity }}</span>
              <button @click="item.quantity += 1" type="button" 
                class=" text-gray-500 hover:text-gray-800 active:text-black">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <button type="button" @click="handAddToCart(item)"
              class=" duration-200 bg-gray-900 text-white px-3 py-1 rounded-md border hover:border-gray-900 hover:bg-gray-200 hover:text-gray-900">
              加入購物車
            </button>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
import { onMounted, reactive, ref, watch } from 'vue';
import { getProducts, addToCart } from '/@/user.js';

export default {
  props: {
    cartData: Object,
  },
  setup(props, { emit }) {
    const productsData = reactive({ productsArr: [], });
    const categoryArr = reactive([]);
    const renderProductArr = reactive({ renderProductArr: [], });
    const categorySeclect = ref('');
    const searchProductText = ref('');
    const cartData = props.cartData;

    function handCategory(arr) {
      arr.forEach(item => {
        if (categoryArr.includes(item.category)) return;
        categoryArr.push(item.category);
      });
    }

    function searchProduct() {
      renderProductArr.renderProductArr = productsData.productsArr.filter(item => item.title.toLowerCase().match(searchProductText.value.toLowerCase()));
    }

    function filterProductByCategory() {
      if (categorySeclect.value === '')
        renderProductArr.renderProductArr = productsData.productsArr;
      else
        renderProductArr.renderProductArr = productsData.productsArr.filter(item => item.category === categorySeclect.value);
    }

    function handAddToCart(item) {
      let quantity = item.quantity || 1;
      cartData.cartArr.forEach(product => {
        if (product.product.id === item.id) {
          quantity = product.quantity + item.quantity;
        }
      });
      item.quantity = 1;
      const data = {
        "data": {
          "productId": item.id,
          "quantity": quantity
        }
      };
      addToCart(data)
      .then(res => {
        cartData.cartArr = res.data.carts;
      })
      .catch(err => {
        console.log(err);
      });
    }

    watch(cartData.cartArr, ()=>{
      emit('updateCartData', cartData);
    },{ deep: true });

    onMounted(() => {
      getProducts()
      .then(res => {
        productsData.productsArr = res.data.products;
        renderProductArr.renderProductArr = [ ...productsData.productsArr ];
        renderProductArr.renderProductArr.forEach(item => item.quantity = 1);
        handCategory(productsData.productsArr);
        })
      .catch(err => {
        console.log(err);
      });

    });
    
    return {
      categoryArr,
      categorySeclect,
      searchProductText,
      searchProduct,
      filterProductByCategory,
      renderProductArr,
      addToCart,
      handAddToCart
    };
  },
};
</script>

<style>
.text-shadow{
  text-shadow: 2px 2px 2px black;
}
</style>
