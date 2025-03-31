import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer0330 from "./Footer0330";
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
	}
};

const Footer03302 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0330 {...rest}>
		<Override slot="text4">
			hello@xz1recordings.ca - General
			<br {...override("br")} />
			finance@xz1recordings.ca - Finance
			<br {...override("br1")} />
			distribution@xz1recordings.ca - Distribution
			<br {...override("br2")} />
			artistservices@xz1recordings.ca - Artist services
			<br {...override("br3")} />
			publishing@xz1recordings.ca - Publishing
		</Override>
		{children}
	</Footer0330>;
};

Object.assign(Footer03302, { ...Footer0330,
	defaultProps,
	overrides
});
export default Footer03302;