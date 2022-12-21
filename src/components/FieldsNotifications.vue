<template>
  <FormGroup class="tw-space-y-2" label="Способ получения уведомлений">
    <AppSelect
      rules="required"
      label="Способ получения оригиналов документов"
      name="notifications.recieveMethod"
      :options="notificationOptions"
    />
    <template v-if="isMail && isMail !== undefined">
      <FieldsAddress namePrefix="notifications.address" />
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import FieldsAddress from '@/components/FieldsAddress.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import { useFieldValue } from 'vee-validate';
  import { computed } from 'vue';

  const notificationOptions = [
    { label: 'Самостоятельно', value: 'pickup' },
    { label: 'По почте', value: 'mail' },
  ];

  const recieveMethod = useFieldValue('notifications.recieveMethod');

  const isMail = computed(() => recieveMethod.value === 'mail')
</script>
