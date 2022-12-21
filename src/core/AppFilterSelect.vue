<template>
  <div class="tw-relative" v-click-outside="onOutside">
    <AppInput
      v-bind="{ label, rules, name }"
      :disabled="disabled === true"
      :modelValue="inputValue"
      @focus="onFocus"
      @update:modelValue="$emit('update:inputValue', $event)"
    />
    <div class="options" v-if="showedOptions">
      <div v-if="isLoading" class="tw-text-gray-400 tw-text-xs tw-px-2 tw-pb-2">
        Поиск...
      </div>
      <div v-else-if="options === null" class="tw-text-gray-400 tw-text-xs tw-px-2 tw-pb-2">
        Начните вводить
      </div>
      <div v-else-if="options.length <= 0" class="tw-text-gray-400 tw-text-xs tw-px-2 tw-pb-2">
        Ничего не найдено
      </div>
      <template v-else>
        <div
          class="option"
          :class="{ 'option-active': isActiveOption(opt) }"
          v-for="opt in options" @click="onClick(opt)"
        >
          {{ getLabel(opt) }}
        </div>
      </template>
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from 'vue';
  import AppInput from './AppInput.vue';

  type Option = { [ K: string ]: any };

  const props = defineProps<{
    options: Array<Option> | null,
    option: object | null,
    getLabel: (opt: Option) => string,
    label: string,
    name: string,
    rules?: string,
    inputValue?: string,
    isLoading?: boolean,
    disabled?: boolean
  }>();

  const showedOptions = ref(false);

  const emit = defineEmits<{
    (e: 'update:option', option: Option): void
    (e: 'update:inputValue', value: string): void,
    (e: 'blur'): void
    (e: 'focus'): void
   }>();

  function onClick(option: Option) {
    emit('update:option', option);
    emit('update:inputValue', props.getLabel(option));
    showedOptions.value = false;
  }

  function onOutside() {
    showedOptions.value = false;
    emit('blur');
  }

  function onFocus() {
    showedOptions.value = true;
    emit('focus');
  }

  function isActiveOption(opt: object) {
    return props.option !== null && props.getLabel(opt) === props.getLabel(props.option);
  }

</script>
<style scoped lang="scss">
  .options {
    background: theme('colors.white');
    position: absolute;
    width: 100%;
    padding: 10px 0;
    padding-bottom: 0;
    z-index: 50;
    border: 1px solid theme('colors.blue.800');
    border-top: 0;
    box-shadow: theme('boxShadow.lg');
    border-radius: 0px 0px 6px 6px;
    transform: translateY(-3px);
    top: 55px;
    max-height: 300px;
    overflow-x: hidden;
  }

  .option {
    font-size: 12px;
    padding: 8px 10px;
    cursor: pointer;
  }

  .option-active {
    background: theme('colors.gray.200');
  }

  .option:hover {
    background: theme('colors.gray.300');
  }
</style>
