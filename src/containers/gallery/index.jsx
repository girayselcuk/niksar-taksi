"use client";
import "./gallery.scss";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

import { Text, Title } from "@mantine/core";
import { images } from "@/data/images";

export default function GalleryContainer() {
	return (
		<section
			id="gallery"
			className="gallery"
		>
			<div className="gallery-header">
				<Title
					order={2}
					size="h2"
				>
					Taksimiz
				</Title>

				<Text c="gray">
					Taksimiz ile ilgili resimlere göz atabilirsiniz.
				</Text>
			</div>
			<div className="gallery-body">
				<Carousel
					height={300}
					slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
					slideGap={{ base: 0, sm: "md" }}
					loop
					nextControlProps={{ "aria-label": "Next Slide" }}
					previousControlProps={{ "aria-label": "Previous Slide" }}
				>
					{images.map((image) => (
						<Carousel.Slide
							key={image.id}
							style={{ position: "relative" }}
						>
							<picture>
								<Image
									src={image.path}
									width={1024}
									height={1024}
									style={{ width: "100%", height: "100%" }}
									alt={image.alt}
									loading="lazy"
									quality={75}
								/>
							</picture>
						</Carousel.Slide>
					))}
				</Carousel>
			</div>
		</section>
	);
}
