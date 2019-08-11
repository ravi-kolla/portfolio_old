const tailwindcss = require('tailwindcss')

module.exports = {
  plugins: [
	require('postcss-import'),
    require('postcss-easy-import'),
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ]
}