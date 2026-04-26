export const SITE_URL = 'https://ejendomsadvokaterne.dk';

// Brand name used in page titles, OG tags, schema.org `name`.
export const BRAND_NAME = 'Ejendomsadvokaterne';

// Full legal form used for compliance (footer, legal pages, schema.org `legalName`).
// Required because the business is an enkeltmandsvirksomhed under Hans Rohde.
export const LEGAL_NAME = 'Ejendomsadvokaterne v/ Hans Rohde';

// Previous brand, kept as schema.org `alternateName` to preserve brand-name
// recognition in search results during and after the rebrand.
export const PREVIOUS_NAME = 'Advokatfirmaet Hans Rohde';

export const SITE_NAME = BRAND_NAME;

// Brand assets used in JSON-LD `logo`/`image` and as OG fallback. Paths are
// site-absolute so they can be turned into full URLs with SITE_URL.
export const BRAND_LOGO = '/logo.png';
export const DEFAULT_OG_IMAGE = '/copenhagencityy.jpg';

// Stable JSON-LD @id IRIs. Hash fragments make them resolvable but distinct
// from page URLs, so the same entity can be referenced from any page.
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const PERSON_HANS_ROHDE_ID = `${SITE_URL}/#person-hansrohde`;
export const ADVOKATSAMFUNDET_ID = 'https://www.advokatsamfundet.dk/#organization';

// Office contact + address — single source of truth, consumed by schema and UI.
export const OFFICE = {
	streetAddress: 'Hviddingvej 47',
	postalCode: '2610',
	addressLocality: 'Rødovre',
	addressRegion: 'Region Hovedstaden',
	addressCountry: 'DK',
	// Approximate coordinates for Hviddingvej 47, 2610 Rødovre.
	// TODO: verify with authoritative geocoder before relying on local-pack signals.
	latitude: 55.6677,
	longitude: 12.4619
} as const;

export const CONTACT = {
	phone: '+4520317879',
	phoneDisplay: '+45 20 31 78 79',
	email: 'hr@hansrohde.dk',
	cvr: '31304687'
} as const;

// External profiles for schema `sameAs` — strengthens entity disambiguation
// and feeds Knowledge Graph. Add real URLs as profiles are claimed.
// Empty entries are filtered out at render time.
export const SAME_AS: string[] = [
	'https://www.linkedin.com/in/hans-rohde-7246387/',
	// 'https://www.linkedin.com/company/ejendomsadvokaterne/',
	'http://www.advokatnoeglen.dk/firma/advokatfirmaet-hans-rohde-7a1358c0-2915-4a02-a73b-3f7a56f2a130',
	'https://g.page/advokatfirmaet-hans-rohde',
	// 'https://www.krak.dk/...',
	// 'https://www.degulesider.dk/...',
	'https://www.proff.dk/firma/advokatfirmaet-hans-rohde/rødovre/advokater-og-juridiske-tjenester/GXQ9F7I07U6',
	// 'https://dk.trustpilot.com/review/ejendomsadvokaterne.dk'
];

// Areas the firm actively serves (used for schema `areaServed`). Mirrors the
// programmatic location set in $lib/data/locations.ts at the kommune/region level.
export const AREAS_SERVED = [
	'København',
	'Frederiksberg',
	'Rødovre',
	'Hvidovre',
	'Brøndby',
	'Glostrup',
	'Albertslund',
	'Vanløse',
	'Valby',
	'Nordsjælland',
	'Region Hovedstaden'
] as const;

export const KNOWS_ABOUT = [
	'Boligkøb',
	'Boligsalg',
	'Advokatforbehold',
	'Tinglysning',
	'Skøde',
	'Refusionsopgørelse',
	'Ejerlejlighedsret',
	'Andelsboligret',
	'Forældrekøb',
	'Bolighandel',
	'Entrepriseret',
	'Ejendomsudvikling',
	'Servitutter',
	'Lokalplaner'
] as const;
