<script setup>
import {Button as PvButton} from "primevue";
import {$t} from "@primeuix/themes";
import {useI18n} from "vue-i18n";
const {locale} = useI18n();
const changeLang = (lang) => {
  locale.value = lang;
};

/**
 * @summary Sidebar component for navigation within the application.
 * @description This component renders a sidebar with navigation links to the home page and the new telemetry page.
 * @author Andre Sebastian Quispe Almonacid
 */

</script>
<template>
  <div class="flex-column justify-content-between h-full p-3 surface-100 border-right-1 surface-border">
    <div class="flex flex-column gap-2">
     <router-link to="/home" class="flex align-items-center gap-2 p-2 rounded hover:bg-primary hover:text-white transition-colors">
       <pv-button :label="$t('sidebar.home')" icon="pi pi-home" class="w-full justify-content-start" :class="{ 'bg-primary text-white': $route.path !== '/home' }"></pv-button>
      </router-link>
     <router-link to="/telemetry/items/new" class="flex align-items-center gap-2 p-2 rounded hover:bg-primary hover:text-white transition-colors">
        <pv-button :label="$t('sidebar.newTelemetry')" icon="pi pi-plus" class="w-full justify-content-start" :class="{ 'bg-primary text-white': $route.path !== '/telemetry/items/new' }"></pv-button>
      </router-link>
    </div>
  </div>

  <div class="flex flex-column gap-2">
    <div class="text-sm text-color-secondary text-center mb-2">Language</div>
    <div class="flex gap-2 w-full">
      <pv-button label="EN" @click="changeLang('en')" class="w-full" :class="{ 'bg-primary text-white': $i18n.locale === 'en' }"></pv-button>
      <pv-button label="ES" @click="changeLang('es')" class="w-full" :class="{ 'bg-primary text-white': $i18n.locale === 'es' }"></pv-button>
    </div>
  </div>
</template>


