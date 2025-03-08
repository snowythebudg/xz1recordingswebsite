import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Icon, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
import * as Components from "components";
import { MdArrowDownward } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"noticeinf"} />
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
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 0%,rgba(4, 8, 12, 0.6) 100%),--color-darkL2 url(https://images.unsplash.com/photo-1515444029923-60569d238ec5?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) center/cover"
			padding="60px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Box margin="-16px -16px -16px -16px" display="flex">
				<Box display="flex" padding="16px 16px 16px 16px" width="75%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							important notice
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Please read down below
							<br />
							<br />
							<br />
							<br />
							<br />
							<br />
							{"\n\n"}
						</Text>
					</Box>
				</Box>
			</Box>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section
			text-align="center"
			background-color="--primary"
			color="--light"
			padding="80px 0"
			sm-padding="40px 0"
			background="#000000"
		>
			<Text
				as="h5"
				font="--lead"
				margin="10px 0 0 0"
				text-transform="uppercase"
				letter-spacing="5px"
			>
				important notice
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				If anyone is reading this
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				If you randomly stumbled upon this, feel free to read it. I'll link to the INF Label site for context anyways but i'm gonna stop you right there. I was a collaborator on the INF Label site (https://infrecs.netlify.app), I run my own label too. You should check it out{" "}
				<Link href="https://xzone.64-b.it">
					here
				</Link>
				{" "}anyways (you're already here). If you are here, DO NOT JOIN ONX (now INF Label). ONX Records (INF Label) is run by a 10 year old who clearly has no skills in running a label, you should be thanking me that the send button sent you here instead. If you still wanna send a demo, good luck. I'm gonna make sure you can't send a demo. Check out my stuff and read about me{" "}
				<Link href="https://ebb.l5.ca">
					here
					<br />
					<br />
					<br />
					<br />
				</Link>
				XZ1 RECORDINGS FOR LIFE!{"\n\n"}
			</Text>
		</Section>
		<Components.Footer2 />
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