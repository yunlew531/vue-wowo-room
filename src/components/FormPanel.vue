<template>
  <section class=" bg-gray-100 py-20">
    <form class=" max-w-screen-xsm mx-auto">
      <div class=" col-span-3 p-3 mb-3">
        <h2 class=" text-3xl  text-center font-bold mb-8">訂單填寫</h2>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">姓名</span>
          <input type="text" class=" form-input mt-1 block w-full rounded" placeholder="" />
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">電話</span>
          <input type="tel" class=" form-input mt-1 block w-full rounded" />
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">Email</span>
          <input type="email" class=" form-input mt-1 block w-full rounded" placeholder="jack@gmail.com" />
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">寄送地址</span>
          <input type="text" class=" form-input mt-1 block w-full rounded" />
        </label>
        <label class="block mb-3">
          <span class="text-gray-700 text-base">交易方式</span>
          <select class=" form-select block w-full mt-1 rounded">
            <option value="ATM">ATM</option>
            <option value="Apple Pay">Apple Pay</option>
            <option value="Line Pay">Line Pay</option>
          </select>
        </label>
      </div>
      <button type="button" class="ml-3 px-20 py-3 border border-black bg-black rounded text-white text-xl hover:bg-gray-900 active:bg-black">送出訂單</button>
    </form>
  </section>
</template>

<script>
export default {
};
</script>

<style>
.max-w-screen-xsm {
  max-width: 450px;
}
</style>
