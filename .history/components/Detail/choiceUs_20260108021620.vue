<template>
  <div id="how_coice">
    <DetailBigTitle
      first="body.third"
      presentation="body.how_us_title"
      adapt-class="section-title-3"
    />

    <section class="why-section">
      <!-- CONTENT -->
      <a-row :gutter="[48, 48]" align="top">
        <!-- IMAGE -->
        <a-col :xs="24" :md="12">
          <a-image
            src="/assets/img/couple.jpg"
            alt="User experience"
            :preview="false"
            class="main-image"
            style="border-radius: 20px"
          />
        </a-col>

        <!-- TEXT + CARDS -->
        <a-col :xs="24" :md="12">
          <h3 class="subtitle">{{ t("body.experience") }}</h3>

          <p class="description">
            {{ t("body.experience_detail") }}
          </p>

          <!-- FEATURE CARDS -->
          <div class="features">
            <div class="feature-card">
              <div class="icon">
                <CheckOutlined />
              </div>
              <div>
                <h4>{{ t("body.technology") }}</h4>
                <p>
                    {{ t("body.technology_desc") }}
                </p>
              </div>
            </div>

            <div class="feature-card">
              <div class="icon">
                <CheckOutlined />
              </div>
              <div>
                <h4>{{ t("body.support") }}</h4>
                <p>
                    {{ t("body.support_desc") }}
                </p>
              </div>
            </div>

            <div class="feature-card">
              <div class="icon">
                <CheckOutlined />
              </div>
              <div>
                <h4>{{ t("body.update") }}</h4>
                <p>
                    {{ t("body.update_desc") }}
                </p>
              </div>
            </div>
          </div>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script setup lang="ts">
import { CheckOutlined } from "@ant-design/icons-vue";
const { t } = useI18n();
</script>

<style scoped>
/* SECTION */
.why-section {
  padding: 30px 100px;
  background: #ffffff;
}

/* HEADER */
.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-header h2 {
  font-size: 40px;
  font-weight: 700;
  color: #2c3e50;
}

.section-header p {
  margin-top: 16px;
  font-size: 16px;
  color: #6b7280;
}

.underline {
  width: 90px;
  height: 4px;
  background: linear-gradient(90deg, #4a6bff, #ff6b6b);
  margin: 12px auto 0;
  border-radius: 2px;
}

/* IMAGE */
.main-image {
  width: 100%;
}

/* RIGHT CONTENT */
.subtitle {
  font-size: 32px;
  font-weight: 750;
  color: #2c3e50;
  margin-bottom: 16px;
}

.description {
  font-size: 17px;
  line-height: 1.7;
  color: #2c3e50;
}

/* FEATURE CARDS */
.features {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-card {
  display: flex;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  background: #f8fafc;
  transition: all 0.35s ease;
  cursor: pointer;
}

/* HOVER EFFECT */
.feature-card:hover {
  background: #4a6bffd0;
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(74, 107, 255, 0.35);
}

.feature-card:hover h4,
.feature-card:hover p {
  color: #ffffff;
}

.feature-card:hover .icon {
  background: #ffffff;
  color: #4a6bff;
}

/* ICON */
.icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #4a6bffe1;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.35s ease;
}

/* TEXT */
.feature-card h4 {
  margin: 0 0 6px;
  font-size: 17px;
  font-weight: 600;
  color: #2c3e50;
}

.feature-card p {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  color: #6b7280;
}

@media (max-width: 768px) {
  .why-section {
    padding: 30px 24px;
    background: #ffffff;
  }
}
</style>
