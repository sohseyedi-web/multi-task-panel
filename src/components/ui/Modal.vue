<template>
  <div v-if="isVisible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div
      class="bg-zinc-800 p-6 rounded-[1.1rem] shadow-lg max-w-md w-full transform transition-transform duration-300"
    >
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-zinc-100">{{title}}</h2>
        <span @click="$emit('close')">
          <XMarkIcon class="size-8 text-zinc-100  cursor-pointer"/>
        </span>
    </div>
    <hr class="my-3 border-zinc-700"/>
    <div>form</div>
    <div class="flex items-center gap-x-3 text-zinc-100">
      <button @click="$emit('close')" class=" py-2 bg-purple-500 rounded-[1.1rem] flex-1 font-semibold">Edit Task</button>
      <button @click="$emit('close')" class="bg-red-500 px-4 py-2  rounded-[1.1rem] font-semibold">Cancel</button>
    </div>
    </div>
  </div>
</template>
<script setup>
import {  XMarkIcon } from '@heroicons/vue/20/solid';


defineProps({
  isVisible: Boolean,
  title : String,
});

</script>