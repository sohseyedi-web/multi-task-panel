<template>
    <li>
      <router-link
        :to="props.to"
        :class="linkClass"
      >
        <slot />
      </router-link>
    </li>
</template>
  
<script setup>
  import { computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
  
  const route = useRoute();
  
  const linkClass = computed(() => {
    const baseClass = 'transition-all duration-300 hover:text-white font-semibold';
    return route.path === props.to
      ? `${baseClass} text-zinc-100 font-semibold`
      : `${baseClass} text-zinc-700`;
  });
</script>
  
  