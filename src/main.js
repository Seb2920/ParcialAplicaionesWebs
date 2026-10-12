import { createApp } from 'vue'
import {CreateI18n} from 'vue-i18n';
import {createPinia} from "pinia";
import i18n from "./i18n.js";
import router from "./router.js";

import en from "./locales/en.js";
import es from "./locales/es.js";


import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './style.css'
import App from './App.vue'

