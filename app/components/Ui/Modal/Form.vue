<script setup lang="ts">
    const props = withDefaults(
        defineProps<{
            title?: string
            description?: string
            handleCancel?: Function
            handleSubmit?: Function
            submitText?:string
            cancelText?:string
            loading?: boolean
        }>(),
        {
            title: "Edit profile",
            description: "Make changes to your profile here. Click save when you're done.",
            submitText: "Submit",
            cancelText: "Batal"
        }
    )

    const emits = defineEmits(['cancel', 'submit'])

    const modelValue = defineModel<boolean>({
        required: false,
    })

    const _handleCancel = async () => {
        try {
            await props.handleCancel?.()
            modelValue.value = false
        } catch (err: any) {
            throw err
        }
    }

    const _handleSubmit = async () => {
        try {
            await props.handleSubmit?.()
            modelValue.value = false
        } catch (err: any) {
            console.log({dialogErr: err});
            
            throw err
        }
    }

</script>

<template>
    <UiDialog v-model:open="modelValue">
        <UiDialogTrigger v-if="$slots.trigger" as-child>
            <slot name="trigger" />
        </UiDialogTrigger>

        <UiDialogContent
            class="max-w-[90vw] sm:max-w-[425px]"
            :title="title"
            :description="description"
        >
            <template #content>
                <slot />
            </template>
            <template #footer>
                <UiDialogFooter>
                    <slot name="footer">
                        <UiButton
                            @click="_handleCancel"
                            variant="outline"
                            class="mt-2 sm:mt-0"
                            :disabled="loading"
                        >
                            Cancel
                        </UiButton>
                        <UiButton :loading @click="_handleSubmit">Save</UiButton>
                    </slot>
                </UiDialogFooter>
            </template>
        </UiDialogContent>
    </UiDialog>
</template>