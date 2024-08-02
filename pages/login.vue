<template>
  <div
    class="h-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-1"
  >
    <div class="hidden lg:block xl:col-span-2 bg-blue-500">Logo</div>
    <div class="col-span-1 lg:col-span-1 xl:col-span-1 bg-black-500">
      <img src="/images/logo-facebook.png" alt="login" />
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "../atomic/organisms/loginForm.vue";
</script>
