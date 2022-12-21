<template>
  <div class="form-group">
    <p class="form-group__label">{{ label }}</p>
    <slot />
  </div>
</template>

<script setup lang="ts">
  defineProps<{ label: string }>();
</script>
<style scoped lang="scss">
  .form-group {
    border: 1px solid theme('colors.gray.700');
    padding: 16px;
    border-radius: 4px;

    &__label {
      font-size: 18px;
      font-weight: 500;
      color: theme('colors.gray.700');
      margin-bottom: 12px;
    }
  }
</style>
