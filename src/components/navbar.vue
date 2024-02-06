<script setup>
import { onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router';
import { initFlowbite } from 'flowbite';

const router = useRouter();
const currentPath = router.currentRoute.value.path;
const isHomePage = currentPath === '/';

const isActive = (route) => {
  return currentPath === route;
};

onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <nav class="w-full z-50" :class="isHomePage ? 'absolute' : 'fixed top-0 bg-white shadow-sm'">
    <div class="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between gap-5 px-5 py-2.5">
      <RouterLink to="/">
        <img :src="isHomePage ? 'https://ik.imagekit.io/eri/assets/logo/logo-2.png' : 'https://ik.imagekit.io/eri/assets/logo/logo-1.png'" alt="ERI logo" class="h-14" />
      </RouterLink>
      <div class="flex items-center lg:order-2 space-x-3 lg:space-x-0">
        <a href="https://erisaddlery.mygostore.com/" target="_blank" class="px-5 py-2.5 font-medium text-white rounded-lg" :class="isHomePage ? 'bg-secondary-500' : 'bg-primary-500'">Go to store</a>
        <button
          data-collapse-toggle="navbar"
          type="button"
          class="flex items-center w-11 h-11 justify-center rounded-lg lg:hidden hover:bg-gray-100"
          :class="isHomePage ? 'text-secondary-500' : 'text-primary-500'"
          aria-controls="navbar"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
      </div>

      <div class="hidden w-full lg:flex lg:w-auto lg:order-1" id="navbar">
        <ul class="flex flex-col font-medium border border-gray-50 rounded-lg bg-gray-50 lg:border-0 lg:bg-transparent lg:space-x-5 lg:flex-row">
          <li>
            <RouterLink
              to="/"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-secondary-500"
              :class="{ 'lg:text-white': isHomePage, 'lg:text-gray-900': !isHomePage, active: isActive('/') }"
            >
              Home
            </RouterLink>
          </li>
          <li>
            <RouterLink
              to="/about"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-secondary-500"
              :class="{ 'lg:text-white': isHomePage, 'lg:text-gray-900': !isHomePage, active: isActive('/about') }"
              >About</RouterLink
            >
          </li>
          <li>
            <button
              data-collapse-toggle="submenu"
              type="button"
              class="w-full flex items-center justify-between gap-2.5 py-2 px-3 text-gray-900 g-gray-1 text-left rounded-lg hover:bg-gray-100 lg:relative lg:p-0 lg:hover:bg-transparent lg:hover:text-secondary-500"
              :class="{ 'lg:text-white': isHomePage, 'lg:text-gray-900': !isHomePage }"
              aria-controls="submenu"
              aria-expanded="false"
            >
              Services Offered
              <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
              </svg>
            </button>
            <div class="hidden z-10 transition-opacity duration-300 bg-white border-gray-100 border-y lg:border lg:rounded-lg lg:shadow-sm lg:absolute lg:mt-[26px]" id="submenu">
              <div class="grid grid-cols-2">
                <div>
                  <ul class="py-2 px-3 space-y-5 md:py-2.5 md:px-5">
                    <li><RouterLink to="/consulting" class="text-gray-900 hover:text-secondary-500" :class="{ active: isActive('/consulting') }"> ERI Consulting</RouterLink></li>
                    <li><RouterLink to="/saddlery" class="text-gray-900 hover:text-secondary-500" :class="{ active: isActive('/saddlery') }">ERI Saddlery</RouterLink></li>
                    <li><RouterLink to="/education" class="text-gray-900 hover:text-secondary-500" :class="{ active: isActive('/education') }">ERI Education</RouterLink></li>
                  </ul>
                </div>
                <div>
                  <ul class="py-2 px-3 space-y-5 md:py-2.5 md:px-5">
                    <li><RouterLink to="/logistic" class="text-gray-900 hover:text-secondary-500" :class="{ active: isActive('/logistic') }">ERI Logistic</RouterLink></li>
                    <li><RouterLink to="/media" class="text-gray-900 hover:text-secondary-500" :class="{ active: isActive('/media') }">ERI Media</RouterLink></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <RouterLink
              to="/product"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-secondary-500"
              :class="{ 'lg:text-white': isHomePage, 'lg:text-gray-900': !isHomePage, active: isActive('/product') }"
              >Product</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/publication"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-secondary-500"
              :class="{ 'lg:text-white': isHomePage, 'lg:text-gray-900': !isHomePage, active: isActive('/publication') }"
              >Publication</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/resources"
              class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:p-0 lg:hover:bg-transparent lg:hover:text-secondary-500"
              :class="{ 'lg:text-white': isHomePage, 'lg:text-gray-900': !isHomePage, active: isActive('/resources') }"
              >Resources</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
.active {
  @apply text-secondary-500;
}
</style>
