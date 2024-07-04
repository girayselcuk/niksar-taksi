import { Container, Group, Text } from "@mantine/core";
import "./footer.scss";

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
					© Niksar Taksi, 2024. Tüm hakları saklıdır.
				</Text>
			</Container>
		</footer>
	);
}
