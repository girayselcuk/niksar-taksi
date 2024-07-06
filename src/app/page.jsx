import AboutContainer from "@/containers/about";
import GalleryContainer from "@/containers/gallery";
import HeroContainer from "@/containers/hero";
import { Container } from "@mantine/core";

export default function Home() {
	return (
		<Container size="lg">
			<HeroContainer />
			<GalleryContainer />
			<AboutContainer />
		</Container>
	);
}
