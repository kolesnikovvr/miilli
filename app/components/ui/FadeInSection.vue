<script setup lang="ts">
const root = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (!root.value) {
    return
  }

  const localObserver = new IntersectionObserver((entries) => {
    const [entry] = entries

    if (!entry?.isIntersecting) {
      return
    }

    isVisible.value = true
    localObserver.disconnect()
  }, { threshold: 0.2 })

  observer = localObserver
  localObserver.observe(root.value)
})

onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section
    ref="root"
    class="fade-reveal"
    :class="{ 'is-visible': isVisible }"
  >
    <slot />
  </section>
</template>
