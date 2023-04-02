<template>
    <button class="bg-blue-500 text-white font-bold py-2 px-4 rounded">
        {{ text }}
    </button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
    name: 'Button',
    props: {
        text: {
            type: String as PropType<string>,
            required: true,
        },
    },
})
</script>
