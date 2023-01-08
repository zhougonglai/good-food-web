<template>
  <section class="container mx-auto relative z-10">
    <ul class="flex space-x-4 py-4">
      <li v-for="nav, i in navMenus" :key="i">
        <button
          class="w-24 transition-all bg-white text-gray-500 shadow hover:shadow-md hover:text-green-500 hover:border-green-500 border border-transparent text-center leading-loose rounded-tr-2xl rounded-bl-2xl rounded-tl-lg rounded-br-lg"
          v-text="nav.label" />
      </li>
    </ul>
    <div class="bg-white rounded-3xl h-[1900px] mx-auto grid grid-cols-[200px,minmax(450px,100%),300px]">
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
    </div>
  </section>

  <div class="fixed z-0 top-0 right-0 w-1/3 h-[250px]">
    <div class="absolute top-0 right-0 z-0 bg-red-400 backdrop-blur -skew-x-12 w-full h-full scale-150" />
  </div>
</template>
<script setup>
const navMenus = ref([
  {
    label: '时下热门',
  },
  {
    label: '家常菜',
  },
  {
    label: '快手菜',
  },
  {
    label: '早餐',
  },
  {
    label: '鱼/肉'
  },
  {
    label: '蛋🥚'
  },
  {
    label: '汤羹'
  },
  {
    label: '烘培'
  },
  {
    label: '主食'
  },
  {
    label: '面'
  },
  {
    label: '素食'
  },
])
</script>
