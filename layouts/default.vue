<template>
  <slot name="header" />
  <slot />
  <KFTheme />
</template>
<script setup>
import logo from '/logo.png'
import logoIcon from '@/assets/icon/logo.svg'

useHead({
  title: '功夫美食 Kung Food',
  meta: [
    { name: 'description', content: '吃货' }
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: logoIcon
    },
    {
      rel: "icon",
      type: "image/png",
      href: logo
    },
  ],
  script: [
    {
      src: '//at.alicdn.com/t/c/font_1562950_se1ldd3vtt.js',
      body: true
    }
  ]
})
</script>
