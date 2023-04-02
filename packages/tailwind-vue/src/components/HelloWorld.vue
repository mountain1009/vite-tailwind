<script lang="ts" setup>
import { defineProps } from 'vue'

defineProps<{ msg: string }>()
</script>

<template>
    <h1 class="font-bold text-black">{{ msg }}</h1>
</template>
