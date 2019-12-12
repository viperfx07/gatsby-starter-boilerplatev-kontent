import React from 'react'
import PropTypes from 'prop-types'

import Img from '@/components/image'
import TRANSPARENT_PNG from '@/constants/'

function kontentImage({ children, childrenSources, ...props }) {
	const { image, tag, childImgClass, sources, isNotLazy, isNotLqIp } = props

	const getPictureSourceTags = () => {
		if (!image || !sources) return []

		const { url } = image

		return sources.map(source => ({
			...source,
			srcset: source.srcset.map(set => `${url}${set}`),
		}))
	}

	const pictureSourceTags = getPictureSourceTags()

	return image?.url ? (
		<Img
			src={image.url}
			lqipSrc={!isNotLqIp ? `${image.url}?fm=jpg&w=50` : TRANSPARENT_PNG}
			alt={image.description || ''}
			tag={tag}
			childImgClass={childImgClass}
			isNotLazy={isNotLazy}
		>
			{children}
			{childrenSources && tag === 'picture' ? (
				childrenSources
			) : (
				<>
					{pictureSourceTags.map(ps => (
						<source
							key={ps.type + ps.srcset}
							type={ps.type}
							data-srcset={ps.srcset}
						/>
					))}
				</>
			)}
		</Img>
	) : null
}

kontentImage.defaultProps = {
	tag: 'picture',
	childImgClass: '',
	sources: undefined,
	children: undefined,
	childrenSources: undefined,
	isNotLazy: false,
	isNotLqIp: false,
}

kontentImage.propTypes = {
	image: PropTypes.objectOf(PropTypes.object).isRequired,
	tag: PropTypes.string,
	childImgClass: PropTypes.string,
	sources: PropTypes.arrayOf(PropTypes.object),
	isNotLazy: PropTypes.bool,
	isNotLqIp: PropTypes.bool,
	children: PropTypes.node,
	childrenSources: PropTypes.node,
}

export default kontentImage
