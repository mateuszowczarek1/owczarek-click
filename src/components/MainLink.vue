<script setup lang="ts">
defineProps({
    href: String,
    name: String
})
</script>

<template>
    <a :href="href"
        class="text-xl font-semibold underline decoration-transparent hover:decoration-slate-600 transition-colors duration-1000 block underline-offset-8">{{
        name }}</a>
</template>