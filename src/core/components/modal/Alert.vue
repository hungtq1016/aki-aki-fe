<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="relative text-center">
        <p class="text-white dark:text-alabaster-500 mb-1">{{ $t('message.confirm_delete') }}</p>
        <div class="flex justify-start items-center gap-x-2">
            <button type="submit" @click.stop="() => $emit('confirmClick')"
                class="text-white bg-amber-600 hover:bg-amber-700 font-medium rounded text-xs px-3 py-1.5  text-center inline-flex items-center">
                {{ $t('button.confirm', { name: "Audio" }) }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
defineEmits<{
    (e: 'confirmClick'): void
}>()
</script>
