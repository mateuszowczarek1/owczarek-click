<script setup lang="ts">
import Tag from './Tag.vue';


</script>
<template>
    <div id="technologies" class="bg-slate-300/40 rounded-xl">
        <h2 class="my-8 text-2xl px-4 font-semibold">Skills</h2>
        <p class="px-4 text-lg">What I use most often (and/or learning at the moment):</p>
        <div class="flex flex-wrap my-4 xl:justify-start border-b border-b-slate-500 xl:w-[40%] justify-center">
        <Tag>PHP 8.0+</Tag>
        <Tag>JavaScript</Tag>
        <Tag>Typescript</Tag>
        <Tag>Node.js</Tag>
        <Tag>Laravel</Tag>
        <Tag>Express.js</Tag>
        <Tag>Inertia.js</Tag>
        <Tag>Vue.js</Tag>
        <Tag>Bootstrap</Tag>
        <Tag>Tailwind</Tag>
        <Tag>SQL - (MySQL)</Tag>
        <Tag>MongoDB</Tag>
        <Tag>zod</Tag>
    </div>
        <p class="px-4 text-lg">I have a very basic understanding (tried to make something work with it and succeeded) of:</p>
        <div class="flex flex-wrap my-4 xl:justify-start xl:w-[40%] justify-center">
        <Tag>Deno</Tag>
        <Tag>Deno Fresh</Tag>
        <Tag>React.js</Tag>
        <Tag>Preact</Tag>
        <Tag>Redux-Toolkit</Tag>
        <Tag>Pinia Store</Tag>
        <Tag>React Router</Tag>
        <Tag>Vue Router</Tag>
        <Tag>Electron.js</Tag>
        <Tag>Linux</Tag>
        <Tag>Passport.js</Tag>
        <Tag>Docker</Tag>
        <Tag>Apache</Tag>
        <Tag>Nginx</Tag>
        <Tag>Caddy</Tag>
        <Tag>yup</Tag>
        <Tag>joi</Tag>
        <Tag>TypeORM</Tag>
        <Tag>Shared hosting</Tag>
        <Tag>VPS</Tag>
    </div>
   
    </div>
</template>