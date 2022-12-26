<template>
  <div class="page wrapper">
    <h1 class="h1 width-640">
      Заключение договора на техническое обслуживание и&nbsp;ремонт газовых сетей и оборудования
    </h1>
    <Form ref="formRef" class="width-480 tw-space-y-2" @submit="onSubmit">
      <AppSelect rules="required" label="Тип заявителя" name="type" :options="typeOptions" />
      <AppSelect rules="required" label="Объект" name="object" :options="objectOptions" />

      <FieldsClientData />
      <FieldsMailAddress />
      <FieldsConfidant />
      <div class="tw-pt-4 tw-pb-2">
        <p class=" tw-text-gray-800 tw-leading-tight tw-font-medium tw-text-base">
          Прошу заключить договор на техническое обслуживание и ремонт газовых сетей и оборудования, расположенного по адресу:
        </p>
      </div>
      <FieldsObjectData />
      <FieldsNotifications />
      <FieldsFiles />

      <div>
        <AppButton class="tw-mt-6" type="submit">Отправить</AppButton>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import AppButton from '@/core/AppButton.vue';
  import { Form } from 'vee-validate';
  import { provide, ref, Ref } from 'vue';

  import FieldsClientData from './FieldsClientData.vue';
  import FieldsMailAddress from './FieldsMailAddress.vue';
  import FieldsObjectData from './FieldsObjectData.vue';
  import FieldsNotifications from './FieldsNotifications.vue';
  import FieldsConfidant from './FieldsConfidant.vue';
  import FieldsFiles from './FieldsFiles.vue';

  const typeOptions = [
    { label: 'Физическое лицо', value: 'FL' },
    { label: 'Индивидуальный предприниматель', value: 'IP' },
    { label: 'Юридическое лицо', value: 'UL' },
  ];

  const objectOptions = [
    { label: 'Коммунально-бытовой (КБО)', value: 'kbo' },
    { label: 'Коммерческий (ПП).', value: 'PP' },
  ];

  const formRef: Ref<any> = ref(null);
  provide('FormContext', formRef)

  const onSubmit = (values: object) => {
    console.log(values);
  }
</script>
