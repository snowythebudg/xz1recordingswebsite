import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer0605 from "./Footer0605";
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
	"br3": {
		"kind": "br",
		"props": {}
	},
	"br4": {
		"kind": "br",
		"props": {}
	},
	"br5": {
		"kind": "br",
		"props": {}
	},
	"br6": {
		"kind": "br",
		"props": {}
	},
	"br7": {
		"kind": "br",
		"props": {}
	},
	"br8": {
		"kind": "br",
		"props": {}
	},
	"br9": {
		"kind": "br",
		"props": {}
	},
	"br10": {
		"kind": "br",
		"props": {}
	},
	"br11": {
		"kind": "br",
		"props": {
			"display": "none !important"
		}
	}
};

const Footer0731 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0605 {...rest}>
		<Override slot="box" background="rgba(0, 0, 0, 0) url(https://images.unsplash.com/photo-1605510305989-40a12500c2e8?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000) 0% 0% /auto repeat scroll padding-box" />
		<Override slot="text9" text-align="left">
			© 2025 XZ1 Recording Ventures
		</Override>
		<Override slot="text4">
			hello@xz1recordings.ca
			<br {...override("br")} />
			<br {...override("br1")} />
			<br {...override("br2")} />
			If you need urgent help, send an email to distribution@xz1recordings.ca. This email is the quickest way to reach us, if you are in our Discord server. Send a ping!
		</Override>
		<Override slot="text7">
			Mon to Fri (8 am – 9 pm)
			<br {...override("br3")} />
			{"\n"}Sat to Sun (11 am – 10 pm){" "}
			<br {...override("br4")} />
			All times in MST/MDT (Mountain)
			<br {...override("br5")} />
			<br {...override("br6")} />
			Summer closure:
			<br {...override("br7")} />
			We are closed every summer from August 1st to August 20th. This depends on the year as sometimes we might need to stay open due to distribution delays the month prior.
			<br {...override("br8")} />
			<br {...override("br9")} />
			Notice about demos:
			<br {...override("br10")} />
			Please send a demo to the proper channels (our demo portal or Discord). We will not accept demos sent to one of our emails!
Sat to Sun (11 am – 10 pm){" "}
			<br {...override("br11")} />
			All times in MST/MDT (Mountain)
		</Override>
		<Override slot="box4" text-align="center" display="flex" />
		{children}
	</Footer0605>;
};

Object.assign(Footer0731, { ...Footer0605,
	defaultProps,
	overrides
});
export default Footer0731;