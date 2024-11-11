<template>
    <button 
        @click="() => onShow(value)"
        :class="show === value ? 'bg-zinc-200 text-[#141414]' : 'border-2 bg-transparent border-zinc-200 text-zinc-200' "
        class="font-semibold rounded-[1.1rem] transition-all duration-300 w-[120px] py-2">
        {{title}}
    </button>
</template>
<script setup>
    const {title,show,value} = defineProps({
        title :{
            type : String,
            required : true
        },
        show :{
            type : String,
            required : true
        },
        value:{
            type : String,
            required : true
        },
        onShow: {
            type: Function,
            required: true,
        },
    })
</script>