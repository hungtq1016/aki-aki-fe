<template>
    <div class="max-w-md w-full">
        <form @submit.prevent="submit" class="w-full ">
            <div>
                <div class="py-5">
                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div class="sm:col-span-6">
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">
                                {{ $t('form.email') }}
                            </label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email"
                                    :placeholder="$t('form.place_holder.email')"
                                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cerulean-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">
                                {{ $t('form.password') }}
                            </label>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="password"
                                    :placeholder="$t('form.place_holder.password')"
                                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cerulean-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-6">
                            <label for="re_password" class="block text-sm font-medium leading-6 text-gray-900">
                                {{ $t('form.re_password') }}
                            </label>
                            <div class="mt-2">
                                <input id="re_password" name="re_password" type="password" autocomplete="re_password"
                                    :placeholder="$t('form.place_holder.re_password')"
                                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cerulean-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div class="sm:col-span-3">
                            <label for="firstname" class="block text-sm font-medium leading-6 text-gray-900">
                                {{ $t('form.firstname') }}
                            </label>
                            <div class="mt-2">
                                <input type="text" name="firstname" id="firstname" autocomplete="given-name"
                                :placeholder="$t('form.place_holder.firstname')"
                                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div class="sm:col-span-3">
                            <label for="lastname" class="block text-sm font-medium leading-6 text-gray-900">
                                {{ $t('form.lastname') }}
                            </label>
                            <div class="mt-2">
                                <input type="text" name="lastname" id="lastname" autocomplete="family-name"
                                :placeholder="$t('form.place_holder.lastname')"
                                    class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="pb-10 flex items-center justify-end gap-x-6">
                <button type="button"
                    class="text-sm font-semibold leading-6 text-gray-900">{{ $t('button.cancel') }}</button>
                <button type="submit"
                    class="rounded-md bg-cerulean-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cerulean-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean-600">{{ $t('button.confirm') }}</button>
            </div>
        </form>


        <div class="relative shrink-0 pt-4 space-y-3">
            <div
                class="space-y-4 text-sm text-gray-900 sm:flex sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0">
                <p class="text-center sm:text-left">{{ $t('content.has_account') }}</p>
                <router-link
                    class="flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 text-slate-500 ring-0 border border-slate-500 hover:border-slate-700 hover:text-gray-100 hover:bg-slate-700 duration-300 ease-out"
                    to="/oauth2"><span>{{ $t('route.login') }}</span></router-link>
            </div>

        </div>
    </div>

</template>

<script setup lang="ts">

const submit = () => {
    console.log("Hello")
}

</script>