import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Link, Strong } from "@quarkly/widgets";
import Footer03302 from "./Footer03302";
const defaultProps = {};
const overrides = {
	"br": {
		"kind": "br",
		"props": {}
	},
	"br1": {
		"kind": "br",
		"props": {}
	},
	"br2": {
		"kind": "br",
		"props": {}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "https://drive.google.com/file/d/1XsOuqDjk_5esvAXQ7FgydALj-xDF9t39/view",
			"overflow-wrap": "normal",
			"word-break": "normal",
			"white-space": "normal",
			"text-indent": "0",
			"text-overflow": "clip",
			"hyphens": "manual",
			"user-select": "auto",
			"pointer-events": "auto",
			"data-propinfo-id": "680845ac8804d123d3434407",
			"color": "#ff0095",
			"children": <Strong
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
			</Strong>
		}
	},
	"br3": {
		"kind": "br",
		"props": {}
	}
};

const Footer0422 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer03302 {...rest}>
		<Override slot="text" font="42px/50.4px " />
		<Override slot="text3" font="500 24px/28.8px --fontFamily-googleMichroma" color="#ff0095">
			Contact
		</Override>
		<Override slot="text5" font="500 24px/28.8px " color="#ff0095" />
		<Override slot="text6" font="500 24px/28.8px --fontFamily-googleMichroma" color="#ff0095" />
		<Override slot="text4" font="300 18px/27px --fontFamily-googleRobotoCondensed" />
		<Override slot="text7" font="300 18px/27px --fontFamily-googleRobotoCondensed">
			Mon to Fri (8 am – 9 pm)
			<br {...override("br")} />
			{"\n"}Sat to Sun (11 am – 10 pm){" "}
			<br {...override("br1")} />
			All times in MST/MDT (Mountain)
			<br {...override("br2")} />
			Paid promotional service offers located{" "}
			<Link {...override("link")} />
		</Override>
		<Override slot="text1" font="300 20px/30px --fontFamily-googleRobotoCondensed" />
		<Override slot="linkBox" font="500 28px/33.6px --fontFamily-googleRobotoCondensed" />
		<Override slot="text2" font="500 20px/30px --fontFamily-googleRobotoCondensed" />
		<Override slot="text9" font="300 18px/27px --fontFamily-googleRobotoCondensed">
			© 2024-2025 XZ1 Recording Ventures
			<br {...override("br3")} />
			Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈{" "}
		</Override>
		<Override slot="button" background="#ff0095" />
		<Override slot="linkBox1" color="#ff0095" />
		<Override slot="box" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1517330283827-2527c57981ad?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /100% repeat scroll padding-box" />
		{children}
	</Footer03302>;
};

Object.assign(Footer0422, { ...Footer03302,
	defaultProps,
	overrides
});
export default Footer0422;