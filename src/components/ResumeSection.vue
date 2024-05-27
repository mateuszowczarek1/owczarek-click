<script setup lang="ts">
import SecondaryButton from './SecondaryButton.vue';
</script>

<template>
    <div class="rounded-xl border px-4 py-2 gap-4">
            <div class="font-semibold text-xl">Download my resume</div>
            <div class="flex flex-wrap mt-2 gap-2">
              <SecondaryButton href="cv_eng_2024_no_info.pdf" name="ENG" />
              <SecondaryButton href="cv_pl_2024_no_info.pdf" name="PL" />
            </div>
          </div>
</template>