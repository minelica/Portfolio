<script setup lang="ts">
import SkillsRowCloud from '@/components/ui/SkillsRowCloud.vue'
import ShinyText from '@/components/bits/ShinyText/ShinyText.vue'
import Hyperspeed from '@/components/bits/Hyperspeed/Hyperspeed.vue'
import { hyperspeedPresets } from '@/components/bits/Hyperspeed/HyperspeedPresets'
import { ref } from 'vue'

const effectOptions = ref(hyperspeedPresets.one)

const skills = [
  {
    href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/csharp-colored.svg',
    alt: 'C#',
  },
  {
    href: 'https://www.typescriptlang.org/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg',
    alt: 'TypeScript',
  },
  {
    href: 'https://git-scm.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
    alt: 'Git',
  },
  {
    href: 'https://go.dev/doc/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/go-colored.svg',
    alt: 'Go',
  },
  {
    href: 'https://dart.dev/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg',
    alt: 'Dart',
  },
  {
    href: 'https://www.oracle.com/java/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg',
    alt: 'Java',
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
    alt: 'JavaScript',
  },
  {
    href: 'https://kotlinlang.org/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/kotlin-colored.svg',
    alt: 'Kotlin',
  },
  {
    href: 'https://www.php.net/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg',
    alt: 'PHP',
  },
  {
    href: 'https://www.python.org/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
    alt: 'Python',
  },
  {
    href: 'https://www.gnu.org/software/bash/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/gnubash.svg',
    alt: 'GNU Bash',
  },
  {
    href: 'https://code.visualstudio.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg',
    alt: 'VS Code',
  },
  {
    href: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
    alt: 'HTML5',
  },
  {
    href: 'https://vitejs.dev/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg',
    alt: 'Vite',
  },
  {
    href: 'https://vuejs.org/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg',
    alt: 'Vue',
  },
  {
    href: 'https://angular.io/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/angularjs-colored.svg',
    alt: 'Angular',
  },
  {
    href: 'https://www.w3.org/TR/CSS/#css',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
    alt: 'CSS3',
  },
  {
    href: 'https://sass-lang.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg',
    alt: 'Sass',
  },
  {
    href: 'https://tailwindcss.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg',
    alt: 'TailwindCSS',
  },
  {
    href: 'https://nodejs.org/en/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
    alt: 'NodeJS',
  },
  {
    href: 'https://www.mysql.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
    alt: 'MySQL',
  },
  {
    href: 'https://www.postgresql.org/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg',
    alt: 'PostgreSQL',
  },
  {
    href: 'https://www.figma.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg',
    alt: 'Figma',
  },
  {
    href: 'https://www.docker.com/',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg',
    alt: 'Docker',
  },
  {
    href: 'https://www.linux.org',
    src: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/linux-colored.svg',
    alt: 'Linux',
  },
  {
    href: 'https://www.postman.com/',
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postman/postman-original.svg',
    alt: 'Postman',
  },
]
</script>

<template>
  <section class="relative w-full min-h-[600px] flex items-center overflow-hidden">
    <!-- Hintergrund -->
    <div class="hyperspeed-container absolute inset-0 w-full h-full z-0 pointer-events-none">
      <Hyperspeed :effect-options="effectOptions" />
    </div>

    <!-- Inhalt -->
    <div class="relative z-10 mx-auto max-w-6xl px-6 w-full py-20">
      <!-- Headline + Subline (nicht interaktiv) -->
      <div class="text-center text-white pointer-events-none">
        <ShinyText text="Technologies That Power My Work" :speed="3" class="hero-shiny" />
        <p class="skills-blur mx-auto">
          A versatile stack of languages, frameworks, and tools ensures every project is efficient,
          scalable, and future-ready.
        </p>
      </div>

      <!-- Logo-Cloud (interaktiv!) -->
      <div class="mt-10 pointer-events-auto">
        <SkillsRowCloud
          :items="skills"
          iconSize="clamp(44px, 7vw, 72px)"
          gap="clamp(10px, 2.2vw, 22px)"
          :floatAmplitude="10"
          :floatDuration="5"
          extraMargin="8px"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-shiny {
  font-weight: 700;
  font-size: clamp(1.5rem, 3.5vw, 2.5rem);
}

.skills-blur {
  margin-top: 0.75rem;
  max-width: 42rem;
  line-height: 1.6;
  font-size: clamp(0.95rem, 1.8vw, 1.125rem);
  color: white;
  text-align: center;
}

.hyperspeed-container {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>
