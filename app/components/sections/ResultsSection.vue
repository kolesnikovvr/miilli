<script setup lang="ts">
const stats = [
  { value: '+320%', label: 'ROAS' },
  { value: '1M+', label: 'impressions generated' },
  { value: '50+', label: 'campaigns launched' },
  { value: 'Global', label: 'international clients' }
]
</script>

<template>
  <FadeInSection
    id="results"
    class="section-space"
  >
    <div class="container-section">
      <div class="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-sky-100 px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
        <SectionHeading
          eyebrow="Results"
          title="Performance that compounds over time"
          description="From paid growth to content execution, each campaign is measured against outcomes that matter."
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
