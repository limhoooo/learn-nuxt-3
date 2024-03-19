<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  middleware: ['admin-only'],
});
</script>

<style lang="scss" scoped></style>
