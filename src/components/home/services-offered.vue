<template>
  <div class="max-w-screen-xl mx-auto mt-10 px-5 md:mt-20" id="services-offered">
    <h1 class="mb-10 text-3xl font-semibold text-center">Services Offered</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      <RouterLink to="/consulting" class="col-span-1 flex flex-col items-center gap-5 bg-white border border-gray-50 rounded-lg shadow-sm sm:shadow-lg p-2.5 relative services">
        <img class="h-24" src="@/assets/logo/consulting.png" alt="ERI Consulting" />
        <div class="overlay"></div>
        <div class="text-center space-y-2.5 relative z-10">
          <h5 class="text-xl font-semibold text-gray-900">ERI Consulting</h5>
          <p class="text-sm text-gray-700 line-clamp-4">One-of-a-kind advisory service specifically curated for horse owners, equestrian professionals, and commercial or private stables.</p>
        </div>
      </RouterLink>

      <RouterLink to="/saddlery" class="col-span-1 flex flex-col items-center gap-5 bg-white border border-gray-50 rounded-lg shadow-sm sm:shadow-lg p-2.5 relative services">
        <img class="h-24" src="@/assets/logo/saddlery.png" alt="ERI Saddlery" />
        <div class="overlay"></div>
        <div class="text-center space-y-2.5 relative z-10">
          <h5 class="text-xl font-semibold text-gray-900">ERI Saddlery</h5>
          <p class="text-sm text-gray-700 line-clamp-4">Provides top-notch saddles, equipment, and saddle-fitting services for enhanced rider comfort and horse performance.</p>
        </div>
      </RouterLink>

      <RouterLink to="/education" class="col-span-1 flex flex-col items-center gap-5 bg-white border border-gray-50 rounded-lg shadow-sm sm:shadow-lg p-2.5 relative services">
        <img class="h-24" src="@/assets/logo/education.png" alt="ERI Education" />
        <div class="overlay"></div>
        <div class="text-center space-y-2.5 relative z-10">
          <h5 class="text-xl font-semibold text-gray-900">ERI Education</h5>
          <p class="text-sm text-gray-700 line-clamp-4">Provides versatile equine education, emphasizing welfare, for riders, horse owners, coaches, grooms, staff, and enthusiasts</p>
        </div>
      </RouterLink>

      <RouterLink to="/logistic" class="col-span-1 flex flex-col items-center gap-5 bg-white border border-gray-50 rounded-lg shadow-sm sm:shadow-lg p-2.5 relative services">
        <img class="h-24" src="@/assets/logo/logistic.png" alt="ERI Logistic" />
        <div class="overlay"></div>
        <div class="text-center space-y-2.5 relative z-10">
          <h5 class="text-xl font-semibold text-gray-900">ERI Logistic</h5>
          <p class="text-sm text-gray-700 line-clamp-4">Manage local horse transport and global imports of high-quality horses, offering seamless logistics, quarantine, and related services.</p>
        </div>
      </RouterLink>

      <RouterLink to="/media" class="col-span-1 flex flex-col items-center gap-5 bg-white border border-gray-50 rounded-lg shadow-sm sm:shadow-lg p-2.5 relative services">
        <img class="h-24" src="@/assets/logo/media.png" alt="ERI Media" />
        <div class="overlay"></div>
        <div class="text-center space-y-2.5 relative z-10">
          <h5 class="text-xl font-semibold text-gray-900">ERI Media</h5>
          <p class="text-sm text-gray-700 line-clamp-4">Creates top-notch equine content to enrich the equestrian community and promote equine welfare in Indonesia and nearby countries.</p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>
