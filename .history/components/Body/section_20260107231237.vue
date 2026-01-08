<template>
  <div class="container">

    <DetailBigTitle first="body.first" presentation="body.text_presentation" adapt-class="section-title" />

    <div>
      <DetailInformations />
    </div>

    <DetailBigTitle first="body.first" presentation="body.text_presentation" adapt-class="section-title-2" />

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
