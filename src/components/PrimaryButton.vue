<script setup lang="ts">
defineProps({
    href: String,
    name: String
})
</script>
<template>
    <a :href="href" class="px-4 py-2 my-4 hover:bg-slate-200 bg-slate-100 rounded-xl text-slate-900 cursor-pointer">{{ name }}</a>
</template>