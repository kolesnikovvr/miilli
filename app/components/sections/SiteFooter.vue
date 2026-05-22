<script setup lang="ts">
const config = useRuntimeConfig()
const contactEmail = computed(() => config.public.contactEmail || 'hello@miilli.org')
const linkedinUrl = computed(() => config.public.linkedinUrl || 'https://www.linkedin.com/company/miilli')
</script>

<template>
  <footer class="pb-8 pt-4">
    <div class="container-section">
      <div class="flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Miilli.org</span>
          <span aria-hidden="true">•</span>
          <a
            :href="`mailto:${contactEmail}`"
            class="transition-colors duration-300 hover:text-blue-600"
          >
            {{ contactEmail }}
          </a>
          <span aria-hidden="true">•</span>
          <a
            :href="linkedinUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="transition-colors duration-300 hover:text-blue-600"
          >
            LinkedIn
          </a>
        </p>
        <p>
          © {{ new Date().getFullYear() }} Miilli.org. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
