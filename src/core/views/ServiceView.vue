<template>
  <SpecialistView />
  <EmergencyView />
  <ServiceView />
  <InsuranceView />
  <BookingView />
  <FaQView />
</template>

<script setup lang="ts">
import SpecialistView from '@/modules/reuse/views/SpecialistView.vue'
import BookingView from '@/modules/reuse/views/BookingView.vue'
import FaQView from '@/modules/reuse/views/FaQView.vue'
import ServiceView from '@/modules/reuse/views/ServiceView.vue'
import EmergencyView from '@/modules/service/views/EmergencyView.vue'
import InsuranceView from '@/modules/service/views/InsuranceView.vue'
</script>
