<script setup lang="ts">
const { selectedItem, view } = defineProps<{
  selectedItem?: string;
  view?: 'menu' | 'show-usages' | 'rename';
}>();

interface MenuEntry {
  id: string;
  label: string;
}

interface Usage {
  file: string;
  line: number;
  code: string;
  action: 'read' | 'write';
}

const menuEntries: MenuEntry[][] = [
  [{ id: 'show-usages', label: 'Show usages…' }],
  [
    { id: 'cut', label: 'Cut' },
    { id: 'copy', label: 'Copy' },
    { id: 'paste', label: 'Paste' },
  ],
  [
    { id: 'rename', label: 'Rename…' },
    { id: 'change-signature', label: 'Change signature…' },
  ],
  [{ id: 'more', label: '···' }],
];

const usages: Usage[] = [
  {
    file: 'user-mapper.ts',
    line: 14,
    code: 'firstName: resp.vorname,',
    action: 'write',
  },
  {
    file: 'user-mapper.spec.ts',
    line: 27,
    code: "firstName: 'Max',",
    action: 'write',
  },
  {
    file: 'user-info.template.html',
    line: 8,
    code: '<h1>{user.firstName}</h1>',
    action: 'read',
  },
];
</script>

<template>
  <div class="relative">
    <slot />

    <div
      v-show="view === 'menu'"
      class="absolute left-[17rem] top-[3rem] grid overflow-hidden rounded-lg border border-zinc-300 bg-weak shadow-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-strong"
    >
      <div
        v-for="group in menuEntries"
        :key="group[0].id"
        class="grid not-first:border-t not-first:border-zinc-300 not-first:dark:border-zinc-600"
      >
        <div
          v-for="entry in group"
          :key="entry.id"
          class="px-3 py-1.5"
          :class="
            selectedItem === entry.id
              ? 'bg-blue-light text-white dark:bg-blue-dark dark:text-white'
              : 'text-black dark:text-strong'
          "
        >
          {{ entry.label }}
        </div>
      </div>
    </div>

    <div
      v-show="view === 'show-usages'"
      class="absolute left-[17rem] top-[3rem] grid min-w-[29rem] grid-cols-[auto_auto_1fr_auto] gap-x-4 overflow-hidden rounded-lg border border-zinc-300 bg-weak shadow-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-strong"
    >
      <div
        class="col-span-full px-3 py-1.5 font-semibold text-black dark:text-strong"
      >
        Show usages
      </div>
      <div
        v-for="usage in usages"
        :key="`${usage.file}-${usage.line}`"
        class="col-span-full grid [grid-template-columns:subgrid] px-3 py-1.5 not-first:border-t not-first:border-zinc-300 not-first:dark:border-zinc-600"
      >
        <span class="text-blue-dark dark:text-blue-light">{{
          usage.file
        }}</span>
        <span class="text-orange-dark dark:text-orange-light">{{
          usage.line
        }}</span>
        <span class="font-mono text-black dark:text-strong">{{
          usage.code
        }}</span>
        <span
          :class="
            usage.action === 'read'
              ? 'i-mdi-eye-outline text-green-700 dark:text-green-400'
              : 'i-mdi-pencil-outline text-orange-dark dark:text-orange-light'
          "
          class="inline-block self-center text-base"
          :title="usage.action"
        />
      </div>
    </div>

    <div
      v-show="view === 'rename'"
      class="absolute left-[17rem] top-[3rem] grid overflow-hidden rounded-lg border border-zinc-300 bg-weak shadow-lg dark:border-zinc-600 dark:bg-zinc-800 dark:text-strong"
    >
      <div class="px-3 py-1.5 font-semibold text-black dark:text-strong">
        Rename
      </div>
      <div
        class="grid gap-2 border-t border-zinc-300 px-3 pt-1.5 pb-3 dark:border-zinc-600"
      >
        <div>
          Rename
          <code
            class="rounded bg-white px-1 font-mono text-black dark:bg-black dark:text-strong"
            >firstName</code
          >
          and its usages to:
        </div>
        <div
          class="rounded border border-zinc-300 bg-white px-2 py-1 dark:border-zinc-600 dark:bg-black"
        >
          <span
            class="bg-blue-light font-mono text-white dark:bg-blue-dark dark:text-white py-0.5"
            >givenName</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
