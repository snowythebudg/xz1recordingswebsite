import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer0308 from "./Footer0308";
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
	}
};

const Footer0510 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0308 {...rest}>
		<Override slot="text4">
			hello@xz1recordings.ca
		</Override>
		<Override slot="button" type="link" href="/demos" background="#ff0095" />
		<Override slot="text7">
			Mon to Fri (8 am – 9 pm)
			<br {...override("br")} />
			{"\n"}Sat to Sun (11 am – 10 pm){" "}
			<br {...override("br1")} />
			All times in MST/MDT (Mountain)
		</Override>
		<Override slot="text9">
			© 2024-2025 XZ1 Recording Ventures
			<br {...override("br2")} />
			Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈{"\n\n"}
		</Override>
		<Override slot="linkBox" href="mailto:hello@xz1recordings.ca" />
		<Override slot="box" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1643388019606-9173b24bcafb?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box" />
		<Override slot="text" font="normal 400 42px/1.2 " />
		<Override slot="text1" font="normal 300 20px/1.5 --fontFamily-googleRobotoCondensed" />
		<Override slot="text2" font="normal 500 20px/1.5 --fontFamily-googleRobotoCondensed" />
		<Override slot="text3" color="#ff0095" font="normal 500 24px/1.2 --fontFamily-googleMichroma" />
		<Override slot="text5" color="#ff0095" font="normal 500 24px/1.2 --fontFamily-googleMichroma" />
		<Override slot="text6" color="#ff0095" font="normal 500 24px/1.2 --fontFamily-googleMichroma" />
		{children}
	</Footer0308>;
};

Object.assign(Footer0510, { ...Footer0308,
	defaultProps,
	overrides
});
export default Footer0510;