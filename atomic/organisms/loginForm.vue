<template>
  <div class="border border-red-500">
    <div>Bem-vindo</div>
    <div>Entre na sua conta</div>
    <Form />
    <a class="flex justify-end text-xs cursor-pointer :hover:text-blue500"
      >Esqueceu sua senha?</a
    >
  </div>
</template>

<script setup lang="ts">
import Form from "../molecules/form.vue";
</script>

<style scoped></style>
