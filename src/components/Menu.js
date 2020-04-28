import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const Menu = () => {
	const [ dropdownOpen, setDropdownOpen ] = useState(false);
	const [ selected, setSelected ] = useState('Fantastico');
	const toggle = () => setDropdownOpen((prevState) => !prevState);

	let mainLinks = [ 'Reimbursement Links', 'Expense Reports', 'Add New Expenses' ];
	let profileLinks = [ 'My Profile ', 'Notification Preferences' ];

	return (
		<div className="menu">
			<div className="menu__top">
				<div className="menu__dropdown">
					<div className="menu__dropdown__display">
						<svg
							version="1.1"
							className="menu__icon"
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 32 32"
						>
							<title>facebook2</title>
							<path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z" />
						</svg>
						<div className="menu__dropdown__display__option">{selected}</div>
					</div>

					<Dropdown isOpen={dropdownOpen} toggle={toggle}>
						<DropdownToggle color="none">
							<svg
								version="1.1"
								xmlns="http://www.w3.org/2000/svg"
								width="32"
								height="32"
								viewBox="0 0 32 32"
							>
								<title>circle-down</title>
								<path d="M32 16c0-8.837-7.163-16-16-16s-16 7.163-16 16 7.163 16 16 16 16-7.163 16-16zM3 16c0-7.18 5.82-13 13-13s13 5.82 13 13-5.82 13-13 13-13-5.82-13-13z" />
								<path d="M9.914 11.086l-2.829 2.829 8.914 8.914 8.914-8.914-2.828-2.828-6.086 6.086z" />
							</svg>
						</DropdownToggle>
						<DropdownMenu>
							<DropdownItem onClick={() => setSelected('Fantastico')}>Fantastico</DropdownItem>
							<DropdownItem onClick={() => setSelected('Reimbi')}>Reimbi</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>

				<div className="menu__lists">
					<ul className="menu__group">
						{mainLinks.map((element) => (
							<li className="menu__group__item">
								<a href="#" className="menu__group__item__link">
									{element}
								</a>
							</li>
						))}
					</ul>
					<ul className="menu__group">
						{profileLinks.map((element) => (
							<li className="menu__group__item">
								<a href="#" className="menu__group__item__link">
									{element}
								</a>
							</li>
						))}
					</ul>
				</div>

				<a className="menu__top__logout" href="#">
					Logout
				</a>
			</div>

			<svg
				className="menu__back--btn"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				width="24"
				height="28"
				viewBox="0 0 24 28"
			>
				<path d="M20 15v-2c0-0.547-0.453-1-1-1h-7.844l2.953-2.953c0.187-0.187 0.297-0.438 0.297-0.703s-0.109-0.516-0.297-0.703l-1.422-1.422c-0.187-0.187-0.438-0.281-0.703-0.281s-0.516 0.094-0.703 0.281l-7.078 7.078c-0.187 0.187-0.281 0.438-0.281 0.703s0.094 0.516 0.281 0.703l7.078 7.078c0.187 0.187 0.438 0.281 0.703 0.281s0.516-0.094 0.703-0.281l1.422-1.422c0.187-0.187 0.281-0.438 0.281-0.703s-0.094-0.516-0.281-0.703l-2.953-2.953h7.844c0.547 0 1-0.453 1-1zM24 14c0 6.625-5.375 12-12 12s-12-5.375-12-12 5.375-12 12-12 12 5.375 12 12z" />
			</svg>
		</div>
	);
};

export default Menu;
