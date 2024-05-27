<script setup lang="ts">
import Particles from './components/Particles.vue';
import TheNavBar from './components/TheNavBar.vue';
import Hero from './components/Hero.vue';
import Title from './components/Title.vue';
import AboutMe from './components/AboutMe.vue';
import ResumeSection from './components/ResumeSection.vue';
import Portfolio from './components/Portfolio.vue';
import Skills from './components/Skills.vue';
import Contact from './components/Contact.vue';
import OperaEasterEgg from './components/OperaEasterEgg.vue';

let isOpera = navigator.userAgent.indexOf("OP") > -1;

</script>

<template>
  <main class="mx-4 font-inder">
    <Title />
    <TheNavBar />
    <div className="relative rounded-xl">
      <Particles />
      <Hero />
    </div>

   <AboutMe />
   <ResumeSection />
   <Portfolio />
   <Skills />
   <Contact />
   <OperaEasterEgg v-if="isOpera" />
  </main>
</template>
