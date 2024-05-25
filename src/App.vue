<script setup lang="ts">
import Particles from './components/Particles.vue';
import TheNavBar from './components/TheNavBar.vue';
import Hero from './components/Hero.vue';
import Title from './components/Title.vue';
</script>

<template>
  <main class="mx-4 font-inder">
    <Title />
    <TheNavBar />
    <div className="relative bg-slate-200 rounded-xl">
      <Particles />
      <Hero />
    </div>

  </main>
</template>
