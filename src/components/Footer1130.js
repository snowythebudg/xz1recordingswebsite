import React from "react";
import { useOverrides } from "@quarkly/components";
import { Text, Box, Link, Section } from "@quarkly/widgets";
const defaultProps = {
	"padding": "90px 0 30px 0",
	"md-padding": "60px 0 30px 0",
	"quarkly-title": "Footer-15",
	"background": "#000000"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"display": "flex",
			"margin": "0px 0px 50px 0px",
			"grid-template-columns": "repeat(4, 1fr)",
			"grid-gap": "36px 34px",
			"lg-grid-template-columns": "repeat(3, 1fr)",
			"lg-flex-wrap": "wrap"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"width": "25%",
			"padding": "0px 50px 0px 0",
			"md-width": "90%",
			"sm-margin": "40px 0px 0px 0",
			"sm-width": "100%",
			"sm-padding": "0px 0px 0px 0",
			"margin": "0px 0 0px 0px",
			"lg-width": "100%",
			"lg-padding": "0px 0 0px 0"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-googleMichroma",
			"letter-spacing": "1px",
			"color": "#ff0095",
			"children": "ABOUT US"
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0 0px",
			"font": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
			"color": "#ffffff",
			"lg-max-width": "640px",
			"children": <>
				XZ1 Recordings specializes in distributing music to streaming services around the world. We also strive to help out upcoming artists grow their career and provide essential services to all artists to ensure their music gets the best support it can!{"\n\n"}
			</>
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"margin": "0px 0 0px 0px",
			"width": "25%",
			"padding": "0px 0 0px 0px",
			"lg-width": "30%",
			"md-width": "45%",
			"sm-width": "100%"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-googleMichroma",
			"letter-spacing": "1px",
			"color": "#ff0095",
			"children": "CONTACT INFO"
		}
	},
	"text3": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 5px 0px",
			"font": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
			"color": "#ffffff",
			"children": "E-mail"
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "mailto:info@yourdomain.com",
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"font": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
			"display": "inline-block",
			"margin": "0px 0px 15px 0px",
			"hover-color": "--primary",
			"children": "info@yourdomain.com"
		}
	},
	"box3": {
		"kind": "Box",
		"props": {
			"min-width": "100px",
			"min-height": "100px",
			"margin": "0px 0 0px 0",
			"width": "25%",
			"lg-width": "30%",
			"md-width": "100%",
			"display": "flex",
			"flex-direction": "column",
			"align-items": "flex-start"
		}
	},
	"text4": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 20px 0px",
			"font": "normal 500 18px/1.5 --fontFamily-googleMichroma",
			"letter-spacing": "1px",
			"color": "#ff0095",
			"children": "SOCIAL MEDIA"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"margin": "0px 0px 5px 0px",
			"display": "inline-block",
			"font": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
			"hover-color": "--primary",
			"href": "https://www.instagram.com/xz1recs",
			"children": "Instagram"
		}
	},
	"link2": {
		"kind": "Link",
		"props": {
			"color": "#ffffff",
			"text-decoration-line": "initial",
			"margin": "0px 0px 5px 0px",
			"display": "inline-block",
			"font": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
			"hover-color": "--primary",
			"href": "https://linkedin.com/company/xz1",
			"children": "LinkedIn"
		}
	},
	"box4": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"justify-content": "space-between",
			"md-align-items": "flex-start",
			"md-flex-direction": "column"
		}
	},
	"text5": {
		"kind": "Text",
		"props": {
			"font": "--base",
			"color": "#ffffff",
			"md-margin": "0px 0px 0 0px",
			"width": "30%",
			"md-width": "100%",
			"margin": "0 0px 0 0px",
			"children": "© 2025 XZ1 Recording Ventures"
		}
	}
};

const Footer1130 = props => {
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
			<Box {...override("box2")}>
				<Text {...override("text2")} />
				<Text {...override("text3")} />
				<Link {...override("link")} />
			</Box>
			<Box {...override("box3")}>
				<Text {...override("text4")} />
				<Link {...override("link1")} />
				<Link {...override("link2")} />
			</Box>
		</Box>
		<Box {...override("box4")}>
			<Text {...override("text5")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer1130, { ...Section,
	defaultProps,
	overrides
});
export default Footer1130;