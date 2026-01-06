<template>
  <a-float-button
    trigger="click"
    type="primary"
    :style="{ right: '24px', bottom: '24px' }"
  >
    <!-- CONTENU AU CLICK -->
    <template #icon> 🌐 </template>

    <template #content>
      <div class="lang-box">
        <a-button
          size="small"
          :type="locale === 'fr' ? 'primary' : 'default'"
          block
          @click="changeLang('fr')"
        >
          🇫🇷 Français
        </a-button>

        <a-button
          size="small"
          :type="locale === 'en' ? 'primary' : 'default'"
          block
          @click="changeLocale('en')"
        >
          🇬🇧 English
        </a-button>
      </div>
    </template>
  </a-float-button>
</template>

<script lang="ts" setup>
    const {setLocale, locale } = useI18n();


    const changeLang = (lang: 'fr' | 'en') => {
  if (lang !== locale) {
    setLocale(lang)
  }
}
</script>

<style scoped>
.lang-box {
    display: flex;
    flex-direction: column;
    gap: 8px;
    min-width: 120px;
  }

</style>

