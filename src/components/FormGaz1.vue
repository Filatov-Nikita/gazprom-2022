<template>
  <div class="page wrapper">
    <h1 class="h1 width-640">
      Заключение договора на техническое обслуживание и&nbsp;ремонт газовых сетей и оборудования
    </h1>
    <Form class="width-480 tw-space-y-2" @submit="onSubmit">
      <!-- <AppSelect rules="required" label="Тип заявителя" name="type" :options="typeOptions" />
      <AppSelect rules="required" label="Объект" name="object" :options="objectOptions" />

      <FormGroup class="tw-space-y-2" label="Данные заявителя">
        <AppInput rules="required" label="Фамилия" name="clientData.lastName" />
        <AppInput rules="required" label="Имя" name="clientData.name" />
        <AppInput rules="required" label="Отчество" name="clientData.patronimyc" />
      </FormGroup>

      <FormGroup class="tw-space-y-2" label="Паспорт">
        <FieldsPassport namePrefix="passport" />
      </FormGroup> -->

      <FormGroup class="tw-space-y-2" label="Почтовый адрес">
        <FieldsAddress namePrefix="mailAddress" />
        <!-- <AppInput rules="required" label="Телефон" name="mailAddress.phone" />
        <AppInput rules="required" label="Электронная почта" name="mailAddress.email" />
        <AppInput label="Дополнительный телефон" name="mailAddress.additionalPhone" /> -->
      </FormGroup>

      <!-- <FormGroup class="tw-space-y-2" label="Доверенность">
        <AppSelect
          rules="required"
          label="Заявку подаю по доверенности"
          name="confidant.hasDocument"
          :options="confidantOptions"
        />
        <FieldsPassport namePrefix="confidant.passport" />
        <FieldsAddress namePrefix="confidant.address" />
        <AppInput rules="required" label="Номер доверенности" name="confidant.document.number" />
        <AppInput rules="required" label="Дата доверенности" name="confidant.document.createdAt" />
        <AppInput rules="required" label="Действительна до" name="confidant.document.untilDate" />
      </FormGroup>

      <FormGroup class="tw-space-y-2" label="Способ получения уведомлений">
        <AppSelect
          rules="required"
          label="Способ получения оригиналов документов"
          name="notifications.recieveMethod"
          :options="notificationOptions"
        />
        <FieldsAddress namePrefix="notifications.address" />
      </FormGroup>

      <FormGroup class="tw-space-y-2" label="Данные об объекте">
        <AppInput rules="required" label="Наименование объекта" name="objectData.name" />
        <AppInput rules="required" label="Кадастровый номер объекта" name="objectData.cadastrNumber" />
        <FieldsAddress namePrefix="objectData" />
      </FormGroup> -->

      <AppButton type="submit">Отправить</AppButton>
    </Form>
  </div>
</template>

<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import AppInput from '@/core/AppInput.vue';
  import AppButton from '@/core/AppButton.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import FieldsAddress from '@/components/FieldsAddress.vue';
  import FieldsPassport from '@/components/FieldsPassport.vue';
  import { Form } from 'vee-validate';

  const typeOptions = [
    { label: 'Физическое лицо', value: 'FL' },
    { label: 'Индивидуальный предприниматель', value: 'IP' },
    { label: 'Юридическое лицо', value: 'UL' },
  ];

  const objectOptions = [
    { label: 'Коммунально-бытовой (КБО)', value: 'kbo' },
    { label: 'Коммерческий (ПП).', value: 'PP' },
  ];

  const notificationOptions = [
    { label: 'Самостоятельно', value: 'pickup' },
    { label: 'По почте', value: 'mail' },
  ];

  const confidantOptions = [
    { label: 'Нет', value: 'No' },
    { label: 'Да', value: 'Yes' },
  ];

  const onSubmit = (values: object) => {
    console.log(values);
  }
</script>
