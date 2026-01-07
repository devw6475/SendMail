<template>
  <a-float-button-group
    trigger="click"
    type="primary"
    :style="{ right: '24px', bottom: '24px' }"
  >
    <!-- BOUTON PRINCIPAL -->
    <template #icon> <TranslationOutlined class="fix-icon"/> </template>

    <!-- FR -->
    <a-float-button
      @click="changeLang('fr')"
      :tooltip="locale === 'fr' ? 'Français (actif)' : 'Français'"
    >
    <template #icon>
    <!-- SVG FR -->
    <svg viewBox="0 0 3 2" width="20" height="20">
      <rect width="1" height="2" x="0" fill="#0055A4"/>
      <rect width="1" height="2" x="1" fill="#FFFFFF"/>
      <rect width="1" height="2" x="2" fill="#EF4135"/>
    </svg>
  </template>
    </a-float-button>

    <!-- EN -->
    <a-float-button
      @click="changeLang('en')"
      :tooltip="locale === 'en' ? 'English (active)' : 'English'"
    >
    <template #icon>
    <!-- SVG EN -->
    <svg viewBox="0 0 60 30" width="20" height="20">
      <path fill="#012169" d="M0 0h60v30H0z"/>
      <path stroke="#FFF" stroke-width="6" d="M0 0l60 30M60 0L0 30"/>
      <path stroke="#C8102E" stroke-width="4" d="M0 0l60 30M60 0L0 30"/>
      <path stroke="#FFF" stroke-width="10" d="M30 0v30M0 15h60"/>
      <path stroke="#C8102E" stroke-width="6" d="M30 0v30M0 15h60"/>
    </svg>
  </template>
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

.lang-icon {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
