<template>
  <FormGroup class="tw-space-y-2" label="Способ получения уведомлений">
    <AppSelect
      rules="required"
      label="Способ получения оригиналов документов"
      name="notifications.recieveMethod"
      :options="notificationOptions"
    />
    <div>
      <AppCheckbox
        class="tw-mb-2"
        name="notifications.sms"
        label="СМС"
        :modelValue="false"
        :value="true"
        :uncheckedValue="false"
      />

      <AppCheckbox
        name="notifications.email"
        label="E-mail"
        :modelValue="false"
        :value="true"
        :uncheckedValue="false"
      />
    </div>
    <template v-if="isMail && isMail !== undefined">
      <FieldsAddress namePrefix="notifications.address" />
      <AppButton type="button" @click="copyAddress">
        Скопировать из блока «Почтовый адрес»
      </AppButton>
    </template>
  </FormGroup>
</template>

<script setup lang="ts">
  import AppSelect from '@/core/AppSelect.vue';
  import AppCheckbox from '@/core/AppCheckbox.vue';
  import FieldsAddress from '@/components/FieldsAddress.vue';
  import FormGroup from '@/components/FormGroup.vue';
  import { useFieldValue } from 'vee-validate';
  import { computed, inject } from 'vue';
  import AppButton from '@/core/AppButton.vue';

  const notificationOptions = [
    { label: 'Самостоятельно', value: 'pickup' },
    { label: 'По почте', value: 'mail' },
  ];

  const Form: any = inject('FormContext');
  const recieveMethod = useFieldValue('notifications.recieveMethod');
  const mail: any = useFieldValue('mailAddress');

  const isMail = computed(() => recieveMethod.value === 'mail');

  function copyAddress() {
    setTimeout(() => {
      Form.value.setFieldValue('notifications.address.city', mail.value.city);
    }, 0);

    setTimeout(() => {
      Form.value.setFieldValue('notifications.address.street', mail.value.street);
    }, 0);

    setTimeout(() => {
      Form.value.setFieldValue('notifications.address.house', mail.value.house);
    }, 0);

    setTimeout(() => {
      Form.value.setFieldValue('notifications.address.flat', mail.value.flat);
    }, 0);

  }
</script>
