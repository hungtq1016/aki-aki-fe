<template>
  <div class="w-full  sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 rounded-xl bg-cerulean-900/20 p-1">
        <Tab
          v-for="category in categories"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
              'ring-white/60 ring-offset-2 ring-offset-cerulean-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white text-cerulean-700 shadow'
                : 'text-cerulean-100 hover:bg-white/[0.12] hover:text-white',
            ]"
          >
            {{ $t(category) }}
          </button>
        </Tab>
      </TabList>

      <TabPanels class="mt-2">
        <TabPanel>
          <RoleUpdateView/>
        </TabPanel>
        <TabPanel>
          <RolePermissionView/>
        </TabPanel>
        <TabPanel>
          <RoleMemberView/>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
import RolePermissionView from './RolePermissionView.vue';
import RoleMemberView from './RoleMemberView.vue';
import RoleUpdateView from './RoleUpdateView.vue';

const categories = ref(["content.edit","content.permissions","content.members"])
</script>
