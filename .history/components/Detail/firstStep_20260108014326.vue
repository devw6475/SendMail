<template>
  <div>
    <DetailBigTitle
      first="body.second"
      presentation="body.advantage_title"
      adapt-class="section-title-2"
    />

    <section class="steps-section">
      <!-- TITLE -->
      <div class="steps-header">
        <h2>Mes premiers pas</h2>
        <div class="underline"></div>
        <p>Découvrez comment utiliser Activate myCard en quelques étapes simples</p>
      </div>

      <!-- STEPS -->
      <div class="steps-wrapper">
        <div class="timeline"></div>

        <div
          v-for="(step, index) in steps"
          :key="index"
          class="step-card"
          :class="index % 2 === 0 ? 'right' : 'left'"
        >
          <div class="step-number">{{ step.number }}</div>
          <h3>{{ step.title }}</h3>
          <p>{{ step.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

const steps = [
  {
    number: 1,
    title: "Entrez votre coupon",
    description:
      "Saisissez le code de recharge que vous souhaitez activer dans notre interface simple et intuitive.",
  },
  {
    number: 2,
    title: "Obtenez les résultats",
    description:
      "Notre système analyse instantanément le code et vous indique s'il est valide et utilisable.",
  },
  {
    number: 3,
    title: "Activez les détails",
    description:
      "Consultez les informations détaillées sur votre coupon : montant, date d'expiration, opérateur.",
  },
  {
    number: 4,
    title: "Rechargez en confiance",
    description: "Utilisez votre recharge en toute sécurité après validation complète.",
  },
];
</script>

<style scoped>
/* SECTION */
.steps-section {
  padding: 10px 16px;
  background: #f6f9ff;
  overflow-x: hidden;
}

/* HEADER */
.steps-header {
  text-align: center;
  margin-bottom: 80px;
}

.steps-header h2 {
  font-size: 42px;
  font-weight: 800;
  color: #2c3e50;
}

.steps-header p {
  font-size: 16px;
  color: #6b7280;
}

.underline {
  width: 120px;
  height: 4px;
  margin: 16px auto;
  border-radius: 10px;
  background: linear-gradient(90deg, #4a6bff, #ff6b6b);
}

/* TIMELINE */
.steps-wrapper {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
}

.timeline {
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  width: 4px;
  height: 100%;
  background: #e0e7ff;
  border-radius: 4px;
}

/* CARD */
.step-card {
  position: relative;
  width: 45%;
  background: #fff;
  padding: 28px 28px 28px 32px;
  border-radius: 18px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  margin-bottom: 60px;
  transition: all 0.35s ease;
}

.step-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
}

/* LEFT / RIGHT */
.step-card.left {
  margin-right: auto;
}

.step-card.right {
  margin-left: auto;
}

/* NUMBER */
.step-number {
  position: absolute;
  top: -18px;
  left: -18px;
  width: 42px;
  height: 42px;
  background: #4a6bff;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

/* TEXT */
.step-card h3 {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 8px;
  color: #1f2937;
}

.step-card p {
  font-size: 15px;
  color: #6b7280;
  line-height: 1.6;
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .timeline {
    display: none;
  }

  .step-card {
    width: 100%;
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .step-number {
    left: 16px;
  }
}
</style>
