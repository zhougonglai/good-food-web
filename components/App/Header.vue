<template>
  <header class="fixed w-screen z-20 flex justify-between pt-10 px-10">
    <div
      class="inline-flex items-center justify-between space-x-10 shadow rounded-full backdrop-blur transition px-4 bg-white bg-opacity-80 backdrop-blur rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl">
      <div class="inline-flex items-end h-10">
        <img src="@/assets/icon/logo.svg" width="75" class="" />
        <div class="text-green-500 text-xl ml-4 font-mono tracking-tight leading-5 text-center">
          Kung Food<br />
          功夫美食
        </div>
      </div>
      <nav class="flex items-center space-x-4 h-14 relative">
        <NuxtLink v-for="nav in navMenus" :key="nav.to" :to="nav.to" custom v-slot="{ href, isExactActive }">
          <a :href="href"
            class="w-24 border border-transparent text-center leading-loose rounded-tr-2xl rounded-bl-2xl rounded-tl-lg rounded-br-lg"
            :class="{
  'bg-green-500 text-white hover:bg-green-600': isExactActive,
  'text-gray-500 hover:border-green-500 hover:text-gray-700': !isExactActive
}" v-text="nav.label" />
        </NuxtLink>
      </nav>
      <!-- <div class="border border-gray-200 rounded-full hover:border-gray-400 focus-within:border-gray-400">
        <input type="search" placeholder="搜菜谱" class="border-none bg-transparent outline-0 h-8 px-4" />
      </div> -->

    </div>

    <div
      class="bg-white bg-opacity-80 backdrop-blur shadow inline-flex items-center justify-center px-4 rounded-tr-3xl rounded-bl-3xl rounded-tl-xl rounded-br-xl">
      <button class="w-12 h-12 inline-flex items-center justify-center">
        <MagnifyingGlassIcon class="w-5 h-5 text-green-500 hover:text-green-600" />
      </button>
      <button class="w-12 h-12 inline-flex items-center justify-center">
        <ShoppingCartIcon class="w-5 h-5 text-green-500 hover:text-green-600" />
      </button>
      <button class="w-12 h-12 inline-flex items-center justify-center">
        <UserIcon class="w-5 h-5 text-green-500 hover:text-green-600" />
      </button>
      <button class="w-12 h-12 items-center justify-center sm:inline-flex md:hidden">
        <Bars3Icon class="w-5 h-5 text-gray-500 hover:text-gray-600" />
      </button>
      <button class="w-12 h-12 inline-flex items-center justify-center">
        <svg class="w-5 h-5 inline-flex items-center justify-center">
          <use xlink:href="#icon-sun" />
        </svg>
      </button>
    </div>
  </header>
</template>
<script setup>
import { Bars3Icon, UserIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid/index'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

const navMenus = ref([
  {
    label: '菜谱首页',
    to: '/',
  },
  {
    label: '分类',
    to: '/category',
    children: []
  },
  {
    label: '菜单',
    to: '/collect',
    children: []
  },
  {
    label: '热门',
    to: '/hot',
    children: []
  },
])

</script>
