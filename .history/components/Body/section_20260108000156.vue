<template>
  <div>
    <div class="container">
      <DetailBigTitle
        first="body.first"
        presentation="body.text_presentation"
        adapt-class="section-title"
      />

        <DetailInformations />
      </div>
    </div>

   

</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped></style>
