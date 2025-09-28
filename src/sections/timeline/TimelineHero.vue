<script setup lang="ts">
import DarkVeil from '@/components/bits/DarkVeil/DarkVeil.vue'

type TimelineItem = {
  title: string
  subtitle?: string
  period?: string
  description?: string
  icon?: string
  tags?: string[]
  linkHref?: string
  linkLabel?: string
}

const heading = 'My Educational and Professional Journey'
const intro =
  'From my first school days in Bosnia to pursuing dual studies in Stuttgart, my path has been shaped by constant growth, curiosity, and the drive to build meaningful software solutions.'

const items: TimelineItem[] = [
  {
    title: 'Bachelor of Science in Business Informatics – DHBW Stuttgart',
    subtitle: 'Stuttgart, Germany',
    period: '2023 – Present',
    description:
      'Pursuing a dual degree that unites business processes with software engineering and data-driven problem solving.',
    icon: '🎓',
  },
  {
    title: 'Software Developer (Dual Student) – ELO Digital Office GmbH',
    subtitle: 'Stuttgart, Germany',
    period: '2023 – Present',
    description:
      'Working as a software developer while combining theory and practice through dual studies. Building scalable, user-centered applications with a modern tech stack.',
    icon: '💻',
  },
  {
    title: 'Business High School "Kaufmännische Schule Stuttgart-Nord"',
    subtitle: 'Stuttgart, Germany',
    period: '2020 – 2023',
    description:
      'Explored economics, management, and IT — building a bridge between technology and business.',
    icon: '💼',
  },
  {
    title: 'Realschule "Rosensteinschule"',
    subtitle: 'Stuttgart, Germany',
    period: '2020 – 2020',
    description: 'Completed an adaptation year to the German education system and culture.',
    icon: '📖',
  },
  {
    title: 'General Gymnasium "JU Gimnazija Velika Kladuša"',
    subtitle: 'Velika Kladuša, Bosnia and Herzegovina',
    period: '2019 – 2020',
    description: 'Focused on academic growth and interdisciplinary learning.',
    icon: '🏫',
  },
  {
    title: 'Elementary School "JU OŠ Crvarevac"',
    subtitle: 'Velika Kladuša, Bosnia and Herzegovina',
    period: '2010 – 2019',
    description:
      'Established a strong academic foundation and developed an early curiosity for logic and technology.',
    icon: '📘',
  },
]
</script>

<template>
  <section class="relative isolate w-full overflow-hidden">
    <!-- DarkVeil-Hintergrund -->
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
      <header class="text-center mb-10">
        <h1 class="text-white font-bold text-3xl md:text-5xl tracking-tight mt-15 mb-10">
          {{ heading }}
        </h1>
        <p v-if="intro" class="mt-4 text-white/80 max-w-2xl mx-auto text-sm md:text-base mb-10">
          {{ intro }}
        </p>
      </header>

      <!-- Timeline -->
      <ol class="relative border-s border-white/10 ps-6 md:ps-8">
        <li v-for="(it, i) in items" :key="i" class="mb-10 ms-4 md:ms-6 group">
          <!-- Marker -->
          <span
            class="absolute -start-3 md:-start-4 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-sm ring-0 group-hover:ring-8 ring-sky-500/10 transition-shadow"
            aria-hidden="true"
          >
            <span v-if="it.icon" class="text-lg leading-none">{{ it.icon }}</span>
            <span
              v-else
              class="h-2.5 w-2.5 rounded-full bg-emerald-400/80 shadow-[0_0_20px_rgba(52,211,153,0.55)]"
            />
          </span>

          <!-- Card -->
          <article
            class="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 md:p-6 text-white transition-transform duration-300 hover:-translate-y-0.5 hover:border-white/20"
          >
            <div class="flex flex-wrap items-start gap-3 md:gap-4 justify-between">
              <div>
                <h3 class="text-base md:text-lg font-semibold leading-6">
                  {{ it.title }}
                </h3>
                <p v-if="it.subtitle" class="text-white/70 text-sm md:text-[0.95rem] mt-1">
                  {{ it.subtitle }}
                </p>
              </div>

              <span
                v-if="it.period"
                class="shrink-0 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80"
              >
                {{ it.period }}
              </span>
            </div>

            <p
              v-if="it.description"
              class="mt-3 text-white/80 text-sm md:text-[0.95rem] leading-relaxed"
            >
              {{ it.description }}
            </p>

            <!-- Tags -->
            <div v-if="it.tags?.length" class="mt-4 flex flex-wrap gap-2">
              <span
                v-for="(t, ti) in it.tags"
                :key="ti"
                class="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
              >
                {{ t }}
              </span>
            </div>

            <!-- Optionaler Link -->
            <div v-if="it.linkHref" class="mt-4">
              <a
                :href="it.linkHref"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm text-white/90 transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-200"
              >
                {{ it.linkLabel || 'View more' }}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M13.5 4.5L21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </article>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped></style>
