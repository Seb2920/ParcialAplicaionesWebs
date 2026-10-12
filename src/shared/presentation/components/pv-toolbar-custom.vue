<template>
  <pv-toolbar class="w-full border-noround shadow-2" role="banner" aria-label="Top Navigation">
    <template #start>
      <div class="flex align-items-center gap-2">
        <img src="https://img.logo.dev/geomines.fr?token=YOUR_API_TOKEN" alt="geomines.fr logo" />
        <span class="text-xl font-bold text-primary">{{$t('app.tittle')}}</span>
      </div>
    </template>
  </pv-toolbar>
</template>

<script setup>
/**
 * @summary Top toolbar component for the application, providing branding and navigation elements.
 * @description This component renders a toolbar at the top of the application, featuring the geomines
 * @author Andre Sebastian Quispe Almonacid
 */
import {$t} from "@primeuix/themes";
</script>