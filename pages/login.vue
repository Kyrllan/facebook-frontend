<template>
  <div
    class="h-screen grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 grid-rows-1"
  >
    <div
      class="hidden lg:block xl:col-span-2"
      :style="{ backgroundColor: appConfig.theme.blue500 }"
    >
      Logo
    </div>
    <div
      class="col-span-1 lg:col-span-1 xl:col-span-1"
      :style="{ backgroundColor: appConfig.theme.blue900 }"
    >
      <LoginForm />
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginForm from "../atomic/organisms/loginForm.vue";
const appConfig = useAppConfig();
</script>

<style scoped lang="scss"></style>
