<template>
  <div class="max-w-xs w-full">
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
    </AuthForm>
    <div class="pb-10 flex justify-between">
      <router-link
          class="text-sm text-center"
          to="/oauth2/send-email"><span>{{ $t('route.forgot_password') }}</span></router-link>
          <router-link
          class="text-sm text-center"
          to="/oauth2/login-by-email"><span>{{ $t('route.login_by_email') }}</span></router-link>
    </div>
    <div class="relative border-t w-full">
      <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-1 bg-white">
        <span>{{ $t('content.or') }}</span>
      </div>
    </div>
    <div class="pt-10 pb-5">
      <div class="flex justify-center gap-x-4">
        <button
          class="flex items-center justify-center gap-x-2 appearance-none text-slate-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 border border-slate-400 hover:bg-slate-50/80 hover:border-slate-600 duration-300 ease-in">
          <SVGGoogle class="w-6 h-6" />
        </button>
        <button
          class="flex items-center justify-center gap-x-2 appearance-none text-slate-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 border border-slate-400 hover:bg-slate-50/80 hover:border-slate-600 duration-300 ease-in">
          <SVGFacebook class="w-6 h-6 fill-blue-600" />
        </button>
        <button
          class="flex items-center justify-center gap-x-2 appearance-none text-slate-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 border border-slate-400 hover:bg-slate-50/80 hover:border-slate-600 duration-300 ease-in">
          <SVGTwitterX class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div class="relative shrink-0 pt-4 space-y-3">
      <div class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
        <p class="text-center sm:text-left">{{ $t('content.has_not_account') }}</p>
        <router-link
          class="flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-500 ring-0 border border-slate-500 hover:border-slate-700 hover:text-gray-100 hover:bg-slate-700 duration-300 ease-out"
          to="/oauth2/register"><span>{{ $t('route.register') }}</span></router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SVGGoogle from '@/core/components/svg/SVG.google.vue'
import SVGFacebook from '@/core/components/svg/SVG.facebook.vue'
import SVGTwitterX from '@/core/components/svg/SVG.twitter.x.vue'
import { useAsyncValidator } from '@vueuse/integrations/useAsyncValidator'
import { state, rules, submit } from '../services/logictics/login'
import { useUserstore } from '@/core/stores/user'
import { successNotification } from '@/core/services/helpers/alert.helper'
import { i18n } from '@/core/services/base/translation'
import { useRouter } from 'vue-router'
import AuthForm from '../components/Auth.form.vue'
import AuthInput from '../components/Auth.input.vue'

const { pass, errorFields } = useAsyncValidator(state, rules)
const router = useRouter()

const submitLogin = async (): Promise<void> => {
  const { fetchUser } = useUserstore()

  const response = await submit()

  if (response) {
    successNotification(i18n.global.t('message.login_success'))
    await fetchUser()
    router.push('/')
  }
}
</script>
