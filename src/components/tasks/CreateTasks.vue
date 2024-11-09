<template>
    <div class="flex items-center justify-center p-6">
        <div class="flex flex-col  space-y-5 ">
            <div class="space-y-2">
                <h3 class="text-zinc-100 font-semibold text-3xl">Create a New Task</h3>
                <p class="text-zinc-400 font-medium text-sm">What do you have to do today?</p>
            </div>
            <FormFields/>
        </div>
    </div>
</template>
<script setup>
import FormFields from './FormFields.vue';

</script>