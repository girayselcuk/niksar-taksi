import { Grid, GridCol, Text, Title } from "@mantine/core";
import "./about.scss";
import AboutCard from "@/components/about-card";
import { IconPhone } from "@tabler/icons-react";
import { IconMapPin } from "@tabler/icons-react";
import { IconCar } from "@tabler/icons-react";
import { IconClock } from "@tabler/icons-react";
import denemeresim from "@/assets/images/deneme.jpg";
import Image from "next/image";
export default function AboutContainer() {
	return (
		<section
			id="about"
			className="about"
		>
			<div className="about-left">
				<div className="about-left-header">
					<Title
						order={2}
						size="h2"
					>
						Hakkımızda
					</Title>

					<Text c="gray">
						Kaliteli ve güvenilir taksi hizmetleri sunarak
						müşterilerimizin memnuniyetini en üst düzeyde tutmayı
						hedefliyoruz. Niksar/Tokat bölgesinde 7/24 hizmet veren
						firmamız, konforlu araçlarımız ve deneyimli
						sürücülerimizle size en iyi ulaşım deneyimini yaşatmayı
						amaçlıyor.
					</Text>
				</div>

				<div className="about-left-body">
					<Grid>
						<GridCol span={6}>
							<AboutCard
								icon={<IconPhone />}
								title="05421133496"
							/>
						</GridCol>
						<GridCol span={6}>
							<AboutCard
								icon={<IconMapPin />}
								title="Niksar/Tokat"
							/>
						</GridCol>
						<GridCol span={6}>
							<AboutCard
								icon={<IconCar />}
								title="Konforlu Araç ile Rahat Yolculuk"
							/>
						</GridCol>
						<GridCol span={6}>
							<AboutCard
								icon={<IconClock />}
								title="7/24 Hizmet ile Kesintisiz Ulaşım"
							/>
						</GridCol>
					</Grid>
				</div>
			</div>
		</section>
	);
}
