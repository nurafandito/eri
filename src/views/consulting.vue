<script setup>
import Navbar from '@/components/navbar.vue';
import Footer from '@/components/footer.vue';
import Checklist from '@/components/icon/checklist.vue';
</script>

<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto mt-24 px-5">
    <div class="grid grid-cols-1 place-items-center md:grid-cols-2">
      <div class="order-2 md:order-2">
        <h1 class="font-semibold text-[#FF8643]">Consulting</h1>
        <div class="space-y-2.5">
          <p class="font-semibold text-xl md:text-2xl lg:text-3xl">One-of-a-kind advisory service specifically curated for horse owners, equestrian professionals, and commercial or private stables.</p>
          <p>These equine business-specific services can help individuals ensure the well-being of horses, operate efficiently, and achieve their goals within the equestrian industry.</p>
          <p>
            With our services, our experts will be able to assess and optimize stable operations, provide staff training, and offer facility design recommendations to ensure the well-being of your horses and the efficiency of your stables
            overall.
          </p>
          <p>Note that due to our commitment to equine welfare, ERI is only able to provide consulting services specifically pertaining to the healthcare and surroundings of the horse.</p>
        </div>
      </div>
      <div class="order-1 md:order-2">
        <img src="https://img.freepik.com/premium-vector/female-veterinarian-examining-horse_227564-328.jpg" alt="" />
      </div>
    </div>
    <div class="mt-10 grid gap-10 md:mt-20">
      <div class="flex flex-col items-center text-center">
        <h2 class="font-semibold text-[#FF8643]">Help Your Team</h2>
        <p class="font-semibold text-xl md:pb-2.5 md:text-2xl lg:text-3xl">Understand the Importance of Your Horses Care and Welfare.</p>
      </div>
      <div class="grid grid-cols-1 gap-5 sm:gap-20 md:gap-28 sm:grid-cols-2 sm:items-center">
        <div class="grid justify-center sm:justify-end">
          <img class="w-80 object-contain" src="@/assets/stable-management-consultancy.jpg" alt="" />
        </div>
        <div>
          <h3 class="font-semibold text-lg md:text-xl mb-2.5">Stable Management Consultancy</h3>
          <ul class="space-y-2.5">
            <li class="flex gap-2.5"><Checklist />Organizational Structure</li>
            <li class="flex gap-2.5"><Checklist />Procedures and Policies</li>
            <li class="flex gap-2.5"><Checklist />Stall/ Barn Management</li>
            <li class="flex gap-2.5"><Checklist />Horse Management</li>
            <li class="flex gap-2.5"><Checklist />Coaching & Training</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:gap-20 md:gap-28 sm:grid-cols-2 sm:items-center">
        <div class="grid justify-center order-1 sm:order-2 sm:justify-start">
          <img class="w-80 object-contain" src="@/assets/equine-nutrition-advisory.jpg" alt="" />
        </div>
        <div class="grid order-2 sm:order-1 sm:place-content-end">
          <h3 class="font-semibold text-lg md:text-xl mb-2.5">Equine Nutrition Advisory</h3>
          <ul class="space-y-2.5">
            <li class="flex gap-2.5"><Checklist />Dietary Analysis</li>
            <li class="flex gap-2.5"><Checklist />Feed and Supplement Recommendations</li>
            <li class="flex gap-2.5"><Checklist />Weight Management Programs</li>
            <li class="flex gap-2.5"><Checklist />Allergy and Sensitivity Assessments</li>
            <li class="flex gap-2.5"><Checklist />Grazing Management</li>
            <li class="flex gap-2.5"><Checklist />Nutritional Education</li>
            <li class="flex gap-2.5"><Checklist />Performance Enhancement</li>
            <li class="flex gap-2.5"><Checklist />Health Monitoring</li>
            <li class="flex gap-2.5"><Checklist />Veterinary Practice Support</li>
            <li class="flex gap-2.5"><Checklist />Forage Analysis Interpretation</li>
            <li class="flex gap-2.5"><Checklist />Feeds Company Consult</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:gap-20 md:gap-28 sm:grid-cols-2 sm:items-center">
        <div class="grid justify-center sm:justify-end">
          <img class="w-80 object-contain" src="@/assets/equestrian-events-management.jpg" alt="" />
        </div>
        <div>
          <h3 class="font-semibold text-lg md:text-xl mb-2.5">Equestrian Events Management</h3>
          <ul class="space-y-2.5">
            <li class="flex gap-2.5"><Checklist />Event Planning and Coordination</li>
            <li class="flex gap-2.5"><Checklist />Marketing and Promotion</li>
            <li class="flex gap-2.5"><Checklist />Participant Registration</li>
            <li class="flex gap-2.5"><Checklist />Venue Setup and Management</li>
            <li class="flex gap-2.5"><Checklist />Officials and Judges Coordination</li>
            <li class="flex gap-2.5"><Checklist />Live Streaming and Media Coverage</li>
            <li class="flex gap-2.5"><Checklist />Sponsorship and Revenue Generation</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-5 sm:gap-20 md:gap-28 sm:grid-cols-2 sm:items-center">
        <div class="grid justify-center order-1 sm:order-2 sm:justify-start">
          <img class="w-80 object-contain" src="@/assets/athlete-management.jpg" alt="" />
        </div>
        <div class="grid order-2 sm:order-1 sm:place-content-end">
          <h3 class="font-semibold text-lg md:text-xl mb-2.5">Athlete Management</h3>
          <ul class="space-y-2.5">
            <li class="flex gap-2.5"><Checklist />Athlete Representation</li>
            <li class="flex gap-2.5"><Checklist />Training and Development Support</li>
            <li class="flex gap-2.5"><Checklist />Competition Planning</li>
            <li class="flex gap-2.5"><Checklist />Media and Public Relations</li>
            <li class="flex gap-2.5"><Checklist />Health and Wellness Management</li>
            <li class="flex gap-2.5"><Checklist />Financial Management</li>
            <li class="flex gap-2.5"><Checklist />Career Transition Planning</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
