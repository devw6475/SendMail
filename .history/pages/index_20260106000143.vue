<template>
  <div>
    <div v-if="isReady">
      <HeroImageSection />
      <BodySection />
      <FooterPage />
    </div>

    <div v-else>
    
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
