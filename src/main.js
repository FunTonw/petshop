import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';

import VueEasyLightbox from 'vue-easy-lightbox';
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import 'animate.css';

import 'bootstrap-icons/font/bootstrap-icons.css';
import bus from './bus';
import App from './App.vue';
import router from './router';
import { currency } from './methods/filters';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$filters = {
  currency,
};
app.use(VueAxios, axios);
app.use(router);
app.component('VueEasyLightbox', VueEasyLightbox);
app.component('Loading', Loading);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.config.globalProperties.$bus = bus;

app.mount('#app');
