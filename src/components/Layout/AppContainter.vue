<template>
  <div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { useAntdvStore } from '@/store/antdv';
useAntdvStore();
</script>
