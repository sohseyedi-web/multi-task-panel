import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: [],
    }),
    actions: {
        addTask(task) {
            this.tasks.push(task);
        },
    },
    getters: {
        countByStatus: (state) => {
            return {
                starting: state.tasks.filter(task => task.status === 'starting').length,
                progress: state.tasks.filter(task => task.status === 'progress').length,
                finish: state.tasks.filter(task => task.status === 'finish').length,
            };
        },
    },
});
