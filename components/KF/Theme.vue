<template>
  <TransitionRoot :show="isOpen" as="template">
    <Dialog as="div" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100" leave="duration-200 ease-in" leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95">
            <DialogPanel
              class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <button @click="closeModal"
                class="text-gray-500 hover:text-gray-600 absolute top-0 right-0 text-xl w-10 h-10">&times;</button>
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                主题设置
              </DialogTitle>
              <RadioGroup v-model="themeActive">
                <div class="space-y-2 mt-4">
                  <RadioGroupOption as="template" v-for="t in actions.themes" :key="t.value" :value="t.value"
                    v-slot="{ active, checked }">
                    <div class="p-2 flex text-gray-500 cursor-pointer hover:text-gray-700 group">
                      <div class="flex-1">{{ t.label }}</div>
                      <div
                        class="relative rounded-full w-5 h-5 inline-flex items-center justify-center border
                        after:content-[''] after:w-3 after:h-3 after:transition after:scale-0 after:bg-green-500 after:rounded-full"
                        :class="[
                          checked ? 'border-green-500 after:scale-100' : 'group-hover:border-green-500'
                        ]">

                      </div>
                    </div>
                  </RadioGroupOption>
                </div>
              </RadioGroup>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script setup>
import { useLocalStorage } from '@vueuse/core'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  RadioGroup,
  RadioGroupOption
} from '@headlessui/vue'
import appConfig from '~~/app.config.mjs';

const themeActive = useLocalStorage('theme', 'system')
const dark = ref()
const isOpen = ref(false)
const actions = reactive({
  themes: [
    {
      label: '跟随系统',
      value: 'system'
    },
    {
      label: '浅色模式',
      value: 'light'
    },
    {
      label: '深色模式',
      value: 'dark'
    }
  ]
})

appConfig.bus.on('theme:open', () => {
  isOpen.value = true
})

const closeModal = () => {
  isOpen.value = false
}

onMounted(() => {
  window.onpageshow = () => {
    dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  dark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
})

useHead(() => ({
  bodyAttrs: {
    class: () => {
      if (themeActive.value === 'system') {
        return dark.value ? 'dark' : ''
      }
      return themeActive.value
    }
  }
}))
</script>
