<template>
  <section class="advantages-section">
    <!-- TITLE -->
    <div class="section-header">
      <h2>Avantages</h2>
      <div class="underline"></div>
      <p>
        Découvrez tous les avantages à utiliser Activate myCard pour vos recharges mobiles
      </p>
    </div>

    <!-- CARDS -->
    <a-row :gutter="[32, 32]" justify="center">
      <a-col :xs="24" :md="8">
        <a-card class="adv-card" bordered="false">
          <div class="icon">
            <ClockCircleOutlined />
          </div>
          <h3>Gain de temps</h3>
          <p>
            Plus besoin de contacter le service client de votre opérateur pour activer un
            ticket. Notre solution le fait pour vous en quelques secondes.
          </p>
        </a-card>
      </a-col>

      <a-col :xs="24" :md="8">
        <a-card class="adv-card" bordered="false">
          <div class="icon">
            <LockOutlined />
          </div>
          <h3>Sécurité renforcée</h3>
          <p>
            Évitez les arnaques avec des tickets déjà utilisés ou falsifiés. Notre
            activation vous protège contre les fraudes.
          </p>
        </a-card>
      </a-col>

      <a-col :xs="24" :md="8">
        <a-card class="adv-card" bordered="false">
          <div class="icon">
            <LineChartOutlined />
          </div>
          <h3>Suivi précis</h3>
          <p>
            Nous conservons l’historique de toutes vos activations et recharges pour un
            meilleur suivi de vos dépenses mobiles.
          </p>
        </a-card>
      </a-col>
    </a-row>
  </section>
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
  padding: 100px 24px;
  background: #f6f8ff;
}

/* HEADER */
.section-header {
  text-align: center;
  margin-bottom: 64px;
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
  width: 80px;
  height: 4px;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  margin: 12px auto 0;
  border-radius: 2px;
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
