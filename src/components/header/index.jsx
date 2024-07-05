import { Burger, Button, Container } from "@mantine/core";
import "./header.scss";
import Image from "next/image";
import TaxiLogo from "@/assets/icons/taxi.svg";
import Link from "next/link";
import NavigationMenu from "../navigation-menu";
export default function Header() {
	return (
		<header className="header">
			<Container
				size="lg"
				className="header-container"
			>
				<Link href="/">
					<Image
						src={TaxiLogo}
						width={48}
						height={48}
						quality={100}
						alt="Niksar Taksi"
					/>
				</Link>

				<NavigationMenu />

				<div className="header-mobile-toggle">
					<Burger />
				</div>
			</Container>
		</header>
	);
}
