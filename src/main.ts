import { createApp } from 'vue'
import App from './App.vue'
import store from './store'

import { defineRule, configure } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import ru from '@vee-validate/i18n/dist/locale/ru.json';
import '@/css/app.scss';
// @ts-ignore
import vClickOutside from "click-outside-vue3"

configure({
  generateMessage: localize({ ru })
});

setLocale('ru')

Object.entries({ required, email }).forEach(([name, rule]) => {
  defineRule(name, rule);
});

import AppSelect from './core/AppSelect.vue';

const app = createApp(App);
app.component('AppSelect', AppSelect);
app
.use(store)
.use(vClickOutside)
.mount('#app');
