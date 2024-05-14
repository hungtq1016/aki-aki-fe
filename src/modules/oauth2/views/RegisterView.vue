<template>
  <div class="max-w-md w-full">
    <AuthForm :pass="pass" :submit="submitLogin">
      <div class="sm:col-span-6">
        <AuthInput v-model="state.email" type="email" :placeholder="$t('form.place_holder.email')"
          :has-error="Boolean(errorFields?.email?.length)">
          {{ $t('form.email') }}
        </AuthInput>
      </div>
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
      <div class="sm:col-span-6">
        <AuthInput v-model="state.fullName" :placeholder="$t('form.place_holder.full_name')"
          :has-error="Boolean(errorFields?.fullName?.length)">
          {{ $t('form.full_name') }}
        </AuthInput>
      </div>
      <div class="sm:col-span-6">
        <AuthInput v-model="state.phoneNumber" :placeholder="$t('form.place_holder.phone_number')"
          :has-error="Boolean(errorFields?.phoneNumber?.length)">
          {{ $t('form.phone_number') }}
        </AuthInput>
      </div>
    </AuthForm>
    <div class="relative shrink-0 pt-4 space-y-3">
      <div
        class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0"
      >
        <p class="text-center sm:text-left">{{ $t('content.has_account') }}</p>
        <router-link
          class="flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-500 ring-0 border border-slate-500 hover:border-slate-700 hover:text-gray-100 hover:bg-slate-700 duration-300 ease-out"
          to="/oauth2"
          ><span>{{ $t('route.login') }}</span></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator.mjs';
import AuthForm from '../components/Auth.form.vue';
import AuthInput from '../components/Auth.input.vue';
import { rules, state, submit } from '../services/logictics/register';
import { useUserstore } from '@/core/stores/user';
import { successNotification } from '@/core/services/helpers/alert.helper';
import { i18n } from '@/core/services/base/translation';
import { useRouter } from 'vue-router';

const { pass, errorFields } = useAsyncValidator(state, rules)

const router = useRouter()

const submitLogin = async (): Promise<void> => {
  const { fetchUser } = useUserstore()

  const response = await submit()

  if (response) {
    successNotification(i18n.global.t('message.register_success'))
    await fetchUser()
    router.push('/')
  }
}

</script>
