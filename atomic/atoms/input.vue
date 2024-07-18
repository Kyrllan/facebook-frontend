<template>
  <div class="flex flex-col">
    <label :for="uuid">{{ label }}:</label>
    <input :id="uuid" :type="type" :value="modelValue" />
  </div>
</template>

<script setup lang="ts">
import { getCurrentInstance } from "vue";

const instance = getCurrentInstance();
const uuid = instance?.uid.toString();

defineProps({
  modelValue: { type: String, default: "" },
  type: { type: String, default: "text" },
  label: { type: String, default: "" },
});
</script>

<style scoped></style>
