<template>
  <div class="page wrapper">
    <h1 class="h1 width-640">
      Заключение договора на техническое обслуживание и&nbsp;ремонт газовых сетей и оборудования
    </h1>
    <Form class="width-480 tw-space-y-2" @submit="onSubmit">
      <AppSelect rules="required" label="Тип заявителя" name="type" :options="typeOptions" />
      <AppSelect rules="required" label="Объект" name="object" :options="objectOptions" />

      <FieldsClientData />
      <FieldsMailAddress />
      <FieldsConfidant />
      <FieldsObjectData />
      <FieldsNotifications />

      <AppButton type="submit">Отправить</AppButton>
    </Form>
  </div>
</template>

<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import AppButton from '@/core/AppButton.vue';
  import { Form } from 'vee-validate';

  import FieldsClientData from './FieldsClientData.vue'
  import FieldsMailAddress from './FieldsMailAddress.vue'
  import FieldsObjectData from './FieldsObjectData.vue'
  import FieldsNotifications from './FieldsNotifications.vue'
  import FieldsConfidant from './FieldsConfidant.vue'

  const typeOptions = [
    { label: 'Физическое лицо', value: 'FL' },
    { label: 'Индивидуальный предприниматель', value: 'IP' },
    { label: 'Юридическое лицо', value: 'UL' },
  ];

  const objectOptions = [
    { label: 'Коммунально-бытовой (КБО)', value: 'kbo' },
    { label: 'Коммерческий (ПП).', value: 'PP' },
  ];

  const onSubmit = (values: object) => {
    console.log(values);
  }
</script>
