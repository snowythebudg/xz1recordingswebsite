import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Text, Span, Icon, Box, Button, Section } from "@quarkly/widgets";
import { IoIosCheckmark } from "react-icons/io";
const defaultProps = {
	"padding": "120px 0 0 0",
	"lg-margin": "0 0 0 0",
	"lg-padding": "80px 0 80px 0",
	"quarkly-title": "Price-8",
	"background": "rgba(0, 0, 0, 0) radial-gradient(circle at center,--color-purple 0%,rgba(0,0,0,1) 61%) 0% 0% /auto repeat scroll padding-box"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "300px",
			"max-width": "1280px",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "center",
			"justify-content": "flex-start",
			"lg-padding": "0px 20px 0px 20px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"lg-margin": "0px 0px 20px 0px",
			"text-align": "center",
			"children": "XZ1CAI Pricing"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 600 46px/1.2 --fontFamily-sans",
			"text-align": "center",
			"md-margin": "0px 0px 50px 0px",
			"align-self": "center",
			"color": "--light",
			"sm-margin": "0px 0px 30px 0px",
			"children": "Audio editing pricing for non-label clients"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 70px 0px",
			"text-align": "center",
			"font": "normal 300 20px/1.5 --fontFamily-sansTrebuchet",
			"width": "600px",
			"align-self": "center",
			"md-width": "100%",
			"color": "#ffffff",
			"md-margin": "0px 0px 60px 0px",
			"sm-margin": "0px 0px 40px 0px",
			"children": "All services come with priority support from XZ1 and quick refunds if needed. Premium services are free if you are an XZ1 or XZ1 sub-label client. Once you make a payment, we'll contact you and start working with you. Singular tracks will be delivered back to you in 1-2 days while EP's and albums will take up to a week. If we cannot do the service you need, you'll recieve a refund. If you're unsure if we can do the service you want, contact us first before making a payment."
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"margin": "0px 120px -180px 120px",
			"md-flex-direction": "column",
			"border-width": "1px",
			"grid-template-columns": "repeat(2, 1fr)",
			"lg-align-items": "stretch",
			"lg-display": "flex",
			"lg-flex-direction": "row",
			"lg-grid-gap": "36px",
			"lg-justify-content": "flex-start",
			"lg-margin": "0px 120px -250px 120px",
			"lg-width": "100%",
			"sm-margin": "0px 0px -250px 0px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"padding": "40px 40px 40px 40px",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "#000000",
			"border-radius": "15px",
			"display": "flex",
			"flex-direction": "column",
			"justify-content": "space-between",
			"background": "#000000",
			"md-margin": "0px 0px 0px 0px",
			"position": "relative",
			"z-index": "2",
			"margin": "0px 15px 0px 0px",
			"box-shadow": "--l",
			"sm-margin": "0px 0px 0px 0px",
			"sm-padding": "30px 25px 30px 25px",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sansHelvetica",
			"color": "--purple",
			"lg-margin": "0px 0px 20px 0px",
			"sm-margin": "0px 0px 10px 0px",
			"children": <>
				Basic mastering/mixing/audio editing{"\n\n"}
			</>
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				<Span
					font="normal 700 46px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					color="--light"
				>
					$5.29
				</Span>
				{" "}/ single
			</>
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				<Span
					font="normal 700 46px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					color="--light"
				>
					$17.99
				</Span>
				{" "}/ EP
			</>
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				<Span
					font="normal 700 46px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					color="--light"
				>
					$23.00
				</Span>
				/ album
			</>
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 400 17px/1.5 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"sm-margin": "0px 0px 18px 0px",
			"children": <>
				XZ1's basic mastering is ideal for artists who just want their songs mastered and release-ready{"\n\n"}
			</>
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				Mastering in .wav{"\n\n"}
			</>
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				Maximum 500kbps audio{"\n\n"}
			</>
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center",
			"margin": "0px 0px 0 0px"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text10": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				One mastering take only{"\n\n"}
			</>
		}
	},
	"box7": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center",
			"margin": "0px 0px 35px 0px",
			"sm-margin": "0px 0px 22px 0px"
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text11": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				Mixing on up to 3 songs only (1st song free, each subsequent song is $3.99){"\n\n"}
			</>
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"background": "--color-purple",
			"color": "--light",
			"border-color": "--color-light",
			"border-radius": "4px",
			"font": "normal 400 17px/1.5 --fontFamily-sansHelvetica",
			"type": "link",
			"text-align": "center",
			"href": "https://paypal.me/mintybudgie",
			"target": "_blank"
		}
	},
	"box8": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"padding": "40px 40px 40px 40px",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "#000000",
			"border-radius": "15px",
			"display": "flex",
			"flex-direction": "column",
			"justify-content": "space-between",
			"background": "#000000",
			"position": "relative",
			"z-index": "2",
			"margin": "0px 0px 0px 15px",
			"box-shadow": "--l",
			"md-margin": "0px 0px 0px 0",
			"sm-padding": "30px 25px 30px 25px",
			"lg-margin": "0px 0px 0px 0px"
		}
	},
	"box9": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px"
		}
	},
	"text12": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 8px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sansHelvetica",
			"color": "--purple",
			"lg-margin": "0px 0px 20px 0px",
			"sm-margin": "0px 0px 10px 0px",
			"children": "Premium mastering/mixing/audio editing"
		}
	},
	"text13": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				<Span
					font="normal 700 46px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					color="#ffffff"
				>
					$14.99
				</Span>
				/ song
			</>
		}
	},
	"text14": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				<Span
					font="normal 700 46px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					color="#ffffff"
				>
					$31.99
				</Span>
				/ EP
			</>
		}
	},
	"text15": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 400 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"children": <>
				<Span
					font="normal 700 46px/1.2 --fontFamily-sans"
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
					color="#ffffff"
				>
					$50.99
				</Span>
				/ album
			</>
		}
	},
	"text16": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 400 17px/1.5 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"sm-margin": "0px 0px 18px 0px",
			"children": <>
				XZ1's premium mastering is ideal for artists who want the all-inclusive mastering experience plus audio editing. XZ1CAI offers premium 5.1 surround mastering{" \n\n"}
			</>
		}
	},
	"box10": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center"
		}
	},
	"icon4": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px",
			"border-color": "--color-purple"
		}
	},
	"text17": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": "Mastering in .wav and .flac + 5.1 Surround (5.1 Surround by request only)"
		}
	},
	"box11": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center"
		}
	},
	"icon5": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text18": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				Maximum 1024kbps audio{"\n\n\n\n"}
			</>
		}
	},
	"box12": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center",
			"margin": "0px 0px 0 0px"
		}
	},
	"icon6": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text19": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				Mixing on up to 15 songs (3 songs free, each subsequent song is $3.99){"\n\n"}
			</>
		}
	},
	"box13": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center",
			"margin": "0px 0px 0 0px"
		}
	},
	"icon7": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text20": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				Unlimited mastering takes{"\n\n"}
			</>
		}
	},
	"box14": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"align-items": "center",
			"margin": "0px 0px 35px 0px",
			"sm-margin": "0px 0px 22px 0px"
		}
	},
	"icon8": {
		"kind": "Icon",
		"props": {
			"category": "io",
			"icon": IoIosCheckmark,
			"size": "32px",
			"color": "--purple",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text21": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 18px/1.2 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"children": <>
				ID3 metadata (optional, please request){"\n\n"}
			</>
		}
	},
	"button1": {
		"kind": "Button",
		"props": {
			"background": "--color-purple",
			"color": "--light",
			"border-color": "--color-light",
			"border-radius": "4px",
			"font": "normal 400 17px/1.5 --fontFamily-sansHelvetica",
			"type": "link",
			"text-align": "center",
			"href": "https://paypal.me/mintybudgie",
			"target": "_blank"
		}
	},
	"box15": {
		"kind": "Box",
		"props": {
			"width": "100%",
			"background": "#000000",
			"padding": "250px 0px 120px 0px",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "center",
			"justify-content": "flex-start",
			"lg-padding": "250px 20px 120px 20px"
		}
	},
	"box16": {
		"kind": "Box",
		"props": {
			"min-width": "280px",
			"min-height": "10px",
			"margin": "0px 140px 0px 140px",
			"display": "flex",
			"justify-content": "space-between",
			"align-items": "center",
			"padding": "25px 25px 25px 25px",
			"border-width": "1px",
			"border-style": "solid",
			"border-color": "--color-purple",
			"border-radius": "15px",
			"lg-margin": "40px 0 0px 0",
			"sm-flex-direction": "column",
			"md-flex-direction": "column",
			"md-align-items": "stretch",
			"max-width": "1280px"
		}
	},
	"box17": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"width": "70%",
			"sm-width": "100%",
			"sm-text-align": "center",
			"md-flex-direction": "column"
		}
	},
	"text22": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 10px 0px",
			"font": "normal 600 22px/1.2 --fontFamily-sans",
			"color": "--purple",
			"children": "Custom pricing"
		}
	},
	"text23": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 400 17px/1.5 --fontFamily-sansHelvetica",
			"color": "#ffffff",
			"padding": "0px 70px 0px 0px",
			"md-padding": "0px 0px 0px 0px",
			"md-margin": "0px 0px 20px 0px",
			"children": "Contact XZ1's support team today to learn more about pricing and take advantage of our exclusive custom offers designed for your specific purposes!"
		}
	},
	"button2": {
		"kind": "Button",
		"props": {
			"color": "--purple",
			"border-color": "--color-purple",
			"border-radius": "4px",
			"font": "normal 400 17px/1.5 --fontFamily-sansHelvetica",
			"background": "rgba(155, 108, 252, 0)",
			"border-width": "1px",
			"border-style": "solid",
			"type": "link",
			"href": "mailto:snowythebudg@gmail.com"
		}
	}
};

const Xz1Mastering = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Override
			slot="SectionContent"
			align-items="center"
			justify-content="flex-start"
			max-width="none"
			min-width="none"
			width="100%"
		/>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
			<Text {...override("text2")} />
			<Box {...override("box1")}>
				<Box {...override("box2")}>
					<Box {...override("box3")}>
						<Text {...override("text3")} />
						<Text {...override("text4")} />
						<Text {...override("text5")} />
						<Text {...override("text6")} />
						<Text {...override("text7")} />
						<Box {...override("box4")}>
							<Icon {...override("icon")} />
							<Text {...override("text8")} />
						</Box>
						<Box {...override("box5")}>
							<Icon {...override("icon1")} />
							<Text {...override("text9")} />
						</Box>
						<Box {...override("box6")}>
							<Icon {...override("icon2")} />
							<Text {...override("text10")} />
						</Box>
						<Box {...override("box7")}>
							<Icon {...override("icon3")} />
							<Text {...override("text11")} />
						</Box>
					</Box>
					<Button {...override("button")}>
						Purchase here
					</Button>
				</Box>
				<Box {...override("box8")}>
					<Box {...override("box9")}>
						<Text {...override("text12")} />
						<Text {...override("text13")} />
						<Text {...override("text14")} />
						<Text {...override("text15")} />
						<Text {...override("text16")} />
						<Box {...override("box10")}>
							<Icon {...override("icon4")} />
							<Text {...override("text17")} />
						</Box>
						<Box {...override("box11")}>
							<Icon {...override("icon5")} />
							<Text {...override("text18")} />
						</Box>
						<Box {...override("box12")}>
							<Icon {...override("icon6")} />
							<Text {...override("text19")} />
						</Box>
						<Box {...override("box13")}>
							<Icon {...override("icon7")} />
							<Text {...override("text20")} />
						</Box>
						<Box {...override("box14")}>
							<Icon {...override("icon8")} />
							<Text {...override("text21")} />
						</Box>
					</Box>
					<Button {...override("button1")}>
						Purchase here
					</Button>
				</Box>
			</Box>
		</Box>
		<Box {...override("box15")}>
			<Box {...override("box16")}>
				<Box {...override("box17")}>
					<Text {...override("text22")} />
					<Text {...override("text23")} />
				</Box>
				<Button {...override("button2")}>
					Contact us
				</Button>
			</Box>
		</Box>
		{children}
	</Section>;
};

Object.assign(Xz1Mastering, { ...Section,
	defaultProps,
	overrides
});
export default Xz1Mastering;