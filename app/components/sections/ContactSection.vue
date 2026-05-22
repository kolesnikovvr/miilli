<script setup lang="ts">
const config = useRuntimeConfig()
const contactEmail = computed(() => config.public.contactEmail || 'hello@miilli.org')
const linkedinUrl = computed(() => config.public.linkedinUrl || 'https://www.linkedin.com/company/miilli')
const formFieldUi = {
  label: 'text-slate-600'
}

const {
  form,
  errors,
  isSubmitting,
  isSuccess,
  submitError,
  clearStatus,
  submit
} = useContactForm()

const onSubmit = async () => {
  await submit()
}

watch([() => form.name, () => form.email, () => form.company, () => form.message], () => {
  clearStatus()
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
            eyebrow="Contact"
            title="Start your next growth sprint with Miilli"
            description="Share your goals and current challenges. We will reply with a tailored growth plan and channel recommendations."
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
            <p class="flex items-center gap-2">
              <UIcon
                name="i-lucide-linkedin"
                class="h-4 w-4 text-blue-600"
              />
              <a
                :href="linkedinUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="transition-colors duration-300 hover:text-blue-600"
              >
                LinkedIn
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
            label="Name"
            name="name"
            :error="errors.name"
            :ui="formFieldUi"
          >
            <UInput
              v-model="form.name"
              placeholder="Your full name"
              autocomplete="name"
              size="xl"
              class="w-full"
              required
              aria-required="true"
            />
          </UFormField>

          <UFormField
            label="Email"
            name="email"
            :error="errors.email"
            :ui="formFieldUi"
          >
            <UInput
              v-model="form.email"
              type="email"
              placeholder="you@company.com"
              autocomplete="email"
              size="xl"
              class="w-full"
              required
              aria-required="true"
            />
          </UFormField>

          <UFormField
            label="Company"
            name="company"
            :error="errors.company"
            :ui="formFieldUi"
          >
            <UInput
              v-model="form.company"
              placeholder="Company name"
              autocomplete="organization"
              size="xl"
              class="w-full"
              required
              aria-required="true"
            />
          </UFormField>

          <UFormField
            label="Message"
            name="message"
            :error="errors.message"
            :ui="formFieldUi"
          >
            <UTextarea
              v-model="form.message"
              placeholder="Tell us about your business goals and current channels"
              class="w-full"
              :rows="5"
              required
              aria-required="true"
            />
          </UFormField>

          <div class="space-y-3 pt-2">
            <UButton
              type="submit"
              label="Send Message"
              size="xl"
              color="primary"
              class="w-full justify-center sm:w-auto"
              :loading="isSubmitting"
            />

            <p
              v-if="isSuccess"
              class="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700"
            >
              Your message has been sent. We&rsquo;ll get back to you soon.
            </p>

            <p
              v-if="submitError"
              class="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700"
            >
              {{ submitError }}
            </p>
          </div>
        </form>
      </div>
    </div>
  </FadeInSection>
</template>
