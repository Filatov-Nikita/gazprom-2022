<template>
  <div class="tw-text-sm tw-p-2 hover:tw-bg-gray-200 tw-cursor-pointer">
    {{ item.value }}
  </div>
</template>
<script setup lang="ts">
  import type { Item } from '@/types/dadata';

  const props = defineProps<{
    item: Item
  }>();
</script>
