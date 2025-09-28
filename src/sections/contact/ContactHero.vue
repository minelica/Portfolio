<script setup lang="ts">
import DarkVeil from '@/components/bits/DarkVeil/DarkVeil.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
</script>

<template>
  <div class="relative w-full min-h-screen overflow-hidden flex items-center justify-center px-6">
    <!-- Hintergrund -->
    <DarkVeil
      class="absolute inset-0 -z-10"
      :hue-shift="32"
      :noise-intensity="0.15"
      :scanline-intensity="0.0"
      :speed="1.6"
      :scanline-frequency="1"
      :warp-amount="0.1"
      :resolution-scale="1"
    />

    <!-- Inhalt -->
    <section class="relative z-10 text-center text-white max-w-3xl">
      <ShinyText text="Let's Connect" :speed="3" class-name="contact-title" />

      <p class="mt-4 text-white/80 max-w-xl mx-auto">
        I’m always open to new opportunities, collaborations, and conversations about technology,
        design, and innovation.
      </p>

      <!-- Kontakt-Links -->
      <div class="mt-10 flex flex-wrap justify-center gap-6 text-white/90">
        <a href="mailto:minelam.dev@gmail.com" class="contact-link" aria-label="Send Email">
          ✉️ Email
        </a>
        <a
          href="https://github.com/minelica"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
          aria-label="GitHub"
        >
          💻 GitHub
        </a>
        <a
          href="https://de.linkedin.com/in/minela-masinovic-82a7452a8"
          target="_blank"
          rel="noopener noreferrer"
          class="contact-link"
          aria-label="LinkedIn"
        >
          🔗 LinkedIn
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-title {
  font-weight: 700;
  font-size: clamp(1.8rem, 4vw, 3rem);
  margin-bottom: 0.5rem;
  display: inline-block;
}

.contact-link {
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.6rem 1.5rem;
  border-radius: 9999px;
  backdrop-filter: blur(6px);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
}

.contact-link:hover {
  background: rgba(59, 130, 246, 0.2);
  border-color: rgba(59, 130, 246, 0.4);
  color: #bfdbfe;
  transform: translateY(-3px);
  box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
}
</style>
