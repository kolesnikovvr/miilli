<script setup lang="ts">
const config = useRuntimeConfig()
const { t } = useI18n()
const toast = useToast()
const contactEmail = computed(() => config.public.contactEmail || 'office@miilli.org')
const formFieldUi = {
  label: 'text-slate-600'
}
const hasFailedSubmit = ref(false)

const {
  form,
  errors,
  isSubmitting,
  isSuccess,
  submitError,
  clearStatus,
  submit
} = useContactForm()

const firstValidationError = computed(() => errors.name || errors.email || errors.company || errors.message || '')

const onSubmit = async () => {
  const isSubmitted = await submit()
  hasFailedSubmit.value = !isSubmitted

  if (isSubmitted) {
    toast.add({
      title: t('contact.notifications.successTitle'),
      description: t('contact.success'),
      color: 'success',
      icon: 'i-lucide-circle-check'
    })
    return
  }

  const errorMessage = submitError.value || firstValidationError.value

  if (errorMessage) {
    toast.add({
      title: t('contact.notifications.errorTitle'),
      description: errorMessage,
      color: 'error',
      icon: 'i-lucide-circle-alert'
    })
  }
}

watch([() => form.name, () => form.email, () => form.company, () => form.message], () => {
  clearStatus()
  hasFailedSubmit.value = false
})
</script>

<template>
  <FadeInSection
    id="contact"
    class="section-space"
  >
    <div class="container-section">
      <div class="grid gap-10 rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.5)] backdrop-blur-sm sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <SectionHeading
            :eyebrow="t('contact.eyebrow')"
            :title="t('contact.title')"
            :description="t('contact.description')"
          />
          <div class="mt-8 space-y-3 text-sm text-slate-600">
            <p class="flex items-center gap-2">
              <UIcon
                name="i-lucide-mail"
                class="h-4 w-4 text-blue-600"
              />
              <a
                :href="`mailto:${contactEmail}`"
                class="transition-colors duration-300 hover:text-blue-600"
              >
                {{ contactEmail }}
              </a>
            </p>
          </div>
        </div>

        <form
          class="space-y-4"
          novalidate
          @submit.prevent="onSubmit"
        >
          <input
            v-model="form.website"
            type="text"
            name="website"
            autocomplete="off"
            tabindex="-1"
            class="hidden"
            aria-hidden="true"
          >

          <UFormField
            :label="t('contact.form.name')"
            name="name"
            :error="hasFailedSubmit ? errors.name : ''"
            :ui="formFieldUi"
          >
            <UInput
              v-model="form.name"
              :placeholder="t('contact.form.namePlaceholder')"
              autocomplete="name"
              size="xl"
              class="w-full"
              required
              aria-required="true"
            />
          </UFormField>

          <UFormField
            :label="t('contact.form.email')"
            name="email"
            :error="hasFailedSubmit ? errors.email : ''"
            :ui="formFieldUi"
          >
            <UInput
              v-model="form.email"
              type="email"
              :placeholder="t('contact.form.emailPlaceholder')"
              autocomplete="email"
              size="xl"
              class="w-full"
              required
              aria-required="true"
            />
          </UFormField>

          <UFormField
            :label="t('contact.form.company')"
            name="company"
            :error="hasFailedSubmit ? errors.company : ''"
            :ui="formFieldUi"
          >
            <UInput
              v-model="form.company"
              :placeholder="t('contact.form.companyPlaceholder')"
              autocomplete="organization"
              size="xl"
              class="w-full"
              required
              aria-required="true"
            />
          </UFormField>

          <UFormField
            :label="t('contact.form.message')"
            name="message"
            :error="hasFailedSubmit ? errors.message : ''"
            :ui="formFieldUi"
          >
            <UTextarea
              v-model="form.message"
              :placeholder="t('contact.form.messagePlaceholder')"
              class="w-full"
              :rows="5"
              required
              aria-required="true"
            />
          </UFormField>

          <div class="space-y-3 pt-2">
            <UButton
              type="submit"
              :label="t('contact.form.send')"
              size="xl"
              color="primary"
              class="w-full justify-center sm:w-auto"
              :loading="isSubmitting"
            />

            <span
              v-if="isSuccess || submitError"
              class="sr-only"
              aria-live="polite"
            />
          </div>
        </form>
      </div>
    </div>
  </FadeInSection>
</template>
