<script setup lang="ts">
import { App as AApp } from 'ant-design-vue';
</script>

<template>
  <a-config-provider>
    <a-app>
      <app-containter>
        <router-view />
      </app-containter>
    </a-app>
  </a-config-provider>
</template>

<style scoped></style>
