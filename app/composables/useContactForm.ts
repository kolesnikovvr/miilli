export interface ContactFormState {
  name: string
  email: string
  company: string
  message: string
  website: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  company?: string
  message?: string
}

export const useContactForm = () => {
  const form = reactive<ContactFormState>({
    name: '',
    email: '',
    company: '',
    message: '',
    website: ''
  })

  const errors = reactive<ContactFormErrors>({})
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const submitError = ref('')

  const clearStatus = () => {
    isSuccess.value = false
    submitError.value = ''
  }

  const validate = () => {
    errors.name = form.name.trim().length >= 2 ? '' : 'Please enter your name.'
    errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email) ? '' : 'Please enter a valid email.'
    errors.company = form.company.trim().length >= 2 ? '' : 'Please enter your company.'
    errors.message = form.message.trim().length >= 10 ? '' : 'Message should be at least 10 characters.'

    return !errors.name && !errors.email && !errors.company && !errors.message
  }

  const resetForm = () => {
    form.name = ''
    form.email = ''
    form.company = ''
    form.message = ''
    form.website = ''
  }

  const submit = async () => {
    clearStatus()

    if (!validate()) {
      return false
    }

    isSubmitting.value = true

    try {
      await $fetch('/api/contact', {
        method: 'POST',
        body: {
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          website: form.website
        }
      })

      isSuccess.value = true
      resetForm()
      return true
    } catch (error) {
      const errorWithData = error as { data?: { statusMessage?: string }, message?: string }
      submitError.value = errorWithData?.data?.statusMessage || errorWithData?.message || 'Unable to submit your request right now.'
      return false
    } finally {
      isSubmitting.value = false
    }
  }

  return {
    form,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    clearStatus,
    submit
  }
}
