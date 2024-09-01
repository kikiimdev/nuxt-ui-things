<script lang="ts" setup>
  //
</script>

<template>
    <div>
      <h1>Hello</h1>
      <UiButton
        @click="
          useSonner('Default', {
            description: 'This is a description',
          })
        "
        >Show default</UiButton
      >
      <UiVueSonner />
    </div>
</template>
  
  
  