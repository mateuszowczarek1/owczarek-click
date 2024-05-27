<script setup lang="ts">
defineProps({
    href: String,
    name: String
})
</script>
<template>
    <a :href="href" class="px-4 py-1 uppercase hover:bg-slate-500 bg-slate-900 rounded-xl text-slate-200 cursor-pointer">{{ name }}</a>
</template>