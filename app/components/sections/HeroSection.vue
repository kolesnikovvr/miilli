<template>
  <FadeInSection
    id="hero"
    class="relative pt-24 sm:pt-28"
  >
    <div class="container-section">
      <div class="relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white/85 px-6 py-16 shadow-[0_24px_70px_-38px_rgba(15,23,42,0.45)] sm:px-10 lg:px-14 lg:py-24">
        <div class="grid-glow opacity-50" />
        <div class="glow-orb -left-20 top-6 h-48 w-48 bg-sky-300/45" />
        <div class="glow-orb -right-16 bottom-3 h-56 w-56 bg-blue-400/25" />

        <div class="relative z-10 mx-auto flex max-w-4xl flex-col items-start">
          <a
            href="#hero"
            class="mb-6 inline-flex items-center"
            aria-label="Miilli.org home"
          >
            <img
              src="/Miilli.svg"
              alt="Miilli.org logo"
              width="248"
              height="auto"
              class=" w-[248px]"
            >
          </a>

          <p class="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
            Miilli.org Digital Marketing Agency
          </p>

          <h1 class="hero-title max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Marketing that drives growth
          </h1>

          <p class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            We help brands scale with performance marketing, content strategy and digital campaigns.
          </p>

          <div class="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <UButton
              to="#contact"
              size="xl"
              label="Book a Call"
              color="primary"
              class="justify-center"
            />
            <UButton
              to="#contact"
              size="xl"
              label="Get Proposal"
              color="neutral"
              variant="outline"
              class="justify-center border-slate-300"
            />
          </div>
        </div>
      </div>
    </div>
  </FadeInSection>
</template>
