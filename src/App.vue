<script setup lang="ts">
import UAParser from "ua-parser-js"
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

const parser = new UAParser();
const isOpera = parser.getBrowser().name === "Opera" ? true : false;
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
