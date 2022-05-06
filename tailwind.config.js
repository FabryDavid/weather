module.exports = {
  mode: 'jit',
  important: true,
  content: [
    './src/**/*.{html,ts}'
  ],
  purge: {
    enabled: false
  },
  theme: {
    extend: {}
  },
  plugins: []
}
