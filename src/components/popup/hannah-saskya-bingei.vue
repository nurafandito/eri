<script setup>
import Education from '@/components/icon/education.vue';
import Certificate from '@/components/icon/certificate.vue';
</script>

<template>
  <div
    id="hannah-saskya-bingei"
    data-modal-backdrop="dynamic"
    tabindex="-1"
    aria-hidden="true"
    class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative p-5 w-full max-w-5xl max-h-full">
      <div class="relative bg-white rounded-lg shadow">
        <div class="flex items-center justify-between p-5 border-b rounded-t">
          <h3 class="text-xl font-semibold text-gray-900">Hannah Saskya Bingei</h3>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center" data-modal-hide="hannah-saskya-bingei">
            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <div class="pt-5 px-5 space-y-5">
          <p>
            Hannah Saskya Bingei has always dedicated her life to the equine industry. Saskya began riding at the age of 12 and started working with horses in 2015 at the Equine Therapy Center in Hartpury, England. Graduating from a
            Bachelor of Science (Hons). In Equestrian Sports Science from Hartpury University, Saskya has dedicated her life to sport horses and the equine sports industry.
          </p>
          <p>
            After interning at the Beaufort Polo Club under the Tomlinson family, Saracen’s horse feed company, and a few UK equine hospitals including the B & W Equine Referral Hospital, she returned to Indonesia in 2018 to become an
            assistant stable manager and led the Equestrian Sports Information Center where she oversaw the management of over 130 horses and world riding athletes in the state-of-the-art equestrian facility at Jakarta International
            Equestrian Park Pulomas.
          </p>
          <p>
            That year, Saskya also worked as a social media coordinator and content creator for Royal Horse Indonesia, a horse feed company, and DJIUGO, a sports horse company. Prior to that, Saskya oversaw the management of Equinara Horse
            Sports and Delaqour Premium GmBh in the 18th Asian Games Equestrian Facility at Jakarta International Equestrian Park Pulomas.
          </p>
          <p>
            Saskya currently plays an active role in the International communications department of the Indonesian equestrian federation, PP PORDASI and a Special Staff to the Secretary General and President of the South Equestrian
            Federation. As of recently, Saskya made a return to study in 2020 and is currently working towards finishing her Masters in Equine Science from the Dick Veterinary School at the University of Edinburgh.
          </p>
        </div>
        <div class="p-5 px-5 space-y-2.5">
          <div>
            <p class="flex items-center gap-2.5 mb-2.5 text-lg font-semibold text-gray-900">Education <Education /></p>
            <ul class="list-disc list-inside">
              <li>MSc. Equine Science, University of Edinburgh, UK</li>
              <li>BSc. Equestrian Sports Science, University of West England, UK</li>
            </ul>
          </div>
          <div>
            <p class="flex items-center gap-2.5 mb-2.5 text-lg font-semibold text-gray-900">Certified <Certificate /></p>
            <ul class="list-disc list-inside">
              <li>Trainee Saddle Fitter. Society of Master Saddlers</li>
              <li>Neue Schule Academy: Fundamentals to Bits & Bitting for Horses. LANTRA, UK</li>
              <li>Equine-Reproduction AI (Artificial Insemination) Technician. Department for Environment, Food, and Rural Affairs (DEFRA), UK</li>
              <li>Spillers Certificate of Competence in Equine Nutrition. British Grooms Association, UK</li>
              <li>KT 1 & KT 2 Equine. Kinesio Taping Association</li>
              <li>FAA Level 2 Award in Emergency First Aid for Horse Riders</li>
              <li>Certification in Bedding Management for Horses, BEDMAX</li>
              <li>Level 3 Diploma in Sports Massage Therapy, ITEC</li>
            </ul>
          </div>
        </div>
        <div class="flex items-center justify-center gap-5 p-5 border-t border-gray-200">
          <a href="https://www.instagram.com/saskyabingei/" target="_blank">
            <img class="w-6 h-6" src="@/assets/icon/instagram.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/in/hannah-saskya-bingei-891185102/" target="_blank">
            <img class="w-6 h-6" src="@/assets/icon/linkedin.png" alt="LinkedIn" />
          </a>
          <a href="mailto:saskya.bingei@eri.co.id">
            <img class="w-[30px] h-[30px]" src="@/assets/icon/gmail.png" alt="Email" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
