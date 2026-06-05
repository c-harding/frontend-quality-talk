<script setup lang="ts">
import { computed } from 'vue';

interface DialogButton {
  label: string;
  variant?: 'primary' | 'secondary' | 'destructive';
}

const {
  primaryButtonVariant,
  secondaryButtonText = 'Abbrechen',
  onClose,
} = defineProps<{
  title: string;
  description?: string;
  primaryButtonVariant?: 'primary' | 'secondary' | 'destructive';
  primaryButtonText: string;
  secondaryButtonText?: string;
  onSecondaryClick?: () => void;
  onPrimaryClick?: () => void;
  showCloseButton?: boolean;
  onClose?: () => void;
}>();

const primaryButtonColor = computed(() => {
  if (primaryButtonVariant === 'destructive') {
    return 'bg-red-600 hover:bg-red-700';
  }
  if (primaryButtonVariant === 'secondary') {
    return 'bg-gray-100 text-gray-500 hover:bg-gray-200';
  }
  return 'bg-blue-600 hover:bg-blue-700';
});
</script>

<template>
  <div
    class="bg-white rounded-lg shadow-xl w-72 overflow-hidden border border-black"
  >
    <!-- Header with title and close button -->
    <div class="p-5 pb-3">
      <div class="flex justify-between items-start">
        <div class="text-gray-900 font-semibold text-base mb-2">
          {{ title }}
        </div>
        <button
          v-if="showCloseButton"
          class="text-gray-400 hover:text-gray-600 text-lg leading-none -mt-0.5 transition-colors"
          @click="onClose?.()"
        >
          ✕
        </button>
      </div>
      <hr class="border-gray-200 mb-3" />

      <!-- Body content with description or slot -->
      <div class="text-gray-600 text-sm">
        <slot>
          {{ description }}
        </slot>
      </div>
    </div>

    <!-- Footer with action buttons -->
    <div class="flex justify-end gap-2 px-5 pb-5 pt-2">
      <button
        class="px-4 py-1.5 rounded text-sm font-medium bg-gray-100 text-gray-500 transition-colors"
        @click="onSecondaryClick?.()"
      >
        {{ secondaryButtonText }}
      </button>
      <button
        :class="[
          'px-4 py-1.5 rounded text-sm font-medium text-white transition-colors',
          primaryButtonColor,
        ]"
        @click="onPrimaryClick?.()"
      >
        {{ primaryButtonText }}
      </button>
    </div>
  </div>
</template>
