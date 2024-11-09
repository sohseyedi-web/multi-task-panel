<template>
    <header class="flex items-center justify-between p-4 border-b border-zinc-800">
        <div class="flex items-center gap-x-4 lg:w-auto w-full ">
            <span @click="toggleActive">
                <Bars3CenterLeftIcon  class="size-7 text-zinc-300 lg:hidden flex cursor-pointer"/>
            </span>
            <SidebarLayout/>
            <img src="/defaultUser.png" class="size-10 rounded-[1.1rem] lg:mr-5 mr-2 object-cover"/>
            <ul class="lg:flex items-center gap-x-5 hidden mr-3">
                <CustomLink to="/">Tasks</CustomLink>
                <CustomLink to="/calendar">Calendar</CustomLink>
                <CustomLink to="/Settings">Settings</CustomLink>
            </ul>
            <SearchInput />
        </div>
        <div class="hidden lg:flex">
            <TeamSwitcher/>
        </div>
    </header>
</template>
<script setup>
import { Bars3CenterLeftIcon } from '@heroicons/vue/16/solid';
import CustomLink from './CustomLink.vue';
import SearchInput from './SearchInput.vue';
import TeamSwitcher from './TeamSwitcher.vue';
import { useUiStore } from '../../store/Uistroe';
import SidebarLayout from './SidebarLayout.vue';

const sidebarActive = useUiStore();

const toggleActive = () => {
    sidebarActive.toggleActive();
};
</script>
