<template>
  <section class=" px-3 bg-gray-100">
    <div class=" flex justify-end bg-gray-50 p-3 rounded-lg mt-3 items-center">
      <button @click="handDeleteAllOrders"
      class=" text-base px-2 py-1 bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700 text-white">刪除所有訂單</button>
    </div>
    <div class='mx-auto overflow-x-auto mt-3'>
      <table class='mt-4rounded-lg bg-white w-full whitespace-nowrap'>
          <thead class="bg-gray-50">
            <tr class="text-gray-600 text-left">
              <th class="font-semibold text-sm px-6 py-4">
                訂單編號
              </th>
              <th class="font-semibold text-sm px-6 py-4">
                聯絡人
              </th>
              <th class="font-semibold text-sm px-6 py-4 text-center">
                聯絡地址
              </th>
              <th class="font-semibold text-sm px-6 py-4 text-center">
                電子郵件
              </th>
              <th class="font-semibold text-sm px-6 py-4">
                訂單品項
              </th>
              <th class="font-semibold text-sm px-6 py-4">
                訂單日期
              </th>
              <th width="135" class="font-semibold text-sm px-6 py-4">
                訂單狀態
              </th>
              <th width="100" class="font-semibold text-sm px-6 py-4">
                編輯
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 text-base">
            <tr v-for="item in orderData.orderData" :key="item.id">
              <td class="px-6 py-4">
                  <p class="">{{ item.id }}</p>
              </td>
              <td class="px-6 py-4">
                <p class="">{{ item.user.name }}</p>
                <p class="">{{ item.user.tel }}</p>
              </td>
              <td class="px-6 py-4 text-center">
                <p class="">{{ item.user.address }}</p>
              </td>
              <td class="px-6 py-4 text-center">
                <p class="">{{ item.user.email }}</p>
              </td>
              <td class="px-6 py-4 text-center">
                <ul>
                  <li v-for="product in item.products">
                    {{ product.title }} x {{ product.quantity }}
                  </li>
                </ul>
              </td>
              <td class="px-6 py-4 text-center">
                <p class="">{{ new Date(item.createdAt*1000).toLocaleString() }}</p>
              </td>
              <td class="px-6 py-4 text-center text-white">
                <input type="checkbox" class=" mr-1.5 " :checked="item.paid" @change="handEditOrderStatus(item)">
                <span v-if="item.paid" class=" bg-green-500 px-2 py-1 rounded-full">已付款</span>
                <span v-if="!item.paid" class=" bg-red-500 px-2 py-1 rounded-full">未付款</span>
              </td>
              <td class="px-6 py-4 text-center text-white">
                <button type="button" @click="handDeleteOrder(item)"
                class=" px-2 py-1 bg-red-500 rounded-lg hover:bg-red-600 active:bg-red-700">刪除</button>
              </td>
            </tr>
          </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { reactive, onMounted } from 'vue';
import { getOrders, editOrderStatus, deleteAllOrders, deleteAOrder } from '/@/user.js';

export default {
 setup() {
   const orderData = reactive({ orderData: [] });

   function handEditOrderStatus(item) {
     const obj = {
       data: {
         id: item.id,
         paid: !item.paid,
       }
     };
     editOrderStatus(obj)
     .then(res => {
       orderData.orderData = res.data.orders;
     })
     .catch(err => {
       console.log(err);
     });
   }

   function handDeleteAllOrders() {
     deleteAllOrders()
     .then(res => {
       orderData.orderData = res.data.orders;
       console.log(res.data);
     })
     .catch(err => {
       console.log(err);
     })
   }
   
  function handDeleteOrder(order) {
    const id = order.id;
    deleteAOrder(id)
    .then(res => {
      orderData.orderData = res.data.orders;
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    })
   }

   onMounted(() => {
     getOrders()
     .then(res => {
       orderData.orderData = res.data.orders;
     })
     .catch(err => {
       console.log(err);
     });
   });

   return {
     orderData,
     handEditOrderStatus,
     handDeleteAllOrders,
     handDeleteOrder,
   };
 },
};
</script>

<style>

</style>
