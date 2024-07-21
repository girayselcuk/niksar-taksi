import { createTheme, MantineProvider } from "@mantine/core";
import { Inter } from "next/font/google";
import "./reset.scss";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import "./global.scss";
import "./root-layout.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	applicationName: "Niksar Taksi",
	title: "Niksar Taksi",
	description:
		"Niksar Taksi, Niksar ve Tokat bölgesinde 7/24 hizmet veren, güvenli ve konforlu ulaşım sağlayan taksi hizmetleri.",
	verification: {
		google: "VZaf5mUSAh-bCD1OdcxcRrWM8vu7BTbvYJn4EQ15ixs",
	},

	keywords: [
		"Niksar taksi",
		"Tokat",
		"Niksar şehir içi ulaşım",
		"Güvenilir Niksar taksi",
		"Ekonomik taksi Niksar",
		"7/24 Niksar taksi hizmeti",
		"Niksar özel taksi",
		"Niksar ucuz taksi",
		"Niksar taksi fiyatları",
		"Niksar taksi rezervasyonu",
		"Niksar taksi çağırma",
		"Seymenli Taksi",
	],
	creator: "Selçuk Giray",
};

// Mantine Theme
const theme = createTheme({
	defaultRadius: "sm",
	colors: {},
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<script
					async
					src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7361424683870524"
					crossorigin="anonymous"
				></script>
			</head>
			<body className={inter.className}>
				<MantineProvider theme={theme}>
					<div className="root-layout">
						<Header />
						<main className="root-layout-main">{children}</main>
						<Footer />
					</div>
				</MantineProvider>
			</body>
		</html>
	);
}
