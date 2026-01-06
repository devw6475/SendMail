<template>
  <div>
    <HeroImageSection />
    <BodySection />
  </div>
</template>


<script lang="ts" setup>
  const componentsReady = ref(false)

  const isReady = computed(() => componentsReady.value)
</script>