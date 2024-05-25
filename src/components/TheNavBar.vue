<script setup lang="ts">
import MainLink from './MainLink.vue';


</script>

<template>
    <Transition name="slide" appear>
    <nav class="flex flex-wrap gap-4 justify-center items-center my-6">
      <MainLink href="#" name="Home" />
      <MainLink href="#" name="Portfolio" />
      <MainLink href="#" name="Contact" />
    </nav>
</Transition>
</template>

<style scoped>
.slide-enter-active {
  transition: all 0.5s ease-in;
}
.slide-enter-from{
transform: translateX(-3%);
opacity: 0;
}
.slide-leave-to {
  transform: translateX(0);
  opacity: 100%;
}
</style>