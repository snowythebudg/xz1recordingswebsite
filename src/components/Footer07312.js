import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer0731 from "./Footer0731";
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
	}
};

const Footer07312 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0731 {...rest}>
		<Override slot="text7">
			Mon to Fri (8 am – 9 pm)
			<br {...override("br")} />
			{"\n"}Sat to Sun (11 am – 10 pm){" "}
			<br {...override("br1")} />
			All times in MST/MDT (Mountain)
			<br {...override("br2")} />
			<br {...override("br3")} />
			Summer closure:
			<br {...override("br4")} />
			We are closed every summer from August 1st to August 20th. This depends on the year as sometimes we might need to stay open due to distribution delays the month prior.
			<br {...override("br5")} />
			<br {...override("br6")} />
			Notice about demos:
			<br {...override("br7")} />
			Please send a demo to the proper channels (our demo portal or Discord). We will not accept demos sent to one of our emails!
		</Override>
		<Override slot="text9">
			© 2025 XZ1 Recording Ventures
			<br {...override("br8")} />
			Site version 1.25.6 (build 07313){"\n\n\n\n\n\n"}
		</Override>
		{children}
	</Footer0731>;
};

Object.assign(Footer07312, { ...Footer0731,
	defaultProps,
	overrides
});
export default Footer07312;