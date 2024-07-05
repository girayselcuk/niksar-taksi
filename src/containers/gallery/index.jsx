"use client";
import "./gallery.scss";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

import { Button, Text, Title } from "@mantine/core";

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
					Resimler
				</Title>

				<Text c="gray">
					Taksimiz ile ilgili resimlere göz atabilirsiniz.
				</Text>
			</div>
			<div className="gallery-body">
				<Carousel
					withIndicators
					height={400}
					slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
					slideGap={{ base: 0, sm: "md" }}
					loop
				>
					<Carousel.Slide>
						<Image
							src={"/images/taksi-1.jpg"}
							width={0}
							height={300}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-2.jpg"}
							width={0}
							height={0}
							objectFit="cover"
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-3.jpg"}
							width={0}
							height={0}
							objectFit="cover"
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-4.jpg"}
							width={0}
							height={0}
							objectFit="cover"
							sizes="100vw"
							style={{
								width: "100%",
								height: "auto",
							}}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-5.jpg"}
							width={0}
							height={0}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-6.jpg"}
							width={0}
							height={0}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-7.jpg"}
							width={0}
							height={0}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-8.jpg"}
							width={0}
							height={0}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-9.jpg"}
							width={0}
							height={0}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"/images/taksi-10.jpg"}
							width={0}
							height={0}
							sizes="100vw"
							objectFit="cover"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					{/* ...other slides */}
				</Carousel>
			</div>
		</section>
	);
}
