<template>
  <a-float-button-group
    trigger="click"
    type="primary"
    :style="{ right: '24px', bottom: '24px' }"
  >
    <!-- BOUTON PRINCIPAL -->
    <template #icon> <GlobalOutlined class="fix-icon"/> </template>

    <!-- FR -->
    <a-float-button
      @click="changeLang('fr')"
      :tooltip="locale === 'fr' ? 'Français (actif)' : 'Français'"
    >
    <template #icon>  <<TranslationOutlined class="fix-icon"/> </template>
    </a-float-button>

    <!-- EN -->
    <a-float-button
      @click="changeLang('en')"
      :tooltip="locale === 'en' ? 'English (active)' : 'English'"
    >
      🇬🇧
    </a-float-button>
  </a-float-button-group>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { QuestionCircleOutlined, SyncOutlined } from '@ant-design/icons-vue';

const { locale, setLocale } = useI18n();

const changeLang = (lang: "fr" | "en") => {
  if (lang !== locale.value) {
    setLocale(lang);
  }
};
</script>

<style scoped>
.lang-box {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 120px;
}

.fix-icon {
  position: relative;
  top: -3px;
}
</style>
