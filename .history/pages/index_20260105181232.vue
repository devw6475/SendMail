<template>
  <header>
      <nav
          class="navbar navbar-expand-lg navbar-light bg-white py-3">
          <div class="container">
              <NuxtLink class="navbar-brand fs-3 fw-bold text-primary-orange" to="/">
                  ServiConnect
              </NuxtLink>


              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  @click="toggleMenu">
                  <span class="navbar-toggler-icon"></span>
              </button>



              <div v-if="isOpen" :class="['collapse', 'navbar-collapse', { show: isOpen }, 'pt-2']" id="navbarNav">
                  <div class="d-flex flex-column align-center">
                      <a-button class="btn-perso-secondary w-100 register-button mt-2">S'inscrire</a-button>
                      <a-button class="btn-perso-secondary w-100 register-button mt-4">Se
                          connecter</a-button>
                  </div>

                  <div class="d-flex flex-column align-center">
                      <a-button class="bg-white w-100 register-button mt-2" >Mon tableau de bord</a-button>
                      <a-button class="bg-white w-100 register-button mt-4" @click=""
                          type="primary">Déconnexion</a-button>
                  </div>
              </div>

              <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                  <div class="d-flex w-50">
                      <a-button class="btn-perso-secondary w-100 register-button-other mx-3"
                          
                          type="primary">S'inscrire</a-button>
                      <a-button class="btn-perso-secondary w-100 register-button-other">
                      Se connecter</a-button>
                  </div>
              </div>

          </div>
      </nav>
  </header>
</template>

<script lang="ts" setup>

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




</script>