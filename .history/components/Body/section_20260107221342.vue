<template>
  <div class="container">
    <div class="text-center mb-5 pt-4 section-title">
      <h2>{{ t("body.first") }}</h2>
      <br />
      <p>{{ t("body.text_presentation") }}</p>
    </div>

    <div>
      <DetailInformations />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>

<style scoped>
h2 {
  font-size: 26px;
  color: #2c3e50;
  font-weight: 800;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  unicode-bidi: isolate;
}

.section-title h2::after {
  content: "";
  position: absolute;
  width: 10%;
  height: 4px;
  background: linear-gradient(to right, #4a6bff, #ff6b6b);
  bottom: -90px;
  left: 45%;
  border-radius: 2px;
}

p {
  color: #666 !important;
  font-size: 20px;
  text-align: center;
}

@media (max-width: 768px) {
  .section-title h2::after {
    content: "";
    position: absolute;
    width: 45%;
    height: 4px;
    background: linear-gradient(to right, #4a6bff, #ff6b6b);
    bottom: -80px;
    left: 27.5%;
    border-radius: 2px;
  }
}
</style>
