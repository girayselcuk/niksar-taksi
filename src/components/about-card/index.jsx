import { Text, Title } from "@mantine/core";
import "./about-card.scss";

import React from "react";

export default function AboutCard({ icon, title, description }) {
	return (
		<div className="about-card">
			<div className="about-card-icon">{icon}</div>
			<div className="about-card-body">
				<Title
					order={5}
					size={"h5"}
					fw={600}
				>
					{title}
				</Title>
				<Text
					size="sm"
					c="gray"
				>
					{description}
				</Text>
			</div>
		</div>
	);
}
