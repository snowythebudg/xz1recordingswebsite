import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { MdEmail } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"demos"} />
		<Helmet>
			<title>
				XZ1 Recordings - Submit a demo!
			</title>
			<meta name={"description"} content={"Submit a demo to XZ1 Recordings!"} />
			<meta property={"og:title"} content={"XZ1 Recordings - Submit a demo!"} />
			<meta property={"og:description"} content={"Submit a demo to XZ1 Recordings!"} />
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
		<Section padding="80px 0" sm-padding="40px 0" background="#000000">
			<Override slot="SectionContent" align-items="center" />
			<Text
				as="h2"
				font="--headline1"
				md-font="--headline2"
				margin="20px 0 0 0"
				color="#ffffff"
			>
				Welcome!
			</Text>
			<Text
				as="p"
				font="--lead"
				margin="20px 0 20px 0"
				text-align="center"
				color="#ffffff"
			>
				Welcome to XZ1 Recordings' demo submission portal. Scroll down below to submit your demo!
			</Text>
		</Section>
		<Section
			color="--light"
			padding="100px 0"
			sm-padding="40px 0"
			position="relative"
			quarkly-title="Form-1"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1654331046188-a73586da7ed6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
		>
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" md-width="100%">
					<Box>
						<Box
							position="relative"
							padding="0 0 0 64px"
							sm-padding="64px 0 0 0"
							margin="64px 0 0 0"
							max-width="360px"
						>
							<Icon
								top="0"
								left="0"
								category="md"
								icon={MdEmail}
								position="absolute"
								size="48px"
							/>
							<Text font="--base" as="h4" margin="6px 0">
								Email XZ1 Recordings
							</Text>
							<Text as="p" margin="6px 0" font="--headline3">
								<Link href="mailto:snowythebudg@gmail.com?XZ1 Recordings Inquiry" text-decoration="none" hover-text-decoration="underline" color="--light">
									snowythebudg@gmail.com
								</Link>
							</Text>
						</Box>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" md-width="100%">
					<Box>
						<Box
							padding="56px 48px"
							margin="0 0 0 auto"
							md-max-width="100%"
							background="--color-dark"
							max-width="360px"
						>
							<Text as="h3" font="--headline3" margin="0 0 20px 0">
								Send us your demo!
							</Text>
							<Formspree endpoint="mnnpzank" completeText="Thanks! We'll get back to you soon if we like your demo" errorMessage="Unfortunately your submission did not go through, please resubmit!">
								<Box gap="16px" display="flex" flex-direction="row" flex-wrap="wrap">
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text margin="0 0 4px 0" font="--base">
												Name
											</Text>
											<Input max-width="400px" width="100%" name="name" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Email
											</Text>
											<Input max-width="400px" width="100%" type="email" name="email" />
										</Box>
									</Box>
									<Box padding="8px 8px 8px 8px" width="100%">
										<Box display="flex" flex-direction="column">
											<Text font="--base" margin="0 0 4px 0">
												Song link and/or other info (send music through Google Drive)
											</Text>
											<Input width="100%" name="message" as="textarea" rows="4" />
										</Box>
									</Box>
									<Box width="100%" padding="8px 8px 8px 8px">
										<Box display="flex" flex-direction="column" align-items="flex-start">
											<Button background="--color-purple">
												Send
											</Button>
										</Box>
									</Box>
								</Box>
							</Formspree>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.Footer0510 />
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