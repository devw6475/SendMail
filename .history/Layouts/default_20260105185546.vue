<template>
  <div>
    <header>
      <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container">
          <!-- LOGO -->
          <NuxtLink class="navbar-brand fs-3 fw-bold logo-blue" to="/">
            ServiConnect
          </NuxtLink>

          <!-- TOGGLER MOBILE -->
          <button class="navbar-toggler" type="button" @click="toggleMenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <!-- MENU -->
          <div :class="['collapse navbar-collapse', { show: isOpen }]" id="navbarNav">
            <!-- LIENS -->
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 d-flex">
              <li class="nav-item pt-2" v-for="item in menuItems" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="nav-link nav-custom"
                  :class="{ 'active-link': route.path === item.to }"
                  @click="closeMenu"
                >
                  {{ item.label }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <slot/>
   
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Activate myCard</h3>
                    <p>La solution la plus fiable pour activer vos tickets de recharge mobile avant utilisation.</p>
                </div>
                <div class="footer-column">
                    <h3>Liens rapides</h3>
                    <ul class="footer-links">
                        <li><a href="#about">Présentation</a></li>
                        <li><a href="#benefits">Avantages</a></li>
                        <li><a href="#why-us">Pourquoi nous choisir</a></li>
                        <li><a href="#steps">Mes premiers pas</a></li>
                        <li><a href="#testimonials">Avis Internautes</a></li>
                        <li><a href="#faq">FAQ</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3>Légal</h3>
                    <ul class="footer-links">
                        <li><a href="conditions-fr.html">Conditions d'utilisation</a></li>
                        <li><a href="confidentialite-fr.html">Politique de confidentialité</a></li>
                        <li><a href="nousconnaitre-fr.html">Nous Connaître</a></li>
                    </ul>
                </div>

            </div>
            <div class="footer-bottom">
                <p>© 2023 Activate myCard. Tous droits réservés.</p>
            </div>
        </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { menuItems } from "~/core/constant";

const route = useRoute();

const { isOpen, handleResize, toggleMenu, closeMenu } = useFunctions();

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
/* LOGO */
.logo-blue {
  color: #6366f1; /* bleu */
}

/* LIENS */
.nav-custom {
  position: relative;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s ease;
}

.nav-custom:hover {
  color: #6366f1; /* violet */
}

/* ACTIF */
.active-link {
  color: #6366f1 !important;
  font-weight: 600;
}

.active-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background-color: #6366f1;
  border-radius: 2px;
}
</style>
