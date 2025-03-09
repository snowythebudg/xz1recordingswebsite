import React from "react";
import theme from "theme";
import { Theme, Link, Text, LinkBox, Box, Section, Image, Strong, Icon, Span, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { FiBox, FiLock, FiEdit } from "react-icons/fi";
import { FaGlobe, FaCoffee, FaStreetView } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-2" display="grid" background="#000000">
			<Override
				slot="SectionContent"
				flex-direction="column"
				justify-content="space-between"
				align-items="center"
				lg-flex-direction="row"
				background="#ffffff"
				lg-width="720px"
				lg-background="#000000"
			/>
			<Box
				display="flex"
				padding="12px 0 18px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="100%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
				lg-justify-content="flex-start"
				background="#000000"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="18px">
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
						color="#ffffff"
					>
						XZ1 Recordings
					</Text>
				</LinkBox>
			</Box>
		</Section>
		<Section
			min-height="100vh"
			lg-padding="120px 0 88px 0"
			md-padding="140px 0 96px 0"
			sm-padding="60px 0 96px 0"
			quarkly-title="Hero-23"
			padding="88px 0 88px 0"
			background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				margin="0px 0px 0px 0px"
				padding="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				lg-flex-direction="column"
				display="flex"
				lg-width="100%"
				align-items="flex-start"
				lg-align-items="center"
				lg-justify-content="center"
				width="100%"
				flex-direction="row"
			>
				<Text
					color="#FFFFFF"
					font="--lead"
					width="100%"
					lg-width="100%"
					lg-text-align="center"
					margin="0px 0px 0px 0px"
					sm-margin="0px 0px 12px 0px"
					letter-spacing="2px"
				>
					Music from the next generation
				</Text>
			</Box>
			<Box
				margin="0px 0px 0px 0px"
				md-margin="0px 0px 0px 0px"
				lg-justify-content="center"
				display="flex"
				lg-align-items="center"
				align-items="flex-end"
				lg-width="100%"
				padding="0px 0px 0px 0px"
				justify-content="space-between"
				lg-flex-direction="column"
				width="100%"
				flex-direction="row"
			>
				<Text
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					width="25%"
					md-width="100%"
					margin="0px 0px 0px 0px"
					lg-width="100%"
					color="--light"
					font="--headline2"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					lg-text-align="center"
					lg-margin="0px 0px 20px 0px"
					lg-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					XZ1 Recordings
				</Text>
				<Text
					color="#FFFFFF"
					font="--base"
					width="25%"
					lg-width="100%"
					lg-text-align="center"
					margin="0px 0px 0px 0px"
				>
					XZ1 Recordings specializes in distributing music to streaming services around the world. We also strive to help out upcoming artists grow their career!
				</Text>
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
				IMPORTANT ANNOUNCEMENT
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				New XZ1 footer
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				We have changed the footer of the XZ1 site. You'll now be able to get to the demo submission portal by scrolling to the very bottom of the site and clicking the "Send a demo!" button in the middle!
			</Text>
		</Section>
		<Section padding="48px 0 48px 0" sm-padding="60px 0 60px 0" quarkly-title="About-14" background="--color-dark radial-gradient(at center,--color-purple 0%,rgba(0,0,0,1) 100%)">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" sm-min-width="280px" />
			<Box
				display="flex"
				width="40%"
				justify-content="flex-start"
				lg-width="100%"
				align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				margin="0px 0px 0px 0px"
				lg-padding="0px 0px 0px 0px"
				lg-justify-content="center"
			>
				<Image
					src="https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100vw"
					height="100%"
					srcSet="https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1524578471438-cdd96d68d82c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				display="flex"
				width="60%"
				flex-direction="column"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 0px 0px"
				padding="48px 64px 48px 64px"
				justify-content="center"
				background="#000000"
				md-padding="36px 40px 48px 40px"
				sm-padding="36px 24px 48px 24px"
				color="#000000"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline3"
					lg-text-align="center"
					sm-text-align="left"
				>
					About XZ1 Recordings
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--light"
					font="--base"
					lg-text-align="left"
					sm-text-align="left"
				>
					Founded with a passion for supporting emerging artists, XZ1 Recordings is a humble company founded in mid-2024. XZ1 Recordings also operates multiple smaller sub-labels for different genres. Established as a platform exclusively for releasing singles, our label aims to empower musicians in launching their careers. XZ1 Recordings has moved on to start releasing EP's and albums. Since our inception, XZ1 Recordings has been committed to next level personalized and quick music distribution for artists to cultivate their unique sound. Through strategic partnerships and a dedicated team, we continue to champion creativity and innovation in the music industry, ensuring that every artist's journey is marked by growth and success.
				</Text>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline3"
					lg-text-align="center"
					sm-text-align="left"
				>
					Our Missions & Vision
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="--light"
					font="--base"
					lg-text-align="left"
					lg-margin="0px 0px 36px 0px"
					sm-text-align="left"
				>
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Empower Emerging Artists
					</Strong>
					: To provide a platform that empowers and supports emerging artists in launching and developing their careers.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Quality Over Quantity
					</Strong>
					: To prioritize quality music over mass production, focusing on nurturing talent and fostering artistic growth.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Diverse and Inclusive Catalog
					</Strong>
					: To curate a diverse catalog that celebrates various genres and promotes inclusivity within the music industry.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Strategic Partnerships
					</Strong>
					: To establish strategic partnerships with artists, producers, and other industry stakeholders to enhance distribution reach and effectiveness.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Transparency and Fairness
					</Strong>
					: To maintain transparent and fair practices in all dealings with artists, ensuring they receive equitable compensation and support.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Innovation in Distribution
					</Strong>
					: To leverage innovative distribution channels and technology to maximize visibility and reach for our artists' music.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Continuous Improvement
					</Strong>
					: To continuously evolve and adapt to changes in the music industry, staying at the forefront of distribution trends and technologies.
					<br />
					<br />
					<br />
					<br />
					<Strong
						color="#ffffff"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Passion for Music
					</Strong>
					: To maintain a deep passion for music at the core of our operations, driving us to support and promote exceptional talent.
					<br />
					<br />
					These missions and visions guide us at XZ1 Recordings in our commitment to fostering a thriving and artistically rich music community.
				</Text>
			</Box>
		</Section>
		<Section
			padding="90px 0 90px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			display="flex"
			background="#000000"
			overflow-y="hidden"
			overflow-x="hidden"
			quarkly-title="Advantages/Features-12"
		>
			<Override
				slot="SectionContent"
				flex-direction="row"
				flex-wrap="wrap"
				grid-gap="5%"
				sm-min-width="280px"
			/>
			<Box
				display="flex"
				width="50%"
				justify-content="flex-end"
				lg-justify-content="center"
				lg-width="100%"
				padding="0px 0px 0px 16px"
				align-items="center"
				lg-padding="0px 0px 0px 0px"
				font="20px sans-serif"
			>
				<Box
					width="972px"
					height="589px"
					md-display="flex"
					md-justify-content="center"
					box-shadow="--xl"
					lg-height="auto"
				>
					<Image
						height="589px"
						lg-width="100%"
						width="972px"
						border-radius="8px"
						z-index="9"
						position="relative"
						lg-margin="0px 0px 0px 0px"
						box-shadow="--xxl"
						src="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"
						object-fit="cover"
						lg-height="auto"
						lg-display="block"
						srcSet="https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=500 500w,https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=800 800w,https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1080 1080w,https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=1600 1600w,https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2000 2000w,https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=2600 2600w,https://images.unsplash.com/photo-1506994011460-5482746d30a1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
				</Box>
			</Box>
			<Box
				display="flex"
				width="45%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="flex-start"
				lg-margin="0px 0px 20px 0px"
				sm-margin="32px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="24px 0px 16px 0px"
				lg-flex-direction="column"
				lg-flex-wrap="no-wrap"
				sm-width="100%"
				md-margin="0px 0px 30px 0px"
				lg-padding="36px 0px 16px 0px"
			>
				<Text as="p" font="--base" color="--purple" margin="0px 0px 8px 0px">
					Why you should join XZ1
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-sans"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 32px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="normal 600 40px/1.2 --fontFamily-sans"
					lg-max-width="720px"
				>
					What you get as an XZ1 client
				</Text>
				<Text
					as="p"
					margin="20px 0 0 0"
					font="--lead"
					font-size="20px"
					font-weight="300"
					color="--light"
					width="100%"
					md-width="100%"
					md-margin="0px 0px 0px 0px"
					md-padding="0px 0px 0px 0px"
					sm-font="--base"
					lg-max-width="720px"
				>
					Joining XZ1 Recordings has many benefits. All of them are listed below! Scroll down to send a demo and start your journey with XZ1!
				</Text>
				<List
					margin="40px 0px 0px 0px"
					padding="0px 0px 0px 0px"
					as="ul"
					sm-margin="24px 0 0 0"
					list-style-type="none"
					font="normal normal 18px/150% sans-serif"
					display="flex"
					flex-direction="column"
					grid-gap="25px"
					lg-margin="32px 0px 0px 0px"
				>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
						<Icon
							display="block"
							category="fi"
							icon={FiBox}
							size="20px"
							color="--purple"
							margin="5px 0 0 0"
						/>
						<Text
							padding="0"
							margin="0"
							color="--light"
							font="18px/27px --fontFamily-sans"
							lg-max-width="720px"
						>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="normal 600 16px/1.5 --fontFamily-sans"
								color="--light"
							>
								Reliable distribution.{" "}
								<Span font-weight="300">
									Distribution is our biggest focus, which means that we give all our XZ1 clients reliable and fast distribution. Everything can be managed in one clean dashboard to ensure you have a good distribution experience
								</Span>
							</Span>
						</Text>
					</Box>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
						<Icon
							display="block"
							category="fi"
							icon={FiLock}
							size="20px"
							color="--purple"
							margin="5px 0 0 0"
						/>
						<Text
							padding="0"
							margin="0"
							color="--darkL2"
							font="18px/27px --fontFamily-sans"
							lg-max-width="720px"
						>
							<Span
								font-weight="600"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="normal 600 16px/1.5 --fontFamily-sans"
								color="--light"
							>
								Rights protection and publishing.{" "}
								<Span font-weight="300">
									XZ1 Recordings has established exclusive publishing with AllTrack to provide you with quality music publishing and to make sure that you get every drop of your money.
								</Span>
							</Span>
						</Text>
					</Box>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px">
						<Icon
							display="block"
							category="fi"
							icon={FiEdit}
							size="20px"
							color="--purple"
							margin="5px 0 0 0"
						/>
						<Text padding="0" margin="0" font="18px/27px --fontFamily-sans" lg-max-width="720px">
							<Span
								font-weight="600"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
								font="normal 600 16px/1.5 --fontFamily-sans"
								color="--light"
							>
								Secure contracts.{" "}
								<Span font-weight="300">
									We provide all our artists with secure contracts when applying to ensure that your music stays protected and that you get all the money you need.
								</Span>
							</Span>
						</Text>
					</Box>
				</List>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#000000" sm-padding="60px 0 60px 0">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--light"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Sub-labels that XZ1 Recordings operates
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#ffffff"
					md-text-align="center"
					text-align="center"
					max-width="480px"
				>
					XZ1 Recordings operates numerous sub-labels that cater to multiple genres. You can join an XZ1 sub-label if you successfully get accepted into XZ1 Recordings OR if you're already an XZ1/Fusion client and meet one of these genre requirements. When releasing, your (C) line will show as XZ1/Sub-label name. This is due to our launch of BluWave Digital Entertainment, everything is now under one umbrella.
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaGlobe}
						margin="0px 0px 30px 0px"
						color="--purple"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						Solus Sound
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#ffffff"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Solus Sound is the sub-label catered to ambient music. Solus Sound was founded BEFORE XZ1 Recordings and was mainly used by Red Palm Tree, BudgieMint's second artist alias
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaCoffee}
						margin="0px 0px 30px 0px"
						color="--purple"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						Affogato Music
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#ffffff"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Affogato Music is the jazz/jazz fusion sub-label on XZ1 Recordings. Although we probably won't get much jazz music in our catalog, it's still good to have a sub-label. Life is like jazz, it's best when you improvise.
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#000000"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaStreetView}
						margin="0px 0px 30px 0px"
						color="--purple"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--light" font="--headline3" lg-text-align="left">
						17th Street
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="#ffffff"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						17th Street is the main sub-label for rap music on XZ1 Recordings. We get a lot of rap music, trust us. 17th Street is designed to cater to upcoming rap artists.
					</Text>
				</Box>
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
				Music publishing
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				XZ1 MUSIC PUBLISHING
			</Text>
			<Text margin="0px 0px 0px 0px" />
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				We have finally opened our own publishing division. You can request publishing while submitting your demo for us. You need to be approved separately for publishing even if you are already an XZ1 client. To get into XZ1 MUSIC PUBLISHING, you need to apply for a mandatory AllTrack CREATOR account by clicking{" "}
				<Link
					href="https://alltrack.com/join"
					target="_blank"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					here
				</Link>
				. If approved for AllTrack, you may request publishing by XZ1 by heading to{" "}
				<Link href="https://bluwavesp.formaloo.app/app/j1vtlnjuyfyn7hp/p/qS2iVsm8" target="_blank">
					this website{" "}
				</Link>
				and making an account. You will then see a tab that says "Request publishing services", you can apply there. Please submit your first name and last name plus your designated AllTrack IPI number.{" "}
			</Text>
		</Section>
		<Section padding="100px 0 100px 0" background="#000000" quarkly-title="FAQ-4">
			<Text margin="0px 0px 15px 0px" font="normal 600 42px/1.2 --fontFamily-sans" color="--light">
				Frequently asked questions
			</Text>
			<Text margin="0px 0px 70px 0px" font="normal 300 20px/1.5 --fontFamily-sansHelvetica" color="#b2bac1" sm-margin="0px 0px 50px 0px">
				Our answers to some of the most common questions artists ask when joining a label!
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				grid-template-columns="repeat(2, 1fr)"
				grid-gap="50px 50px"
				md-grid-template-columns="1fr"
				sm-grid-gap="35px 0"
			>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						What's the royalty split
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						At the moment, the royalty split is 70/30. That is after the cut by the distributor is made
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						Does XZ1 release albums
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						XZ1 now releases albums! Whether it's a mini-LP or a full length album. We accept all albums for distribution now. We used to be a single and EP only distributor but we're open to albums now!
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						Do I need to sign a contract
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						We send contracts on a per release basis. Once we submit your release, you'll recieve a contract to sign in your email which can easily be signed through your XZ1 dashboard. If you get assigned to an alternate XZ1 distributor. We will send you a contract to send, the contract will last for ONE year from the date of signing. If you'd like to review the contract before you apply, use the form below!
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						How many releases can I release through XZ1
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						As many as you wish, do note that all releases you release through XZ1 will be binded to us for 365 days, after that you are free to re-release your release or keep it on XZ1.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						Do I need to pay anything
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						Not at all! We may start charging for extra services in the future but these services are purely optional and you are not required to use them.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						Do we allow AI generated music or music made partially with AI
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						Fully AI generated music is not allowed to be released on XZ1. Music partially made with AI tools such as BandLab's Songstarter tool are permitted as long as you make enough changes to them that it won't be striked for copyright.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-sans" color="--light">
						What is "BluWave Digital Entertainment"
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#ffffff">
						BluWave Digital Entertainment is the new parent company that houses all XZ1 services. We created this since our publishing division was founded.{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section background="#000000" color="--dark" padding="64px 0 64px 0">
			<Box margin="-16px -16px -16px -16px" display="flex" flex-wrap="wrap">
				<Box padding="16px 16px 16px 16px" width="50%" lg-width="100%">
					<Box>
						<Text
							font="--base"
							color="--light"
							letter-spacing="1px"
							text-transform="uppercase"
							margin="0"
						>
							Contact XZ1 or BluWave
						</Text>
						<Text font="--headline3" max-width="500px" margin="10px 0 0 0" color="#ffffff">
							Get in contact with us through the form or by clicking the "Email us" button down below. We'll reply quick!
							<br />
							<br />
							To speak to XZ1 Live Chat, click{" "}
							<Link
								href="https://xz1support.netlify.app"
								target="_blank"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								here
							</Link>
							<br />
							<Span
								font-weight="normal"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							>
								<Span
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									<Link
										href="/promotionalservices"
										target="_blank"
										overflow-wrap="normal"
										word-break="normal"
										white-space="normal"
										text-indent="0"
										text-overflow="clip"
										hyphens="manual"
										user-select="auto"
										pointer-events="auto"
									>
										<br />
									</Link>
								</Span>
							</Span>
						</Text>
					</Box>
				</Box>
				<Box width="50%" padding="8px 8px 8px 8px" lg-width="100%">
					<Box>
						<Formspree endpoint="xvgpzloy" completeText="Thanks! We'll get back to you soon!" errorMessage="Something did not go well, please try again later.">
							<Box
								gap="16px"
								display="grid"
								flex-direction="row"
								flex-wrap="wrap"
								grid-template-columns="repeat(2, 1fr)"
								grid-gap="16px"
							>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Name
									</Text>
									<Input
										width="100%"
										name="name"
										type="text"
										background="#ffffff"
										border-width="2px"
										color="#000000"
									/>
								</Box>
								<Box sm-width="100%" display="flex" flex-direction="column">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Email
									</Text>
									<Input width="100%" type="email" name="email" border-color="#000000" />
								</Box>
								<Box display="flex" flex-direction="column" grid-column="1 / span 2">
									<Text font="--base" margin="0 0 4px 0" color="#ffffff">
										Message
									</Text>
									<Input
										as="textarea"
										rows="4"
										width="100%"
										name="message"
										border-color="#1b3045"
									/>
								</Box>
								<Box display="flex" flex-direction="column" align-items="flex-start" grid-column="1 / span 2">
									<Button background="--color-purple">
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.QuarklycommunityKitNetlifyForm />
		<Components.Footer3>
			<Override slot="text">
				Reach out to XZ1 Recordings
			</Override>
		</Components.Footer3>
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