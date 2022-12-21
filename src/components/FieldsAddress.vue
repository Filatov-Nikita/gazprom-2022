<template>
  <AppFilterSelect
    v-model:inputValue="values.city.value"
    v-model:option="option"
    rules="required"
    label="Город"
    :name="names.city"
    :options="options"
    :getLabel="getLabel"
    :isLoading="isLoading"
    @focus="cleanOptions"
  />
  <AppFilterSelect
    v-model:inputValue="values.street.value"
    v-model:option="option"
    rules="required"
    label="Улица"
    :name="names.street"
    :options="options"
    :getLabel="getLabel"
    :isLoading="isLoading"
    :disabled="isDisabled(values.city.value)"
    @focus="cleanOptions"
  />
  <AppFilterSelect
    v-model:inputValue="values.house.value"
    v-model:option="option"
    rules="required"
    label="Дом"
    :name="names.house"
    :options="options"
    :getLabel="getLabel"
    :isLoading="isLoading"
    :disabled="isDisabled(values.street.value)"
    @focus="cleanOptions"
  />
  <AppInput
    v-model="values.flat.value"
    rules="required"
    label="Квартира"
    :name="names.flat"
    :disabled="isDisabled(values.house.value)"
    @focus="cleanOptions"
  />
</template>

<script setup lang="ts">
  import AppFilterSelect from '@/core/AppFilterSelect.vue';
  import AppInput from '@/core/AppInput.vue';
  import { computed, reactive, watch, toRefs, ref, Ref, ComputedRef } from 'vue';
  import { sendQuery, locKeys, Location, Bound } from '@/api/dadata';
  import { Suggest, Success } from '@/types/fias-address';
  import { throttle } from 'throttle-debounce';

  const optionKeys = [
    'region',
    'postal_code',
    'city_with_type',
    'region_with_type',
    'region_fias_id',
    'city_fias_id',
    'street_fias_id',
    'street_type',
    'house_fias_id',
    'house_type',
    'house'
  ] as const;

  type OptionKeysUnion = typeof optionKeys[number];
  type Option = Pick<Suggest['data'], OptionKeysUnion> & { value: string };

  const region = 'Башкортостан';

  const plain = {
    city: '',
    street: '',
    house: '',
    flat: ''
  }

  const option: Ref<Option | null> = ref(null);

  const options: Ref<Option[] | null> = ref(null);

  const isLoading = ref(false);

  const values = toRefs(reactive(plain));

  const props = withDefaults(
    defineProps<{ namePrefix?: string }>(), { namePrefix: '' }
  );

  const names = computed(() => {
    const fields = Object.keys(plain);
    const obj: { [ K: string ]: string } = {};

    fields.forEach((field) => {
      const p = props.namePrefix;
      obj[field] = p !== '' ? `${p}.${field}` : field;
    });

    return obj;
  });

  const location: ComputedRef<Location> = computed(() => {
    const res: any = { region };

    if(option.value === null) return res;

    locKeys.forEach(key => {
      if(option.value && option.value[key]) res[key] = option.value[key];
    });

    return res;
  });

  function buildOption(suggest: Suggest['data'], value: string): Option {
    const option: any = {};

    optionKeys.forEach(key => {
      option[key] = suggest[key];
    });

    option.value = value;

    return option;
  }

  function mapOptions(list: Success['response']): Array<Option>  {
    return list.map(suggest => buildOption(suggest.data, suggest.value));
  }

  const getLabel = (opt: any) => opt.value;
  const isDisabled = (v: string) => v === '';
  const cleanOptions = () => options.value = null;

  function update(from_bound: Bound, to_bound: Bound, getLocation: () => Location, resetValues?: () => void) {
    return async function (v: string) {
      try {
        if(resetValues) resetValues();

        isLoading.value = true;

        const response = await sendQuery({
          query: v,
          from_bound,
          to_bound,
          locations: [ getLocation() ],
          restrict_value: true
        });

        const mappedOpts = mapOptions(response);
        options.value = mappedOpts;
      } finally {
        isLoading.value = false
      }
    }
  }

  watch(
    values.city,
    throttle(
      500,
      update(
        { value: 'city' },
        { value: 'settlement' },
        () => {
          const { region } = location.value;
          return { region }
        },
        () => values.street.value = ''),
    ),
  );

  watch(
    values.street,
    throttle(
      500,
      update(
        { value: 'street' },
        { value: 'street' },
        () => {
          const { region_fias_id, city_fias_id  } = location.value;
          return { region_fias_id, city_fias_id }
        },
        () => values.house.value = ''
      )
    )
  );

  watch(
    values.house,
    throttle(
      500,
      update(
        { value: 'house' },
        { value: 'house' },
        () => {
          const { region_fias_id, street_fias_id  } = location.value;
          return { region_fias_id, street_fias_id }
        },
        () => values.flat.value = ''
      )
    )
  );
</script>
