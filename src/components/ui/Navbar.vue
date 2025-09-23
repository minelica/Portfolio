<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import PillNav from '@/components/bits/PillNav/PillNav.vue'
import logo from '@/assets/logos/mLogo.png'
</script>

<template>
  <nav class="pillNav">
    <PillNav
      :logo="logo"
      logoAlt="Company Logo"
      :items="[
        { label: 'Home', href: '/' },
        { label: 'Projects', href: '/projects' },
        { label: 'Skills', href: '/skills' },
        { label: 'Timeline', href: '/timeline' },
        { label: 'Contact', href: '/contact' },
      ]"
      activeHref="/"
      class="custom-nav"
      ease="power2.easeOut"
      baseColor="#1e293b"
      pillColor="#1e293b"
      hoveredPillTextColor="#22c55e"
      pillTextColor="#1e293b"
    />
  </nav>
</template>

<style scoped>
.pillNav {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
</style>
