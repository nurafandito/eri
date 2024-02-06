<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const back = () => {
  router.go(-1);
};
</script>

<template>
  <div class="min-h-svh bg-[url('@/assets/coming-soon.jpg')] bg-cover flex flex-col items-center justify-center gap-5 md:min-h-screen">
    <button @click="back"><img class="w-24 h-24" src="@/assets/logo/logo.png" alt="ERI Logo" /></button>

    <h1 class="text-xl font-semibold text-white">GREAT THINGS COMING SOON...</h1>
  </div>
</template>
