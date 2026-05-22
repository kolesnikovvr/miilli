<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://miilli.org'
const { t } = useI18n()

useSeoMeta({
  title: () => t('seo.title'),
  description: () => t('seo.description'),
  ogTitle: () => t('seo.ogTitle'),
  ogDescription: () => t('seo.ogDescription'),
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: 'Miilli.org',
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('seo.twitterTitle'),
  twitterDescription: () => t('seo.twitterDescription'),
  robots: 'index, follow'
})
</script>

<template>
  <main class="page-shell">
    <a
      href="#contact"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
    >
      {{ t('index.skipToContact') }}
    </a>

    <SiteHeader />
    <HeroSection />
    <ServicesSection />
    <WhyMiilliSection />
    <ResultsSection />
    <CtaSection />
    <TestimonialsSection />
    <ContactSection />
    <SiteFooter />
  </main>
</template>
