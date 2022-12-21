<template>
  <FormGroup class="tw-space-y-2" label="Доверенность">
    <AppSelect
      rules="required"
      label="Заявку подаю по доверенности"
      name="confidant.hasDocument"
      :options="confidantOptions"
    />
    <template v-if="isConfidant">
      <FieldsPassport namePrefix="confidant.passport" />
      <FieldsAddress namePrefix="confidant.address" />
      <AppInput rules="required" label="Номер доверенности" name="confidant.document.number" />
      <AppInput rules="required" label="Дата доверенности" name="confidant.document.createdAt" />
      <AppInput rules="required" label="Действительна до" name="confidant.document.untilDate" />
    </template>

  </FormGroup>
</template>
<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import AppInput from '@/core/AppInput.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import FieldsAddress from '@/components/FieldsAddress.vue';
  import FieldsPassport from '@/components/FieldsPassport.vue';
  import { useFieldValue } from 'vee-validate';
  import { computed } from 'vue';

  const hasDocument = useFieldValue('confidant.hasDocument');
  const isConfidant = computed(() => hasDocument.value === 'Yes');

  const confidantOptions = [
    { label: 'Нет', value: 'No' },
    { label: 'Да', value: 'Yes' },
  ];
</script>
