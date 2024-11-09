<template>
    <div class="overflow-x-auto mt-3">
        <table class="min-w-full border-b border-zinc-700">
          <thead class="text-zinc-100 border-b border-zinc-700">
            <tr>
              <th class="px-4 py-2 text-left font-medium text-zinc-100 w-1/3">Date</th>
              <th class="px-4 py-2 text-left font-medium text-zinc-100 w-1/3">Title</th>
              <th class="px-4 py-2 text-left font-medium text-zinc-100 w-1/6">Status</th>
            </tr>
          </thead>
          <tbody class="text-zinc-100">
            <tr class="border-b border-zinc-700 cursor-pointer transition-all duration-300 hover:bg-zinc-900">
              <td class="px-4 py-2">12 September</td>
              <td class="px-4 py-2">I'm Soh Seyyedi</td>
              <td class="px-4 py-2">In Progress</td>
            </tr>
          </tbody>
        </table>
      </div>
</template>
<script setup>
import { ref } from 'vue';


const isOpen = ref(false);

const onOpen = () => isOpen.value = true
const onClose = () => isOpen.value = false
</script>