<script setup>
import { RouterView } from 'vue-router'
import { skapi } from './main';

skapi.getConnection().then(c => {
  if (!skapi.user) {
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
