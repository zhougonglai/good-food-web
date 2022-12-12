<template>
  <header class="shadow sticky">
    <div class="container mx-auto flex items-center">
      <div class="text-green-500 text-2xl inline-flex items-center font-bold">饭乎</div>
      <nav class="flex mx-10 space-x-6 text-gray-500 h-14 leading-[56px]">
        <NuxtLink to="/" class="hover:text-gray-700 border-green-500 h-" exact-active-class="border-b-4 text-gray-700">
          首页
        </NuxtLink>
        <NuxtLink to="/learn" class="hover:text-gray-700 border-green-500"
          exact-active-class="border-b-4 text-gray-700">学菜</NuxtLink>
        <NuxtLink to="/recipe" class="hover:text-gray-700 border-green-500"
          exact-active-class="border-b-4 text-gray-700">菜谱
        </NuxtLink>
        <NuxtLink to="/buy" class="hover:text-gray-700 border-green-500" exact-active-class="border-b-4 text-gray-700">
          购菜</NuxtLink>
        <NuxtLink to="/service" class="hover:text-gray-700 border-green-500"
          exact-active-class="border-b-4 text-gray-700">上门做菜
        </NuxtLink>
      </nav>
      <div class="border border-gray-200 rounded-full hover:border-gray-400 focus-within:border-gray-400">
        <input type="search" placeholder="搜菜谱" class="border-none bg-transparent outline-0 h-8 px-4" />
      </div>
      <button class="w-12 h-12 items-center justify-center sm:inline-flex md:hidden">
        <Bars3Icon class="w-5 h-5 text-gray-500 hover:text-gray-600" />
      </button>
    </div>
  </header>
</template>
<script setup>
import { Bars3Icon } from '@heroicons/vue/24/solid'

</script>
