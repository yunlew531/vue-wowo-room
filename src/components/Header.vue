<template>
  <header id="header">
    <div class=" ml-10 my-8 lg:mx-12 lg:my-12 flex justify-between text-gray-800">
      <h1 class=" text-2xl font-bold">
        <a href="#">WOWOROOM</a>
      </h1>
      <ul class=" inline-flex max-w-xl text-base">
        <li class=" mx-6 font-bold relative btn-ani btn-ani-gray"><a href="#">床墊優勢</a></li>
        <li class=" mx-6 font-bold relative btn-ani btn-ani-gray"><a href="#">好評推薦</a></li>
        <li class=" mx-6 font-bold relative btn-ani btn-ani-gray"><a href="#">運送方式</a></li>
        <li class=" mx-6 font-bold relative btn-ani btn-ani-gray"><a href="#">後臺系統</a></li>
        <li class=" mx-6 font-bold text-purple-600 relative btn-ani btn-ani-purple"><a href="#">立即預定</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
@layer components {
  .btn-ani::before {
    content: "";
    @apply duration-300 w-0 absolute right-0 bottom-1 border-b-2 border-gray-900;
  }
  .btn-ani-gray::before {
    @apply border-gray-900;
  }
  .btn-ani-purple::before {
    @apply border-purple-600;
  }
  .btn-ani:hover.btn-ani::before {
    @apply left-0 w-full;
  }
}
</style>
