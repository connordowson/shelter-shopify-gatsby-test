const col = {
  greyTint85: "#262626",
  greyTint80: "#333333",
  greyTint73: "#454545",
  greyTint60: "#666666",
  greyTint40: "#999999", // was disabled grey, currently unused
  greyTint20: "#cccccc",
  greyTint10: "#e6e6e6",
  greyTint05: "#f2f2f2",

  white: "#fff",
  accessibleBrand: "#eb001f",
  accessibleBrandHover: "#c8001a",
  brandHoverOnDark: "#ff4760",
  donate: "#008181",
  donateHover: "#046b6b",
  pink: "#f750a0",
  brightBlue: "#269af2",
  nordicBlue: "#336df5",
  visited: "#660099",
  visitedOnDark: "#c95cff",
  blueBackground: "#0079d0",
  darkTextBlue: "#1fa2ff",

  twitter: "#1da1f3",
  facebook: "#3b5998",
  whatsapp: "#25d366",
  error: "#f06424",
  errorLight: "#fce0d3",
  success: "#62b33c",
  successLight: "#e6f8e7",
  amber: "#ffbc3d",

  disabledGrey: "#949494",
  transparent: "transparent",
};

// prettier-ignore
const colorsMap = {
  white: col.white,
  transparent: col.transparent,
  brand: col.accessibleBrand,                 // Used for some borders, infographics, etc
  standardText: col.greyTint80,               // Used for standard text
  secondaryText: col.greyTint60,              // Used for lighter text
  border: col.greyTint20,                     // Used for borders
  borderDark: col.greyTint60,                 // Used for 2px+ borders

  // LINKS, BUTTONS
  primaryLink: col.accessibleBrand,           // Used for primary links
  primaryLinkHover: col.accessibleBrandHover, // Used for primary links hover state
  secondaryButton: col.greyTint80,            // Used for backgrounds, eg secondary button colour / outline
  link: col.nordicBlue,                       // Used for text links on a light background, and button / icon links
  linkHover: col.accessibleBrand,             // Used as a hover state on blue backgrounds
  linkVisited: col.visited,                   // Used for visited text links
  linkVisitedOnDarkBG: col.visitedOnDark,       // Used for visited text links on dark backgrounds
  linkDonate: col.donate,                     // Used for donate buttons / text links
  linkDonateHover: col.donateHover,           // Used for donate hover states
  linkHoverOnDarkBG: col.brandHoverOnDark,    // Used for text links hover on dark backgrounds
  disabled: col.disabledGrey,                 // Used for disabled states

  // BACKGROUNDS
  lightBackground: col.greyTint05,            // Used for light backgrounds
  lightBackgroundHover: col.greyTint10,       // Used as a hover state on light backgrounds
  darkBackground: col.greyTint85,             // Used for dark backgrounds
  altBackground: col.greyTint60,              // Used sparingly, alternate background colour
  altDarkBackground: col.greyTint73,          // Used sparingly as an alternative background colour
  linkBackground: col.blueBackground,         // Used for interactive backgrounds

  infoGraphic: col.brightBlue,                // Secondary colour, can be used for icons and graphical elements
  infoGraphicAlt: col.pink,                   // Secondary colour, can be used for icons and graphical elements

  // SOCIAL COLOURS
  socialTwitter: col.twitter,
  socialFacebook: col.facebook,
  socialWhatsapp: col.whatsapp,

  // UI FEEDBACK
  errorBorder: col.error,                     // Used as a border colour for UI error states
  errorBackground: col.errorLight,            // Used as a background colour for UI error states
  successBorder: col.success,                 // Used as a border colour for UI success states
  successBackground: col.successLight,        // Used as a background colour for UI success states
  alert: col.amber,                           // Used as a background colour for UI warning states

  // LEGACY COLOURS
  // brought through as-is, to be deprecated
  headerBackground: '#e5e5e5',                // Used throughout navigation & header
  headerSecondaryBackground: '#d9d9d9',       // Used throughout navigation & legal header
  legalSidebarDepthBorder: '#d9d9d9',         // Used once in legal sidebar
  footerBlack: '#212122',                     // Used once in footer
  pureBlack: '#000000',                       // Used once in FOSH download CTA
  royalBlue: '#0b0b89',                       // Used as legal svg icon fill
  lightBlue: '#e5edfd',                       // Used once on event card
  black: '#212122',                           // Used on banner text and checkbox input
  overlay: 'rgba(43, 46, 56, 0.7)',
  overlayLight: 'rgba(255, 255, 255, 0.9)',
};

export default colorsMap;
