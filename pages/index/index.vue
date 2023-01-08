<template>
  <section
    class="bg-white relative z-10 rounded-3xl container h-[1900px] mx-auto grid grid-cols-[200px,minmax(450px,100%),300px]">
    <ul></ul>
    <div class="flex flex-col bg-white rounded-tl-xl rounded-br-xl rounded-tr-[40px] rounded-bl-[40px] h-[600px]">
      <h1 class="font-bold  text-green-500 text-2xl font-serif indent-4 p-4">每日推荐</h1>
      <img src="@/assets/img/test.webp" width="450" />
      <div class="px-4">
        <h2 class="font-mono text-xl font-bold py-2">蒸鸡蛋羹</h2>
        <p class="text-gray-500">
          原料：鸡蛋、温水、盐、芝麻香油、生抽。
        </p>
      </div>
    </div>
    <div>

    </div>
  </section>

  <div class="fixed z-0 top-0 right-0 w-1/3 h-[250px]">
    <div class="absolute bottom-0 left-[-100px] z-0 bg-red-400 backdrop-blur -skew-x-12 w-full h-[250px] scale-x-150" />
  </div>
</template>
<script setup>
// definePageMeta({
//   key: route => route.fullPath
// })
</script>
