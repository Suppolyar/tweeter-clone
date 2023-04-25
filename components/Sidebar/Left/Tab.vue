<template>
  <nuxt-link
          to="#"
          class="flex items-center p-3 gap-2 rounded-full text-black w-min hover:bg-gray-200 dark:hover:bg-dim-200 dark:text-white"
          :class="[defaultTransition, textClasses]"
  >
      <div class="w-6 h-6 text-dark">
          <slot name="icon"/>
      </div>
      <div class="hidden ml-4 text-xl xl:block">
          <slot name="name"/>
      </div>
  </nuxt-link>
</template>

<script setup>
const { defaultTransition } = useTailwindConfig()

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})

const textClasses = computed(() => props.active ? 'font-semibold' : 'font-normal')

</script>
