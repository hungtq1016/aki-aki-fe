<template>
    <section class="py-5">
        <div class="max-w-screen-xl m-auto">
            <div class="py-5 md:py-10 md:px-5">
                <h1
                    class="text-2xl leading-[45px] uppercase text-center font-semibold mb-10 text-cerulean-400 relative
                    after:contents-[''] after:h-0.5 after:w-32 after:absolute after:left-1/2 after:-bottom-3 after:-translate-x-1/2 after:-translate-y-1/2 after:bg-cerulean-400">
                    THÀNH TÍCH CỦA PETPRO
                </h1>
               
            </div>
            <CertificateFlick />
        </div>
    </section>
</template>

<script setup lang="ts">
import CertificateFlick from '../components/Certificate.flick.vue';
</script>
