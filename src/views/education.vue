<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';

const dataItems = [
  {
    title: 'Horsemanship Clinics',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/zC2jvXeAyvUu4aSBNodk/thumbnail.webp',
  },
  {
    title: 'Horse Health and Care Workshops',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/pKVnSascVrBePXI2SdzC/thumbnail.webp',
  },
  {
    title: 'Equine Conformation: What to Look for in Horses?',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/DSjkGppiq9qflshWdHDS/thumbnail.webp',
  },
  {
    title: 'Equine Nutrition Basics',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/bB8yqn1wV4dYbxf4Wa2L/thumbnail.webp',
  },
  {
    title: 'Stable Management 101',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/5xuX2mJrLNR1TFnL2jiZ/thumbnail.webp',
  },
  {
    title: 'Tack and Equipment Maintenance',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/GAgeSguAiODYUw5SqTAC/thumbnail.webp',
  },
  {
    title: 'Equestrian Safety & Rider Safety Equipment Training',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/ViJinI2nWMJwuT3BwxIh/thumbnail.webp',
  },
  {
    title: 'Saddle Fitting Introduction Workshops',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/N0v07c7ahXM6YHNp8sbO/thumbnail.webp',
  },
  {
    title: 'Stable Staff Training',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/FbMuKYA5Sgnv6AsS4oD3/thumbnail.webp',
  },
  {
    title: 'Equine Event Professionals Training',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/wvKqGhK8ZNPY4Syom5Xr/thumbnail.webp',
  },
  {
    title: 'Horse Trailer Management Care and Maintenance',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/n2iHMuldGVgB9eMhhP0A/thumbnail.webp',
  },
  {
    title: 'Hoof Care and Shoeing',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/z0ssSRGEinO1xxzWiEUW/thumbnail.webp',
  },
  {
    title: 'Endurance Riding: An Introduction',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/N6bF4QkeWLaFEmRQTo3E/thumbnail.webp',
  },
  {
    title: 'Horse First Aid + Colic Management Supplementary',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/hhiD9cRwFBFPlnBGUcTC/thumbnail.webp',
  },
  {
    title: 'Grooms Training',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
    imageUrl: 'https://image.myskill.id/elearning-poster/COTCTZ2BOOw6505welwB/thumbnail.webp',
  },
];
</script>

<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto mt-24 px-5">
    <div class="grid grid-cols-1 place-items-center md:grid-cols-2">
      <div class="order-2 text-center md:order-2 md:text-start">
        <h1 class="font-semibold text-[#FF8643]">Education</h1>
        <p class="font-bold text-xl md:text-2xl lg:text-3xl mb-2.5">Equine Resources Indonesia (ERI) offers comprehensive equine education via online, on-site, or hybrid settings through CPD courses, workshops.</p>
        <p>These trainings are built with equine welfare in mind, to help guide riders, horse owners, coaches, grooms, staff, and horse enthusiasts.</p>
      </div>
      <div class="order-1 md:order-2">
        <img class="scale-x-[-1]" src="https://img.freepik.com/free-vector/mexican-ranch-concept-illustration_114360-17881.jpg" alt="" />
      </div>
    </div>

    <div class="mt-10 md:mt-20 grid grid-cols-2 gap-2.5 md:gap-5 md:grid-cols-3 lg:grid-cols-4">
      <a href="#" v-for="(item, index) in dataItems" :key="index" class="bg-white border border-gray-200 rounded-lg shadow relative education">
        <img class="w-full object-contain rounded-t-lg" :src="item.imageUrl" alt="" />
        <div class="overlay"></div>
        <div class="p-2.5 md:p-5 relative z-10">
          <h5 class="mb-2 md:text-lg lg:text-xl font-semibold text-gray-900">
            {{ item.title }}
          </h5>
          <p class="text-sm text-gray-700 line-clamp-3">{{ item.description }}</p>
        </div>
      </a>
    </div>
  </div>
  <Footer />
</template>
