<template>
  <header>
      <nav
          :class="!User ? 'navbar navbar-expand-lg navbar-light bg-white py-3' : 'btn-perso-secondary navbar navbar-expand-lg navbar-light bg-white py-3'">
          <div class="container">
              <NuxtLink class="navbar-brand fs-3 fw-bold text-primary-orange" to="/" v-if="!User">
                  ServiConnect
              </NuxtLink>

              <div v-if="User">
                  <NuxtLink class="navbar-brand fs-3 fw-bold text-primary-orange" to="/">
                      ServiConnect
                  </NuxtLink>
                  <h5 class="mb-0">Bienvenue, {{ "John Doe" }}</h5>
                  <p class="mb-0 text-white-50">Heureux de vous revoir!</p>
              </div>

              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  @click="toggleMenu" v-if="!User">
                  <span class="navbar-toggler-icon"></span>
              </button>

              <button class="bg-white navbar-toggler" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarNav" @click="toggleMenu" v-else>
                  <span class="navbar-toggler-icon"></span>
              </button>

              <div v-if="isOpen" :class="['collapse', 'navbar-collapse', { show: isOpen }, 'pt-2']" id="navbarNav">
                  <div class="d-flex flex-column align-center" v-if="!User">
                      <a-button class="btn-perso-secondary w-100 register-button mt-2"
                          :icon="h(UserAddOutlined, { class: 'fix-icon' })" @click="goToInscription"
                          type="primary">S'inscrire</a-button>
                      <a-button class="btn-perso-secondary w-100 register-button mt-4"
                          :icon="h(LoginOutlined, { class: 'fix-icon' })" @click="goToLogin" type="primary">Se
                          connecter</a-button>
                  </div>

                  <div class="d-flex flex-column align-center">
                      <a-button class="bg-white w-100 register-button mt-2"
                          :icon="h(DashboardOutlined, { class: 'fix-icon' })" @click="" type="primary">Mon tableau de
                          bord</a-button>
                      <a-button class="bg-white w-100 register-button mt-4"
                      :icon="h(LogoutOutlined, { class: 'fix-icon' })" @click=""
                          type="primary">Déconnexion</a-button>
                  </div>
              </div>

              <div class="collapse navbar-collapse justify-content-end" id="navbarNav" v-if="!User">
                  <div class="d-flex w-50">
                      <a-button class="btn-perso-secondary w-100 register-button-other mx-3"
                          :icon="h(UserAddOutlined, { class: 'fix-icon' })" @click="goToInscription"
                          type="primary">S'inscrire</a-button>
                      <a-button class="btn-perso-secondary w-100 register-button-other"
                          :icon="h(LoginOutlined, { class: 'fix-icon' })" @click="goToLogin" type="primary">Se
                          connecter</a-button>
                  </div>
              </div>

          </div>
      </nav>
  </header>
</template>

<script lang="ts" setup>
import { UserAddOutlined, LoginOutlined, DashboardOutlined, LogoutOutlined } from '@ant-design/icons-vue';
import type { PropType } from 'vue';
import type { Prestataire, User } from '~/interfaces/interface';

const isOpen = ref(false);

function toggleMenu() {
  isOpen.value = !isOpen.value;
}

function closeMenu() {
  isOpen.value = false;
}

// Fermer le menu si on passe en mode desktop
function handleResize() {
  if (window.innerWidth >= 992) {
      closeMenu();
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

defineProps({
  User: {
      type: Object as PropType<User |Prestataire>
  }
})

const { goToInscription, goToLogin } = useManageFunctions();

</script>