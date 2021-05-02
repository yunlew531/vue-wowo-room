<template>
  <section class=" bg-gray-100 py-20">
    <Form class=" max-w-screen-xsm mx-auto"
      v-slot="{ errors, values, validate }" @submit="handSubmitOrder">
      <div class=" col-span-3 p-3 mb-3">
        <h2 class=" text-3xl  text-center font-bold mb-8">訂單填寫</h2>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">姓名</span>
          <Field type="text" name="姓名" class=" form-input mt-1 block w-full rounded" :class="{'border-red-600': errors['姓名']}"
            rules="required" placeholder="輸入姓名" v-model="user.name">
          </Field>
          <error-message name="姓名" class="text-red-600 text-base"></error-message>
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">電話</span>
          <Field type="tel" name="電話" class=" form-input mt-1 block w-full rounded" :class="{'border-red-600': errors['電話']}"
            v-model="user.tel" :rules="isPhone" placeholder="0928636863">
          </Field>
          <error-message name="電話" class="text-red-600 text-base"></error-message>
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">Email</span>
          <Field type="email" name="Email" rules="email|required"
            class=" form-input mt-1 block w-full rounded" :class="{'border-red-600': errors['Email']}"
            placeholder="jack@gmail.com" v-model="user.email">
          </Field>
          <error-message name="Email" class="text-red-600 text-base"></error-message>
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">寄送地址</span>
          <Field type="text" name="地址" class=" form-input mt-1 block w-full rounded" :class="{'border-red-600': errors['地址']}"
            placeholder="輸入地址" v-model="user.address" rules="required">
          </Field>
          <error-message name="地址" class="text-red-600 text-base"></error-message>
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">交易方式</span>
          <select class=" form-select block w-full mt-1 rounded" v-model="user.payment">
            <option value="ATM">ATM</option>
            <option value="Apple Pay">Apple Pay</option>
            <option value="Line Pay">Line Pay</option>
          </select>
        </label>
      </div>
      <button type="submit" 
        class="ml-3 px-20 py-3 border border-black bg-black rounded text-white text-xl hover:bg-gray-900 active:bg-black">送出訂單</button>
    </Form>
  </section>
</template>

<script>
import { reactive } from 'vue';
import { submitOrder } from "/@/user.js";

export default {
  setup() {
    const user = reactive({ payment: "ATM" });

    function isPhone(value) {
      const phoneNum = /^(09)[0-9]{8}$/;
      return phoneNum.test(value) ? true: '需要正確的電話號碼';
    }

    function handSubmitOrder() {
      const obj = {
        data: { user, },
      };
      submitOrder(obj)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    }
    
    return {
      user,
      handSubmitOrder,
      isPhone,
    };
  },
};
</script>

<style>
.max-w-screen-xsm {
  max-width: 450px;
}
</style>
