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
                    </div>
                </div>
            </div>

            <div class="pb-10 flex items-center justify-end gap-x-6">
                <button type="button" class="text-sm font-semibold leading-6 text-gray-900">{{$t('button.cancel')}}</button>
                <button type="submit"
                    class="rounded-md bg-cerulean-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cerulean-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cerulean-600">{{$t('button.confirm')}}</button>
            </div>
        </form>

    </div>

</template>

<script setup lang="ts">

const submit = () => {
    console.log("Hello")
}

</script>