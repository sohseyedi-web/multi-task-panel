<template>
    <select @change="emitStatus($event)" class="outline-none rounded-[1.1rem] bg-[#141414] flex-1 h-12 px-2 text-sm placeholder:text-gray-600 text-zinc-50 border-2 border-zinc-700">
        <option disabled selected>Status</option>
        <option value="starting">Starting</option>
        <option value="in progress">in Progress</option>
        <option value="finish">Finish</option>
      </select>
</template>
<script setup>
const emit = defineEmits(['updateStatus']);

function emitStatus(event) {
  emit('updateStatus', event.target.value);
}
</script>
