<template>
    <FormGroup :has-error="hasError">
        <template #heading>
            {{$t('form.content')}}
        </template>
        <template #content>
            <FormTextarea v-model="model.desc" :has-error="hasError[0]" :placeholder="$t('form.place_holder.desc')">
                {{ $t('form.desc') }}
            </FormTextarea>
            <FormInputSlot :has-error="hasError[1]">
                <template #label>{{ $t('form.content') }}</template>
                <template #content>
                    <ckeditor :editor="editor" v-model="model.content" :config="editorConfig"></ckeditor>
                </template>
            </FormInputSlot>
        </template>
    </FormGroup>
</template>

<script setup lang="ts">
import { ref, type ModelRef, type Ref } from 'vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormGroup from '../components/Form.group.vue';
import FormTextarea from '../components/Form.textarea.vue';
import FormInputSlot from '../components/Form.input.slot.vue';

const editor: Ref<typeof ClassicEditor> = ref(ClassicEditor)
const editorConfig: Ref<any> = ref()

const model: ModelRef<any> = defineModel({ required: true })

defineProps<{
    hasError: boolean[]
}>()
</script>
