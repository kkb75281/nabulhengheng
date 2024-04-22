<script setup>
import { RouterView } from 'vue-router'
import { skapi } from './main';

skapi.getProfile().then(c => {
  if (!c) {
    skapi.login({
      email: 'anonymous@anonymous.com',
      password: 'anonymous'
    });
  }
})

</script>

<template>
  <RouterView />
</template>

<style scoped></style>
