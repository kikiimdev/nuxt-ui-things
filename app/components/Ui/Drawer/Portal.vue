<template>
  <DrawerPortal v-bind="props">
    <slot />
  </DrawerPortal>
</template>

<script lang="ts" setup>
  import { DrawerPortal } from "vaul-vue";

  interface Props
    extends Partial<Pick<InstanceType<typeof DrawerPortal>, "$props">> {}

  const props = defineProps<Props>();
</script>
