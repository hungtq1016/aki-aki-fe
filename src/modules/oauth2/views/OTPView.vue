<template>
  <div class="max-w-xs-full">
    <AuthForm :pass="pass" :submit="submitOTP">
      <div class="sm:col-span-6">
        <AuthOTP/>
      </div>
    </AuthForm>
  </div>
</template>

<script setup lang="ts">
import AuthForm from '../components/Auth.form.vue';

import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { state, rules, submit } from '../services/logictics/otp'
import { useRouter, useRoute } from 'vue-router'
import AuthOTP from '../components/Auth.otp.vue';

const { pass } = useAsyncValidator(state, rules)
const router = useRouter()
const route = useRoute()

if (!route.query.email) {
  router.push('/oauth2')
}

const submitOTP = async (): Promise<void> => {

  const response = await submit(String(route.query.email))

  if (response) {
    router.push('/oauth2')
  }
}
</script>
