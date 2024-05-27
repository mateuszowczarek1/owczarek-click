<script setup lang="ts">
import PrimaryButton from './PrimaryButton.vue';
</script>

<template>
    <footer class="bg-slate-700 mb-20 mt-20 text-slate-200 p-4 rounded-xl" id="contact">
        <h2 class="my-8 text-2xl font-semibold">Contact me:</h2>
        <div class="flex xl:flex-row flex-col gap-4 items-center">
            <h5 class="font-semibold text-lg">Email:</h5>
           <PrimaryButton href="mailto:mateuszowczarek@onet.eu" name="mateuszowczarek@onet.eu"/>
           <h5 class="font-semibold text-lg">Github:</h5>
           <PrimaryButton href="https://github.com/mateuszowczarek1" name="@mateuszowczarek1"/>
        </div>
    </footer>
</template>