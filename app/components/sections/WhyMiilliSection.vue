<script setup lang="ts">
const { t } = useI18n()

const reasons = computed(() => [
  {
    icon: 'i-lucide-bar-chart-3',
    title: t('why.items.data.title'),
    description: t('why.items.data.description')
  },
  {
    icon: 'i-lucide-file-check-2',
    title: t('why.items.reporting.title'),
    description: t('why.items.reporting.description')
  },
  {
    icon: 'i-lucide-zap',
    title: t('why.items.speed.title'),
    description: t('why.items.speed.description')
  },
  {
    icon: 'i-lucide-rocket',
    title: t('why.items.startup.title'),
    description: t('why.items.startup.description')
  },
  {
    icon: 'i-lucide-globe-2',
    title: t('why.items.global.title'),
    description: t('why.items.global.description')
  }
])
</script>

<template>
  <FadeInSection
    id="why-miilli"
    class="section-space"
  >
    <div class="container-section space-y-12">
      <SectionHeading
        :eyebrow="t('why.eyebrow')"
        :title="t('why.title')"
        :description="t('why.description')"
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
