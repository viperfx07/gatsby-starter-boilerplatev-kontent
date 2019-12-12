import { useStaticQuery, graphql } from 'gatsby'

export default () =>
	useStaticQuery(graphql`
		query queryMasterPage {
			allKontentItemMasterPage {
				edges {
					node {
						elements {
							menu {
								linked_items {
									... on KontentItemContactPage {
										id
										elements {
											url_pattern {
												value
											}
											metadata__meta_title {
												value
											}
										}
									}
									... on KontentItemContentPage {
										id
										elements {
											url_pattern {
												value
											}
											metadata__meta_title {
												value
											}
										}
									}
									... on KontentItemProjectsListingPage {
										id
										elements {
											url_pattern {
												value
											}
											metadata__meta_title {
												value
											}
										}
									}
									... on KontentItemServicetechListingPage {
										id
										elements {
											url_pattern {
												value
											}
											page_title {
												name
												type
												value
											}
											metadata__meta_title {
												value
											}
										}
									}
								}
							}
							footer_social {
								linked_items {
									elements {
										url {
											value
										}
										icon {
											value
										}
									}
									system {
										name
									}
								}
							}
							footer_middle_links {
								linked_items {
									elements {
										url_pattern {
											value
										}
									}
									system {
										name
									}
									id
								}
							}
							footer_left_info {
								value
							}
						}
					}
				}
			}
		}
	`)
