<template>
  <FormGroup v-if="type !== undefined" class="tw-space-y-2" label="Данные заявителя">
    <template v-if="!isUL">
      <AppInput rules="required" label="Фамилия" name="clientData.lastName" />
      <AppInput rules="required" label="Имя" name="clientData.name" />
      <AppInput rules="required" label="Отчество" name="clientData.patronimyc" />
    </template>
    <template v-else>
      <AppSelect
        rules="required"
        label="Субъект малого (среднего) бизнеса"
        name="clientData.isSmallBuisness"
        :options="smallBuisnessOpts"
      />
      <AppInput rules="required" label="ИНН" name="clientData.inn" />
      <AppInput rules="required" label="КПП" name="clientData.kpp" />
      <AppInput rules="required" label="ОГРН" name="clientData.ogrn" />
      <AppInput rules="required" label="Краткое наименование организации" name="clientData.firstName" />
      <AppInput rules="required" label="Полное наименование организации" name="clientData.fullName" />
    </template>
  </FormGroup>

  <FormGroup v-if="type !== undefined && !isUL" class="tw-space-y-2" label="Паспорт">
    <FieldsPassport namePrefix="passport" />
  </FormGroup>
</template>
<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import AppInput from '@/core/AppInput.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import FieldsPassport from '@/components/FieldsPassport.vue';
  import { useFieldValue } from 'vee-validate';
  import { computed } from 'vue';

  const type = useFieldValue('type');
  const isUL = computed(() => type.value === 'UL');
  const smallBuisnessOpts = [
    { label: 'Да', value: 'Yes' },
    { label: 'Нет', value: 'No' },
  ]
</script>
