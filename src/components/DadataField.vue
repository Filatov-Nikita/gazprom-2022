<template>
  <div class="tw-relative" v-click-outside="onOutside">
    <label class="tw-block tw-mb-1" :for="name">{{ label }}</label>
    <Field
      :model-value="innerValue"
      @update:model-value="onInput"
      class="tw-border-gray-600 tw-border tw-block tw-px-1 tw-h-8 tw-w-full tw-outline-none"
      :id="name"
      :name="name"
      :label="label"
      :disabled="disabled"
      :rules="rules"
      @focus="showing = true"
    />
    <ErrorMessage as="div" class="tw-text-red-600 tw-text-xs" :name="name" />
    <DadataSelect :showing="showing" :empty="dadataItems?.length === 0">
      <DadataItem
        v-for="item in dadataItems"
        :key="item.unrestricted_value"
        :item="item"
        @click="onClickItem(item)"
      />
    </DadataSelect>
  </div>
</template>
<script setup lang="ts">
  import { ref, watch, computed } from 'vue';
  import { Field, ErrorMessage } from 'vee-validate';
  import { show as postQuery } from '@/api/dadata';
  import type { Item } from '@/types/dadata';
  import DadataItem from './DadataItem.vue';
  import DadataSelect from './DadataSelect.vue';
  import { throttle } from 'throttle-debounce';

  const props = withDefaults(defineProps<{
    name: string,
    label: string,
    fromBound: string,
    toBound: string,
    value: string,
    currentItem?: Item | null,
    disabled?: boolean
    rules?: string,
    constrait?: Item['data'] | null
  }>(), { constrait: null, disabled: false, rules: '', currentItem: null });

  const emits = defineEmits<{
    (event: 'update:currentItem', item: Item | null): void
    (event: 'update:value', value: string): void
  }>();

  const innerValue = ref(props.value);
  const showing = ref(false);
  const loading = ref(false);
  const dadataItems = ref<Item[] | null>(null);
  const currentItem = ref(props.currentItem);

  function onlyNotNull(data: Record<string, unknown> | null) {
    const obj: Record<string, unknown> = {};

    for(let key in data) {
      if(data[key] !== null) {
        obj[key] = data[key]
      }
    }

    return obj;
  }

  const extractedConstraits = computed(() => {
    if(props.constrait === null) return null;
    const constraitKeys = [
      'region_fias_id',
      'city_fias_id',
      'settlement_fias_id',
      'street_fias_id',
      'house_fias_id',
    ];

    return Object.fromEntries(constraitKeys.map(k => [k, props.constrait![k]]));
  });

  const location = computed(() => props.constrait !== null ? onlyNotNull(extractedConstraits.value) : null);

  async function dadataApi(query: string, count = 5) {
    loading.value = true;
    const response = await postQuery({
      query,
      count,
      restrict_value: true,
      to_bound: { value: props.toBound },
      form_bound: { value: props.fromBound },
      ...(location.value ? { locations: [location.value] } : {})
    });
    loading.value = false;
    return response;
  }

  const throttledApi = throttle(500, async (newValue, count = 5) => {
    if(newValue !== '') {
      const response = await dadataApi(newValue, count);
      dadataItems.value = response;
    } else {
      dadataItems.value = null;
    }
  });

  async function onInput(newValue: string) {
    innerValue.value = newValue;
    currentItem.value = null;
    emits('update:currentItem', null);
    throttledApi(newValue);
  }

  async function onClickItem(item: Item) {
    currentItem.value = item;
    innerValue.value = item.value;
    showing.value = false;
    emits('update:currentItem', item);
    throttledApi(item.value, 1);
  }

  function onOutside() {
    showing.value = false;
  }

  watch(innerValue, (newValue) => {
    emits('update:value', newValue);
  });

  watch(() => props.value, (newValue) => {
    if(newValue !== innerValue.value) {
      innerValue.value = newValue;
    }
  });

  defineExpose({
    resetItems: () => dadataItems.value = null
  })
</script>
