<template>
  <div>
    <DetailBigTitle
      first="body.fourth"
      presentation="body.bill_text"
      adapt-class="section-title-4"
    />

    <section class="partners-section">
      <!-- CARDS -->
      <a-row
        :gutter="[
          { xs: 16, md: 32 },
          { xs: 16, md: 32 },
        ]"
        justify="center"
      >
        <a-col :xs="24" :md="8">
          <div class="partner-card">
            <div class="icon-circle">
              <ThunderboltOutlined />
            </div>
            <h3>Dundle</h3>
            <p>
              Achat sécurisé de tickets pour tous les opérateurs avec livraison
              instantanée par email.
            </p>
            <a-button type="primary" size="large">Visiter le site</a-button>
          </div>
        </a-col>

        <a-col :xs="24" :md="8">
          <div class="partner-card">
            <div class="icon-circle">
              <MobileOutlined />
            </div>
            <h3>KaartDirect</h3>
            <p>
              Plateforme fiable pour acheter des recharges à prix réduits avec garantie de
              remboursement.
            </p>
            <a-button type="primary" size="large">Visiter le site</a-button>
          </div>
        </a-col>

        <a-col :xs="24" :md="8">
          <div class="partner-card">
            <div class="icon-circle">
              <RocketOutlined />
            </div>
            <h3>Recharge</h3>
            <p>Service rapide et sécurisé pour obtenir vos tickets de recharge 24h/24.</p>
            <a-button type="primary" size="large">Visiter le site</a-button>
          </div>
        </a-col>
      </a-row>

      <!-- INFO -->
      <div class="info-box">
        <InfoCircleOutlined />
        <span>
          Ces sites sont des partenaires externes. Nous recommandons toujours de vérifier
          vos tickets avec Activate myCard après achat.
        </span>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ThunderboltOutlined,
  MobileOutlined,
  RocketOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons-vue";
</script>

<style scoped>
/* SECTION */
.partners-section {
  padding: 50px 16px;
  background: #fff;
  overflow-x: hidden;
}

.partner-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
}

/* ICON ANIMATION */
.partner-card:hover .icon-circle {
  transform: scale(1.03);
  background: #2563eb;
  color: #fff;
}
.subtitle {
  font-size: 17px;
  color: #666;
}

/* GRADIENT LINE */
.gradient-line {
  width: 120px;
  height: 4px;
  margin: 12px auto;
  border-radius: 2px;
  background: linear-gradient(to right, #4f46e5, #ef4444);
}

/* CARD */
.partner-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px 28px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  height: 100%;
}

.partner-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin: 20px 0 12px;
  color: #2c3e50;
}

.partner-card p {
  font-size: 15px;
  color: #6b7280;
  margin-bottom: 24px;
}

/* ICON */
.icon-circle {
  width: 56px;
  height: 56px;
  margin: 0 auto;
  border-radius: 50%;
  background: #eef2ff;
  color: #2563eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

/* INFO BOX */
.info-box {
  margin: 48px auto 0;
  max-width: 900px;
  background: #f1f7ff;
  color: #1f2937;
  padding: 16px 20px;
  border-radius: 10px;
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 14px;
}

/* MOBILE */
@media (max-width: 768px) {
  .title {
    font-size: 32px;
  }

}
</style>
