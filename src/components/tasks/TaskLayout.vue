<template>
    <main class="grid grid-cols-2 h-[calc(100vh-5.3rem)]">
        <section class="grid grid-rows-2 border-r border-zinc-800">
          <CreateTasks/>
          <div class=" border-zinc-800 border-t">
            <ChartBar/>
          </div>
        </section>
        <TaskLists/>
      </main>
</template>
<script setup>
import ChartBar from './ChartBar.vue';
import CreateTasks from './CreateTasks.vue';
import TaskLists from './TaskLists.vue';

</script>
