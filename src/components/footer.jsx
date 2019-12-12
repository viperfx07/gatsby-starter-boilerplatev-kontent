import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Icon from '@/components/icon'

import $style from './footer.module.scss'

const Footer = ({ masterpageData }) => (
	<footer
		className={`u-bdc-secondary3 u-bdt u-bgc-secondary2 ${$style.footer}`}
	>
		<div className="container">
			<div className="row u-mbb5 u-mbb4-sm align-items-end">
				<div className="col-md-8 u-mbb5 u-mbb6-sm u-mbb0-md">
					<nav
						className={`u-df-sm justify-content-sm-between justify-content-md-start u-c-fff ${$style.footer__menu}`}
					>
						{masterpageData.menu.linked_items.map(
							({ id, elements }) => (
								<div
									key={`footer-link-${id}`}
									className="u-mbb2 u-mbb0-last u-mbb0-sm u-mrb8-sm u-mrb0-last"
								>
									<Link
										to={elements.url_pattern.value}
										className={`b-fsn u-c-inherit ${$style.footer__submenu}`}
									>
										{elements.metadata__meta_title.value}
									</Link>
								</div>
							)
						)}
					</nav>
				</div>
			</div>
			<div className="row align-items-end">
				<div
					className={`col-12 col-md-4 small u-mbb3 u-mbb0-md u-c-text2 ${$style.footer__leftinfo}`}
					dangerouslySetInnerHTML={{
						__html: masterpageData.footer_left_info.value,
					}}
				/>
				<div className="col-12 col-sm-6 col-md-4 small u-c-text2 u-df justify-content-md-around u-mbb4 u-mbb0-sm">
					{masterpageData.footer_middle_links.linked_items.map(
						({ id, elements, system }) => (
							<div
								key={`footer-submenu-${id}`}
								className="u-mrb3 u-mrb0-last u-mrb0-md"
							>
								<Link
									className={`u-c-inherit ${$style.footer__submenu}`}
									to={`/${elements.url_pattern.value}`}
								>
									{system.name}
								</Link>
							</div>
						)
					)}
					<div>&copy; Copyright {new Date().getFullYear()}</div>
				</div>
				<div className="col-12 col-sm-6 col-md-4 u-c-text2 u-df justify-content-sm-end">
					{masterpageData.footer_social.linked_items.map(
						({ elements, system }) => (
							<div
								key={`footer-social-${system.name}`}
								className="u-mrb4 u-mrb0-last"
							>
								<a
									href={`${elements.url.value}`}
									className={`u-c-inherit ${$style.footer__submenu}`}
									target="_blank"
									rel="noopener noreferrer"
									title={system.name}
								>
									<Icon name={system.name.toLowerCase()} />
								</a>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	</footer>
)

Footer.propTypes = {
	masterpageData: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Footer
