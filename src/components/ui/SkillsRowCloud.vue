<script setup lang="ts">
import { computed } from 'vue'

type SkillItem = {
  href: string
  src: string
  alt: string
  title?: string
}

interface Props {
  items: SkillItem[]
  iconSize?: number | string
  gap?: number | string
  floatAmplitude?: number
  floatDuration?: number
  extraMargin?: string
}

const props = withDefaults(defineProps<Props>(), {
  iconSize: 'clamp(40px, 8vw, 64px)',
  gap: 'clamp(8px, 2vw, 18px)',
  floatAmplitude: 8,
  floatDuration: 5,
  extraMargin: '6px',
})

const delays = computed(() => props.items.map((_, i) => ((i * 0.33) % 3) + 0.1))

const iconSizeCss = computed(() =>
  typeof props.iconSize === 'number' ? `${props.iconSize}px` : props.iconSize,
)
const gapCss = computed(() => (typeof props.gap === 'number' ? `${props.gap}px` : props.gap))
</script>

<template>
  <section class="w-full">
    <div class="mx-auto flex flex-wrap items-center justify-center" :style="{ gap: gapCss }">
      <a
        v-for="(it, i) in items"
        :key="it.alt + i"
        :href="it.href"
        target="_blank"
        rel="noreferrer"
        class="group relative inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] m-1.5"
        :style="{
          width: `calc(${iconSizeCss} + 24px)`,
          height: `calc(${iconSizeCss} + 24px)`,
          margin: extraMargin,
          animation: `floatY var(--dur, ${floatDuration}s) ease-in-out infinite`,
          animationDelay: `${delays[i]}s`,
          '--amp': `${(floatAmplitude * (0.8 + (i % 5) * 0.07)).toFixed(2)}px`,
        }"
        :title="it.title || it.alt"
        aria-label="Open skill website"
      >
        <img
          :src="it.src"
          :alt="it.alt"
          loading="lazy"
          class="select-none object-contain transition-transform duration-300 group-hover:scale-110"
          :style="{ width: iconSizeCss, height: iconSizeCss }"
          draggable="false"
        />

        <!-- Label -->
        <span
          class="pointer-events-none absolute left-1/2 top-[calc(100%+8px)] -translate-x-1/2 whitespace-nowrap rounded-md bg-black/70 px-2 py-1 text-[11px] font-medium text-white opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100"
        >
          {{ it.alt }}
        </span>
      </a>
    </div>
  </section>
</template>

<style scoped>
@keyframes floatY {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(calc(var(--amp, 8px) * -1));
  }
  100% {
    transform: translateY(0);
  }
}

@media (max-width: 420px) {
  a {
    border-radius: 14px;
  }
}
</style>
