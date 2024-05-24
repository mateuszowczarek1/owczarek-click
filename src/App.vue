<script setup lang="ts">


const particlesLoaded = async (container: any) => {
  console.log("Particles container loaded", container);
};

</script>

<template>
  <main class="mx-4">
    <Transition name="slide" appear>
    <nav class="flex flex-wrap gap-4 justify-center items-center my-6">
      <a href="#" class="text-xl font-semibold underline decoration-transparent hover:decoration-slate-600 transition-colors duration-1000 block underline-offset-8">Home</a>
      <a href="#" class="text-xl font-semibold underline decoration-transparent hover:decoration-slate-600 transition-colors duration-1000 block underline-offset-8">Portfolio</a>
      <a href="#" class="text-xl font-semibold underline decoration-transparent hover:decoration-slate-600 transition-colors duration-1000 block underline-offset-8">CV</a>
    </nav>
  </Transition>
   <div className="relative bg-slate-200 rounded-xl">
   
    <vue-particles id="tsparticles" :particlesLoaded="particlesLoaded" url="particles.json" class="w-full h-full absolute translate-z-0 -z-100"></vue-particles>
   
    <div class="px-10 py-10">
      <h1 class="text-4xl text-center mb-4">Hello!</h1>
      <Transition name="fade" appear>
      <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus expedita excepturi quis pariatur hic corporis harum sed, voluptatum architecto nemo, aperiam id dolor eius laboriosam ut tempore. Fugiat, sapiente.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus expedita excepturi quis pariatur hic corporis harum sed, voluptatum architecto nemo, aperiam id dolor eius laboriosam ut tempore. Fugiat, sapiente.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia possimus expedita excepturi quis pariatur hic corporis harum sed, voluptatum architecto nemo, aperiam id dolor eius laboriosam ut tempore. Fugiat, sapiente.
    </p>
  </Transition>
    </div>
  
  </div>

</main>
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
