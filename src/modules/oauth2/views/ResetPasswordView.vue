<template>
  <div class="max-w-xs w-full">
    <AuthForm :pass="pass" :submit="submitSendMail">
      <div class="sm:col-span-6">
        <AuthInput v-model="state.password" type="password" :placeholder="$t('form.place_holder.password')"
          :has-error="Boolean(errorFields?.password?.length)">
          {{ $t('form.password') }}
        </AuthInput>
      </div>
      <div class="sm:col-span-6">
        <AuthInput v-model="state.rePassword" type="password" :placeholder="$t('form.place_holder.re_password')"
          :has-error="Boolean(errorFields?.rePassword?.length)">
          {{ $t('form.re_password') }}
        </AuthInput>
      </div>
    </AuthForm>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import AuthForm from '../components/Auth.form.vue';
import AuthInput from '../components/Auth.input.vue';
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import { rules, state, submit } from '../services/logictics/password';
import { onMounted } from 'vue';
import { post } from '@/core/services/helpers/fetcher.helper';
import type { TResetPasswordRequest } from '../models/type';
import { successNotification } from '@/core/services/helpers/alert.helper';
import { i18n } from '@/core/services/base/translation';

const { pass, errorFields } = useAsyncValidator(state, rules)

const route = useRoute()
const router = useRouter()

onMounted(() => {
  const payload = {
    id: route.query.id,
    email: route.query.email
  }

  post<any, any>('/api/authenticate/email-valid', payload).then(response => {
    if (response === undefined) {
      router.push('/oauth2')
    }
  })
})

const submitSendMail = async () => {
  const payload: TResetPasswordRequest = {
    id: String(route.query.id),
    email: String(route.query.email),
    password: state.password
  }
  const response = await submit(payload)
  if (response) {
    router.push('/oauth2')
  }
}

</script>
