<template>
  <div
    v-if="active"
    class="lg:hidden fixed block w-full h-full top-0 left-0 bg-[rgba(0,0,0,.5)] z-10 transition-all duration-300"
    @click="sidebarActive.toggleActive"
  ></div>
</template>
<script setup>
import { storeToRefs } from "pinia";
import { useUiStore } from "../../store/Uistroe";

const sidebarActive = useUiStore();

const { active } = storeToRefs(sidebarActive);
</script>
