<script setup lang="ts">

</script>

<template>
  <div class="flex justify-center items-center xl:w-[20vw] w-[100%]">
    <h2 class="text-4xl mb-4 typingEffect border-r-2 border-slate-700 inline-block break-words">I am Mateusz</h2>
  </div>
</template>

<style scoped>
.typingEffect {
  width: 0;
  overflow: hidden;
  white-space: nowrap;
  animation: typing 2s steps(50, end) forwards;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
</style>
