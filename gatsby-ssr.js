const React = require("react");
const QAPI = require("./qapi").default;
const { RawHtml } = require("@quarkly/components");
 const insideHeadRawHtmls = [];
const beforeBodyRawHtmls = [];
 export const onRenderBody = (
    {
        setHeadComponents,
        setPostBodyComponents,
    }
) => {
  const components = RawHtml.getComponents();
  setHeadComponents([
    <style>{`
        body {
            margin: 0;
            padding: 0;
            font-family: sans-serif;
        }
    `}</style>,
    ...components.headItems,
    ...insideHeadRawHtmls,
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open%20Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Comic%20Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM%20Plex%20Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Courier%20Prime:ital,wght@0,400;0,700;1,400;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space%20Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=VT323:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto%20Sans%20KR:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Titillium%20Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Michroma:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto%20Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto%20Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nanum%20Gothic:ital,wght@0,400;0,700;0,800&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto%20Color%20Emoji:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material%20Symbols%20Outlined:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material%20Symbols%20Rounded:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cousine:ital,wght@0,400;0,700;1,400;1,700&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Major%20Mono%20Display:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Share%20Tech%20Mono:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Sixtyfour:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Libre%20Barcode%2039%20Text:ital,wght@0,400&display=swap" />,
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />,
  ]);
   setPostBodyComponents([
    <script
        key="QAPI"
        dangerouslySetInnerHTML={{
            __html: `window.QAPI = ${JSON.stringify(QAPI || {})}`
        }}
    />,
    ...components.bodyItems,
    ...beforeBodyRawHtmls,
  ]);
}
