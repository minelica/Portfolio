<!-- eslint-disable vue/multi-word-component-names -->
<!-- Footer.vue -->
<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2025 Minela Mašinović. All rights reserved.</p>
      <nav class="footer-links">
        <a href="/projects">Projects</a>
        <a href="/skills">Skills</a>
        <a href="/timeline">Timeline</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #0f172a; /* dunkler als Navbar (#1e293b) für Hierarchie */
  padding: 2rem 1rem;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer p {
  margin: 0;
  color: #94a3b8; /* hellgrau */
  font-size: 0.9rem;
}

.footer-links {
  margin-top: 0.75rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.footer-links a {
  color: #e2e8f0;
  font-size: 0.9rem;
  transition: color 0.3s ease;
  text-decoration: none;
}

.footer-links a:hover {
  color: #22c55e; /* grüner Hover, wie Navbar */
}
</style>
