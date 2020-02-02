export default {
  srcDir: 'src/',
  buildModules: [
    ['@nuxtjs/google-analytics', {
      id: 'UA-78070436-7'
    }]
  ],
  head: {
    meta: [
      { charset: 'utf-8' },
      { hid: 'description', name: 'description', content: 'javascript port of automatic_insurrection' },
      { title: 'Automatic Insurrection js'}
    ]
  }
}