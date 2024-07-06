import "./navigation-menu.scss";

import React from "react";

export default function NavigationMenu() {
	return (
		<nav className="navigation-menu">
			<a
				href="#hero"
				className="navigation-menu-item"
			>
				Anasayfa
			</a>
			<a
				href="#gallery"
				className="navigation-menu-item"
			>
				Resimler
			</a>
			<a
				href="#about"
				className="navigation-menu-item"
			>
				Hakkımızda
			</a>
		</nav>
	);
}
