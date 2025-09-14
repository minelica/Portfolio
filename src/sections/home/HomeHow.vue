<script setup lang="ts">
import GradientBlinds from '@/components/bits/GradientBlinds/GradientBlinds.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
</script>

<template>
  <!-- Grid-Overlay statt flex -->
  <section
    class="relative grid grid-cols-1 grid-rows-1 min-h-[400px] md:min-h-[640px] w-full overflow-hidden isolate"
  >
    <!-- Hintergrund-Layer -->
    <div class="[grid-area:1/1] z-0 pointer-events-auto">
      <GradientBlinds
        class="w-full h-full"
        :gradient-colors="['#1EA03F', '#182FFF']"
        :angle="20"
        :noise="0.5"
        :blind-count="16"
        :blind-min-width="60"
        :spotlight-radius="0.55"
        :spotlight-softness="1"
        :spotlight-opacity="0.95"
        :mouse-dampening="0.12"
        :distort-amount="0"
        shine-direction="left"
        mix-blend-mode="screen"
      />
    </div>
    <!-- Vordergrund-Layer -->
    <div
      class="[grid-area:1/1] z-10 mx-auto w-full max-w-6xl px-6 py-12 md:py-16 mt-8 md:mt-20 pointer-events-none"
    >
      <div class="text-center text-white">
        <ShinyText
          text="Core Technologies That Drive My Development"
          :speed="3"
          class="hero-shiny"
        />
        <p class="mt-4 mx-auto max-w-3xl text-sm md:text-base text-white/85">
          My development approach focuses on leveraging the latest technologies to create responsive
          and accessible web applications. By utilizing Vue 3 and TypeScript, I ensure high-quality,
          maintainable code that meets modern web standards.
        </p>
      </div>
      <!-- Nur echte Interaktion wieder zulassen -->
      <div class="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
        <article class="feature-card pointer-events-none">
          <h3>Modern Web Standards</h3>
          <p>Semantic HTML, ARIA, and performance-first practices ensure quality and longevity.</p>
        </article>
        <article class="feature-card pointer-events-none">
          <h3>Vue 3 + Composition API</h3>
          <p>Scalable architecture with reusable composables and clear state management.</p>
        </article>
        <article class="feature-card pointer-events-none">
          <h3>TypeScript Safety</h3>
          <p>Strong typing, better DX, and fewer runtime bugs with robust tooling.</p>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-shiny {
  font-weight: 700;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
}

/* Karten-Stil */
.feature-card {
  padding: 1.5rem 1.5rem 1.5rem 2rem;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  text-align: left;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}
.feature-card h3 {
  font-size: 1.125rem;
  font-weight: 600;
  color: #fff;
}
.feature-card p {
  margin-top: 0.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
}
</style>
