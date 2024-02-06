<script setup>
import Navbar from '@/components/navbar.vue';
import ServicesOffered from '@/components/home/services-offered.vue';
import MarketFocus from '@/components/home/market-focus.vue';
import EquineWelfare from '@/components/home/equine-welfare.vue';
import OurBrands from '@/components/home/our-brands.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <div class="relative h-svh md:h-screen">
    <Navbar />
    <video class="absolute w-full h-full object-cover" autoplay muted loop>
      <source src="@/assets/playback.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div class="absolute inset-0 flex flex-col items-center justify-center gap-5 mt-44 p-5">
      <h1 class="max-w-screen-md text-4xl font-bold text-center text-white">The First Premier Equestrian Consultancy Firm in Indonesia</h1>
      <RouterLink to="/about" class="px-5 py-2.5 bg-secondary-500 text-white font-medium rounded-lg">Learn More</RouterLink>
    </div>
  </div>

  <ServicesOffered />
  <MarketFocus />
  <EquineWelfare />
  <OurBrands />
  <Footer />
</template>
