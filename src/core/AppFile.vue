<template>
  <div>
    <Field
      v-slot="{ handleChange, handleBlur, field, errorMessage }"
      :name="name"
      :rules="rules"
      :label="label"
      :modelValue="null"
    >
      <AppLabel :required="isRequired">{{ label }}</AppLabel>
      <button class="app-file" type="button">
        <span class="app-file__label">{{ getFilename(field.value) }}</span>
        <input
          class="file-native"
          type="file"
          v-bind="$attrs"
          @change="handleChange"
          @blur="handleBlur"
        />
      </button>
      <AppErrorMessage class="tw-mt-1" v-if="errorMessage">
        {{ errorMessage }}
      </AppErrorMessage>
    </Field>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false
}
</script>

<script setup lang="ts">
  import AppLabel from '@/core/AppLabel.vue';
  import AppErrorMessage from '@/core/AppErrorMessage.vue';
  import { Field } from 'vee-validate';
  import { computed } from 'vue';

  const props = defineProps<{
    name: string,
    label: string,
    rules?: string,
  }>();

  const isRequired = computed(() => {
    if(props.rules === undefined) return false;
    return props.rules.indexOf('required') !== -1;
  });

  function getFilename(value: any) {
    if(value === null) return 'Выберите файл';
    return value.name
  }
</script>
<style scoped lang="scss">
  .app-file {
    position: relative;
    background: theme('colors.blue.700');
    padding: 6px 8px;
    border-radius: 4px;
    cursor: pointer;
    display: block;
    width: 100%;
    max-width: 180px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;

    &__label {
      font-size: 14px;
      color: white;
    }

    &:hover {
      background: theme('colors.blue.800');
    }

    &:active {
      background: theme('colors.blue.900');
    }
  }

  .file-native {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 10;
    opacity: 0;
  }
</style>
