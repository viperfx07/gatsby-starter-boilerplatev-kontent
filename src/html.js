/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import PropTypes from 'prop-types'

export default function HTML(props) {
	return (
		<html {...props.htmlAttributes}>
			<head>
				<meta charSet="utf-8" />
				<meta httpEquiv="x-ua-compatible" content="ie=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1, shrink-to-fit=no"
				/>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com/"
					crossOrigin="true"
				/>
				<link
					rel="dns-prefetc"
					href="https://fonts.googleapis.com/"
					crossOrigin="true"
				/>
				<link
					rel="preload"
					href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i|Poppins:400,400i,700,700i&display=swap"
				/>
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,600,600i,700,700i|Poppins:400,400i,700,700i&display=swap"
				/>
				{props.headComponents}
			</head>
			<body {...props.bodyAttributes}>
				{props.preBodyComponents}
				<noscript key="noscript" id="gatsby-noscript">
					This app works best with JavaScript enabled.
				</noscript>
				<div
					key="body"
					id="___gatsby"
					dangerouslySetInnerHTML={{ __html: props.body }}
				/>
				{props.postBodyComponents}
			</body>
		</html>
	)
}

HTML.propTypes = {
	htmlAttributes: PropTypes.object,
	headComponents: PropTypes.array,
	bodyAttributes: PropTypes.object,
	preBodyComponents: PropTypes.array,
	body: PropTypes.string,
	postBodyComponents: PropTypes.array,
}
