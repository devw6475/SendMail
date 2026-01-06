<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-white py-3 shadow-sm">
      <div class="container">

        <!-- LOGO -->
        <NuxtLink
          class="navbar-brand fs-3 fw-bold logo-blue"
          to="/"
        >
          ServiConnect
        </NuxtLink>

        <!-- TOGGLER MOBILE -->
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- MENU -->
        <div
          :class="['collapse navbar-collapse', { show: isOpen }]"
          id="navbarNav"
        >
          <!-- LIENS -->
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4 d-flex">
            <li class="nav-item" v-for="item in menuItems" :key="item.to">
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
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isOpen = ref(false)

const menuItems = [
  { label: 'Accueil', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Fonctionnalités', to: '/features' },
  { label: 'Tarifs', to: '/pricing' },
  { label: 'Contact', to: '/contact' }
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}

function closeMenu() {
  isOpen.value = false
}

function handleResize() {
  if (window.innerWidth >= 992) {
    closeMenu()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<style scoped>
  /* LOGO */
.logo-blue {
  color: #2563eb; /* bleu */
}

/* LIENS */
.nav-custom {
  position: relative;
  font-weight: 500;
  color: #374151;
  transition: color 0.2s ease;
}

.nav-custom:hover {
  color: #7c3aed; /* violet */
}

/* ACTIF */
.active-link {
  color: #7c3aed !important;
  font-weight: 600;
}

.active-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -6px;
  width: 100%;
  height: 3px;
  background-color: #7c3aed;
  border-radius: 2px;
}

</style>