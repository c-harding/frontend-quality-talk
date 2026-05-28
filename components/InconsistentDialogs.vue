<script setup lang="ts">
import { computed } from 'vue';

const { redButtons, showRightDialog = true } = defineProps<{
  redButtons?: boolean;
  showRightDialog?: boolean;
}>();

const btnA = computed(() => (redButtons ? 'bg-red-600' : 'bg-blue-600'));
const btnB = computed(() => (redButtons ? 'bg-red-500' : 'bg-blue-500'));
</script>

<template>
  <div class="flex gap-8 justify-center items-start">
    <!-- Dialog A: "Änderungen speichern" -->
    <div
      class="bg-white rounded-lg shadow-xl w-72 overflow-hidden border border-black"
    >
      <div class="p-5 pb-3">
        <div class="flex justify-between items-start">
          <div class="text-gray-900 font-semibold text-base mb-2">
            Änderungen speichern
          </div>
          <button class="text-gray-400 text-lg leading-none -mt-0.5">✕</button>
        </div>
        <hr class="border-gray-200 mb-3" />
        <div class="text-gray-600 text-sm">
          Sie haben ungespeicherte Änderungen. Möchten Sie diese speichern?
        </div>
      </div>
      <div class="flex justify-end gap-2 px-5 pb-5 pt-2">
        <button
          :class="[
            'px-4 py-1.5 rounded text-sm font-medium text-white transition-colors',
            btnA,
          ]"
        >
          OK
        </button>
        <button
          class="px-4 py-1.5 rounded text-sm font-medium text-white transition-colors"
          :class="btnA"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Dialog B: "Datei löschen" -->
    <div
      class="bg-white rounded-lg shadow-xl w-72 overflow-hidden transition-opacity border border-black"
      :class="showRightDialog ? 'opacity-100' : 'opacity-0'"
    >
      <div class="p-4 pb-2">
        <div class="text-gray-800 font-bold text-sm mb-1">Datei löschen</div>
        <div class="text-gray-500 text-xs font-serif">
          Möchten Sie die Datei the final report v2.pdf wirklich löschen?
        </div>
      </div>
      <div class="flex justify-end gap-4 px-4 pb-6 pt-4">
        <button
          class="px-3 py-1.5 rounded-full text-sm font-medium text-gray-500 bg-gray-100"
        >
          abbrechen
        </button>
        <button
          class="px-3 py-1.5 rounded-full text-sm font-medium text-white transition-colors"
          :class="btnB"
        >
          OK
        </button>
      </div>
    </div>
  </div>
</template>
