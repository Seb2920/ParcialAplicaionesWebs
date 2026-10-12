import { createApp } from 'vue'
import {createPinia} from "pinia";
import i18n from "./i18n.js";
import router from "./router.js";


import PrimeVue from 'primevue/config';
import Material from '@primeuix/themes/material';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './style.css'
import App from './App.vue'
import Tooltip from 'primevue/tooltip';
import {
    Button,
    Card,
    Checkbox,
    Column,
    ConfirmationService,
    ConfirmDialog,
    DataTable,
    Dialog,
    DialogService,
    Drawer,
    FileUpload,
    FloatLabel,
    IconField,
    InputIcon,
    InputNumber,
    InputText,
    Menu,
    Rating,
    Row,
    Select,
    SelectButton,
    Tag,
    Toast,
    Textarea,
    ToastService,
    Toolbar
} from "primevue";

const app= createApp(App);
app.use(router);
app.use(createPinia());
app.use(i18n);
app.use(PrimeVue, {theme: { preset: Material}, ripple: true, license: primeUiLicenseKey})
    app.component('pv-button',         Button)
    app.component('pv-card',           Card)
    app.component('pv-column',         Column)
    app.component('pv-confirm-dialog', ConfirmDialog)
    app.component('pv-checkbox',       Checkbox)
    app.component('pv-data-table',     DataTable)
    app.component('pv-dialog',         Dialog)
    app.component('pv-select',         Select)
    app.component('pv-select-button',  SelectButton)
    app.component('pv-file-upload',    FileUpload)
    app.component('pv-float-label',    FloatLabel)
    app.component('pv-icon-field',     IconField)
    app.component('pv-input-icon',     InputIcon)
    app.component('pv-input-text',     InputText)
    app.component('pv-input-number',   InputNumber)
    app.component('pv-menu',           Menu)
    app.component('pv-rating',         Rating)
    app.component('pv-row',            Row)
    app.component('pv-drawer',         Drawer)
    app.component('pv-tag',            Tag)
    app.component('pv-textarea',       Textarea)
    app.component('pv-toolbar',        Toolbar)
    app.component('pv-toast',          Toast)
    app.directive('tooltip',           Tooltip)

