import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import './image.scss'

const Image = ({
	tag,
	src,
	alt,
	childImgClass,
	children,
	isNotLazy,
	lqipSrc,
}) => {
	const Comp = tag

	let srcAttr
	if (tag !== 'picture') {
		srcAttr = isNotLazy ? src : lqipSrc || undefined
	}

	useEffect(() => {
		import('picturefill')
		import('lazysizes/plugins/parent-fit/ls.parent-fit')
		import('lazysizes/plugins/attrchange/ls.attrchange')
		import('lazysizes/plugins/respimg/ls.respimg')
		import('lazysizes/plugins/unveilhooks/ls.unveilhooks')
		import('lazysizes')
	})

	return (
		<Comp
			src={srcAttr}
			data-src={tag === 'picture' ? undefined : src}
			loading={tag === 'picture' ? undefined : 'lazy'}
			className={
				tag === 'picture'
					? undefined
					: `lazyload ${lqipSrc ? 'blur-up' : ''}`.trim()
			}
		>
			{children}
			{tag === 'picture' && (
				<img
					src={isNotLazy ? src : lqipSrc || undefined}
					data-src={src}
					alt={alt}
					className={`lazyload ${childImgClass} ${
						lqipSrc ? 'blur-up' : ''
					}`.trim()}
					loading="lazy"
					data-sizes="auto"
				/>
			)}
		</Comp>
	)
}

Image.defaultProps = {
	tag: 'picture',
	lqipSrc: '',
	alt: '',
	childImgClass: '',
	children: null,
	isNotLazy: false,
}

Image.propTypes = {
	tag: PropTypes.string,
	src: PropTypes.string.isRequired,
	lqipSrc: PropTypes.string,
	alt: PropTypes.string,
	childImgClass: PropTypes.string,
	children: PropTypes.node,
	isNotLazy: PropTypes.bool,
}

export default Image
