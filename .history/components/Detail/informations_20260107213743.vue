<template>
  <a-row :gutter="[48, 48]" class="solution-section">
    <!-- LEFT CONTENT -->
    <a-col :xs="24" :md="12">
      <h3 class="title">
        La solution simple et efficace<br />
        pour vos recharges
      </h3>

      <p class="description">
        Activate myCard est une plateforme innovante qui vous permet d'activer en quelques
        secondes la validité de vos tickets de recharge mobile avant de les utiliser. Plus
        de mauvaises surprises avec des tickets déjà utilisés ou expirés.
      </p>

      <p class="description">
        Notre technologie avancée analyse les codes de recharge et vous fournit une
        réponse instantanée sur leur état. Simple, rapide et sécurisé.
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
        src="../../assets/img/show_card.jpg"
        alt="previeuw_card"
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
</script>

<style scoped>
.solution-section {
    padding: 80px 24px;
}

.title {
  font-size: 36px;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 24px;
}

.description {
  font-size: 16px;
  color: #4b5563;
  line-height: 1.7;
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

h3 {
  font-size: 40px !important;
  font-weight: 600;
  color: #2c3e50 !important;
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
