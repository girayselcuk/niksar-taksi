import { Title } from "@mantine/core";
import "./about-card.scss";

import React from "react";

export default function AboutCard({ icon, title }) {
	return (
		<div className="about-card">
			<div className="about-card-icon">{icon}</div>
			<Title
				fw={600}
				size="h4"
				order={4}
			>
				{title}
			</Title>
		</div>
	);
}
