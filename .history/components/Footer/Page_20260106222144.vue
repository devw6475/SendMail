<template>
    <div>
        <footer class="site-footer">
  <div class="container">
    <div class="footer-content">
      <div class="footer-column">
        <h3>Activate myCard</h3>
        <p>
          La solution la plus fiable pour activer vos tickets de recharge mobile avant utilisation.
        </p>
      </div>

      <div class="footer-column">
        <h3>Liens rapides</h3>
        <ul class="footer-links">
          <li><a href="#">Présentation</a></li>
          <li><a href="#">Avantages</a></li>
          <li><a href="#">Pourquoi nous choisir</a></li>
          <li><a href="#">Mes premiers pas</a></li>
          <li><a href="#">Avis Internautes</a></li>
          <li><a href="#">FAQ</a></li>
        </ul>
      </div>

      <div class="footer-column">
        <h3>Légal</h3>
        <ul class="footer-links">
          <li><a href="#">Conditions d'utilisation</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
          <li><a href="#">Nous Connaître</a></li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2023 Ezechiel Card. Tous droits réservés.</p>
    </div>
  </div>
</footer>

    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.site-footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 4rem 0 2rem;
  font-size: 0.95rem;
}

.site-footer .container {
  max-width: 1200px;
  margin: auto;
  padding: 0 1rem;
}

/* GRID */
.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  margin-bottom: 2rem;
}

/* COLONNES */
.footer-column h3 {
  color: #ffffff;
  font-size: 1.1rem;
  margin-bottom: 1rem;
  font-weight: 600;
}

.footer-column p {
  line-height: 1.6;
  opacity: 0.85;
}

/* LIENS */
.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #ecf0f1;
  text-decoration: none;
  opacity: 0.85;
  transition: all 0.2s ease;
}

.footer-links a:hover {
  color: #6366f1;
  opacity: 1;
  padding-left: 4px;
}

/* BOTTOM */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 1.5rem;
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.8;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-links a:hover {
    padding-left: 0;
  }
}


</style>