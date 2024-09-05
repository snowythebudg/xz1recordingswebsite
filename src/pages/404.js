import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
		<Helmet>
			<title>
				XZ1 Recordings - Music from the next generation
			</title>
			<meta name={"description"} content={"A single only label for upcoming artists! "} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/66a1919115ac540018708a4f/images/music-player-fill.svg?v=2024-07-25T02:04:54.440Z"} type={"image/x-icon"} />
		</Helmet>
		<Section
			min-height="100vh"
			background="url(https://images.unsplash.com/photo-1527710200112-665192dc1c22?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center center/cover no-repeat"
			md-background="url(https://images.unsplash.com/photo-1610337673044-720471f83677?auto=format&fit=crop&w=800&q=80) center center/cover no-repeat"
			padding="88px 0 88px 0"
			quarkly-title="404-7"
		>
			<Override slot="SectionContent" justify-content="center" max-width="1220px" align-items="center" />
			<Box
				border-radius="24px"
				display="flex"
				justify-content="center"
				padding="56px 106px 64px 106px"
				background="--color-dark"
				max-width="600px"
				sm-padding="26px 30px 34px 30px"
				align-items="center"
				flex-direction="column"
			>
				<Text font="--headline1" color="--light" margin="0px 0px 16px 0px" sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif">
					404
				</Text>
				<Text
					md-width="100%"
					font="--lead"
					color="--lightD1"
					margin="0px 0px 40px 0px"
					text-align="center"
					width="100%"
					lg-width="80%"
				>
					Sorry, this part of the XZ1 Recordings website is either broken (not that i would be surprised) or you just typed in a link wrong or something. Click "Return" to head home.
				</Text>
				<Link
					font="--lead"
					padding="12px 24px 12px 24px"
					border-radius="8px"
					background="--color-light"
					href="/index"
					text-decoration-line="initial"
					color="--dark"
				>
					Return
				</Link>
			</Box>
		</Section>
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
			<script
				src={"https://static.elfsight.com/platform/platform.js"}
				defer={true}
				type={""}
				place={"endOfHead"}
				rawKey={"66d9d3eed240a0038c329af4"}
			>
				{"data-use-service-core defer></script>\n<div class=\"elfsight-app-c101d66c-2d81-4652-93f5-9f482872bb6c\" data-elfsight-app-lazy></div>"}
			</script>
		</RawHtml>
	</Theme>;
});