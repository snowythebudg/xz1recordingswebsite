import React from "react";
import theme from "theme";
import { Theme, Link, Box, Text, Icon, LinkBox, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { BsArrowLeftShort } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				XZ1 Recordings - Music from the next generation
			</title>
			<meta name={"description"} content={"A distribution-focused record label and publisher for upcoming music artists!"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/music-player-fill.svg?v=2024-07-25T02:04:54.440Z"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="0px 0 0px 0" lg-max-height="none" min-height="100vh" quarkly-title="404-3">
			<Override
				slot="SectionContent"
				max-width="none"
				width="100%"
				flex-direction="row"
				background="#000000"
			/>
			<Box
				align-items="flex-start"
				display="flex"
				justify-content="space-between"
				flex-direction="column"
				width="50%"
				lg-width="100%"
				lg-align-items="center"
				background="#000000"
			>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					justify-content="flex-start"
					padding="36px 36px 36px 36px"
					width="100%"
					lg-align-items="center"
					lg-justify-content="center"
					lg-padding="24px 24px 24px 24px"
				/>
				<Box
					display="flex"
					flex-direction="column"
					align-items="flex-start"
					padding="36px 36px 36px 36px"
					lg-align-items="center"
					lg-padding="24px 24px 24px 24px"
					lg-justify-content="flex-start"
				>
					<Text font="--headline3" color="--purple" lg-margin="0px 0px 0px 0px">
						404
					</Text>
					<Text
						color="--light"
						margin="8px 0px 16px -4px"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						font="--headline1"
						letter-spacing="-0.025em"
						lg-font="normal 700 48px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Page not found
					</Text>
					<Text
						lg-width="80%"
						font="--lead"
						color="--dark"
						margin="0px 0px 30px 0px"
						lg-text-align="center"
					>
						Sorry, we couldn’t find the page you’re looking for.
					</Text>
					<Box display="flex" grid-template-columns="1fr 1fr" grid-gap="8px" lg-align-items="center">
						<LinkBox
							flex-direction="row"
							padding="12px 8px 12px 8px"
							transition="--opacityOut"
							hover-opacity="0.7"
							lg-margin="0px 0px 20px 0px"
						>
							<Icon
								category="bs"
								icon={BsArrowLeftShort}
								size="24px"
								margin="4px 4px 0px 0px"
								color="#ffffff"
							/>
							<Text margin="0px 0px 0px 0px" font="--lead" color="--light">
								Back to home
							</Text>
						</LinkBox>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.Footer>
			<Override slot="text">
				© 2024-2025 XZ1 Recording Ventures, a division of BluWave Digital Entertainment.
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