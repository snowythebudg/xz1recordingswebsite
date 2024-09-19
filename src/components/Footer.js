import React from "react";
import { useOverrides } from "@quarkly/components";
import { Icon, LinkBox, Box, Text, Section } from "@quarkly/widgets";
import { BsFillMusicPlayerFill } from "react-icons/bs";
const defaultProps = {
	"padding": "80px 0 80px 0",
	"quarkly-title": "Footer-4",
	"background": "#000000"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"lg-width": "100%",
			"flex-direction": "row",
			"lg-flex-direction": "row",
			"justify-content": "space-between",
			"width": "100%",
			"padding": "0 0px 50px 0px",
			"md-padding": "0 0px 30px 0px",
			"lg-padding": "0 0px 50px 0px",
			"md-flex-direction": "column",
			"md-display": "flex",
			"md-grid-gap": "36px"
		}
	},
	"box1": {
		"kind": "Box",
		"props": {
			"lg-margin": "0px 0px 0px 0px",
			"width": "30%",
			"display": "flex",
			"lg-width": "30%",
			"sm-width": "20%",
			"md-width": "10%"
		}
	},
	"linkBox": {
		"kind": "LinkBox",
		"props": {
			"justify-content": "center",
			"border-radius": "100%",
			"width": "36px",
			"height": "36px",
			"align-items": "center",
			"display": "flex",
			"href": "#"
		}
	},
	"icon": {
		"kind": "Icon",
		"props": {
			"category": "bs",
			"icon": BsFillMusicPlayerFill,
			"color": "#6d32ec",
			"size": "37px"
		}
	},
	"box2": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"justify-content": "space-between",
			"padding": "50px 0px 0px 0px",
			"border-width": "1px 0 0 0",
			"border-style": "solid",
			"border-color": "--color-lightD2",
			"md-padding": "30px 0px 0px 0px",
			"md-flex-direction": "column"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 0px 0px",
			"font": "--base",
			"color": "#ffffff",
			"md-margin": "0px 0px 25px 0px",
			"sm-text-align": "center",
			"children": <>
				© 2024 XZ1 Recording Ventures, a division of Fusion Audio Distribution
				<br />
				Owned and operated by BudgieMint (https://ebb.l5.ca&#125;
				<br />
				Subdomain provided by https://freedns.afraid.org
			</>
		}
	}
};

const Footer = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Box {...override("box1")}>
				<LinkBox {...override("linkBox")}>
					<Icon {...override("icon")} />
				</LinkBox>
			</Box>
		</Box>
		<Box {...override("box2")}>
			<Text {...override("text")} />
		</Box>
		{children}
	</Section>;
};

Object.assign(Footer, { ...Section,
	defaultProps,
	overrides
});
export default Footer;