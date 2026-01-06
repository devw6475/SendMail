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
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-4">
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

          <!-- ACTIONS -->
          <div class="d-flex gap-2">
            <a-button class="btn-perso-secondary">S'inscrire</a-button>
            <a-button class="btn-perso-secondary">Se connecter</a-button>
          </div>
        </div>

      </div>
    </nav>
  </header>
</template>
