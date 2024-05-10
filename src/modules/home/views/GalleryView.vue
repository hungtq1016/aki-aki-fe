<template>
  <section class="pb-10 bg-cerulean-500">
    <div class="max-w-screen-xl m-auto">
      <div class="py-5 md:py-10 md:px-5">
        <div class="grid grid-cols-2">
          <div>
            <h1
              class="text-2xl leading-[45px] uppercase text-center font-semibold mb-10 text-white relative after:contents-[''] after:h-pxafter:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-white"
            >
              chuyên khoa của chúng tôi
            </h1>
            <p class="text-white text-justify">
              Bệnh Viện Thú Y PETPRO luôn nỗ lực để đạt được sự hài lòng và tín nhiệm bằng chất
              lượng dịch vụ, trải nghiệm hoàn hảo với chi phí hợp lý. Đáp ứng kỳ vọng của khách
              hàng, đạt được sự tin tưởng gắn kết với sứ mệnh phát triển và nâng cao sức khoẻ cho
              thú cưng Việt Nam tại PetPro.
            </p>
            <div class="py-5">
              <GalleryList />
            </div>
          </div>
          <div class="relative">
            <img
              class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[320px]"
              src="/doctor.png"
              alt="Doctor"
            />
          </div>
        </div>
        <GalleryFlick />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import GalleryFlick from '../components/Gallery.flick.vue'
import GalleryList from '../components/Gallery.list.vue'
</script>

<style scoped></style>
