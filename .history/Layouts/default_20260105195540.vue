<template>
  <div>
    <!-- HEADER -->
    <header>
      <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
        <div class="container">
          <NuxtLink class="navbar-brand fs-3 fw-bold logo-blue" to="/">
            ServiConnect
          </NuxtLink>

          <button class="navbar-toggler" type="button" @click="toggleMenu">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div :class="['collapse navbar-collapse', { show: isOpen }]" id="navbarNav">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 gap-lg-4 d-flex">
              <li class="nav-item pt-2" v-for="item in menuItems" :key="item.to">
                <NuxtLink
                  :to="item.to"
                  class="nav-link nav-custom"
                  :class="{ 'active-link': route.path === item.to }"
                  @click="closeMenu"
                >
                  {{ t(item.label) }}
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <!-- SELECTEUR LANGUE -->
      <div class="language-switcher container mt-3 mb-5">
        <label for="lang-select" class="form-label me-2">Langue :</label>
        <select
          id="lang-select"
          v-model="locale"
          class="form-select w-auto d-inline-block"
        >
          <option value="fr">FR</option>
          <option value="en">EN</option>
        </select>
        <span class="ms-2">Langue actuelle : {{ locale.toUpperCase() }}</span>
      </div>
    </header>


  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { menuItems } from "~/core/constant";

// ROUTE
const route = useRoute();

// MENU MOBILE
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const closeMenu = () => {
  isOpen.value = false;
};

// HANDLE RESIZE
const handleResize = () => {
  if (window.innerWidth >= 992) isOpen.value = false;
};
onMounted(() => window.addEventListener("resize", handleResize));
onUnmounted(() => window.removeEventListener("resize", handleResize));

// I18N
const { t, locale } = useI18n();
</script>

<style scoped>
/* LOGO */
.logo-blue {
  color: #6366f1;
}

/* LIENS */
.nav-custom {
  position: relative;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s ease;
}

.nav-custom:hover {
  color: #6366f1;
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

/* LANGUAGE SWITCHER */
.language-switcher select {
  display: inline-block;
  width: auto;
}
</style>
