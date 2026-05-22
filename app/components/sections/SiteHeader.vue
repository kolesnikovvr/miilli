<script setup lang="ts">
const navItems = [
  { label: 'Services', to: '#services' },
  { label: 'Why Miilli', to: '#why-miilli' },
  { label: 'Results', to: '#results' },
  { label: 'Contact', to: '#contact' }
]
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur-md">
    <div class="container-section">
      <div class="flex h-16 items-center justify-between gap-3">
        <a
          href="#hero"
          class="inline-flex items-center"
          aria-label="Miilli.org home"
        >
          <img
            src="/Miilli.svg"
            alt="Miilli.org logo"
            width="124"
            height="32"
            class="h-8 w-[124px]"
          >
        </a>

        <nav
          class="hidden items-center gap-6 md:flex"
          aria-label="Main navigation"
        >
          <a
            v-for="item in navItems"
            :key="item.to"
            :href="item.to"
            class="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
          >
            {{ item.label }}
          </a>
        </nav>

        <UButton
          to="#contact"
          label="Book a Call"
          size="sm"
          color="primary"
          class="hidden sm:inline-flex"
        />
      </div>
    </div>
  </header>
</template>
