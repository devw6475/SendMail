<template>
  <div>
    <HeroImageSection />
    <BodySection />
  </div>
</template>


<script lang="ts" setup>
  const componentsReady = ref(false)

  const isReady = computed(() => componentsReady.value)

  onMounted(() => {
  // Simuler chargement de données ou d'état
  componentsReady.value = true
})
</script>