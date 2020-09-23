const purgecss = require('@fullhuman/postcss-purgecss')

module.exports = {
	plugins: [
		require('postcss-import'),
		require('postcss-css-variables'),
		purgecss({
			content: ['./_site/*.html'],
			safelist: {
				deep: ['.hero'],
				keyframes: ['burns']
			},
			keyframes: true
		}),
		require('autoprefixer'),
		require('cssnano'),
	]
}