<script setup lang="ts">
const reasons = [
  {
    icon: 'i-lucide-bar-chart-3',
    title: 'Data-driven approach',
    description: 'Decisions are built on campaign insights, not assumptions.'
  },
  {
    icon: 'i-lucide-file-check-2',
    title: 'Transparent reporting',
    description: 'Clear weekly updates and real-time visibility on performance.'
  },
  {
    icon: 'i-lucide-zap',
    title: 'Fast execution',
    description: 'Quick iteration cycles to test, learn, and scale efficiently.'
  },
  {
    icon: 'i-lucide-rocket',
    title: 'Startup-friendly',
    description: 'Lean processes and practical strategy built for growing teams.'
  },
  {
    icon: 'i-lucide-globe-2',
    title: 'International experience',
    description: 'Campaign execution across diverse markets and audiences.'
  }
]
</script>

<template>
  <FadeInSection
    id="why-miilli"
    class="section-space"
  >
    <div class="container-section space-y-12">
      <SectionHeading
        eyebrow="Why Miilli"
        title="Built for teams that need outcomes, not noise"
        description="We combine strategic clarity with practical execution, helping brands move from experiments to scalable growth channels."
      />

      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <UCard
          v-for="reason in reasons"
          :key="reason.title"
          class="premium-card rounded-2xl"
        >
          <div class="space-y-4">
            <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
              <UIcon
                :name="reason.icon"
                class="h-5 w-5"
              />
            </div>
            <h3 class="text-base font-semibold text-slate-900">
              {{ reason.title }}
            </h3>
            <p class="text-sm leading-6 text-slate-600">
              {{ reason.description }}
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </FadeInSection>
</template>
