<template>
    <div class="p-6 h-full w-[80%] mx-auto" v-if="taskStore.tasks.length > 0">
      <div class="h-full">
        <Bar :data="chartData" :options="chartOptions" />
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

  console.log(taskStore)
  
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
  