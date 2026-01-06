<template>
  <div>
    <div v-if="isReady">
      <HeroImageSection />
      <BodySection />
    </div>

    <div v-else>
      <HeroImageSection />
      <BodySection />
    </div>
  </div>
</template>

<script lang="ts" setup>
const componentsReady = ref(false);

const isReady = computed(() => componentsReady.value);

onMounted(() => {
  // Simuler chargement de données ou d'état
  componentsReady.value = true;
});
</script>
