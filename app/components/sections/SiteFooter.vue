<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const contactEmail = computed(() => config.public.contactEmail || 'office@miili.org')
</script>

<template>
  <footer class="pb-8 pt-4">
    <div class="container-section">
      <div class="flex flex-col gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
        <p class="flex flex-wrap items-center gap-x-2 gap-y-1">
          <span>Miilli.org</span>
          <span aria-hidden="true">•</span>
          <a
            :href="`mailto:${contactEmail}`"
            class="transition-colors duration-300 hover:text-blue-600"
          >
            {{ contactEmail }}
          </a>
        </p>
        <p class="text-slate-500">
          {{ t('footer.registeredOffice') }}
        </p>
        <p>
          © {{ new Date().getFullYear() }} Miilli.org. {{ t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>
