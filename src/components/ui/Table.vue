<template>
    <div class="overflow-x-auto lg:mt-3" v-if="taskStore.tasks.length > 0">
        <table class="min-w-full border-b border-zinc-700" >
          <thead class="text-zinc-100 border-b border-zinc-700">
            <tr>
              <th class="px-4 py-2 text-left font-medium text-zinc-100 w-1/3">Date</th>
              <th class="px-4 py-2 text-left font-medium text-zinc-100 w-1/3">Title</th>
              <th class="px-4 py-2 text-left font-medium text-zinc-100 w-1/6">Status</th>
            </tr>
          </thead>
          <tbody class="text-zinc-100" >
            <tr v-for="task in taskStore.tasks" :key="task.id" @click="openModal" class="border-b border-zinc-700 cursor-pointer transition-all duration-300 hover:bg-zinc-900">
              <td class="px-4 py-2">{{ toLocaleDate(task.createdAt) }}</td>
              <td class="px-4 py-2">{{ task.title }}</td>
              <td class="px-4 py-2">{{ task.status }}</td>
              <Modal v-if="isOpen" :isVisible="isOpen" :onClose="closeModal" :title="task.title">test</Modal>
            </tr>
          </tbody>
        </table>
    </div>
    <div class="text-center mt-3 font-semibold text-lg text-zinc-100" v-else>a list task is empty</div>
</template>
<script setup>
import { ref } from 'vue';
import Modal from './Modal.vue'
import { useTaskStore } from '../../store/taskStore';
import toLocaleDate from '../../utils/toLocalDate';

const isOpen = ref(false);
const taskStore = useTaskStore()

const openModal = () => isOpen.value = true
const closeModal = () => isOpen.value = false
</script>