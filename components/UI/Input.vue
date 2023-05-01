<template>
    <div>
        <label :for="props.label" class="block pl-3 ml-px text-sm font-medium text-gray-700">{{props.label}}</label>
        <input
            :value="props.modelValue"
            :type="props.type"
            :id="props.label"
            class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 sm:text-sm"
            :placeholder="props.placeholder"
            @input="event => emit('update:modelValue', event.target.value)"
         >
    </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: {
        type: String,
        required: true
    },
    label: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: ''
    },
    type: {
        type: String,
        default: 'text'
    }
})

</script>

<style lang="scss" scoped>

</style>
