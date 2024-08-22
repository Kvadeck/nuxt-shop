// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules:
        [
          '@nuxtjs/tailwindcss',
          '@pinia/nuxt',
          ['@vee-validate/nuxt', {
            autoImports: true,
            componentNames: {
              Form: 'VeeForm',
              Field: 'VeeField',
              FieldArray: 'VeeFieldArray',
              ErrorMessage: 'VeeErrorMessage',
            },
          }],
        ],
})
