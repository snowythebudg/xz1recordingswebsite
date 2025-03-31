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
	},
	"br3": {
		"kind": "br",
		"props": {}
	},
	"br4": {
		"kind": "br",
		"props": {}
	}
};

const Footer0330 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0308 {...rest}>
		<Override slot="text4">
			hello@xz1recordings.com - General
			<br {...override("br")} />
			finance@xz1recordings.ca - Finance
			<br {...override("br1")} />
			distribution@xz1recordings.ca - Distribution
			<br {...override("br2")} />
			artistservices@xz1recordings.ca - Artist services
			<br {...override("br3")} />
			publishing@xz1recordings.ca - Publishing
		</Override>
		<Override slot="text9">
			© 2024-2025 XZ1 Recording Ventures
			<br {...override("br4")} />
			Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈{"\n\n"}
		</Override>
		<Override slot="linkBox" href="mailto:hello@xz1recordings.ca" />
		<Override slot="button" type="link" href="/demos" />
		{children}
	</Footer0308>;
};

Object.assign(Footer0330, { ...Footer0308,
	defaultProps,
	overrides
});
export default Footer0330;