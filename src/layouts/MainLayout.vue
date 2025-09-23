<script setup lang="ts">
import Navbar from '@/components/ui/Navbar.vue'
import Footer from '@/components/ui/Footer.vue'
import '@/assets/styles/main.css'
</script>

<template>
  <div id="layout">
    <header>
      <Navbar />
    </header>

    <main id="layout-main">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<style scoped></style>
