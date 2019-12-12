const path = require('path')
const magicImporter = require('node-sass-magic-importer')

module.exports = {
	siteMetadata: {
		title: `Gatsby Default Starter`,
		description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
		author: `@gatsbyjs`,
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-eslint',
			options: {
				test: /\.js$|\.jsx$/,
				exclude: /(node_modules|.cache|public)/,
				options: {
					emitWarning: true,
					failOnError: false,
				},
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@': path.resolve(__dirname, 'src'),
					'@@': path.resolve(__dirname, 'src'),
					// the ScrollMagic alias needed for debug indicators when running define(['ScrollMagic'], factory)
					ScrollMagic:
						'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js',
					TweenMax: 'gsap/umd/TweenMax.js',
					TweenLite: 'gsap/umd/TweenLite.js',
					TimelineMax: 'gsap/umd/TimelineMax.js',
				},
			},
		},
		{
			resolve: `@kentico/gatsby-source-kontent`,
			options: {
				deliveryClientConfig: {
					// Configuration object
					projectId: `cf2f7b02-5082-0023-1bf1-f82cbf2d46bb`,
					typeResolvers: [],
				},
				languageCodenames: [
					// example configuration
					`default`, // default language
				],
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
			},
		},
		{
			resolve: `gatsby-plugin-sass`,
			options: {
				// sass-loader v7.x
				data: `
					@import "./src/styles/01_settings/**/*.scss";
					@import "./src/styles/02_tools/**/*.scss";
				`,
				importer: magicImporter(),

				// sass-loader v8.x
				// prependData: `
				// 	@import "./styles/01_settings/**/*.scss";
				// 	@import "./styles/02_tools/**/*.scss";
				// `,
				// sassOptions: {
				// 	importer: magicImporter(),
				// },
			},
		},
		{
			resolve: `gatsby-plugin-purgecss`,
			options: {
				printRejected: true, // Print removed selectors and processed file names
				// develop: true, // Enable while using `gatsby develop`
				// tailwind: true, // Enable tailwindcss support
				// whitelist: ['whitelist'], // Don't remove this selector
				// ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
				// purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
			},
		},
		'gatsby-plugin-svg-sprite',
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
	],
}
