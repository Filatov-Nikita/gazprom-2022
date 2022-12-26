<template>
  <FormGroup class="tw-space-y-2" label="Почтовый адрес">
    <FieldsAddress namePrefix="mailAddress" />
    <AppInput type="tel" rules="required|phone" label="Телефон" name="mailAddress.phone" phone />
    <AppInput type="email" rules="required|email" label="Электронная почта" name="mailAddress.email" />
    <AppInput type="tel" rules="phone" label="Дополнительный телефон" name="mailAddress.additionalPhone" phone />
  </FormGroup>
</template>

<script setup lang="ts">
  import AppInput from '@/core/AppInput.vue';
  import FormGroup from './FormGroup.vue';
  import FieldsAddress from './FieldsAddress.vue';

</script>
