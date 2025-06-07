import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import Footer0510 from "./Footer0510";
const defaultProps = {};
const overrides = {
	"br": {
		"kind": "br",
		"props": {}
	}
};

const Footer0605 = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Footer0510 {...rest}>
		<Override slot="text4" font="300 18px/27px --fontFamily-googleRobotoCondensed" />
		<Override slot="text7" font="300 18px/27px --fontFamily-googleRobotoCondensed" />
		<Override slot="text9" font="300 18px/27px --fontFamily-googleRobotoCondensed">
			© 2024-2025 XZ1 Recording Ventures
			<br {...override("br")} />
			Owned and operated by BudgieMint (https://ebb.l5.ca) 🏳️‍🌈
		</Override>
		{children}
	</Footer0510>;
};

Object.assign(Footer0605, { ...Footer0510,
	defaultProps,
	overrides
});
export default Footer0605;