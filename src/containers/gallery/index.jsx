"use client";
import "./gallery.scss";
import { Carousel } from "@mantine/carousel";
import denemeresim from "@/assets/images/deneme.jpg";
import taksi1 from "@/assets/images/taksi1.jpg";
import Image from "next/image";
import { Text, Title } from "@mantine/core";

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
					height={272}
					slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
					slideGap={{ base: 0, sm: "md" }}
					loop
					align="start"
				>
					<Carousel.Slide>
						<Image
							src={denemeresim}
							height={300}
							quality={100}
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi1}
							height={300}
							quality={100}
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={denemeresim}
							height={300}
							quality={100}
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={denemeresim}
							height={300}
							quality={100}
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={denemeresim}
							height={300}
							quality={100}
						/>
					</Carousel.Slide>
					{/* ...other slides */}
				</Carousel>
			</div>
		</section>
	);
}
