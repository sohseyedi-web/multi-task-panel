<template>
    <div class="flex items-center p-4 lg:hidden gap-x-3">
      <ActiveBtn title="Create Task" :show="showGrid" value="1" :onShow="handleShowGrid"/>
      <ActiveBtn title="Table List" :show="showGrid" value="2" :onShow="handleShowGrid" v-if="taskStore.tasks.length > 0"/>
      <ActiveBtn title="Chart" :show="showGrid" value="3" :onShow="handleShowGrid" v-if="taskStore.tasks.length > 0"/>
    </div>
      <main class="flex lg:h-[calc(100vh-5.3rem)]">
        <section class="flex flex-col flex-1" :class="showGrid === '0' ? 'border-r border-zinc-800' : null ">
          <CreateTasks :show="showGrid"/>
          <ChartBar :show="showGrid"/>
        </section>
        <TaskLists :show="showGrid" />
      </main>
</template>
<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { useTaskStore } from '../../store/taskStore';
import ActiveBtn from '../ui/ActiveBtn.vue';
import ChartBar from './ChartBar.vue';
import CreateTasks from './CreateTasks.vue';
import TaskLists from './TaskLists.vue';

const taskStore = useTaskStore()
const showGrid = ref(window.innerWidth <= 1024 ? "1" : "0")

const handleShowGrid = (val) => showGrid.value = val

const hanldeUpadteShowGrid = () => {
  showGrid.value = window.innerWidth <= 1024 ? "1" : "0"
}

onMounted(() => {
  window.addEventListener('resize', hanldeUpadteShowGrid);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', hanldeUpadteShowGrid);
});

</script>
