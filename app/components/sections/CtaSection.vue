<template>
  <FadeInSection
    id="cta"
    class="section-space"
  >
    <div class="container-section">
      <div class="overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 px-6 py-14 text-white shadow-[0_24px_70px_-35px_rgba(15,23,42,0.65)] sm:px-10 lg:px-14">
        <div class="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p class="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
              Ready to scale
            </p>
            <h2 class="hero-title mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let&rsquo;s grow your brand
            </h2>
            <p class="mt-4 max-w-2xl text-slate-300">
              Tell us your targets and current acquisition setup. We will design a channel strategy focused on measurable growth.
            </p>
          </div>

          <UButton
            to="#contact"
            label="Contact Us"
            size="xl"
            color="primary"
            class="justify-center"
          />
        </div>
      </div>
    </div>
  </FadeInSection>
</template>
