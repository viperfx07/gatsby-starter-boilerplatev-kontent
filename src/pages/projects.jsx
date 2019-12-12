import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '@/components/layout'
import KontentImg from '@/components/kontentImage'

const IndexPage = ({ data }) => {
	const { allKontentItemProjectItem } = data
	return (
		<Layout className="u-bgc-secondary2">
			<div className="container">
				<h1 className="h3 u-c-fff">Projects</h1>
				<div className="row u-pyb5">
					{allKontentItemProjectItem.edges.map(
						({ node: { elements, system } }) => (
							<div key={system.name} className="col-4 u-mbb3">
								<KontentImg
									image={
										elements.project_listing_image
											.value[0] || {
											url: 'https://unsplash.it/500/500',
										}
									}
									sources={[
										{
											type: 'image/webp',
											srcset: [
												`?fm=webp&w=448 448w`,
												`?fm=webp&w=640 640w`,
												`?fm=webp&w=688 688w`,
												`?fm=webp&w=718 718w`,
											],
										},
										{
											type: 'image/jpeg',
											srcset: [
												`?fm=jpg&w=448 448w`,
												`?fm=jpg&w=640 640w`,
												`?fm=jpg&w=688 688w`,
												`?fm=jpg&w=718 718w`,
											],
										},
									]}
								/>
								<div className="h5 u-c-fff u-mtb1">
									{system.name}
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
	{
		allKontentItemProjectItem {
			edges {
				node {
					elements {
						project_listing_image {
							value {
								url
							}
						}
					}
					system {
						name
					}
				}
			}
		}
	}
`

IndexPage.propTypes = {
	data: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default IndexPage
