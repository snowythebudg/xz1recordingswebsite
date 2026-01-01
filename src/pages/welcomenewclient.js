import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"welcomenewclient"} />
		<Helmet>
			<title>
				XZ1 Recordings - Music from the next generation
			</title>
			<meta name={"description"} content={"XZ1 Recordings is a full-service record label offering music publishing, distribution, and artist support. We work with both emerging and established artists across all genres, helping you grow and reach global audiences."} />
			<meta property={"og:title"} content={"XZ1 Recordings - Music from the next generation"} />
			<meta property={"og:description"} content={"XZ1 Recordings is a full-service record label offering music publishing, distribution, and artist support. We work with both emerging and established artists across all genres, helping you grow and reach global audiences."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1%20REDESIGN%20TAKE%20II%20%288%29.png?v=2025-08-02T19:59:20.688Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
			<meta name={"robots"} content={"noindex,nofollow"} />
		</Helmet>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="#000000"
		>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Welcome to XZ1 Recordings!
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Guess what? You are now a part of XZ1 Recordings! If you need any help, you can feel free to email us at any time (we answer fast!). Again, we're so thankful you decided to pick XZ1 as your label (unless we scouted you out, that's a different story). To send releases, you can use our release submission site by clicking{" "}
				<Link
					href="https://rs.xz1recordings.ca"
					color="#ff0095"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					here{" "}
				</Link>
				. You can also contact us about our mastering services by clicking{" "}
				<Link
					href="https://mastering.xz1recordings.ca"
					color="#ff0095"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					here{" "}
				</Link>
				or finding our email down below in the footer. Payments and royalty payouts are made through Stripe and/or PayPal{" "}
			</Text>
		</Section>
		<Components.Footer1130>
			<Override slot="link" href="mailto:distribution@xz1recordings.ca">
				distribution@xz1recordings.ca
			</Override>
			<Override slot="text5">
				© 2026 XZ1 Recording Ventures Inc.
			</Override>
		</Components.Footer1130>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"66a1919115ac540018708a4d"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});