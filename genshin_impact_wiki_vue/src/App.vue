<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <RouterLink class="navbar-brand" to="/">Home</RouterLink>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/characters">Characters</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/weapons">Weapons</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link active" to="/artifacts">Artifacts</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <RouterView />
  </div>
</template>

<style scoped>

</style>
