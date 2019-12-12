import React from 'react'
import PropTypes from 'prop-types'

import Header from '@/components/header'
import Footer from '@/components/footer'
import queryMasterPage from '@/queries/queryMasterPage'

const Layout = ({ children, className }) => {
	const { allKontentItemMasterPage } = queryMasterPage()

	return (
		<div className={`u-df u-fxdc u-mih100vh ${className}`}>
			<Header
				masterpageData={allKontentItemMasterPage.edges[0].node.elements}
			/>
			<main className="u-fx1 main">{children}</main>
			<Footer
				masterpageData={allKontentItemMasterPage.edges[0].node.elements}
			/>
		</div>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
}

Layout.defaultProps = {
	className: '',
}

export default Layout
