import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "font": "--headline3",
        "transition": "",
        "cursor": "auto",
        "filter": ""
    },
    "index": {
        "font": "--headline3",
        "transition": "",
        "cursor": "auto",
        "filter": ""
    },
    "demos": {
        "font": "--headline3",
        "transition": "",
        "cursor": "auto",
        "filter": ""
    },
    "welcomenewclient": {
        "font": "--headline3",
        "transition": "",
        "cursor": "auto",
        "filter": ""
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
