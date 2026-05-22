<script setup lang="ts">
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://miilli.org'

useSeoMeta({
  title: 'Miilli.org | Marketing that drives growth',
  description: 'Miilli.org is a digital marketing agency focused on performance marketing, strategy, and content campaigns that scale brands.',
  ogTitle: 'Miilli.org | Marketing that drives growth',
  ogDescription: 'Scale your brand with performance campaigns, strategic content, and measurable growth systems.',
  ogType: 'website',
  ogUrl: siteUrl,
  ogSiteName: 'Miilli.org',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Miilli.org | Digital Marketing Agency',
  twitterDescription: 'Performance marketing, content strategy and campaigns designed to drive growth.',
  robots: 'index, follow'
})
</script>

<template>
  <main class="page-shell">
    <a
      href="#contact"
      class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2 focus:text-white"
    >
      Skip to contact form
    </a>

    <SiteHeader />
    <HeroSection />
    <ServicesSection />
    <WhyMiilliSection />
    <ResultsSection />
    <CtaSection />
    <ContactSection />
    <SiteFooter />
  </main>
</template>
