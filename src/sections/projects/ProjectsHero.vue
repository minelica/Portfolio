<script setup lang="ts">
import DarkVeil from '@/components/bits/DarkVeil/DarkVeil.vue'
import syntaxTrailImg from '@/assets/images/syntaxTrail.png'
import portfolioImg from '@/assets/images/portfolio.png'

const heading = 'Projects That Reflect My Learning Journey'
const intro =
  'While studying and working as a software developer, I focus on building meaningful projects that challenge my skills and help me grow as a developer — one step at a time.'

const projects = [
  {
    title: 'SyntaxTrail 🌐',
    description:
      'A clean and educational web app that provides an overview of different programming languages — built to help developers explore syntax and concepts with ease.',
    tech: ['Vue 3', 'TypeScript', 'TailwindCSS'],
    link: 'https://syntax-trail.vercel.app/',
    image: syntaxTrailImg,
    status: 'Live',
  },
  {
    title: 'Personal Portfolio 💫',
    description:
      'A modern and responsive developer portfolio created with Vue 3 — featuring custom UI animations, smooth transitions, and minimal design.',
    tech: ['Vue 3', 'GSAP', 'TailwindCSS', 'TypeScript'],
    link: '',
    image: portfolioImg,
    status: 'Live',
  },
  {
    title: 'Minimal Rust Kernel ⚙️',
    description:
      'An experimental project developed together with another engineer — building a minimalist kernel in Rust to explore OS fundamentals and memory management.',
    tech: ['Rust', 'x86', 'Low-Level Systems'],
    link: '',
    image: 'https://www.rust-lang.org/static/images/rust-logo-blk.svg',
    status: 'In Development',
  },
]
</script>

<template>
  <section class="relative isolate w-full overflow-hidden min-h-screen">
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
    <div class="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <!-- Header -->
      <header class="text-center mb-12">
        <h1 class="text-3xl md:text-5xl font-bold text-white tracking-tight mt-15 mb-10">
          {{ heading }}
        </h1>
        <p class="mt-4 text-white/80 max-w-2xl mx-auto text-sm md:text-base mb-10">
          {{ intro }}
        </p>
      </header>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          class="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 flex flex-col transition transform hover:-translate-y-2 hover:border-blue-400/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
        >
          <!-- Bild -->
          <div class="overflow-hidden rounded-xl mb-4">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-40 object-contain transition duration-300 group-hover:scale-105"
            />
          </div>

          <!-- Text -->
          <h3 class="text-lg font-semibold text-white mb-2">
            {{ project.title }}
          </h3>
          <p class="text-white/80 text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>

          <!-- Tech Tags -->
          <div class="flex flex-wrap gap-2 mb-4">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/80"
            >
              {{ tech }}
            </span>
          </div>

          <!-- Status + Link -->
          <div class="mt-auto flex justify-between items-center text-sm">
            <span
              :class="[
                'px-3 py-1 rounded-full font-medium',
                project.status === 'Live'
                  ? 'bg-green-400/10 text-green-300 border border-green-300/30'
                  : project.status === 'In Development'
                    ? 'bg-yellow-400/10 text-yellow-300 border border-yellow-300/30'
                    : 'bg-blue-400/10 text-blue-300 border border-blue-300/30',
              ]"
            >
              {{ project.status }}
            </span>

            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              rel="noopener noreferrer"
              class="text-blue-300 hover:text-blue-400 transition flex items-center gap-1"
            >
              Visit →
            </a>
            <span v-else class="text-white/40 italic">Coming soon</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
section {
  background: transparent;
}

img {
  mix-blend-mode: lighten;
}

@media (max-width: 768px) {
  h1 {
    font-size: 1.9rem;
  }
}
</style>
