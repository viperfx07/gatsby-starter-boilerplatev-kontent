import React from 'react'
import PropTypes from 'prop-types'
import getAllIcons from '@/utils/getallicons'

getAllIcons()

function Icon({ name, className, width, height }) {
	return (
		<svg
			fill="currentColor"
			className={className}
			width={width}
			height={height}
		>
			<use xlinkHref={`#${name}`} />
		</svg>
	)
}

Icon.propTypes = {
	name: PropTypes.string.isRequired,
	className: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
}

Icon.defaultProps = {
	className: '',
	width: 24,
	height: 24,
}

export default Icon
