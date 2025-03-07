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
			<meta name={"description"} content={"A distribution-focused record label and publisher for upcoming music artists!"} />
			<meta property={"og:title"} content={"XZ1 Recordings - Music from the next generation"} />
			<meta property={"og:description"} content={"A distribution-focused record label and publisher for upcoming music artists!"} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1.png?v=2024-09-17T14:44:26.714Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/XZ1.png?v=2024-09-17T14:44:26.714Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="88px 0 88px 0" min-height="100vh" quarkly-title="404-1" background="#000000 url(https://images.unsplash.com/photo-1606232390005-e6c6b0baf0c7?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000)">
			<Override slot="SectionContent" max-width="1220px" justify-content="center" background="#000000" />
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text margin="0px 0px 0px 0px" font="--headline3" color="--purple">
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
						background="--color-purple"
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
						href="mailto:snowythebudg@gmail.com?Issue with XZ1 Recordings site"
					>
						<Text margin="0px 0px 0px 0px" font="--lead" color="#ffffff">
							Contact support{" "}
						</Text>
						<Icon
							category="fi"
							icon={FiArrowRight}
							size="24px"
							margin="4px 0px 0px 4px"
							color="--purple"
						/>
					</LinkBox>
				</Box>
			</Box>
		</Section>
		<Components.Footer>
			<Override slot="text">
				© 2024-2025 XZ1 Recording Ventures, a division of BluWave Digital Entertainment.
				<br />
				Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈
			</Override>
			<Override slot="icon" color="--purple" />
		</Components.Footer>
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