function requireAll(requireContext) {
	return requireContext.keys().map(requireContext)
}

const svgIcons = require.context('@/icons', false, /.*\.svg$/)

export default () => requireAll(svgIcons)
