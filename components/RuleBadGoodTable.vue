<template>
  <table class="w-full table-fixed">
    <thead>
      <tr>
        <th class="text-base">verboten</th>
        <th class="text-base">erlaubt</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="align-top">
          <slot name="bad" />
        </td>
        <td class="align-top">
          <slot name="good" />
        </td>
      </tr>
    </tbody>
  </table>
</template>
