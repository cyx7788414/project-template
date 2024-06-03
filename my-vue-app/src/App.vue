<script setup lang="ts">
import { useThemeStore } from './common/store/theme.store';

const theme = useThemeStore();
</script>

<template>
  <a-config-provider :theme="theme.themeConfig">
    <a-app>
      <RouterView />
    </a-app>
  </a-config-provider>
</template>

<style scoped>

</style>
