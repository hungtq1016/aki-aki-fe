<template>
  <div class="max-w-xs w-full">
    <AuthForm :pass="pass" :submit="submitEmail">
      <div class="sm:col-span-6">
        <AuthInput v-model="state.email" type="email" :placeholder="$t('form.place_holder.email')"
          :has-error="Boolean(errorFields?.email?.length)">
          {{ $t('form.email') }}
        </AuthInput>
      </div>
    </AuthForm>
  </div>
</template>

<script setup lang="ts">
import AuthForm from '../components/Auth.form.vue';
import AuthInput from '../components/Auth.input.vue';

import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { state, rules, submit } from '../services/logictics/logbyemail'
import { useRouter } from 'vue-router'
import { successNotification } from '@/core/services/helpers/alert.helper';
import { i18n } from '@/core/services/base/translation';

const { pass, errorFields } = useAsyncValidator(state, rules)
const router = useRouter()

const submitEmail = async (): Promise<void> => {

  const response = await submit()

  if (response) {
    successNotification(i18n.global.t('message.check_email'))
    router.push('/oauth2/otp?email='+state.email)
  }
}
</script>
