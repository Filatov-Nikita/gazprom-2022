<template>
  <label class="tw-block tw-mb-1 tw-text-sm">
    <slot />
    <span>{{ required ? '*' : '' }}</span>
  </label>
</template>
<script setup lang="ts">
  interface Props {
    required: boolean
  }

  const props = withDefaults(defineProps<Props>(), { required: false });

</script>
