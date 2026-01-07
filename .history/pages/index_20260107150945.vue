<template>
  <div>
    <div v-if="isReady">
      <HeroImageSection />
      <BodySection />
    </div>

    <div v-else></div>
  </div>
</template>

<script lang="ts" setup>
const { locale, setLocale } = useI18n();
const componentsReady = ref(false);

const isReady = computed(() => componentsReady.value);

onMounted(() => {
  // Simuler chargement de données ou d'état
  componentsReady.value = true;
  setLocale("fr");
  
});
</script>
