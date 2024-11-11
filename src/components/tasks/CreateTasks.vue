<template>
    <div class="flex items-center justify-center p-4 lg:h-[50%] h-auto"  v-if="show === '0' || show === '1'">
        <div class="flex flex-col  space-y-5 lg:flex-none flex-1">
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
const {show} = defineProps({
    show:{
        type : String,
        required : true
    }
})
</script>