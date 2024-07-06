"use client";
import "./gallery.scss";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";

import { Text, Title } from "@mantine/core";

export default function GalleryContainer() {
	const imageLoader = ({ src, width, quality }) => {
		return `https://niksartaksi.com.tr/${src}?w=${width}&q=${
			quality || 75
		}`;
	};
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
					withIndicators
					height={400}
					slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
					slideGap={{ base: 0, sm: "md" }}
					loop
					nextControlProps={{ "aria-label": "Next Slide" }}
					previousControlProps={{ "aria-label": "Previous Slide" }}
				>
					<Carousel.Slide>
						<Image
							loader={imageLoader}
							src={"images/taksi-1.jpg"}
							width={0}
							height={300}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-2.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-3.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-4.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
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
							src={"images/taksi-5.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-6.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-7.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-8.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-9.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
							style={{ width: "100%", height: "100%" }}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>

					<Carousel.Slide>
						<Image
							src={"images/taksi-10.jpg"}
							loader={imageLoader}
							width={0}
							height={0}
							sizes="100vw"
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
