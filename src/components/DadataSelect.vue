<template>
  <div v-if="showing" class="dadata-select">
    <slot>
      <p class="tw-absolute tw-bottom-0 tw-left-0 tw-text-sm tw-p-2 tw-font-medium">
        {{ empty ? 'Ничего не найдено' : 'Начните вводить...' }}
      </p>
    </slot>
  </div>
</template>
<script setup lang="ts">
  const props = defineProps<{ showing: boolean, empty: boolean }>();
</script>
<style scoped>
  .dadata-select {
    overflow-x: hidden;
    max-height: 200px;
    min-height: 35px;
    position: absolute;
    z-index: 50;
    width: 100%;
    background: theme('colors.white');
    border-radius: 0 0 6px 6px;
    top: 58px;
    left: 0;
    right: 0;
    border-width: 1px;
    border-top-width: 0px;
    border-style: solid;
    border-color: theme('colors.gray.600')
  }
</style>
