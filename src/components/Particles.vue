<script setup lang="ts">
const particlesLoaded = async (container: any) => {
    console.log("Particles container loaded", container);
};
</script>
<template>
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" url="particles.json"
        class="w-full h-full absolute translate-z-0 -z-100"></vue-particles>
</template>