<template>
  <section class="cart-panel py-20 max-w-screen-lg mx-auto">
    <h2 class=" text-3xl text-center font-bold mb-8">購物車</h2>
    <table class="w-full text-sm lg:text-base" cellspacing="0">
      <thead>
        <tr class="h-12">
          <th class="hidden md:table-cell text-left">圖片</th>
          <th class="text-left">產品</th>
          <th width="10%" class=" pl-5 lg:pl-0">
            <span>數量</span>
          </th>
          <th class="hidden text-right md:table-cell">單價</th>
          <th class="text-right">金額</th>
          <th width="15%" class="text-right">刪除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cartData.cartArr" :key="item.id">
          <td class="hidden pb-4 md:table-cell">
            <a href="#">
              <img :src="item.product.images" class="w-20 rounded" alt="Thumbnail">
            </a>
          </td>
          <td>
            <p class="mb-2 md:ml-4">{{ item.product.title }}</p>
          </td>
          <td>
              <div class="relative flex flex-row w-20 h-8">
              <input type="number" :value="item.quantity"
                class="w-full font-semibold text-center text-gray-700 bg-gray-200 outline-none focus:outline-none hover:text-black focus:text-black" />
            </div>
          </td>
          <td class="hidden text-right md:table-cell">
            <span class="text-sm lg:text-base font-medium">
              ${{ item.product.price.toLocaleString() }}
            </span>
          </td>
          <td class="text-right">
            <span class="text-sm lg:text-base font-medium">
              ${{ (item.product.price * item.quantity).toLocaleString() }}
            </span>
          </td>
          <td class=" text-right">
            <button class=" rounded text-white py-1 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700" type="button">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class=" flex justify-between text-base mt-4">
      <button class=" rounded text-white py-1 px-3 bg-red-500 hover:bg-red-600 active:bg-red-700" type="button">清空購物車</button>
      <p>總金額: ${{ caculateTotalCartPrice.toLocaleString() }}</p>
    </div>
  </section>
</template>

<script>
import { reactive, onMounted, computed } from 'vue';
import { getCarts } from '/@/user.js';

export default {
  emits: {
    emitCartData: (obj) => typeof obj === 'object',
  },
  setup(props, { emit }) {
    const cartData = reactive({ cartArr: [], });

    const caculateTotalCartPrice = computed(() => {
      let total = 0;
      if (cartData.cartArr.length !== 0) {
        total = cartData.cartArr.reduce((prev, item) => {
          const eachTotal = item.product.price * item.quantity;
          return prev + eachTotal;
        }, 0);
      } else {
        total = 0;
      }
      return total;
    });

    onMounted(() => {
      getCarts()
      .then(res=> {
        cartData.cartArr = res.data.carts;
        emit('emitCartData', cartData);
      })
      .catch(err => {
        console.log(err);
      });
    });

    return {
      cartData,
      caculateTotalCartPrice,
    };
  },
}
</script>

<style>

</style>
