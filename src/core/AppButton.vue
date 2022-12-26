<template>
  <button class="app-button text" :type="type">
    <slot />
  </button>
</template>

<script setup lang="ts">
  interface Props {
    type: 'button' | 'submit'
  };

  const props = withDefaults(defineProps<Props>(), { type: 'button' });
</script>
<style scoped lang="scss">
  .app-button {
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    border-radius: 4px;
    padding: 12px 32px;
    background: theme('colors.blue.600');
    color: theme('colors.white');

    &:hover {
      background: theme('colors.blue.700');
    }

    &:active {
      background: theme('colors.blue.800');
    }
  }
</style>
