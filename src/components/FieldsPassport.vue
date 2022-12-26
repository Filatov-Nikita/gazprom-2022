<template>
  <AppSelect rules="required" label="Тип" :name="names.type" :options="[{ label: 'Паспорт РФ', value: 'RF' }]" />
  <AppInput rules="required|length:4" maska="####" label="Серия" :name="names.serial" />
  <AppInput rules="required|length:6" maska="######" label="Номер" :name="names.number" />
  <AppInput rules="required" label="Кем выдан" :name="names.kod" />
  <AppInput type="date" rules="required" label="Дата выдачи документа" :name="names.issuedDate" />
</template>

<script setup lang="ts">
  import AppInput from '@/core/AppInput.vue';
  import AppSelect from '@/core/AppSelect.vue';
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{ namePrefix?: string }>(), { namePrefix: '' }
  );

  const names = computed(() => {
    const fields = ['type', 'serial', 'number', 'kod', 'issuedDate'];
    const obj: any = {};

    fields.forEach((field) => {
      const p = props.namePrefix;
      obj[field] = p === '' ? field : `${p}.${field}`;
    });

    return obj;
  });
</script>
