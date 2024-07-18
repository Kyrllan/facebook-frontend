<template>
  <div class="c-input flex flex-col py-1">
    <label :for="uuid" class="text-gray-600 dark:text-gray-400">
      {{ label }}
    </label>
    <input
      :id="uuid"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      class="border-inherit rounded-xl p-1"
    />
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
  placeholder: { type: String, default: "" },
});
</script>

<style scoped>
.c-input:focus-within label {
  color: #4589f7; /* Cor de exemplo */
}
</style>
