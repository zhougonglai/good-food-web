<template>
  <header class="fixed w-screen z-20 flex justify-between">
    <div
      class="container mx-auto mt-10 grid items-center grid-cols-[200px,minmax(600px,100%),384px] backdrop-blur transition px-4 bg-transparent rounded-3xl">
      <div class="inline-flex items-end h-10">
        <img src="@/assets/icon/logo.svg" width="75" class="" />
        <div class="text-green-500 text-xl ml-4 font-mono tracking-tight leading-5 text-center">
          Kung Food<br />
          功夫美食
        </div>
      </div>
      <nav class="flex items-center justify-center space-x-4 h-14 relative">
        <NuxtLink v-for="nav in navMenus" :key="nav.to" :to="nav.to" custom v-slot="{ href, isExactActive }">
          <a :href="href" class="w-24 border border-transparent text-center leading-loose rounded-2xl" :class="{
            'bg-green-500 text-white hover:bg-green-600': isExactActive,
            'text-slate-500 hover:border-green-500 hover:text-slate-700 dark:hover:text-slate-300': !isExactActive
          }" v-text="nav.label" />
        </NuxtLink>
      </nav>

      <div class="inline-flex items-center justify-end">
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
          <Bars3Icon class="w-5 h-5 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300" />
        </button>
        <button class="w-12 h-12 inline-flex items-center justify-center" @click="toggleTheme">
          <svg class="w-5 h-5 inline-flex items-center justify-center">
            <use xlink:href="#icon-sun" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
<script setup>
import { Bars3Icon, UserIcon, MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/vue/24/solid/index'
import { useLocalStorage } from '@vueuse/core'

const theme = useLocalStorage('theme', 'system')
const dark = ref()

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

const toggleTheme = () => {
  if (theme.value === 'dark') {
    theme.value = 'light'
  }

  if (theme.value === 'light') {
    theme.value = 'dark'
  }

  theme.value = 'dark'
}

onMounted(() => {
  dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})

useHead(() => ({
  bodyAttrs: {
    class: () => theme.value === 'system' ? dark.value ? 'dark' : '' : ''
  }
}))

</script>
