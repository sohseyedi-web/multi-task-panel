<template>
    <section class="p-6 w-full lg:flex-1" v-if="show === '0' || show === '2'">
        <div class="space-y-2">
            <h3 class="text-zinc-100 font-semibold text-3xl">Your task for today</h3>
            <p class="text-zinc-400 font-medium text-sm">Let's get everything done</p>
        </div>
        <Table/>
    </section>
</template>
<script setup>
import Table from '../ui/Table.vue';
const {show} = defineProps({
    show:{
        type : String,
        required : true
    }
})
</script>
