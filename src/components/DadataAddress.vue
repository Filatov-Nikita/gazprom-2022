<template>
  <div>
    <DadataField
      v-model:value="values.city"
      name="cytyOrSettl"
      label="Город / н.п"
      from-bound="city"
      to-bound="settlement"
      rules="required"
      :constrait="{ region_fias_id: '6f2cbfd8-692a-4ee4-9b16-067210bde3fc' }"
      @update:current-item="setItem('city', $event)"
    />

    <DadataField
      ref="streetRef"
      v-model:value="values.street"
      name="street"
      label="Улица"
      from-bound="street"
      to-bound="street"
      rules="required"
      :disabled="disabledStreet"
      :constrait="items.city?.data"
      @update:current-item="setItem('street', $event)"
    />

    <DadataField
      ref="houseRef"
      v-model:value="values.house"
      name="house"
      label="Дом"
      from-bound="house"
      to-bound="house"
      rules="required"
      :disabled="disabledHouse"
      :constrait="items.street?.data"
      @update:current-item="setItem('house', $event)"
    />
    <div>
      <label class="tw-block tw-mb-1" for="flat">Квартира</label>
      <Field
        v-model="values.flat"
        ref="field"
        class="tw-border-gray-600 tw-border tw-block tw-px-1 tw-h-8 tw-w-full tw-outline-none"
        id="flat"
        name="flat"
        label="Квартира"
        :disabled="disabledFlat"
        rules="required"
      />
      <ErrorMessage as="div" class="tw-text-red-600 tw-text-xs" name="flat" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import DadataField from './DadataField.vue';
  import { reactive, computed, watch, ref } from 'vue';
  import { Field, ErrorMessage } from 'vee-validate';
  import type { Item } from '@/types/dadata';

  type Keys = 'city' | 'street' | 'house';

  const items = reactive<Record<Keys, Item | null>>({
    city: null,
    street: null,
    house: null
  });

  const streetRef = ref<InstanceType<typeof DadataField> | null>(null);
  const houseRef = ref<InstanceType<typeof DadataField> | null>(null);

  const values = reactive({
    city: 'Уфа',
    street: 'Российская',
    house: '47',
    flat: '8'
  });

  function setItem(key: Keys, data: Item | null) {
    items[key] = data;
  }

  const disabledStreet = computed(() => items.city === null);
  const disabledHouse = computed(() => items.street === null);
  const disabledFlat = computed(() => items.house === null);

  watch(() => values.city, () => {
    values.street = '';
    items.street = null;
    if(streetRef.value !== null) streetRef.value.resetItems();
  });

  watch(() => values.street, () => {
    values.house = '';
    items.house = null;
    if(houseRef.value !== null) houseRef.value.resetItems();
  });

  watch(() => values.house, () => {
    values.flat = '';
  });
</script>
