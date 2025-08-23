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
    <main>
      <router-view />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<style scoped></style>
