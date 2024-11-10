<template>
    <form class="w-full" @submit.prevent="handleSubmit">
        <div class="flex items-center gap-x-4" >
            <input type="text" v-model="title" placeholder="To do" class="outline-none rounded-[1.1rem] bg-transparent flex-1 h-12 px-2 text-sm placeholder:text-gray-600 text-zinc-50 border-2 border-zinc-700">
            <SelectField @updateStatus="handleStatusUpdate"/>
            <button class="rounded-[1.1rem] w-[120px] font-semibold bg-zinc-300 border-none h-12">Add Task</button> 
        </div>
        <textarea v-model="description" placeholder="Give more information about the task" class="outline-none rounded-[1.1rem] mt-3 bg-transparent w-full h-20 p-2 text-sm placeholder:text-gray-600 text-zinc-50 border-2 border-zinc-700 resize-none"></textarea>
    </form>
</template>
<script setup>
import { useTaskStore } from '../../store/taskStore';
import SelectField from '../ui/SelectField.vue';
import { ref } from 'vue';

const title = ref('');
const description = ref('');
const status = ref('');

const taskStore = useTaskStore();

function handleStatusUpdate(value) {
  status.value = value;
}

async function handleSubmit() {
  if (!title.value) {
    alert('Please enter a task');
    return;
  }else{
    const newTask = {
      title : title.value,
      description : description.value,
      status : status.value,
      id : Math.random() * 10000,
      createdAt: new Date().toISOString()
    }
    taskStore.addTask(newTask)
  }


  title.value = '';
  description.value = '';
  status.value = '';
}
</script>
