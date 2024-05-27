<script setup lang="ts">
import TheHelloHeader from './TheHelloHeader.vue';
</script>
<template>
    <div class="px-10 py-10">
        <TheHelloHeader />
      <Transition name="fade" appear>
        <section class="grid xl:grid-cols-2 gap-8" id="home">
            <div class="text-xl text-justify">
              <span>From beginner to budding developer, I'm on a mission to conquer the world of software development. Currently honing my skills in JS and PHP, I'm eagerly seeking my first programming role. Let's collaborate and bring innovative apps to life</span>
            </div>
          <div>
            <h2 class="text-2xl mb-2 font-bold">Technologies</h2>
            <h3 class="text-xl">Working on</h3>
            <div class="flex flex-wrap mt-4 text-4xl gap-2">
                <i class="fa-brands fa-php"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-vuejs"></i>
                <i class="fa-brands fa-laravel"></i>
                <i class="fa-solid fa-database"></i>
                <i class="fa-brands fa-fedora"></i>
                <i class="fa-brands fa-docker"></i>
                <i class="fa-brands fa-git"></i>
            </div>
            <h3 class="text-xl mt-4">Next in line</h3>
            <div class="flex flex-wrap mt-4 text-4xl gap-2">
                <i class="fa-brands fa-symfony"></i>
                <i class="fa-solid fa-flask-vial"></i>
                <i class="fa-brands fa-react"></i>
            </div>
          </div>
        </section>
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
