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
	title: "Niksar Taksi",
	description:
		"Niksar ve Tokat bölgesinde 7/24 hizmet veren, güvenli ve konforlu ulaşım sağlayan taksi hizmetleri.",
};

// Mantine Theme
const theme = createTheme({
	defaultRadius: "sm",
});

export default function RootLayout({ children }) {
	return (
		<html lang="en">
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
