<script setup lang="ts">
const { t, locale, setLocale } = useI18n()

const navItems = computed(() => [
  { label: t('header.nav.services'), to: '#services' },
  { label: t('header.nav.why'), to: '#why-miilli' },
  { label: t('header.nav.results'), to: '#results' },
  { label: t('header.nav.contact'), to: '#contact' }
])

const languageOptions = [
  { code: 'en', label: 'EN' },
  { code: 'et', label: 'ET' }
] as const
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
    <div class="container-section">
      <div class="flex h-16 items-center justify-between gap-3">
        <a
          href="#hero"
          class="inline-flex items-center"
          :aria-label="t('header.homeAria')"
        >
          <img
            src="/Miilli.svg"
            :alt="t('hero.logoAlt')"
            width="124"
            height="32"
            class="h-8 w-[124px]"
          >
        </a>

        <nav
          class="hidden items-center gap-6 md:flex"
          :aria-label="t('header.mainNavAria')"
        >
          <a
            v-for="item in navItems"
            :key="item.to"
            :href="item.to"
            class="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
          >
            {{ item.label }}
          </a>
        </nav>

        <div class="flex items-center gap-2">
          <div
            class="flex items-center gap-1 rounded-full border border-slate-200 bg-white/90 p-1"
            :aria-label="t('header.switchLanguageAria')"
          >
            <UButton
              v-for="option in languageOptions"
              :key="option.code"
              :label="option.label"
              size="xs"
              color="neutral"
              :variant="locale === option.code ? 'solid' : 'ghost'"
              class="min-w-10 cursor-pointer justify-center"
              @click="setLocale(option.code)"
            />
          </div>
          <UButton
            to="#contact"
            :label="t('header.cta')"
            size="sm"
            color="primary"
            class="hidden sm:inline-flex"
          />
        </div>
      </div>
    </div>
  </header>
</template>
