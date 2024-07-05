"use client";
import "./gallery.scss";
import { Carousel } from "@mantine/carousel";
import Image from "next/image";
import taksi1 from "@/assets/images/taksi-1.jpg";
import taksi2 from "@/assets/images/taksi-2.jpg";
import taksi3 from "@/assets/images/taksi-3.jpg";
import taksi4 from "@/assets/images/taksi-4.jpg";
import taksi5 from "@/assets/images/taksi-5.jpg";
import taksi6 from "@/assets/images/taksi-6.jpg";
import taksi7 from "@/assets/images/taksi-7.jpg";
import taksi8 from "@/assets/images/taksi-8.jpg";
import taksi9 from "@/assets/images/taksi-9.jpg";
import taksi10 from "@/assets/images/taksi-10.jpg";
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
					height={272}
					slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
					slideGap={{ base: 0, sm: "md" }}
					loop
				>
					<Carousel.Slide>
						<Image
							src={taksi10}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi1}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi2}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi3}
							height={300}
							quality={100}
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi4}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi5}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi6}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi7}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi8}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					<Carousel.Slide>
						<Image
							src={taksi9}
							height={300}
							quality={100}
							alt="Niksar | Seymenli Taksi"
						/>
					</Carousel.Slide>
					{/* ...other slides */}
				</Carousel>
			</div>
		</section>
	);
}
