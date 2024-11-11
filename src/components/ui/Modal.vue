
<template>
  <TransitionRoot appear :show="isVisible" as="template">
    <Dialog as="div" @close="onClose" class="relative z-50">
        <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-300 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
        >
            <div class="fixed inset-0 bg-black/60" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
                <TransitionChild
                    as="template"
                    enter="duration-300 ease-out"
                    enter-from="opacity-0 scale-95"
                    enter-to="opacity-100 scale-100"
                    leave="duration-300 ease-in"
                    leave-from="opacity-100 scale-100"
                    leave-to="opacity-0 scale-95"
                >
                    <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-[1.1rem] bg-zinc-900 p-4 text-right align-middle shadow-xl transition-all">
                        <DialogTitle
                            as="h3"
                            class="text-xl font-medium text-zinc-100 w-full flex items-center justify-between"
                        >
                          <h3>{{title}}</h3>
                          <XMarkIcon class="text-zinc-100 size-7 cursor-pointer"  @click="onClose"/>
                        </DialogTitle>
                        <hr class="my-3 border-zinc-800">
                        <slot></slot>

                        <div class="mt-4 flex items-center gap-x-3">
                            <button
                                class="flex w-[140px] justify-center rounded-[1.1rem] bg-black py-3 font-semibold text-zinc-100"
                            >
                                Save Changes
                            </button>
                            <button
                                class="flex w-[100px] justify-center rounded-[1.1rem] bg-zinc-400 py-3 font-semibold text-zinc-900"
                                @click="onClose"
                            >
                                Cancel
                            </button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </div>
        </div>
    </Dialog>
</TransitionRoot>
</template>
<script setup>
import {  XMarkIcon } from '@heroicons/vue/20/solid';
import {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
} from '@headlessui/vue'


defineProps({
  isVisible: Boolean,
  title : String,
  onClose:Function
});

</script>
