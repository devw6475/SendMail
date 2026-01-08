<template>
  <a-row :gutter="[48, 48]" class="solution-section">
    <!-- LEFT CONTENT -->
    <a-col :xs="24" :md="12">
      <h3 class="title second-text">{{ t("body.second_text") }}<br /></h3>

      <p class="description">
        {{ t("body.text_description") }}
      </p>

      <p class="description">
        {{ t("body.text_description_2") }}
      </p>

      <!-- FEATURES -->
      <div class="features">
        <div class="feature-item">
          <div class="icon">
            <ThunderboltOutlined />
          </div>
          <div>
            <h3>Activation instantanée</h3>
            <p>Obtenez des résultats en temps réel sans attente</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="icon">
            <SafetyOutlined />
          </div>
          <div>
            <h3>Sécurité garantie</h3>
            <p>Vos données sont protégées et jamais partagées</p>
          </div>
        </div>

        <div class="feature-item">
          <div class="icon">
            <MobileOutlined />
          </div>
          <div>
            <h3>Multi-opérateurs</h3>
            <p>Compatibilité avec tous les principaux opérateurs</p>
          </div>
        </div>
      </div>
    </a-col>

    <!-- RIGHT IMAGE -->
    <a-col :xs="24" :md="12" class="image-col">
      <a-image
        src="/assets/img/show_card.jpg"
        alt="Previeuw card"
        :preview="false"
        class="solution-image"
      />
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import {
  ThunderboltOutlined,
  SafetyOutlined,
  MobileOutlined,
} from "@ant-design/icons-vue";

const { t } = useI18n();
</script>

<style scoped>
.solution-section {
  padding: 25px 24px;
}

.second-text {
  font-size: 28px !important;
  font-weight: 800 !important;
  color: #2c3e50 !important;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 20px;
}

.description {
  font-size: 16px;
  font-weight: 540;
  color: #666 !important;
  margin-bottom: 16px;
}

.features {
  margin-top: 32px;
  text-align: center;
}

.feature-item {
  display: flex;
  gap: 16px;
  margin-bottom: 24px;
}

.icon {
  width: 40px;
  height: 40px;
  background: #eef2ff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4f46e5;
  font-size: 18px;
}

p {
  margin: 4px 0 0;
  color: #6b7280;
  font-size: 14px;
}

.solution-image {
  width: 100%;
  border-radius: 16px;
}

.image-col {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
