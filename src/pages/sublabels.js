import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"sublabels"} />
		<Helmet>
			<title>
				XZ1 Recordings - Music from the next generation
			</title>
			<meta name={"description"} content={"A single and EP only label for upcoming artists! "} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/music-player-fill.svg?v=2024-07-25T02:04:54.440Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="140px 0" sm-padding="40px 0 40px 0" background="url(https://images.unsplash.com/photo-1509335919466-c196457ea95a?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover">
			<Override slot="SectionContent" sm-align-items="center" />
			<Box max-width="360px" padding="50px 80px 80px 50px" background="--color-dark" color="--dark">
				<Text as="h2" font="--headline2" margin="0 0 12px 0" color="#ffffff">
					Sub-labels operated by XZ1 Recordings
				</Text>
				<Text font="--base" color="#ffffff">
					XZ1 Recordings operates multiple sub-labels for different genres of music. You can get into one of these sub-labels by requesting to get in or we'll contact you if we feel your music is good for one of our sub-labels listed below. You may also be automatically assigned into a sub-label if we accept your demo into XZ1 Recordings. Note that you have the right to decline your entry into one of our sub-labels. You may also release on XZ1 Recordings by itself if you want, or if you don't fit any of the genres that correspond to a sub-label.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Solus Sound
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" color="#F7FBFF" font="--base">
					Solus Sound is the primary sub-label for all ambient and ambient based genres. Solus Sound also releases leftfield/IDM music and relaxational music too. Solus Sound was founded BEFORE XZ1 Recordings
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Affogato Music
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" color="#F7FBFF" font="--base">
					Affogato Music is the primary sub-label for jazz and all jazz related music, Affogato Music was founded in February 2025 alongside 17th Street (see below)
					<br />
					<br />
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					17th Street
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" color="#F7FBFF" font="--base">
					17th Street is the primary sub-label for hip-hop/rap and all hip-hop/rap related music, 17th Street was founded in February 2025 alongside Affogato Music (see above)
					<br />
				</Text>
			</Box>
		</Section>
		<Components.Footer>
			<Override slot="text">
				© 2024-2025 XZ1 Recording Ventures
				<br />
				Owned and operated by BudgieMint (https://ebb.l5.ca&#125;
				<br />
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