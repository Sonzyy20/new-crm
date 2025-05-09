export default defineNuxtConfig({
  devtools: { enabled: true },
  components: true,
  modules:[
    '@nuxt/ui',
    '@nuxt/image', 
    'shadcn-nuxt',
    '@nuxtjs/tailwindcss',
    [
      '@nuxtjs/google-fonts',
      {
        families:{
          Lato: {
            wght: [300, 400, 700],
            ital:[300]
          }
        }
      }
    ],
    'nuxt-icon',
    '@pinia/nuxt',
    [

      '@vee-validate/nuxt',
      {
        autoImports: true,
      }
    ]
    ],
  shadcn: { 
   
    prefix: 'Ui',
   
    componentDir: './components/ui/'
  },
  pinia: {
    storesDirs: ['./store/**']
  },
})