<template>
    <Back />
    <aside
      :class="{
        ' left-0': sidebarActive.active,
        '-left-64': !sidebarActive.active,
      }"
      class="z-40 top-0 w-[240px] fixed min-h-screen bg-zinc-900 border-zinc-700 border-r-2 py-4 px-2 space-y-3 transition-all duration-300"
    >
      <ul class="flex flex-col gap-y-4">
        <TeamSwitcher />
        <div class="px-2 space-y-4">
          <CustomLink to="/">Tasks</CustomLink>
          <CustomLink to="/calendar">Calendar</CustomLink>
          <CustomLink to="/settings">Settings</CustomLink>
        </div>
      </ul>
    </aside>
  </template>
<script setup>
import { storeToRefs } from 'pinia';
import { useUiStore } from '../../store/Uistroe';
import Back from './Back.vue';
import CustomLink from './CustomLink.vue';
import TeamSwitcher from './TeamSwitcher.vue';
import { onBeforeUnmount, onMounted } from 'vue';

const sidebarActive = useUiStore();

const { active } = storeToRefs(sidebarActive);

onMounted(() => {
  window.addEventListener('resize', sidebarActive.updateMedia);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', sidebarActive.updateMedia);
});
</script>
