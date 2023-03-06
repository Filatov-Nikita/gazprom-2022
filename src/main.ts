import { createApp } from 'vue'
import App from './App.vue'
import Dev from './Dev.vue'
import { createPinia } from 'pinia';
import { defineRule, configure } from 'vee-validate';
import { required, email, length, min, max, numeric } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';
import '@/css/app.scss';
// @ts-ignore
import vClickOutside from "click-outside-vue3"

// main

const pinia = createPinia();

configure({
  generateMessage: localize({
    ru: {
      ...ru,
      messages: {
        ...ru.messages,
        phone: 'Поле {field} должно быть действительным номером телефона'
      }
    }
  })
});

setLocale('ru')

Object.entries({ required, email, length, min, max, numeric }).forEach(([name, rule]) => {
  defineRule(name, rule);
});

defineRule('phone', (value: string) => {
  if (!value) return true;
  return value.length === 17;
});

import AppSelect from './core/AppSelect.vue';

const app = createApp(Dev);
app.component('AppSelect', AppSelect);
app
.use(pinia)
.use(vClickOutside)
.mount('#app');
