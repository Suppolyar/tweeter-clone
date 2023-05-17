<template>
  <form @submit.prevent="handleFormSubmit">
    <div class="flex items-center flex-shrink-0 p-4 pb-4">
      <div class="flex w-12 items-top">
        <img :src="props.user?.profileImage" alt="profile image" class="inline-block w-10 h-10 rounded-full">
      </div>

      <div class="w-full p-2">
        <textarea
            v-model="text"
            class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 bg-transparent border-0 dark:text-white focus:ring-0"></textarea>
      </div>

    </div>

    <div>
      <button>Tweet</button>
    </div>
  </form>
</template>

<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true
  }
})

const emits = defineEmits(['onSubmit'])

const text = ref('')
const handleFormSubmit = () => {
  emits('onSubmit', {
    text: text.value
  })
}

</script>


<style scoped lang="scss">

</style>
