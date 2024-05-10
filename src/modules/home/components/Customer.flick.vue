<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Flicking :options="customerOptions" :plugins="plugins">
    <div class="p-2" v-for="(data, index) in customers" :key="index">
      <img :src="data.imageUrl" class="h-40 object-cover w-full" />
    </div>
    <template #viewport>
      <span class="flicking-arrow-prev"></span>
      <span class="flicking-arrow-next"></span>
    </template>
  </Flicking>
</template>

<script setup lang="ts">
import '@egjs/flicking-plugins/dist/arrow.css'

import Flicking from '@egjs/vue3-flicking'
import { customers } from '../services/data/data'
import { Arrow } from '@egjs/flicking-plugins'
import { customerOptions } from '../services/data/options'

const plugins = [new Arrow()]
</script>
