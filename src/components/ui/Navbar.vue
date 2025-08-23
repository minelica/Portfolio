<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PillNav from '../bits/PillNav/PillNav.vue'
import logo from '@/assets/logos/testLogo.png'
</script>

<template>
  <PillNav
    :logo="logo"
    logoAlt="Company Logo"
    :items="[
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Contact', href: '/contact' },
    ]"
    activeHref="/"
    class="custom-nav"
    ease="power2.easeOut"
    baseColor="#000000"
    pillColor="#ffffff"
    hoveredPillTextColor="#ffffff"
    pillTextColor="#000000"
  />
</template>
