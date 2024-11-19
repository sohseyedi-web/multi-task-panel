<template>
  <form class="w-full" @submit.prevent="handleSubmit">
      <div class="flex items-center gap-x-4 flex-wrap">
          <input 
            type="text" 
            v-model="title"
            placeholder="To do" 
            class="outline-none rounded-[1.1rem] bg-transparent flex-1 h-12 px-2 text-sm placeholder:text-gray-600 text-zinc-50 border-2 border-zinc-700"
           >
          <SelectField @updateStatus="handleStatusUpdate"/>
          <button 
            :disabled="errors.length > 0"
            class="rounded-[1.1rem] lg:block hidden w-[120px] font-semibold bg-zinc-300 border-none h-12"
          >
            Add Task
          </button> 
      </div>
      <textarea 
        v-model="description" 
        placeholder="Give more information about the task" 
        class="outline-none rounded-[1.1rem] mt-3 bg-transparent w-full h-20 p-2 text-sm placeholder:text-gray-600 text-zinc-50 border-2 border-zinc-700 resize-none"
      ></textarea>
      <button 
        :disabled="errors.length > 0"
        class="rounded-[1.1rem] mt-3 block lg:hidden w-full font-semibold bg-zinc-300 border-none h-12"
      >
        Add Task
      </button> 
      <!-- نمایش ارورها -->
      <div v-if="errors.length > 0" class="mt-2 text-red-500">
          <ul>
              <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
          </ul>
      </div>
  </form>
</template>

<script setup>
import { useTaskStore } from '../../store/taskStore';
import SelectField from '../ui/SelectField.vue';
import { ref, computed, watch } from 'vue';
import { z } from 'zod';

const taskSchema = z.object({
  title: z.string().min(1, { message: 'Title is required' }),
  description: z.string().optional(),
  status: z.string().min(1, { message: 'Status is required' })
});

const title = ref('');
const description = ref('');
const status = ref('');
const errors = ref([]);
const touched = ref({ title: false, description: false, status: false }); 

const taskStore = useTaskStore();

function handleStatusUpdate(value) {
  status.value = value;
  touched.value.status = true; 
  validateForm();
}

function validateForm() {
  const result = taskSchema.safeParse({
    title: title.value,
    description: description.value,
    status: status.value
  });

  if (!result.success) {
    errors.value = result.error.errors.map(err => err.message);
  } else {
    errors.value = [];
  }
}

watch(
  [title, description, status],
  (newValues, oldValues) => {
    if (newValues[0] !== oldValues[0]) touched.value.title = true;
    if (newValues[1] !== oldValues[1]) touched.value.description = true;
    if (newValues[2] !== oldValues[2]) touched.value.status = true;
    validateForm();
  }
);

async function handleSubmit() {
  touched.value.title = true;
  touched.value.description = true;
  touched.value.status = true;

  validateForm();

  if (errors.value.length > 0) {
  }

  const newTask = {
    title: title.value,
    description: description.value,
    status: status.value,
    id: Math.random() * 10000,
    createdAt: new Date().toISOString()
  };

  taskStore.addTask(newTask);

  title.value = '';
  description.value = '';
  status.value = '';

  errors.value = [];
  touched.value = { title: false, description: false, status: false }; // بازنشانی touched
}
</script>
