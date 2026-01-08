<template>
  <div class="container">

    <DetailBigTitle first="body.first" presentation="body.text_presentation" adapt-class="section-title" />

    <div>
      <DetailInformations />
    </div>

    <DetailBigTitle first="'body.first'" presentation="'body.text_presentation'" adapt-class="section-title" />


  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>

</style>
