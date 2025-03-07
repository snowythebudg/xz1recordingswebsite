import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Icon, Box, Input, Button, LinkBox } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import { MdEmail } from "react-icons/md";
import { BsFillMusicPlayerFill } from "react-icons/bs";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"demos"} />
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
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1531349360275-16ecb0bf45bd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
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
							<Formspree endpoint="mzzpdwnq" completeText="Thanks! We'll get back to you soon if we like your demo" errorMessage="Unfortunately your submission did not go through, please resubmit!">
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
		<Section padding="80px 0 80px 0" quarkly-title="Footer-4" background="#000000">
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="row"
				justify-content="space-between"
				width="100%"
				padding="0 0px 50px 0px"
				md-padding="0 0px 30px 0px"
				lg-padding="0 0px 50px 0px"
				md-flex-direction="column"
				md-display="flex"
				md-grid-gap="36px"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="30%"
					display="flex"
					lg-width="30%"
					sm-width="20%"
					md-width="10%"
				>
					<LinkBox
						justify-content="center"
						border-radius="100%"
						width="36px"
						height="36px"
						align-items="center"
						display="flex"
						href="#"
					>
						<Icon category="bs" icon={BsFillMusicPlayerFill} color="--purple" size="37px" />
					</LinkBox>
				</Box>
			</Box>
			<Box
				display="flex"
				justify-content="space-between"
				padding="50px 0px 0px 0px"
				border-width="1px 0 0 0"
				border-style="solid"
				border-color="--color-lightD2"
				md-padding="30px 0px 0px 0px"
				md-flex-direction="column"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#ffffff"
					md-margin="0px 0px 25px 0px"
					sm-text-align="center"
				>
					© 2024-2025 XZ1 Recording Ventures, a division of BluWave Digital Entertainment
					<br />
					Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈
				</Text>
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
		</RawHtml>
	</Theme>;
});