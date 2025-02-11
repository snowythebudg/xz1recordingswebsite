import React from "react";
import theme from "theme";
import { Theme, Link, Image, Box, Text, Section, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"solus"} />
		<Helmet>
			<title>
				XZ1 Recordings - Music from the next generation
			</title>
			<meta name={"description"} content={"A single and EP only label for upcoming artists! "} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/music-player-fill.svg?v=2024-07-25T02:04:54.440Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="65px 0 65px 0" sm-padding="60px 0 60px 0" quarkly-title="Images-13" background="#000000">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				padding="16px 16px 16px 16px"
				lg-order="-2"
				lg-width="100%"
				width="100%"
				margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				sm-margin="0px 0px 30px 0px"
				flex-direction="column"
				display="flex"
			>
				<Box
					overflow-x="hidden"
					position="relative"
					hover-transform="translateY(-10px)"
					width="100%"
					height="auto"
					overflow-y="hidden"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					padding="0px 0px 70% 0px"
				>
					<Image
						position="absolute"
						display="block"
						width="829px"
						left="auto"
						bottom="auto"
						min-height="100%"
						src="https://uploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04:37:34.762Z"
						object-fit="cover"
						top="-90px"
						right="136px"
						overflow="visible"
						height="872px"
						srcSet="https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/66a1919115ac540018708a4f/images/ss.png?v=2025-02-11T04%3A37%3A34.762Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				flex-direction="row"
				flex-wrap="wrap"
				width="60%"
				lg-width="100%"
				lg-order="-1"
			>
				<Box
					display="flex"
					align-items="flex-start"
					lg-width="100%"
					sm-margin="0px 0px 0px 0px"
					width="100%"
					flex-direction="column"
					lg-align-items="center"
					lg-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					padding="8px 16px 8px 16px"
				>
					<Text
						lg-text-align="center"
						sm-font="--headline3"
						sm-margin="0px 0px 20px 0px"
						margin="0px 0px 0px 0px"
						color="--light"
						font="--headline2"
						md-text-align="left"
					>
						Solus Sound, the sub-label of the future.
					</Text>
				</Box>
				<Box
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					lg-margin="0px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					width="50%"
					flex-direction="column"
					padding="16px 16px 16px 16px"
					display="flex"
					sm-margin="0px 0px 0px 0px"
				>
					<Text
						margin="0px 0px 0px 0px"
						color="--light"
						font="--base"
						lg-text-align="center"
						sm-margin="0px 0px 30px 0px"
						md-text-align="left"
					>
						The next generation of ambient music comes from Solus Sound! Read about Solus Sound below.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				About the sub-label
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				Solus Sound was originally for the multi-genre music project of BudgieMint (the owner of XZ1 Recordings) called Red Palm Tree, the sub-label was created before XZ1's existence and pre-dates XZ1 by almost 2 weeks. However, Solus Sound has expanded to the general public! Solus Sound is now the main line electronic/ambient sub-label of XZ1 Recordings. Electronic releases can be directed to Solus Sound before release if you so wish, only select XZ1 members can access the sub-label. If you are new to XZ1 and/or haven't sent a demo yet, you can send one here!
			</Text>
			<Button
				font="--lead"
				margin="20px"
				background="#8e00ff"
				type="button"
				href="mailto:snowythebudg@gmail.com?XZ1 (Solus Sound) demo submission"
			>
				Send a demo!
			</Button>
		</Section>
		<Components.Footer>
			<Override slot="text">
				© 2024-2025 Solus Sound, a division of XZ1 Recording Ventures
				<br />
				Owned and operated by BudgieMint (https://ebb.l5.ca&#125;
			</Override>
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