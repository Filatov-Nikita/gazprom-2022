<template>
  <div class="app-select">
    <AppLabel :for="name" :required="isRequired">{{ label }}</AppLabel>
    <select class="app-select__select" :name="name" :id="name" @change="field.handleChange">
      <option selected disabled value="">Выберите значение</option>
      <option
        v-for="option in options"
        :key="option.label"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
    <ErrorMessage v-if="field.errorMessage">
      {{ field.errorMessage }}
    </ErrorMessage>
  </div>
</template>
<script setup lang="ts">
  import AppLabel from './AppLabel.vue';
  import ErrorMessage from './AppErrorMessage.vue'
  import { useField } from 'vee-validate';
  import { computed } from 'vue';

  type option = { label: string, value: any };

  interface Props {
    options: option[],
    label: string,
    name: string,
    rules?: string
  }

  const props = defineProps<Props>();

  const isRequired = computed(() => {
    return props.rules?.indexOf('required') !== -1;
  });

  const field = useField(props.name, props.rules, {
    label: props.label
  });


</script>
<style scoped lang="scss">
  .app-select {
    &__select {
      padding: 4px 8px;
      padding-right: 16px;
      border: 1px solid theme('colors.gray.800');
      display: block;
      width: 100%;
      font-size: 14px;
      border-radius: 4px;

      &:hover {
        border-color: theme('colors.blue.600');
      }

      &:focus-visible {
        border-color: theme('colors.blue.800');
        outline: none;
      }
    }
  }
</style>
