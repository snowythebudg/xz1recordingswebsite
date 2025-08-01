import React from "react";
import theme from "theme";
import { Theme, Link, Text, Icon, LinkBox, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { FiArrowRight } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				XZ1 Recordings - Music from the next generation
			</title>
			<meta name={"description"} content={"XZ1 Recordings is a full-service record label offering music publishing, distribution, and artist support. We work with both emerging and established artists across all genres, helping you grow and reach global audiences."} />
			<meta property={"og:title"} content={"XZ1 Recordings - Music from the next generation"} />
			<meta property={"og:description"} content={"XZ1 Recordings is a full-service record label offering music publishing, distribution, and artist support. We work with both emerging and established artists across all genres, helping you grow and reach global audiences."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/xz1%20redesign%20proper.png?v=2025-03-29T00:25:09.176Z"} />
			<meta name={"msapplication-TileColor"} content={"#000000"} />
		</Helmet>
		<Components.QuarklycommunityKitScrollIndicator>
			<Override slot="Indicator" background="#ff0095" />
		</Components.QuarklycommunityKitScrollIndicator>
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-1" background="#000000">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" background="#000000" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text margin="0px 0px 0px 0px" font="--headline3" color="#ff0095">
					404
				</Text>
				<Text
					color="--light"
					margin="8px 0px 16px 0px"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					font="--headline1"
					letter-spacing="-0.025em"
				>
					Page not found
				</Text>
				<Text
					lg-width="80%"
					font="--lead"
					color="--dark"
					margin="0px 0px 40px 0px"
					text-align="center"
				>
					Sorry, we couldn’t find the page you’re looking for.
				</Text>
				<Box display="grid" grid-template-columns="1fr 1fr" grid-gap="8px" sm-grid-template-columns="1fr">
					<Link
						font="--lead"
						padding="12px 24px 12px 24px"
						background="#ff0095"
						border-radius="8px"
						href="/"
						text-decoration-line="initial"
						color="--light"
						transition="--opacityOut"
						hover-opacity="0.7"
					>
						Go back to home
					</Link>
					<LinkBox
						flex-direction="row"
						padding="12px 6px 12px 8px"
						hover-background="--color-dark"
						hover-color="--light"
						transition="background-color --transitionDuration-normal --transitionTimingFunction-easeOut 0s"
						border-radius="8px"
						href="mailto:hello@xz1recordings.ca"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#ffffff">
							Contact support{" "}
						</Text>
						<Icon
							category="fi"
							icon={FiArrowRight}
							size="24px"
							margin="4px 0px 0px 4px"
							color="#ff0095"
							border-color="#ff0095"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Components.Footer0731>
			<Override slot="text7">
				Mon to Fri (8 am – 9 pm)
				<br />
				{"\n"}Sat to Sun (11 am – 10 pm){" "}
				<br />
				All times in MST/MDT (Mountain)
				<br />
				<br />
				Summer closure:
				<br />
				We are closed every summer from August 1st to August 20th. This depends on the year as sometimes we might need to stay open due to distribution delays the month prior.
				<br />
				<br />
				Notice about demos:
				<br />
				Please send a demo to the proper channels (our demo portal or Discord). We will not accept demos sent to one of our emails!
			</Override>
			<Override slot="text9">
				© 2025 XZ1 Recording Ventures
				<br />
				Site version 1.25.6 (build 07313)
			</Override>
		</Components.Footer0731>
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