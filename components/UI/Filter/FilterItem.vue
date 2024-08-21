<script setup lang="ts">
import type {FilterItemProps} from "~/types/filter";
const props = defineProps<FilterItemProps>();
</script>

<template>
  <h3 class="font-semibold">{{ props.title}}:</h3>
  <label v-for="(option, index) in props.options" :key="index" class="cursor-pointer flex gap-2 items-center">
    <div class="flex items-center">
      <input
          type="checkbox"
          :value="option"
          @change="props.changeFilter"
          class="size-4 rounded border-gray-300"
      />
    </div>
    <div>
      <p class="text-sm text-gray-900">{{ option }}</p>
    </div>
  </label>
</template>