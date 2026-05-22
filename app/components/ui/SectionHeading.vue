<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}

withDefaults(defineProps<Props>(), {
  eyebrow: '',
  description: '',
  center: false
})
</script>

<template>
  <div :class="center ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'">
    <p
      v-if="eyebrow"
      class="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-600"
    >
      {{ eyebrow }}
    </p>

    <h2 class="hero-title text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
      {{ title }}
    </h2>

    <p
      v-if="description"
      class="mt-4 text-base leading-7 text-slate-600 sm:text-lg"
    >
      {{ description }}
    </p>
  </div>
</template>
