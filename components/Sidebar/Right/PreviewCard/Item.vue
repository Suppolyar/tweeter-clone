<template>
  <div class="p-3 border-b hover:bg-gray-100 dark:hover:bg-dim-700 cursor-pointer" :class="[defaultTransition, twitterBorderColor]">
      <slot />
  </div>
</template>
<script setup>

const { defaultTransition, twitterBorderColor } = useTailwindConfig()
</script>
