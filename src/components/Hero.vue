<script setup lang="ts">
import TheHelloHeader from './TheHelloHeader.vue';


</script>
<template>
    <div class="px-10 py-10">
        <TheHelloHeader />
      <Transition name="fade" appear>
      <p class="text-xl">
        From beginner to budding developer, I'm on a mission to conquer the world of software development. Currently honing my skills in JS and PHP, I'm eagerly seeking my first programming role. Let's collaborate and bring innovative apps to life
    </p>
  </Transition>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: color 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  color: transparent
}
</style>
