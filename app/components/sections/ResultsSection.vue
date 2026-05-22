<script setup lang="ts">
const { t } = useI18n()

const stats = computed(() => [
  { value: '+320%', label: 'ROAS' },
  { value: '1M+', label: t('results.stats.impressions') },
  { value: '50+', label: t('results.stats.campaigns') },
  { value: 'Global', label: t('results.stats.clients') }
])
</script>

<template>
  <FadeInSection
    id="results"
    class="section-space"
  >
    <div class="container-section">
      <div class="rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 via-white to-sky-100 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <SectionHeading
          :eyebrow="t('results.eyebrow')"
          :title="t('results.title')"
          :description="t('results.description')"
        />

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <UCard
            v-for="stat in stats"
            :key="stat.label"
            class="premium-card rounded-2xl border border-blue-100/90 bg-white/90 text-center"
          >
            <p class="hero-title text-4xl font-extrabold text-slate-900">
              {{ stat.value }}
            </p>
            <p class="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
              {{ stat.label }}
            </p>
          </UCard>
        </div>
      </div>
    </div>
  </FadeInSection>
</template>
