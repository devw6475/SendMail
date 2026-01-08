<template>
  <div>
    <DetailBigTitle
      first="body.third"
      presentation="body.how_us_title"
      adapt-class="section-title-3"
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
/* CARD */
.partner-card {
  background: #fff;
  border-radius: 20px;
  padding: 40px 28px;
  text-align: center;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  height: 100%;
  transition: all 0.35s ease;
  cursor: pointer;
}

/* HOVER EFFECT */
.partner-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.12);
}

/* ICON ANIMATION */
.partner-card:hover .icon-circle {
  transform: scale(1.15);
  background: #2563eb;
  color: #fff;
}

/* BUTTON HOVER (OPTIONAL) */
.partner-card .ant-btn {
  transition: all 0.3s ease;
}

.partner-card:hover .ant-btn {
  transform: translateY(-2px);
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
  transition: all 0.35s ease;
}

</style>
