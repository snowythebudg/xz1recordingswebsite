import React from "react";
import theme from "theme";
import { Theme, Link, Span, Text, LinkBox, Box, Section, Image, Strong, Icon, List, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, Formspree } from "@quarkly/components";
import * as Components from "components";
import { FiBox, FiGift, FiLock, FiMic } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
				position="static"
			>
				<LinkBox
					flex-direction="row"
					href="/index"
					display="flex"
					grid-gap="18px"
					width="500px"
				>
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="normal 500 28px/1.2 --fontFamily-googleMichroma"
						sm-margin="0px 0 0px 0"
						display="block"
						color="#ff0095"
						text-transform="uppercase"
						border-color="#ffffff"
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
								XZ1 Recordings
							</Span>
							<Span
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								user-select="auto"
								pointer-events="auto"
							/>
						</Span>
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
			background="linear-gradient(0deg,rgba(0,0,0,0) 45.7%,rgba(0,0,0,1) 100%),rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1566055909643-a51b4271aa47?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /cover repeat scroll padding-box"
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
					Happy Pride Month!
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
					XZ1 Recordings specializes in distributing music to streaming services around the world. We also strive to help out upcoming artists grow their career and provide essential services to all artists to ensure their music gets the best support it can!
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
				important announcement
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Happy Pride Month!
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Sorry for being a couple days late for the site announcement but Happy Pride Month to the queer community! We're so excited to be celebrating this year and we really hope that our queer clients feel powerful and happy! As a queer-owned record label. We have a profound love for Pride Month, even if the American government wants to stop it (we aren't from America, we're Canadian). For our queer folks in the US, we love you. You deserve to feel loved, supported, and cared for and we will do everything to make sure you guys feel this way. To all the MAGA freaks, No, straight people do not need their own pride month, Christian Pride Month is not a thing, and queer people are not groomers. Thanks for coming to our TED Talk, Happy Pride Month!
			</Text>
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
				roster playlist
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				XZ1 Spotify playlist!
			</Text>
			<Text margin="0px 0px 0px 0px" />
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Do you want to listen to our artists' work, look no further! You can access our entire catalog on Spotify by clicking{" "}
				<Link color="#ff0095" href="https://open.spotify.com/playlist/3rLQkdVDJ8QeCbp3NoWBzM?si=1dd6efc448264f1a">
					here
				</Link>
			</Text>
		</Section>
		<Section padding="48px 0 48px 0" sm-padding="60px 0 60px 0" quarkly-title="About-14" background="#000000">
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
				background="#000000"
			>
				<Image
					src="https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000"
					object-fit="cover"
					transform="translateY(0px)"
					transition="transform 0.2s ease-in-out 0s"
					hover-transform="translateY(-10px)"
					sm-min-height="100vw"
					height="100%"
					srcSet="https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=500 500w,https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=800 800w,https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080 1080w,https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=1600 1600w,https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 2000w,https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2600 2600w,https://images.unsplash.com/photo-1536599514254-ee89271345b0?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=3200 3200w"
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
					Founded with a passion for supporting emerging artists, XZ1 Recordings is a humble company founded in mid-2024. XZ1 Recordings also operates multiple smaller sub-labels for different genres. Formerly established as a platform exclusively for releasing singles, our label aims to{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						empower musicians in launching their careers.{" "}
					</Strong>
					XZ1 Recordings has moved on to start releasing EP's and albums. Since our inception, XZ1 Recordings has been committed to{" "}
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						next level
					</Strong>
					{" "}personalized and quick music distribution for artists to cultivate their unique sound. Through strategic partnerships and a dedicated team, we continue to champion creativity and innovation in the music industry, ensuring that every artist's journey is marked by growth and success.
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
				<Text as="p" font="--base" color="#ff0095" margin="0px 0px 8px 0px">
					Why you should join XZ1
				</Text>
				<Text
					as="h1"
					margin="0px"
					font="normal 600 40px/1.5 --fontFamily-googleMichroma"
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
					font="normal 300 20px/1.5 &quot;Roboto Condensed&quot;, sans-serif"
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
					font="normal normal 18px/150% --fontFamily-googleRobotoCondensed"
					display="flex"
					flex-direction="column"
					grid-gap="25px"
					lg-margin="32px 0px 0px 0px"
				>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px" font="18px/27px --fontFamily-googleRobotoCondensed">
						<Icon
							display="block"
							category="fi"
							icon={FiBox}
							size="20px"
							color="#ff0095"
							margin="5px 0 0 0"
						/>
						<Text
							padding="0"
							margin="0"
							color="--light"
							font="18px/27px --fontFamily-googleRobotoCondensed"
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
								font="normal 600 16px/1.5 --fontFamily-googleRobotoCondensed"
								color="--light"
							>
								Reliable distribution.{" "}
								<Span
									font-weight="300"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									Distribution is our biggest focus, which means that we give all our XZ1 clients reliable and fast distribution
								</Span>
							</Span>
						</Text>
					</Box>
					<Box margin="0px 0px 0px 0px" display="flex" grid-gap="16px" font="18px/27px ">
						<Icon
							display="block"
							category="fi"
							icon={FiGift}
							size="20px"
							color="#ff0095"
							margin="5px 0 0 0"
						/>
						<Text
							padding="0"
							margin="0"
							color="--light"
							font="18px/27px --fontFamily-googleRobotoCondensed"
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
								font="normal 600 16px/1.5 --fontFamily-googleRobotoCondensed"
								color="--light"
							>
								Extra distribution benefits.{" "}
								<Span
									font-weight="300"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									Joining XZ1 gives you access to multi-disc releases on Spotify!
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
							color="#ff0095"
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
								font="normal 600 16px/1.5 --fontFamily-googleRobotoCondensed"
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
							icon={FiMic}
							size="20px"
							color="#ff0095"
							margin="5px 0 0 0"
						/>
						<Text padding="0" margin="0" font="18px/27px --fontFamily-googleRobotoCondensed" lg-max-width="720px">
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
								font="normal 600 16px/1.5 --fontFamily-googleRobotoCondensed"
								color="--light"
							>
								Complimentary mastering services.{" "}
								<Span
									font-weight="300"
									overflow-wrap="normal"
									word-break="normal"
									white-space="normal"
									text-indent="0"
									text-overflow="clip"
									hyphens="manual"
									user-select="auto"
									pointer-events="auto"
								>
									We provide all our artists and partner labels with free mastering for all clients. We master in 16 or 24 bit .wav and .flac with a bit rate of your choosing.{" "}
								</Span>
							</Span>
						</Text>
					</Box>
				</List>
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
				PArtner with XZ1
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				Powered by XZ1
			</Text>
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				Does your label want to access XZ1 services and portals! If so, consider enrolling to XZ1 Recordings' Powered by XZ1 label partnership program! We give you access to our distribution channels, basic promotion through Instagram, access to every XZ1 ecosystem service (Artist Central, Creative Audio Industries, XZ1RS). If you're interested, check out Powered by XZ1 by clicking{" "}
				<Link
					href="https://poweredby.xz1recordings.ca"
					color="#ff0095"
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
			</Text>
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
				audio editing{"\n\n"}
			</Text>
			<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0 0 0">
				XZ1 Creative Audio Industries
			</Text>
			<Text margin="0px 0px 0px 0px" />
			<Text as="p" font="--lead" margin="40px 0 20px 0">
				XZ1 Creative Audio Industries is the audio editing division of XZ1 Recordings. XZ1CAI offers mixing, mastering, audio editing, and 5.1 Surround mixing/mastering. These services are included for free if you are a client of XZ1 Recordings. Non-label clients can contact us at artistservices@xz1recordings.ca to discuss custom pricing. The pricing tiers are no longer in place.
			</Text>
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
					color="#ff0095"
				>
					here
				</Link>
				. You may also use an IPI number of your current PRO. Just specify that you won't be using an AllTrack IPI and we can still let you in. If approved for AllTrack, you may request publishing by XZ1 by heading to{" "}
				<Link href="https://xz1asp.formaloo.app/app/j1vtlnjuyfyn7hp" color="#ff0095">
					this website
				</Link>
				<Link
					href="https://bluwavesp.formaloo.app/app/j1vtlnjuyfyn7hp/p/qS2iVsm8"
					target="_blank"
					color="--purple"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					{" "}
				</Link>
				and making an account. You will then see a tab that says "Request publishing services", you can apply there. Please submit your first name and last name plus your designated AllTrack or other IPI number.{" "}
			</Text>
		</Section>
		<Section padding="100px 0 100px 0" background="#000000" quarkly-title="FAQ-4">
			<Text margin="0px 0px 15px 0px" font="normal 600 42px/1.2 --fontFamily-googleMichroma" color="--light">
				Frequently asked questions
			</Text>
			<Text margin="0px 0px 70px 0px" font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff" sm-margin="0px 0px 50px 0px">
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
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleMichroma" color="--light">
						Do I need to sign a contract
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
						As all labels, yes you do need to sign a contract. You have the choice of signing an exclusive or a non-exclusive. Exclusive means you're required to release under XZ1 and only XZ1. A non-exclusive means you can release with whoever you want even if you're signed to XZ1. Splits by default are 70/30 regardless of what distributor we use, we can arrange custom splits should you ever need it.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleMichroma" color="--light">
						Do we allow AI generated music or music made partially with AI
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
						Fully AI generated music is not allowed to be released on XZ1. Music partially made with AI tools such as BandLab's Songstarter tool are permitted as long as you make enough changes to them that it won't be striked for copyright.
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleMichroma" color="--light">
						Do you do promotion
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
						Yes, but only in a small capacity. XZ1 Recordings is a distribution and audio services focused label. If you have money to pay for advertising campaigns ($500-$1500), we can definitely set you up with high tier advertising through The Orchard!
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleMichroma" color="--light">
						How should I submit releases?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
						You can use the dedicated release submission portal derived off the old support site. The XZ1ASP has file size restrictions and you cannot submit releases through it. You can access the release submission portal{" "}
						<Link href="https://rs.xz1recordings.ca" color="#ff0095">
							here
						</Link>
						. If you don't wanna do any of these, send an email to distribution@xz1recordings.ca. We will state what release information you need during onboarding!
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleMichroma" color="--light">
						What are XZ1's distribution channels?
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
						XZ1 Recordings does digital distribution through KAMAPRO and Labelcaster (former), we also do physical distribution (online, for select artists) through ElasticStage
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 500 25px/1.2 --fontFamily-googleMichroma" color="--light">
						Is there an age restriction for XZ1 Recordings
					</Text>
					<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-googleRobotoCondensed" color="#ffffff">
						You need to be 13 or over to sign a contract with XZ1 Recordings. Artists that are suspected of being under the age of 13 will have their releases taken down and their royalties suspended. Your XZ1ASP (see{" "}
						<Link href="https://xz1asp.formaloo.app/app/j1vtlnjuyfyn7hp/p/qS2iVsm8" color="#ff0095">
							here
						</Link>
						) account will also be deleted if you've made one.
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
							Contact XZ1
						</Text>
						<Text font="--headline3" max-width="500px" margin="10px 0 0 0" color="#ffffff">
							Get in contact with us through the form or by clicking the "Email us" button down below. We'll reply quick!
							<br />
							<br />
							To go to the XZ1 support portal, click{" "}
							<Link
								href="https://artistcentral.xz1recordings.ca"
								color="#ff0095"
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
								<br />
							</Link>
							<br />
							To go to the old XZ1 support portal, click{" "}
							<Link href="https://old.artistcentral.xz1recordings.ca" color="#ff0095">
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
						<Formspree endpoint="mdkednan" completeText="Thanks! We'll get back to you soon!" errorMessage="Something did not go well, please try again later.">
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
									<Button background="#ff0095">
										Send
									</Button>
								</Box>
							</Box>
						</Formspree>
					</Box>
				</Box>
			</Box>
		</Section>
		<Components.QuarklycommunityKitScrollIndicator>
			<Override slot="Indicator" background="#ff0095" />
		</Components.QuarklycommunityKitScrollIndicator>
		<Components.Footer0605 />
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