<template>
  <FormGroup class="tw-space-y-2" label="Данные об объекте">
    <AppInput rules="required" label="Наименование объекта" name="objectData.name" />
    <AppInput rules="required" label="Кадастровый номер объекта" name="objectData.cadastrNumber" />
    <FieldsAddress namePrefix="objectData" />
  </FormGroup>
</template>
<script setup lang="ts">
  import AppInput from '@/core/AppInput.vue';
  import FormGroup from './FormGroup.vue';
  import FieldsAddress from './FieldsAddress.vue';
</script>
