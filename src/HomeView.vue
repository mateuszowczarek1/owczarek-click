<script setup lang="ts">
import UAParser from "ua-parser-js"
import { onMounted, ref } from "vue";
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
import ScrollButton from "./components/ScrollButton.vue";

const parser = new UAParser();
const isOpera = parser.getBrowser().name === "Opera" ? true : false;
let scrollButton = ref(false);

onMounted(() => {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(element => {
    element.addEventListener('click', e => {
      e.preventDefault();
      const targetId = element.getAttribute('href');
      if(targetId){
        const targetElement = document.querySelector<HTMLElement>(targetId);
        if(targetElement){
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          })
        }
      }
    })
  });

  window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
      scrollButton.value = true;
    }else {
      scrollButton.value = false;
    }
  })


})

function scrollToTop(){
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}

</script>

<template>
  <main class="mx-4 font-inder">
    <Title />
    <TheNavBar />
    <div className="relative rounded-xl">
      <Particles />
      <Hero />
    </div>
    <ScrollButton v-if="scrollButton" @click="scrollToTop" />
    <AboutMe />
    <ResumeSection />
    <Portfolio />
    <Skills />
    <Contact />
    <OperaEasterEgg v-if="isOpera" />
  </main>
</template>
