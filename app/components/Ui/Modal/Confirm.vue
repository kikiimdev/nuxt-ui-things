<script setup lang="ts">
    const model = defineModel<boolean>({
        required: false
    })

    const props = withDefaults(
        defineProps<{
            title?: string,
            description?: string,
            loading?: boolean,
            handleSubmit: Function,
            handleCancel?: Function,
            submitText?: string
            submitVariant?: VariantProps<typeof buttonStyles>["variant"]
            cancelText?: string
            cancelVariant?: VariantProps<typeof buttonStyles>["variant"]
        }>(),
        {
            submitText: 'Submit',
            submitVariant: 'default',
            cancelText: 'Batal',
            cancelVariant: 'outline',
        }
    )
</script>

<template>
    <UiAlertDialog v-model:open="model">
      <UiAlertDialogTrigger v-if="$slots.trigger" as-child>
        <slot name="trigger" />
      </UiAlertDialogTrigger>
      <UiAlertDialogContent @escape-key-down="() => handleCancel?.() || (model = false)">
        <UiAlertDialogHeader>
            <UiAlertDialogTitle>
                <!-- Are you absolutely sure? -->
                {{ title }}
            </UiAlertDialogTitle>
            <UiAlertDialogDescription>
                <!-- This action cannot be undone. This will permanently delete your account and remove your
                data from our servers. -->
                {{ description }}
            </UiAlertDialogDescription>
        </UiAlertDialogHeader>
        <UiAlertDialogFooter>
          <UiAlertDialogCancel :disabled="loading" :text="cancelText" :variant="cancelVariant" @click="() => handleCancel?.() || (model = false)" />
          <UiAlertDialogAction :loading="loading" :variant="submitVariant" @click="() => handleSubmit()">
            <Icon class="h-4 w-4 animate-spin" name="lucide:loader-2" />
            {{ submitText }}
          </UiAlertDialogAction>
        </UiAlertDialogFooter>
      </UiAlertDialogContent>
    </UiAlertDialog>
</template>