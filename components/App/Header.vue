<template>
  <header class="fixed w-screen">
    <!-- :class="[!!y ? 'shadow blur-xl' : '']" -->
    <div class="container mx-auto flex items-center justify-between rounded-full backdrop-blur transition px-4">
      <div class="text-green-500 text-2xl inline-flex items-center font-bold">饭乎</div>
      <nav class="flex mx-10 space-x-6 text-gray-500 h-14 leading-[56px]">
        <NuxtLink to="/" class="hover:text-gray-700 border-green-500" exact-active-class="border-b-4 text-gray-700">
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
      <!-- <div class="border border-gray-200 rounded-full hover:border-gray-400 focus-within:border-gray-400">
        <input type="search" placeholder="搜菜谱" class="border-none bg-transparent outline-0 h-8 px-4" />
      </div> -->
      <button class="w-12 h-12">
        <UserIcon class="w-5 h-5 text-green-500 hover:text-green-600" />
      </button>
      <button class="w-12 h-12 items-center justify-center sm:inline-flex md:hidden">
        <Bars3Icon class="w-5 h-5 text-gray-500 hover:text-gray-600" />
      </button>
    </div>
  </header>
</template>
<script setup>
import { Bars3Icon, UserIcon } from '@heroicons/vue/24/solid/index'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()

useHead({
  title: '饭乎',
  meta: [
    { name: 'description', content: '吃货' }
  ],
  bodyAttrs: {
    class: 'bg-slate-100 min-h-screen'
  },
  script: [
    {
      src: 'https://at.alicdn.com/t/c/font_1562950_g729hatuqjf.js?spm=a313x.7781069.1998910419.54&file=font_1562950_g729hatuqjf.js',
      body: true
    }
  ]
})
</script>
