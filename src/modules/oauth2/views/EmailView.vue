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
import { state, rules, submit } from '../services/logictics/email'
import { useRouter } from 'vue-router'

const { pass, errorFields } = useAsyncValidator(state, rules)
const router = useRouter()

const submitEmail = async (): Promise<void> => {

  const response = await submit()
 
  if (response) {
    router.push('/oauth2')
  }
}
</script>
