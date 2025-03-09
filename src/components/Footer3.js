import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box, Icon, LinkBox, Button, Link, Section } from "@quarkly/widgets";
import { MdEmail } from "react-icons/md";
import { FaInstagram, FaTwitterSquare } from "react-icons/fa";
const defaultProps = {
	"padding": "90px 0 50px 0",
	"background": "#000000",
	"quarkly-title": "Footer-13",
	"sm-padding": "50px 0 50px 0"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"padding": "50px 30px 50px 30px",
			"background": "rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1643388019656-34a8006477c3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box",
			"display": "flex",
			"justify-content": "space-around",
			"align-items": "center",
			"margin": "0px 0px 80px 0px",
			"md-flex-direction": "column",
			"md-align-items": "stretch",
			"md-margin": "0px 0px 50px 0px",
			"md-padding": "30px 30px 30px 30px",
			"sm-padding": "20px 15px 20px 15px",
			"border-color": "--color-light",
			"border-style": "solid",
			"border-width": "0px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"width": "60%",
			"md-margin": "0px 0px 30px 0px",
			"md-width": "100%",
			"sm-margin": "0px 0px 18px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 400 42px/1.2 --fontFamily-sansHelvetica",
			"color": "--light",
			"md-margin": "0px 0px 15px 0px",
			"sm-margin": "0px 0px 12px 0px",
			"children": "Contact XZ1 Recordings"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"color": "--light",
			"font": "normal 300 20px/1.5 --fontFamily-sans",
			"children": <>
				We are open at{" "}
				<br />
				Mon to Fri (8 am – 9 pm) and Sat to Sun (11 am – 10 pm){" "}
			</>
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"flex-direction": "row",
			"padding": "15px 25px 15px 25px",
			"border-width": "2px",
			"border-style": "solid",
			"border-color": "--color-light",
			"background": "rgba(247, 251, 255, 0.12)",
			"sm-padding": "10px 15px 10px 15px",
			"href": "mailto:snowythebudg@gmail.com"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdEmail,
			"size": "24px",
			"color": "--light",
			"margin": "0px 8px 0px 0px"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 500 20px/1.5 --fontFamily-sans",
			"color": "--light",
			"children": "Email us!"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "grid",
			"grid-template-columns": "repeat(3, 1fr)",
			"grid-gap": "16px 24px",
			"margin": "0px 0px 80px 0px",
			"md-grid-template-columns": "1fr",
			"md-grid-gap": "36px 0",
			"md-margin": "0px 0px 50px 0px"
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
			"margin": "0px 0px 25px 0px",
			"font": "normal 500 24px/1.2 --fontFamily-sansHelvetica",
			"text-align": "center",
			"color": "--purple",
			"md-margin": "0px 0px 20px 0px",
			"children": "Contact"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"color": "#ffffff",
			"font": "normal 300 18px/1.5 --fontFamily-sans",
			"text-align": "center",
			"border-color": "#b8acac",
			"md-margin": "0px 0px 15px 0px",
			"children": <>
				snowythebudg@gmail.com
				<br />
				xz1recordings@songwriter.net
				<br />
				https://ebb.l5.ca/contact
			</>
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"min-width": "10px",
			"min-height": "10px",
			"display": "flex",
			"grid-template-columns": "repeat(5, 1fr)",
			"grid-gap": "16px 24px",
			"md-align-self": "flex-start",
			"sm-align-self": "center",
			"justify-items": "start",
			"justify-content": "center"
		}
	},
	"linkBox1": {
		"kind": "LinkBox",
		"props": {
			"href": "https://instagram.com/teaofthetemple"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaInstagram,
			"size": "24px",
			"color": "--light",
			"hover-color": "--lightD2",
			"transition": "background-color 1s ease 0s"
		}
	},
	"linkBox2": {
		"kind": "LinkBox",
		"props": {
			"href": "https://x.com/xz1recs"
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "fa",
			"icon": FaTwitterSquare,
			"size": "24px",
			"color": "--light",
			"hover-color": "--lightD2",
			"transition": "background-color 1s ease 0s"
		}
	},
	"box5": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "center"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 25px 0px",
			"font": "normal 500 24px/1.2 --fontFamily-sansHelvetica",
			"text-align": "center",
			"color": "--purple",
			"md-margin": "0px 0px 20px 0px",
			"children": "Demos"
		}
	},
	"button": {
		"kind": "Button",
		"props": {
			"background": "--color-purple",
			"type": "link",
			"href": "/demos"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "mailto:info@yourdomain.com",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"font": "normal 300 18px/1.5 --fontFamily-sans",
			"display": "flex",
			"margin": "0px 0px 15px 0px",
			"text-align": "center",
			"hover-color": "#f5eceb",
			"children": <>
				xz1recordings@songwriter.net
				<br />
				snowythebudg@gmail.com
			</>
		}
	},
	"box6": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px"
		}
	},
	"text6": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 25px 0px",
			"font": "normal 500 24px/1.2 --fontFamily-sansHelvetica",
			"text-align": "center",
			"color": "--purple",
			"md-margin": "0px 0px 20px 0px",
			"children": "Hours of Operation"
		}
	},
	"text7": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 15px 0px",
			"color": "#ffffff",
			"font": "normal 300 18px/1.5 --fontFamily-sans",
			"text-align": "center",
			"border-color": "#b8acac",
			"children": <>
				Mon to Fri (8 am – 9 pm)
				<br />
				{"\n"}Sat to Sun (11 am – 10 pm){" "}
				<br />
				All times in MST/MDT (Mountain)
			</>
		}
	},
	"text8": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"color": "#ffffff",
			"font": "normal 300 18px/1.5 --fontFamily-sans",
			"text-align": "center",
			"border-color": "#b8acac"
		}
	},
	"text9": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "normal 300 18px/1.5 --fontFamily-sans",
			"color": "#ffffff",
			"md-margin": "0px 0px 25px 0px",
			"sm-text-align": "center",
			"text-align": "center",
			"children": <>
				© 2024-2025 XZ1 Recording Ventures, a division of BluWave Digital Entertainment (https://bluwavedigital.netlify.app)
				<br />
				Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈{"\n\n"}
			</>
		}
	}
};

const Footer3 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<Text {...override("text")} />
				<Text {...override("text1")} />
			</Box>
			<LinkBox {...override("linkBox")}>
				<Icon {...override("icon")} />
				<Text {...override("text2")} />
			</LinkBox>
		</Box>
		<Box {...override("box2")}>
			<Box {...override("box3")}>
				<Text {...override("text3")} />
				<Text {...override("text4")} />
				<Box {...override("box4")}>
					<LinkBox {...override("linkBox1")}>
						<Icon {...override("icon1")} />
					</LinkBox>
					<LinkBox {...override("linkBox2")}>
						<Icon {...override("icon2")} />
					</LinkBox>
				</Box>
			</Box>
			<Box {...override("box5")}>
				<Text {...override("text5")} />
				<Button {...override("button")}>
					Send a demo!
				</Button>
				<Link {...override("link")} />
			</Box>
			<Box {...override("box6")}>
				<Text {...override("text6")} />
				<Text {...override("text7")} />
				<Text {...override("text8")} />
			</Box>
		</Box>
		<Text {...override("text9")} />
		{children}
	</Section>;
};

Object.assign(Footer3, { ...Section,
	defaultProps,
	overrides
});
export default Footer3;