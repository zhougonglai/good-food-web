<template>
  <section class="container mx-auto relative z-10 py-10 grid grid-cols-[200px,minmax(600px,100%),384px]">
    <ul class="flex flex-col items-center space-y-4 py-4 sticky top-0">
      <li v-for="nav, i in navMenus" :key="i">
        <button
          class="w-32 transition-all text-xl text-slate-500 dark:text-slate-400 backdrop-blur bg-transparent hover:text-slate-700 dark:hover:text-slate-200 text-center leading-loose rounded-xl"
          v-text="nav.label" />
      </li>
    </ul>

    <div class="flex flex-col items-center space-y-4">
      <div class="bg-slate-50 dark:bg-slate-700 ring-1 ring-slate-300 dark:ring-slate-600 rounded-3xl overflow-hidden"
        v-for="r, i in recipe" :key="i">
        <div class="relative">
          <img :src="r.cover" width="600" />
          <ul class="absolute bottom-2 right-2 space-x-2 inline-flex">
            <li v-for="t, i in r.tag" :key="i"
              class="bg-white dark:bg-slate-900 px-2 py-1 text-slate-700 text-sm rounded">
              <template v-if="typeof (t) === 'string'">
                {{ t }}
              </template>
              <div v-else>
                {{ t.label }} {{ t.value }}
              </div>
            </li>
          </ul>
        </div>
        <div class="py-2 px-4 relative flex flex-col space-y-2">
          <div class="font-bold text-lg text-black dark:text-white">{{ r.title }}</div>
          <div class="text-slate-500 dark:text-slate-400"> {{ r.user }}</div>
          <div class="absolute top-0 right-5 text-sm flex space-x-2 text-center text-green-500">
            <div>
              θ―ε<br />
              {{ r.score }}
            </div>
            <div>
              ζΆθ<br />
              {{ r.collection }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col space-y-4 sticky top-0">
      <div class="bg-slate-50 dark:bg-slate-800 rounded-3xl ring-1 ring-slate-300 dark:ring-slate-600">
        <h1 class="font-bold  text-green-500 text-2xl font-serif indent-4 p-4">ζ―ζ₯ζ¨θ</h1>
        <img src="@/assets/img/test.webp" width="450" />
        <div class="p-4">
          <h2 class="font-mono text-xl font-bold py-2 text-slate-900 dark:text-slate-100">θΈιΈ‘θηΎΉ</h2>
          <p class="text-slate-500 dark:text-slate-400">
            εζοΌιΈ‘θγζΈ©ζ°΄γηγθιΊ»ι¦ζ²Ήγηζ½γ
          </p>
        </div>
      </div>

      <ul
        class="bg-slate-50 dark:bg-slate-800 rounded-3xl py-2 text-slate-800 dark:text-slate-200 ring-1 ring-slate-300 dark:ring-slate-600">
        <h2 class="font-bold text-2xl font-serif indent-4 p-4 border-b">η­ι¨θθ°±</h2>
        <li v-for="h, i in hot" :key="i" class="leading-6 text-md px-4 py-2">
          {{ i+ 1 }}. {{ h.label }}
        </li>
      </ul>
    </div>
  </section>

  <!-- <div class="fixed z-0 top-0 right-0 w-1/3 h-[250px]">
    <div class="absolute top-0 right-[-40px] z-0 bg-red-400 backdrop-blur -skew-x-12 rounded-bl-3xl w-full h-full" />
  </div> -->
</template>
<script setup>
import img1 from '@/assets/img/img1.jpeg'
import img2 from '@/assets/img/img2.jpeg'

const navMenus = ref([
  {
    label: 'ζΆδΈη­ι¨',
  },
  {
    label: 'ε?ΆεΈΈθ',
  },
  {
    label: 'εΏ«ζθ',
  },
  {
    label: 'ζ©ι€',
  },
  {
    label: 'ι±Ό/θ'
  },
  {
    label: 'θπ₯'
  },
  {
    label: 'ζ±€ηΎΉ'
  },
  {
    label: 'ηεΉ'
  },
  {
    label: 'δΈ»ι£'
  },
  {
    label: 'ι’'
  },
  {
    label: 'η΄ ι£'
  },
])

const recipe = ref([
  {
    title: 'θ±θε«ε¨ηδΊβθΏζ ·εδΈδ»ε₯½εθΏεθ',
    cover: img1,
    user: 'ε¨ζΏη¬θ?°',
    score: 7.5,
    collection: Math.round(Math.random() * 100),
    tag: [
      {
        label: 'η­ι¨ζ¦',
        value: '#17'
      }, 'η©Ίζ°ηΈι', 'η΄ ι£'],
  },
  {
    title: 'δΈε?θ¦θ―οΌη©Ίζ°ηΈιηΈθ±θοΌ',
    cover: img2,
    user: 'ε°ι«θθ°±',
    score: 7.3,
    collection: Math.round(Math.random() * 100),
    tag: ['η©Ίζ°ηΈι', 'η΄ ι£']
  }
])

const hot = ref([
  {
    label: 'η€ι±Όη€η?±'
  },
  {
    label: 'ιΈ‘θθ±θ'
  },
  {
    label: 'ε«ηͺι±Ό'
  },
  {
    label: 'ζ²ΉηθΎ'
  },
  {
    label: 'ηΊ’θ―η²'
  }
])
</script>
