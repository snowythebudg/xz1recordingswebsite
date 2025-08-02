export default {
	"defaultWidth": 1280,
	"breakpoints": {
		"sm": [
			{
				"type": "max-width",
				"value": 576
			}
		],
		"md": [
			{
				"type": "max-width",
				"value": 768
			}
		],
		"lg": [
			{
				"type": "max-width",
				"value": 992
			}
		]
	},
	"color": {
		"dark": "#04080C",
		"darkL1": "#0E1317",
		"darkL2": "#191E22",
		"grey": "#6F839F",
		"greyD1": "#637897",
		"greyD2": "#586D8E",
		"light": "#F7FBFF",
		"lightD1": "#EDF2F6",
		"lightD2": "#E4E8EC",
		"green": "#00875A",
		"primary": "#0077CC",
		"secondary": "#FFC400",
		"orange": "#FF7C22",
		"red": "#DE350B",
		"purple": "#FD6DF9",
		"indigo": "#9B6CFC"
	},
	"fontFamily": {
		"sans": "-apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
		"sansHeavy": "Impact, Haettenschweiler, 'Franklin Gothic Bold', Charcoal, 'Helvetica Inserat', 'Bitstream Vera Sans Bold', 'Arial Black', sans-serif",
		"sansHelvetica": "Frutiger, 'Frutiger Linotype', Univers, Calibri, 'Gill Sans', 'Gill Sans MT', 'Myriad Pro', Myriad, 'DejaVu Sans Condensed', 'Liberation Sans', 'Nimbus Sans L', Tahoma, Geneva, 'Helvetica Neue', Helvetica, Arial, sans-serif",
		"sansVerdana": "Corbel, 'Lucida Grande', 'Lucida Sans Unicode', 'DejaVu Sans', 'Bitstream Vera Sans', 'Liberation Sans', Verdana, 'Verdana Ref', sans-serif",
		"sansTrebuchet": "'Segoe UI', Candara, 'Bitstream Vera Sans', 'DejaVu Sans', 'Trebuchet MS', Verdana, 'Verdana Ref', sans-serif",
		"mono": "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
		"serifTimes": "Cambria, 'Hoefler Text', Utopia, 'Liberation Serif', 'Nimbus Roman No9 L Regular', Times, 'Times New Roman', serif",
		"serifGeorgia": "Constantia, 'Lucida Bright', Lucidabright, 'Lucida Serif', Lucida, 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', Georgia, serif",
		"serifGaramond": "'Palatino Linotype', Palatino, Palladio, 'URW Palladio L', 'Book Antiqua', Baskerville, 'Bookman Old Style', 'Bitstream Charter', 'Nimbus Roman No9 L', Garamond, 'Apple Garamond', 'ITC Garamond Narrow', 'New Century Schoolbook', 'Century Schoolbook', 'Century Schoolbook L', Georgia, serif",
		"googleOpenSans": "\"Open Sans\", sans-serif",
		"googleComicNeue": "\"Comic Neue\", cursive",
		"googleIbmPlexMono": "\"IBM Plex Mono\", monospace",
		"googleCourierPrime": "\"Courier Prime\", monospace",
		"googleSpaceMono": "\"Space Mono\", monospace",
		"googleVt323": "\"VT323\", monospace",
		"googleLato": "\"Lato\", sans-serif",
		"googleNotoSansKr": "\"Noto Sans KR\", sans-serif",
		"googleKanit": "\"Kanit\", sans-serif",
		"googleTitilliumWeb": "\"Titillium Web\", sans-serif",
		"googleMichroma": "\"Michroma\", sans-serif",
		"googleNotoSans": "\"Noto Sans\", sans-serif",
		"googleRobotoCondensed": "\"Roboto Condensed\", sans-serif",
		"googleNanumGothic": "\"Nanum Gothic\", sans-serif",
		"googleNotoColorEmoji": "\"Noto Color Emoji\", sans-serif",
		"googleCabin": "\"Cabin\", sans-serif",
		"googlePrompt": "\"Prompt\", sans-serif",
		"googleMaterialSymbolsOutlined": "\"Material Symbols Outlined\", monospace",
		"googleMaterialSymbolsRounded": "\"Material Symbols Rounded\", monospace",
		"googleCousine": "\"Cousine\", monospace",
		"googleMajorMonoDisplay": "\"Major Mono Display\", monospace",
		"googleShareTechMono": "\"Share Tech Mono\", monospace",
		"googleSixtyfour": "\"Sixtyfour\", monospace",
		"googleLibreBarcode39Text": "\"Libre Barcode 39 Text\", cursive",
		"googleRubik": "\"Rubik\", sans-serif"
	},
	"font": {
		"headline1": "normal normal 520 72px/1.2 --fontFamily-googleMichroma",
		"headline2": "normal 900 42px/1.2 --fontFamily-googleMichroma",
		"headline3": "normal 500 28px/1.2 --fontFamily-googleMichroma",
		"base": "normal 300 16px/1.5 --fontFamily-googleRobotoCondensed",
		"lead": "normal 300 20px/1.5 --fontFamily-googleRobotoCondensed"
	},
	"boxShadow": {
		"m": "0 4px 5px -1px rgba(0, 0, 0, 0.1)",
		"l": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
		"xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
		"xxl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
	},
	"background": {
		"primaryGradient": "linear-gradient(180deg, --color-primary, transparent) no-repeat 0 0",
		"secondaryGradient": "linear-gradient(180deg, --color-secondary, transparent) no-repeat 0 0"
	},
	"transform": {
		"rotate90": "rotate(90deg)",
		"rotate180": "rotate(180deg)",
		"flipX": "scaleX(-1)",
		"flipY": "scaleY(-1)"
	},
	"transition": {
		"opacityOut": "opacity --transitionDuration-normal --transitionTimingFunction-easeOut",
		"transformOut": "transform --transitionDuration-normal --transitionTimingFunction-easeOut",
		"transformInOut": "transform --transitionDuration-normal --transitionTimingFunction-easeInOut"
	},
	"transitionTimingFunction": {
		"easeIn": "cubic-bezier(0.4, 0, 1, 1)",
		"easeOut": "cubic-bezier(0, 0, 0.2, 1)",
		"easeInOut": "cubic-bezier(0.4, 0, 0.2, 1)",
		"sharp": "cubic-bezier(0.4, 0, 0.6, 1)"
	},
	"transitionDuration": {
		"fastest": "0.1s",
		"fast": "0.2s",
		"normal": "0.3s"
	},
	"filter": {
		"grayscale": "grayscale(100%)",
		"invert": "invert(100%)",
		"blur": "blur(10px)"
	},
	"animation": {},
	"keyframes": {
		"fadeIn": [
			{
				"key": "from",
				"props": [
					{
						"opacity": 0
					}
				]
			},
			{
				"key": "to",
				"props": [
					{
						"opacity": 1
					}
				]
			}
		],
		"fadeOut": [
			{
				"key": "from",
				"props": [
					{
						"opacity": 1
					}
				]
			},
			{
				"key": "to",
				"props": [
					{
						"opacity": 0
					}
				]
			}
		]
	},
	"components": {
		"section": {
			"maxWidth": {
				"default": "1280px"
			},
			"minWidth": {
				"default": "300px"
			},
			"width": {
				"default": "90%"
			}
		},
		"stack": {
			"gap": {
				"default": "32px",
				"small": "16px"
			}
		}
	},
	"fonts": {
		"Open Sans": {
			"family": "Open Sans",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"300italic",
					"italic",
					"500italic",
					"600italic",
					"700italic",
					"800italic"
				]
			}
		},
		"Comic Neue": {
			"family": "Comic Neue",
			"type": "google-fonts",
			"meta": {
				"category": "handwriting",
				"variants": [
					"300",
					"300italic",
					"regular",
					"italic",
					"700",
					"700italic"
				]
			}
		},
		"IBM Plex Mono": {
			"family": "IBM Plex Mono",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"100",
					"100italic",
					"200",
					"200italic",
					"300",
					"300italic",
					"regular",
					"italic",
					"500",
					"500italic",
					"600",
					"600italic",
					"700",
					"700italic"
				]
			}
		},
		"Courier Prime": {
			"family": "Courier Prime",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular",
					"italic",
					"700",
					"700italic"
				]
			}
		},
		"Space Mono": {
			"family": "Space Mono",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular",
					"italic",
					"700",
					"700italic"
				]
			}
		},
		"VT323": {
			"family": "VT323",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular"
				]
			}
		},
		"Lato": {
			"family": "Lato",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"100italic",
					"300",
					"300italic",
					"regular",
					"italic",
					"700",
					"700italic",
					"900",
					"900italic"
				]
			}
		},
		"Noto Sans KR": {
			"family": "Noto Sans KR",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"900"
				]
			}
		},
		"Kanit": {
			"family": "Kanit",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"100italic",
					"200",
					"200italic",
					"300",
					"300italic",
					"regular",
					"italic",
					"500",
					"500italic",
					"600",
					"600italic",
					"700",
					"700italic",
					"800",
					"800italic",
					"900",
					"900italic"
				]
			}
		},
		"Titillium Web": {
			"family": "Titillium Web",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"200",
					"200italic",
					"300",
					"300italic",
					"regular",
					"italic",
					"600",
					"600italic",
					"700",
					"700italic",
					"900"
				]
			}
		},
		"Michroma": {
			"family": "Michroma",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"regular"
				]
			}
		},
		"Noto Sans": {
			"family": "Noto Sans",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"900",
					"100italic",
					"200italic",
					"300italic",
					"italic",
					"500italic",
					"600italic",
					"700italic",
					"800italic",
					"900italic"
				]
			}
		},
		"Roboto Condensed": {
			"family": "Roboto Condensed",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"900",
					"100italic",
					"200italic",
					"300italic",
					"italic",
					"500italic",
					"600italic",
					"700italic",
					"800italic",
					"900italic"
				]
			}
		},
		"Nanum Gothic": {
			"family": "Nanum Gothic",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"regular",
					"700",
					"800"
				]
			}
		},
		"Noto Color Emoji": {
			"family": "Noto Color Emoji",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"regular"
				]
			}
		},
		"Cabin": {
			"family": "Cabin",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"regular",
					"500",
					"600",
					"700",
					"italic",
					"500italic",
					"600italic",
					"700italic"
				]
			}
		},
		"Prompt": {
			"family": "Prompt",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"100",
					"100italic",
					"200",
					"200italic",
					"300",
					"300italic",
					"regular",
					"italic",
					"500",
					"500italic",
					"600",
					"600italic",
					"700",
					"700italic",
					"800",
					"800italic",
					"900",
					"900italic"
				]
			}
		},
		"Material Symbols Outlined": {
			"family": "Material Symbols Outlined",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"100",
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700"
				]
			}
		},
		"Material Symbols Rounded": {
			"family": "Material Symbols Rounded",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"100",
					"200",
					"300",
					"regular",
					"500",
					"600",
					"700"
				]
			}
		},
		"Cousine": {
			"family": "Cousine",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular",
					"italic",
					"700",
					"700italic"
				]
			}
		},
		"Major Mono Display": {
			"family": "Major Mono Display",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular"
				]
			}
		},
		"Share Tech Mono": {
			"family": "Share Tech Mono",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular"
				]
			}
		},
		"Sixtyfour": {
			"family": "Sixtyfour",
			"type": "google-fonts",
			"meta": {
				"category": "monospace",
				"variants": [
					"regular"
				]
			}
		},
		"Libre Barcode 39 Text": {
			"family": "Libre Barcode 39 Text",
			"type": "google-fonts",
			"meta": {
				"category": "display",
				"variants": [
					"regular"
				]
			}
		},
		"Rubik": {
			"family": "Rubik",
			"type": "google-fonts",
			"meta": {
				"category": "sans-serif",
				"variants": [
					"300",
					"regular",
					"500",
					"600",
					"700",
					"800",
					"900",
					"300italic",
					"italic",
					"500italic",
					"600italic",
					"700italic",
					"800italic",
					"900italic"
				]
			}
		}
	},
	"version": 35
}