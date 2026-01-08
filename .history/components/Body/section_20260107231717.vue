<template>
  <div >

<div class="container">
    <DetailBigTitle first="body.first" presentation="body.text_presentation" adapt-class="section-title" />

    <div>
      <DetailInformations />
    </div>
</div>

    <div>
      <DetailAdvantages />
    </div>


  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>

</style>
