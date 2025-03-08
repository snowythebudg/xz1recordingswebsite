import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer from "./Footer";
const defaultProps = {};
const overrides = {
	"br": {
		"kind": "br",
		"props": {}
	}
};

const Footer2 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer {...rest}>
		<Override slot="text">
			© 2024-2025 XZ1 Recording Ventures, a division of BluWave Digital Entertainment (https://bluwavedigital.netlify.app)
			<br {...override("br")} />
			Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈
		</Override>
		<Override slot="icon" background="#000000" color="--purple" />
		{children}
	</Footer>;
};

Object.assign(Footer2, { ...Footer,
	defaultProps,
	overrides
});
export default Footer2;