<script setup lang="ts">
const services = [
  {
    icon: 'i-lucide-megaphone',
    title: 'Performance Marketing',
    points: ['Meta Ads', 'Google Ads', 'Lead generation', 'Conversion optimization']
  },
  {
    icon: 'i-lucide-instagram',
    title: 'Social Media Management',
    points: ['Content planning', 'Posting strategy', 'Community management']
  },
  {
    icon: 'i-lucide-compass',
    title: 'Branding & Strategy',
    points: ['Brand positioning', 'Marketing strategy', 'Competitor analysis']
  },
  {
    icon: 'i-lucide-pen-square',
    title: 'Content Creation',
    points: ['Ad creatives', 'Copywriting', 'Video content', 'Design assets']
  },
  {
    icon: 'i-lucide-line-chart',
    title: 'SEO & Analytics',
    points: ['SEO optimization', 'Reporting', 'Data analytics', 'Tracking setup']
  }
]
</script>

<template>
  <FadeInSection
    id="services"
    class="section-space"
  >
    <div class="container-section space-y-12">
      <SectionHeading
        eyebrow="Services"
        title="Integrated growth services for modern brands"
        description="A focused mix of paid acquisition, brand strategy, and content execution designed to move key metrics fast."
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
