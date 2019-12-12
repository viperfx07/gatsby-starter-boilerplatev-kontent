import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import $style from './header.module.scss'

console.log($style)

const Header = ({ masterpageData }) => (
	<header id="header" className={`Header ${$style.header}`}>
		<div className="container u-ptb1p5 u-ptb2-sm u-ptb4-md u-fx1 u-df align-items-center justify-content-between">
			<Link to="/" className={`Header__logo ${$style.header__logo}`}>
				<svg
					width="173"
					height="32"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M28.023 16.234a2.501 2.501 0 0 1 2.506 2.498v9.99a2.501 2.501 0 0 1-2.506 2.497 2.501 2.501 0 0 1-2.504-2.497v-9.99a2.501 2.501 0 0 1 2.505-2.498zM21.76 13.737a2.501 2.501 0 0 1 2.506 2.497v12.488a2.501 2.501 0 0 1-2.505 2.497 2.501 2.501 0 0 1-2.505-2.497V16.234a2.501 2.501 0 0 1 2.505-2.497zM15.498 8.741a2.501 2.501 0 0 1 2.505 2.498v17.483a2.501 2.501 0 0 1-2.505 2.497 2.501 2.501 0 0 1-2.505-2.497V11.239a2.501 2.501 0 0 1 2.505-2.498zM9.236 18.732a2.501 2.501 0 0 1 2.505 2.497v7.493a2.501 2.501 0 0 1-2.505 2.497 2.501 2.501 0 0 1-2.505-2.497v-7.493a2.501 2.501 0 0 1 2.505-2.497z"
						fill="#FF5E54"
					/>
					<path
						d="M12.673 4.995c-3.966 0-7.194 3.218-7.194 7.205 0 2.198.982 4.165 2.53 5.487a3.749 3.749 0 0 0-2.53 3.542v.827A12.182 12.182 0 0 1 .469 12.2C.469 5.47 5.925 0 12.673 0c5.246 0 9.708 3.307 11.435 7.933a2.495 2.495 0 0 1-1.473 3.212 2.507 2.507 0 0 1-3.221-1.469 7.198 7.198 0 0 0-6.741-4.68z"
						fill="#FF5E54"
					/>
					<path
						className="letter"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M88.424 16.094v-9.85h-3.731v16.968h.003c.122 4.443 3.772 8.008 8.258 8.008 4.562 0 8.261-3.688 8.261-8.237 0-4.55-3.699-8.237-8.261-8.237a8.24 8.24 0 0 0-4.53 1.348zm0 6.887v.004a4.524 4.524 0 0 0 4.53 4.515 4.523 4.523 0 0 0 4.53-4.517 4.524 4.524 0 0 0-4.53-4.517 4.524 4.524 0 0 0-4.53 4.515zM150.781 6.244h-3.73v9.85a8.243 8.243 0 0 0-4.531-1.348c-4.562 0-8.261 3.688-8.261 8.237 0 4.549 3.699 8.236 8.261 8.236 4.486 0 8.136-3.564 8.258-8.007h.003V6.244zm-3.73 16.739a4.524 4.524 0 0 0-4.531-4.517 4.523 4.523 0 0 0-4.53 4.517 4.523 4.523 0 0 0 4.53 4.517 4.524 4.524 0 0 0 4.531-4.517zM124.399 14.746c-4.562 0-8.261 3.688-8.261 8.237 0 4.549 3.699 8.236 8.261 8.236 4.563 0 8.261-3.687 8.261-8.236 0-4.55-3.698-8.237-8.261-8.237zm-4.53 8.237a4.523 4.523 0 0 1 4.53-4.517 4.523 4.523 0 0 1 4.53 4.517 4.523 4.523 0 0 1-4.53 4.517 4.523 4.523 0 0 1-4.53-4.517z"
						fill="#fff"
					/>
					<path
						className="letter"
						d="M115.989 29.604a10.853 10.853 0 0 1-1.758-3.381 4.522 4.522 0 0 1-3.156 1.277 4.523 4.523 0 0 1-4.53-4.517 4.523 4.523 0 0 1 4.53-4.517c1.227 0 2.34.486 3.156 1.277a10.852 10.852 0 0 1 1.758-3.382 8.238 8.238 0 0 0-4.914-1.615c-4.563 0-8.261 3.688-8.261 8.237 0 4.549 3.698 8.236 8.261 8.236 1.841 0 3.541-.6 4.914-1.615z"
						fill="#fff"
					/>
					<path
						className="letter"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M82.882 24.843H70.703a4.532 4.532 0 0 0 4.13 2.657 4.52 4.52 0 0 0 2.974-1.11l2.603 2.67a8.245 8.245 0 0 1-5.577 2.16c-4.563 0-8.261-3.688-8.261-8.237 0-4.55 3.698-8.237 8.26-8.237 4.563 0 8.262 3.688 8.262 8.237 0 .64-.073 1.262-.212 1.86zm-3.92-3.72h-8.259a4.532 4.532 0 0 1 4.13-2.657 4.532 4.532 0 0 1 4.13 2.657z"
						fill="#fff"
					/>
					<path
						className="letter"
						d="M43.654 22.983v-8.237h-3.731v8.237c0 4.217 2.917 8.236 7.195 8.236 2.212 0 4.06-1.074 5.33-2.696 1.269 1.622 3.117 2.697 5.33 2.697 4.277 0 7.195-4.02 7.195-8.237v-8.237h-3.731v8.237c0 2.826-1.855 4.517-3.464 4.517-1.61 0-3.465-1.69-3.465-4.517v-8.237h-3.73v8.237c0 2.826-1.856 4.517-3.465 4.517-1.61 0-3.464-1.69-3.464-4.517z"
						fill="#fff"
					/>
					<path
						className="letter"
						fillRule="evenodd"
						clipRule="evenodd"
						d="M152.38 22.983c0-4.55 3.699-8.237 8.261-8.237a8.262 8.262 0 0 1 7.974 6.074l3.787 10.4h-3.969l-1.194-3.28a8.257 8.257 0 0 1-6.598 3.28c-4.562 0-8.261-3.688-8.261-8.237zm8.261-4.517a4.523 4.523 0 0 0-4.53 4.517 4.523 4.523 0 0 0 4.53 4.517 4.524 4.524 0 0 0 4.531-4.517 4.524 4.524 0 0 0-4.531-4.517z"
						fill="#fff"
					/>
				</svg>
			</Link>
			<div className="u-lh1 Header__menusection">
				<button
					type="button"
					className={`u-posr u-dn-md u-lh1 hamburger hamburger--vortex ${$style.header__mobiletoggle}`}
					aria-label="Menu Toggle"
				>
					<span className="hamburger-box" tabIndex="-1">
						<span className="hamburger-inner" tabIndex="-1" />
					</span>
				</button>

				<div
					className={`u-posf u-poss-md u-z1 u-l0 u-t0 u-r0 u-h100vh u-c-fff u-bgc-secondary2 u-df flex-column justify-content-center Header__menu ${$style.header__menu}`}
				>
					<nav>
						{masterpageData.menu.linked_items.map(
							({ id, elements }) => (
								<Link
									key={`header-link-${id}`}
									to={elements.url_pattern.value}
									className="lead b-fsbodyregular-md u-tac u-db u-dib-md u-c-inherit u-link-colorstay u-mbb4 u-mbb0-last u-mbb0-md u-mrb8-md u-mrb0-last"
									activeClassName={$style.navlinkActive}
								>
									{elements.metadata__meta_title.value}
								</Link>
							)
						)}
					</nav>
				</div>
			</div>
		</div>
	</header>
)

Header.propTypes = {
	masterpageData: PropTypes.objectOf(PropTypes.object).isRequired,
}

export default Header
