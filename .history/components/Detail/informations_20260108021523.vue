<template>
  <div id="presentation">
    <!-- BIG TITLE -->
    <DetailBigTitle
      first="body.first"
      presentation="body.text_presentation"
      adapt-class="section-title"
    />

    <section class="solution-section">
      <a-row
        :gutter="[
          { xs: 16, md: 48 },
          { xs: 16, md: 48 },
        ]"
        align="top"
      >
        <!-- LEFT FEATURES -->
        <a-col :xs="24" :md="12">
          <div class="features">
            <div class="feature-item">
              <div class="icon">
                <ThunderboltOutlined />
              </div>
              <div>
                <h3 class="activate">
                  {{ t("body.instant_activation_1") }}
                </h3>
                <p class="activate-subtitle">
                  {{ t("body.instant_text_1") }}
                </p>
              </div>
            </div>

            <div class="feature-item">
              <div class="icon">
                <SafetyOutlined />
              </div>
              <div>
                <h3 class="activate">
                  {{ t("body.instant_activation_2") }}
                </h3>
                <p class="activate-subtitle">
                  {{ t("body.instant_text_2") }}
                </p>
              </div>
            </div>

            <div class="feature-item">
              <div class="icon">
                <MobileOutlined />
              </div>
              <div>
                <h3 class="activate">
                  {{ t("body.instant_activation_3") }}
                </h3>
                <p class="activate-subtitle">
                  {{ t("body.instant_text_3") }}
                </p>
              </div>
            </div>
          </div>
        </a-col>

        <!-- RIGHT IMAGE -->
        <a-col :xs="24" :md="12" class="image-col">
          <a-image
            src="/assets/img/show_card.jpg"
            alt="Preview card"
            :preview="false"
            class="solution-image"
            style="border-radius: 16px;"
          />
        </a-col>
      </a-row>
    </section>
  </div>
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
/* SECTION */
.solution-section {
  padding: 20px 0;
  overflow-x: hidden;
}

/* FEATURES */
.features {
  margin-top: 32px;
}

.feature-item {
  display: flex;
  gap: 16px;
  margin-bottom: 45px;
}

/* ICON */
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
  flex-shrink: 0;
}

/* TEXT */
.activate {
  font-size: 19px;
  font-weight: 800;
  color: #2c3e50;
  margin: 0 0 6px;
}

.activate-subtitle {
  font-size: 16px;
  color: #6b7280;
  margin: 0;
}

/* IMAGE */
.image-col {
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 4s ease-in-out infinite;
}

.solution-image {
  width: 100%;
  max-width: 420px;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

/* FLOAT ANIMATION */
@keyframes float {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

/* MOBILE FIX */
@media (max-width: 768px) {
 
}
</style>
