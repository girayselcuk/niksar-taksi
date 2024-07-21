import { Button, Text, Title } from "@mantine/core";
import "./hero.scss";
import { IconPhone } from "@tabler/icons-react";
import Link from "next/link";
export default function HeroContainer() {
	return (
		<section
			id="hero"
			className="hero"
		>
			<div className="hero-container">
				<Title
					order={1}
					size="h1"
				>
					Niksar Taksi - Güvenli ve Hızlı Ulaşımın Adresi
				</Title>
				<Text c="gray">
					Şehrin her köşesine güvenle ve konforla ulaşmanın keyfini
					çıkarın. Taksi hizmetlerimizle yolculuklarınız artık çok
					daha kolay ve hızlı!
				</Text>
				<Link href="tel:+905454560060">
					<Button
						color="yellow"
						mt="md"
						leftSection={<IconPhone aria-hidden="true" />}
						aria-label="Tıkla ve hemen ara"
						type="button"
						size="md"
					>
						Tıkla Hemen Ara
					</Button>
				</Link>
			</div>
		</section>
	);
}
