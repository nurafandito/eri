<script setup>
import Navbar from '@/components/navbar.vue';
import ComprehensiveServices from '@/components/icon/comprehensive-services.vue';
import Expertise from '@/components/icon/expertise.vue';
import CommitmentToExcellence from '@/components/icon/commitment-to-excellence.vue';
import GlobalNetwork from '@/components/icon/global-network.vue';
import CustomizedSolution from '@/components/icon/customized-solution.vue';
import HannahSaskyaBingei from '@/components/popup/hannah-saskya-bingei.vue';
import DavidBingei from '@/components/popup/david-bingei.vue';
import RaniIsmayani from '@/components/popup/rani-ismayani.vue';
import Footer from '@/components/footer.vue';
</script>

<template>
  <Navbar />
  <div class="max-w-screen-xl mx-auto mt-24 px-5">
    <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
      <div class="col-span-1 order-2 md:space-y-5">
        <div class="hidden md:block min-h-72 bg-[url('@/assets/about.jpg')] bg-cover bg-center rounded-lg"></div>
        <div class="grid gap-5 xl:grid-cols-2">
          <div class="col-span-1 bg-gray-100 p-2.5 space-y-2.5 rounded-lg shadow-sm">
            <h2 class="font-medium text-[#FF8643]">Our Vision</h2>
            <p>To be the foremost equine services provider in Indonesia, fostering a thriving equine industry and a community that deeply values horse welfare.</p>
          </div>
          <div class="col-span-1 bg-gray-100 p-2.5 space-y-2.5 rounded-lg shadow-sm">
            <h2 class="font-medium text-[#FF8643]">Our Mission</h2>
            <p>
              Equine Resources Indonesia (ERI) is committed to advancing the equine industry by delivering a wide range of high-quality services, consultancy, education, and media production while promoting ethical practices and the highest
              standards of equine care.
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-1 space-y-2.5 order-1">
        <h1 class="font-medium text-[#FF8643]">How It Started</h1>
        <p class="font-semibold text-xl md:pb-2.5 md:text-2xl lg:text-3xl">Join us on the road towards building a better future for the Indonesian equestrian industry.</p>
        <img class="md:hidden rounded-lg" src="@/assets/about.jpg" alt="" />
        <p>
          Equine Resources Indonesia (ERI) is a pioneering equine services company dedicated to enhancing the equine industry by providing consultancy and support to the equine business sector, especially in Indonesia and surrounding ASEAN
          countries.
        </p>
        <p>
          With a comprehensive portfolio of services, we cater to the diverse needs of horse owners, equestrian businesses, and enthusiasts across the country. Our mission is to elevate equine care, management, and equestrian culture in
          Indonesia, ensuring the well-being and success of both horses and their human counterparts.
        </p>
        <p>
          Due to an ever-growing industry especially in South East Asia, ERI understands the huge demand for guidance and support within new equine businesses. With hands-on management experience and fully equipped with local business
          insights, Equine Resources Indonesia is able to help provide our clients with ensured, high-quality services for all things equine-related.
        </p>
      </div>
    </div>

    <div class="mt-10 flex flex-col gap-5 md:mt-20 md:gap-10">
      <div class="space-y-2.5">
        <h1 class="font-medium text-[#FF8643]">Our Teams</h1>
        <p class="font-semibold text-xl md:pb-2.5 md:text-2xl lg:text-3xl">Meet Experts Behind Equine Resources Indonesia</p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <button data-modal-target="hannah-saskya-bingei" data-modal-toggle="hannah-saskya-bingei" type="button" class="col-span-1 flex flex-col items-center bg-white border border-gray-50 rounded-lg shadow-lg relative team">
          <img class="rounded-t-lg" src="@/assets/our-teams/hannah-saskya-bingei.jpg" alt="Saskya Bingei" />
          <div class="overlay"></div>
          <div class="p-2.5 text-center relative z-10">
            <h5 class="text-xl font-semibold text-gray-900">Hannah Saskya Bingei</h5>
            <p class="text-gray-700">Founder and Managing Director</p>
          </div>
        </button>
        <HannahSaskyaBingei />

        <button data-modal-target="david-bingei" data-modal-toggle="david-bingei" type="button" class="col-span-1 flex flex-col items-center bg-white border border-gray-50 rounded-lg shadow-lg relative team">
          <img class="rounded-t-lg" src="@/assets/our-teams/david-bingei.jpg" alt="David Bingei" />
          <div class="overlay"></div>
          <div class="p-2.5 text-center relative z-10">
            <h5 class="text-xl font-semibold text-gray-900">David Bingei</h5>
            <p class="text-gray-700">Founder</p>
          </div>
        </button>
        <DavidBingei />

        <button button data-modal-target="rani-ismayani" data-modal-toggle="rani-ismayani" type="button" class="col-span-1 flex flex-col items-center bg-white border border-gray-50 rounded-lg shadow-lg relative team">
          <img class="rounded-t-lg" src="@/assets/our-teams/rani-ismayani.jpg" alt="Rani Ismayani" />
          <div class="overlay"></div>
          <div class="p-2.5 text-center relative z-10">
            <h5 class="text-xl font-semibold text-gray-900">Rani Ismayani</h5>
            <p class="text-gray-700">Business Manager</p>
          </div>
        </button>
        <RaniIsmayani />
      </div>
    </div>

    <div class="mt-10 space-y-5 md:space-y-10 md:mt-20">
      <div class="space-y-2.5">
        <h1 class="font-medium text-[#FF8643] md:text-center">Why Choose</h1>
        <p class="font-semibold text-xl md:pb-2.5 md:text-center md:text-2xl lg:text-3xl">Equine Resources Indonesia?</p>
      </div>
      <div class="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10">
        <div class="col-span-1 bg-[url('@/assets/why-chose-eri.jpg')] bg-cover bg-center rounded-lg">
          <img src="@/assets/why-chose-eri.jpg" alt="" class="md:hidden rounded-lg" />
        </div>
        <div class="col-span-1 space-y-2.5">
          <p>
            We are often asked, why should one choose a company that is a member of both the BETA (British Equestrian Trade Association) and the Society of Master Saddlers? By using the services of a BETA Member and the Society of Master
            Saddlers’ standards, anyone will be rest assured the knowledge and professional service of the highest quality for anything horse-related.
          </p>
          <p>
            For one, the Society of Master Saddlers (UK) instituted and continues to operate the only professional saddle fitting qualification available worldwide. Your Society of Master Saddlers-trained Fitter and BETA Approved Official
            Store will provide a professional service based on knowledge and integrity.
          </p>
          <p>
            Acquiring quality advice and purchasing good horse equipment involves considerable investment and some very important decisions when it comes to fit and health, and as a business that is recognised by BETA and Society of Master
            Saddlers, ERI is here to provide you with clear expertise, advice, help and information.
          </p>
          <p>
            At Equine Resources Indonesia (ERI), our passion for horses drives us to deliver exceptional equine services and consultancy to meet the diverse needs of the Indonesian equine community. We are committed to equine welfare,
            industry excellence, and creating a thriving equine culture in Indonesia.
          </p>
          <ul class="space-y-2.5">
            <li class="flex gap-2.5">
              <ComprehensiveServices />
              <div>
                <span class="font-semibold text-lg">Comprehensive Services</span>
                <p>We offer a wide spectrum of equine services, making us your one-stop solution for all equine needs.</p>
              </div>
            </li>
            <li class="flex gap-2.5">
              <Expertise />
              <div>
                <span class="font-semibold text-lg">Expertise</span>
                <p>Our team includes specialists with international experience and a deep understanding of both the international and local Indonesian equine industry.</p>
              </div>
            </li>
            <li class="flex gap-2.5">
              <CommitmentToExcellence />
              <div>
                <span class="font-semibold text-lg">Commitment to Excellence</span>
                <p>We are dedicated to promoting the highest standards of equine welfare, ethics, and professionalism.</p>
              </div>
            </li>
            <li class="flex gap-2.5">
              <GlobalNetwork />
              <div>
                <span class="font-semibold text-lg">Global Network</span>
                <p>We has international connections, facilitating horse imports and global best practices.</p>
              </div>
            </li>
            <li class="flex gap-2.5">
              <CustomizedSolution />
              <div>
                <span class="font-semibold text-lg">Customized Solutions</span>
                <p>Our services are tailored to meet your specific needs and goals.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>
