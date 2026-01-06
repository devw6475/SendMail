<template>
  <div>
    <section class="hero-section">
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <h1>
        Activez vos tickets de <br />
        recharge en un clic
      </h1>

      <p>
        Activate myCard vous permet d'activer instantanément vos tickets
        de recharge mobile avant utilisation, pour éviter les mauvaises surprises.
      </p>

      <div class="hero-actions">
        <a-button type="primary" size="large" class="hero-btn">
          Activer mon Ticket
        </a-button>

        <a-button size="large" ghost >
          Remboursement
        </a-button>
      </div>
    </div>
  </section>
  </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
  .hero-section {
    position: relative;
    height: calc(100vh - 80px); /* après la navbar */
    background-image: url("https://picsum.photos/1920/900?random=1");
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  /* OVERLAY */
  .hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
  }
  
  /* CONTENT */
  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    padding: 0 16px;
    color: white;
  }
  
  .hero-content h1 {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
    line-height: 1.6;
    opacity: 0.9;
  }
  
  /* ACTIONS */
  .hero-actions {
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
  }

  
  /* RESPONSIVE */
  @media (max-width: 768px) {
    .hero-content h1 {
      font-size: 2.2rem;
    }
  
    .hero-actions {
      flex-direction: column;
    }
  }
  
  </style>