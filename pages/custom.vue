<template>
  <NuxtLayout name="custom">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
  // NuxtLayout 를 루트로 사용하고싶을때 사용
  layoutTransition: false,
});
</script>

<style scoped></style>
