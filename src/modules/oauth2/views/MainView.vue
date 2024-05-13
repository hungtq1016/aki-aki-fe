<template>
  <div class="max-w-md w-full">
    <form @submit.prevent="submitLogin" class="w-full">
      <div>
        <div class="py-5">
          <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div class="sm:col-span-6">
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                {{ $t('form.email') }}
              </label>
              <div class="mt-2">
                <input
                  id="email"
                  v-model="state.email"
                  type="email"
                  autocomplete="email"
                  :placeholder="$t('form.place_holder.email')"
                  :class="{ '!ring-red-600': errorFields?.email?.length }"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-cerulean-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-6">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                {{ $t('form.password') }}
              </label>
              <div class="mt-2">
                <input
                  id="password"
                  v-model="state.password"
                  type="password"
                  autocomplete="password"
                  :placeholder="$t('form.place_holder.password')"
                  :class="{ '!ring-red-600': errorFields?.password?.length }"
                  class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-inset focus:ring-cerulean-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pb-10 flex items-center justify-end gap-x-6">
        <button
          type="submit"
          :disabled="!pass"
          class="rounded-md bg-cerulean-600 px-3 py-2 text-sm font-semibold text-white shadow-sm disabled:bg-cerulean-100 disabled:text-zinc-300 hover:bg-cerulean-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean-600"
        >
          {{ $t('button.confirm') }}
        </button>
      </div>
    </form>
    <div class="relative border-t w-full">
      <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 p-1 bg-white">
        <span>{{ $t('content.or') }}</span>
      </div>
    </div>
    <div class="pt-10 pb-5">
      <div class="flex justify-center gap-x-4">
        <button
          class="flex items-center justify-center gap-x-2 appearance-none text-slate-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 border border-slate-400 hover:bg-slate-50/80 hover:border-slate-600 duration-300 ease-in"
        >
          <SVGGoogle class="w-6 h-6" />
        </button>
        <button
          class="flex items-center justify-center gap-x-2 appearance-none text-slate-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 border border-slate-400 hover:bg-slate-50/80 hover:border-slate-600 duration-300 ease-in"
        >
          <SVGFacebook class="w-6 h-6 fill-blue-600" />
        </button>
        <button
          class="flex items-center justify-center gap-x-2 appearance-none text-slate-900 bg-white rounded-md w-full px-3 h-10 shadow-sm sm:text-sm focus:outline-none placeholder:text-slate-400 border border-slate-400 hover:bg-slate-50/80 hover:border-slate-600 duration-300 ease-in"
        >
          <SVGTwitterX class="w-6 h-6" />
        </button>
      </div>
    </div>
    <div class="relative shrink-0 pt-4 space-y-3">
      <div
        class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0"
      >
        <p class="text-center sm:text-left">{{ $t('content.has_not_account') }}</p>
        <router-link
          class="flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-500 ring-0 border border-slate-500 hover:border-slate-700 hover:text-gray-100 hover:bg-slate-700 duration-300 ease-out"
          to="/oauth2/register"
          ><span>{{ $t('route.register') }}</span></router-link
        >
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
