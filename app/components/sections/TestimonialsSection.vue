<script setup lang="ts">
const { t } = useI18n()

const testimonials = computed(() => [
  {
    name: 'Abhilasha Roy',
    role: t('testimonials.items.abhilasha.role'),
    company: 'Taktile',
    quote: t('testimonials.items.abhilasha.quote')
  },
  {
    name: 'Pierre Proner',
    role: t('testimonials.items.pierre.role'),
    company: 'Lawhive',
    quote: t('testimonials.items.pierre.quote')
  },
  {
    name: 'Micaela K.',
    role: t('testimonials.items.micaela.role'),
    company: 'Insurely',
    quote: t('testimonials.items.micaela.quote')
  }
])
</script>

<template>
  <FadeInSection
    id="testimonials"
    class="section-space"
  >
    <div class="container-section space-y-12">
      <SectionHeading
        :eyebrow="t('testimonials.eyebrow')"
        :title="t('testimonials.title')"
        :description="t('testimonials.description')"
      />

      <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <UCard
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="premium-card rounded-2xl border border-slate-200/90 bg-white/90"
        >
          <div class="space-y-5">
            <div class="flex items-center gap-3">
              <img
                :src="`/${testimonial.name}.webp`"
                :alt="t('testimonials.photoAlt', { name: testimonial.name })"
                class="h-12 w-12 rounded-full border border-slate-200 object-cover"
                loading="lazy"
              >
              <div>
                <p class="text-sm font-semibold text-slate-900">
                  {{ testimonial.name }}
                </p>
                <p class="text-xs text-slate-500">
                  {{ testimonial.role }} · {{ testimonial.company }}
                </p>
              </div>
            </div>

            <p class="text-sm leading-6 text-slate-600">
              &ldquo;{{ testimonial.quote }}&rdquo;
            </p>
          </div>
        </UCard>
      </div>
    </div>
  </FadeInSection>
</template>
