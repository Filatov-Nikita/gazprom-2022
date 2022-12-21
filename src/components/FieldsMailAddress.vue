<template>
  <FormGroup class="tw-space-y-2" label="Почтовый адрес">
    <FieldsAddress namePrefix="mailAddress" />
    <AppInput rules="required" label="Телефон" name="mailAddress.phone" />
    <AppInput rules="required" label="Электронная почта" name="mailAddress.email" />
    <AppInput label="Дополнительный телефон" name="mailAddress.additionalPhone" />
  </FormGroup>
</template>

<script setup lang="ts">
  import AppInput from '@/core/AppInput.vue';
  import FormGroup from './FormGroup.vue';
  import FieldsAddress from './FieldsAddress.vue';

</script>
