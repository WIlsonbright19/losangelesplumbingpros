// Replace every [PLACEHOLDER] value before launch.

export const NAME = "Los Angeles Plumbing Pros";
export const PHONE_DISPLAY = "(310) 861-9785";
export const PHONE_TEL = "+13108619785";
export const ADDRESS_LINE = "1901 E Gage Ave, Los Angeles, CA 90001";
export const LOCATION_NOTE = "Located in Plaza Americana";

// When false, hide the address and location note everywhere visible and omit the address from JSON-LD
export const SHOW_ADDRESS = true;

// When true, show the 24-hour messages and trust item; when false, none of them appear and no "24", "emergency" or "any hour" wording remains
export const OPEN_24_HOURS = true;

export const HOURS_LINE = "Open 24 hours";
export const RATING_VALUE = "5.0";

// Google rating as of launch; update periodically
export const REVIEW_COUNT = "20";

// Empty until provided; example format "CA License #XXXXXXX"; if non-empty show it in the trust strip and footer, otherwise show neither
export const LICENSE_LINE: string = "";

// When true, show "Se habla español" in the hero sentence and the trust strip; the EN | ES site toggle works regardless
export const SPEAKS_SPANISH = false;

export const SITE_URL = "[SITE URL]";
export const GOOGLE_REVIEWS_URL =
  "https://maps.google.com/?cid=3035142717290540271&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQQAhgEIAA";

export const AREAS = [
  "Los Angeles",
  "South Los Angeles",
  "Greater Los Angeles",
];
