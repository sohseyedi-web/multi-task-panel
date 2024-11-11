<template>
    <div class=" border-zinc-800 lg:h-[50%] h-80" v-if="show === '0' || show === '3'" :class="taskStore.tasks.length > 0 ? 'border-t' : 'border-none'">
      <div class="p-6 h-full lg:w-[80%] w-full mx-auto" v-if="taskStore.tasks.length > 0">
        <div class="h-full">
          <Bar :data="chartData" :options="chartOptions" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { Bar } from 'vue-chartjs';
  import { computed } from 'vue';
  import { useTaskStore } from '../../store/taskStore';
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
  } from 'chart.js';
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  const taskStore = useTaskStore();
  
  const filterStatus = computed(() => [
    taskStore.countByStatus.starting,
    taskStore.countByStatus.progress,
    taskStore.countByStatus.finish,
  ]);

  const {show} = defineProps({
    show:{
        type : String,
        required : true
    }
})
  
  const chartData = computed(() => ({
    labels: ['Starting', 'Progress', 'Finish'],
    datasets: [
      {
        label: 'Status',
        backgroundColor: ['#ee4445', '#66300b', '#16793a'],
        data: filterStatus.value,
        borderRadius: 18,
      },
    ],
  }));
  
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
    y: {
      beginAtZero: true,
      stepSize: 3,
      ticks: {
        stepSize: 3,
      },
    },
  },
  };
  </script>
  