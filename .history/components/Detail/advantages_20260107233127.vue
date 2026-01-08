<template>
  <div>
    <DetailBigTitle
      first="body.second"
      presentation="body.advantage_title"
      adapt-class="section-title-2"
    />

    <section class="advantages-section">
      <a-row :gutter="[32, 32]" justify="center">
        <a-col :xs="24" :md="8">
          <a-card class="adv-card">
            <div class="icon">
              <ClockCircleOutlined />
            </div>
            <h3>{{ t("body.time_gain_title") }}</h3>
            <p>
                {{ t("body.time_gain_text") }}
            </p>
          </a-card>
        </a-col>

        <a-col :xs="24" :md="8">
          <a-card class="adv-card">
            <div class="icon">
              <LockOutlined />
            </div>
            <h3>{{ t("body.security_title") }}</h3>
            <p>
                {{ t("body.security_text") }}
            </p>
          </a-card>
        </a-col>

        <a-col :xs="24" :md="8">
          <a-card class="adv-card">
            <div class="icon">
              <LineChartOutlined />
            </div>
            <h3>{{ t("body.follow_target_title") }}</h3>
            <p>
                {{ t("body.follow_target_text") }}
            </p>
          </a-card>
        </a-col>
      </a-row>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

import {
  ClockCircleOutlined,
  LockOutlined,
  LineChartOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
/* SECTION */
.advantages-section {
  padding: 1000px 24px;
  background: #f6f8ff;
}
/* CARD */
.adv-card {
  text-align: center;
  padding: 40px 24px;
  border-radius: 16px;
  transition: all 0.35s ease;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.03);
}

/* HOVER EFFECT */
.adv-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(79, 70, 229, 0.2);
}

/* ICON */
.icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 24px;
  border-radius: 50%;
  background: #eef2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #4f46e5;
}

/* TEXT */
.adv-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #2c3e50;
}

.adv-card p {
  font-size: 15px;
  line-height: 1.6;
  color: #6b7280;
}
</style>
