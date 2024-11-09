import { defineStore } from "pinia";

export const useUiStore = defineStore("uiStore", {
  state: () => ({
    active: false,
  }),
  actions: {
    toggleActive() {
      return (this.active = !this.active);
    },
    updateMedia() {
      this.active = false;
    },
  },
});
