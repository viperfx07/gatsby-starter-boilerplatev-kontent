module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	parser: 'babel-eslint',
	settings: {
		'import/resolver': {
			alias: {
				map: [['@', './src/']],
				extensions: ['.ts', '.js', '.jsx', '.json'],
			},
		},
	},
	extends: ['airbnb', 'prettier', 'prettier/react'],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'no-console': 'off',
		camelcase: 'off',
		'comma-dangle': ['off', 'always'],
		'react/no-danger': 'off',
	},
}
