<script setup lang="ts">
const { t, tm } = useI18n()

const services = computed(() => [
  {
    icon: 'i-lucide-megaphone',
    title: t('services.items.performance.title'),
    points: tm('services.items.performance.points') as string[]
  },
  {
    icon: 'i-lucide-instagram',
    title: t('services.items.social.title'),
    points: tm('services.items.social.points') as string[]
  },
  {
    icon: 'i-lucide-compass',
    title: t('services.items.brand.title'),
    points: tm('services.items.brand.points') as string[]
  },
  {
    icon: 'i-lucide-pen-square',
    title: t('services.items.content.title'),
    points: tm('services.items.content.points') as string[]
  },
  {
    icon: 'i-lucide-line-chart',
    title: t('services.items.seo.title'),
    points: tm('services.items.seo.points') as string[]
  }
])
</script>

<template>
  <FadeInSection
    id="services"
    class="section-space"
  >
    <div class="container-section space-y-12">
      <SectionHeading
        :eyebrow="t('services.eyebrow')"
        :title="t('services.title')"
        :description="t('services.description')"
      />

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="service in services"
          :key="service.title"
          class="premium-card rounded-2xl"
        >
          <template #header>
            <div class="flex items-center gap-3">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <UIcon
                  :name="service.icon"
                  class="h-5 w-5"
                />
              </div>
              <h3 class="text-lg font-semibold text-slate-900">
                {{ service.title }}
              </h3>
            </div>
          </template>

          <ul class="space-y-2 text-sm text-slate-600">
            <li
              v-for="point in service.points"
              :key="point"
              class="flex items-start gap-2"
            >
              <UIcon
                name="i-lucide-check"
                class="mt-0.5 h-4 w-4 text-blue-500"
              />
              <span>{{ point }}</span>
            </li>
          </ul>
        </UCard>
      </div>
    </div>
  </FadeInSection>
</template>
