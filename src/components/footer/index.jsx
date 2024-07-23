import { Container, Stack, Text } from "@mantine/core";
import "./footer.scss";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="footer">
			<Container
				size="lg"
				className="footer-container"
			>
				<Text
					c="gray"
					size="sm"
				>
					&copy; 2024 Niksar Taksi. Tüm hakları saklıdır.{" "}
					<Link href="tel:+905421133496">
						<strong>Selçuk Giray</strong>
					</Link>
				</Text>
			</Container>
		</footer>
	);
}
