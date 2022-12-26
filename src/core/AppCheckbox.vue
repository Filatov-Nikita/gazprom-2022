<template>
  <div class="tw-flex tw-items-center">
    <AppLabel class="tw-mr-2" :for="name" :required="isRequired">
      {{ label }}
    </AppLabel>
    <Field
      class="tw-mb-[3px]"
      :id="name"
      :name="name"
      :label="label"
      :rules="rules"
      :value="value"
      :uncheckedValue="uncheckedValue"
      :modelValue="modelValue"
      type="checkbox"
    />
  </div>
</template>
<script setup lang="ts">
  import AppLabel from '@/core/AppLabel.vue';
  import { Field } from 'vee-validate';
  import { computed } from 'vue';

  const props = defineProps<{
    name: string,
    rules?: string,
    label: string,
    value?: string | boolean,
    uncheckedValue?: string | boolean,
    modelValue?: string | boolean
   }>();

  const isRequired = computed(() => {
    if(props.rules === undefined) return false;
    return props.rules.indexOf('required') !== -1;
  });
</script>
