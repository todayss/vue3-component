<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5';
</script>

<template>
  <div>
    vue3-ui组件开发
    <wx-icon color="green" size="20"><AddCircle></AddCircle></wx-icon>
    <wx-button type="primary" size="medium" :round="true" :loading="true"
      >按钮</wx-button
    >
  </div>
</template>

<style scoped></style>
