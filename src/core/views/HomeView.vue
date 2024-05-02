<template>
    <BannerView/>
    <AboutView/>
    <SpecialistView/>
    <ServiceView/>
    <GalleryView/>
    <CertificateView/>
    <BlogsView/>
    <CustomersView/>
</template>

<script setup lang="ts">
import BannerView from '@/modules/home/views/BannerView.vue';
import AboutView from '@/modules/home/views/AboutView.vue';
import GalleryView from '@/modules/home/views/GalleryView.vue';
import CertificateView from '@/modules/home/views/CertificateView.vue';
import BlogsView from '@/modules/home/views/BlogsView.vue';
import CustomersView from '@/modules/home/views/CustomersView.vue';
import SpecialistView from '@/modules/reuse/views/SpecialistView.vue';
import ServiceView from '@/modules/reuse/views/ServiceView.vue';

</script>