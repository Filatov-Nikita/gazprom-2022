<template>
  <div class="app-input">
    <AppLabel :for="name" :required="isRequired">{{ label }}</AppLabel>
    <input class="app-input__input" v-bind="$attrs" :id="name" :type="type" v-model="field.value.value" />
    <ErrorMessage v-if="field.errorMessage">
      {{ field.errorMessage }}
    </ErrorMessage>
  </div>
</template>
<script setup lang="ts">
  import AppLabel from './AppLabel.vue';
  import ErrorMessage from './AppErrorMessage.vue'
  import { useField } from 'vee-validate';
  import { watch, toRef, computed } from 'vue';

  interface Props {
    type?: string
    label: string,
    name: string,
    rules?: string,
    modelValue?: string
  }

  const props = withDefaults(defineProps<Props>(), { type: 'text' });

  const emit = defineEmits<{
    (e: 'update:modelValue', value?: string): void
   }>()

  const modelValue = toRef(props, 'modelValue');

  const field = useField<string | undefined>(props.name, props.rules, {
    label: props.label,
    initialValue: props.modelValue,
  });

  const isRequired = computed(() => {
    return props.rules?.indexOf('required') !== -1;
  });

  watch(field.value, (newVal) => {
    if(newVal !== field.value.value) {
      emit('update:modelValue', newVal);
    }
  });

  watch(modelValue, (newVal) => {
    field.value.value = newVal;
  });
</script>
<style scoped lang="scss">
  .app-input {
    &__input {
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

      &:disabled {
        border-color: theme('colors.gray.400') !important;
        background: theme('colors.gray.300');
      }
    }
  }
</style>
