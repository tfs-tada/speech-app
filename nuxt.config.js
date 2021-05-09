export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'speech-app',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/speech/favicon.ico' }
		],
	},
	generate: {
		dir: 'speech'
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
		// https://go.nuxtjs.dev/pwa
		'@nuxtjs/pwa',
	],

	// PWA module configuration: https://go.nuxtjs.dev/pwa
	pwa: {
		manifest: {
			name: 'speech-app',
			title: 'speech-app',
			lang: 'ja',
			start_url: '/',
			scope: '/'
		}
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
