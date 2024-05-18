<template>
  <div class="max-w-xs-full">
    <AuthForm :pass="pass" :submit="submitOTP">
      <div class="sm:col-span-6">
        <AuthOTP />
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
import { useUserStore } from '@/core/stores/user';
import { successNotification } from '@/core/services/helpers/alert.helper';
import { i18n } from '@/core/services/base/translation';

const { pass } = useAsyncValidator(state, rules)
const router = useRouter()
const route = useRoute()

if (!route.query.email) {
  router.push('/oauth2')
}

const submitOTP = async (): Promise<void> => {

  const { fetchUser } = useUserStore()

  const response = await submit(String(route.query.email))

  if (response) {
    successNotification(i18n.global.t('message.login_success'))
    await fetchUser()
    router.push('/')
  }
}
</script>
