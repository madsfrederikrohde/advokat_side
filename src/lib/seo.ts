import {
	SITE_URL,
	SITE_NAME,
	BRAND_NAME,
	LEGAL_NAME,
	PREVIOUS_NAME,
	ORG_ID,
	WEBSITE_ID,
	PERSON_HANS_ROHDE_ID,
	ADVOKATSAMFUNDET_ID,
	OFFICE,
	CONTACT,
	SAME_AS,
	AREAS_SERVED,
	KNOWS_ABOUT
} from '$lib/config';
import type { Service, GodtRaad, FaqItem } from '$lib/types';

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export const buildCanonical = (pathname: string) => `${SITE_URL}${pathname}`;

export const absoluteImage = (src?: string) =>
	src ? (src.startsWith('http') ? src : `${SITE_URL}${src}`) : undefined;

const webPageId = (canonical: string) => `${canonical}#webpage`;
const breadcrumbId = (canonical: string) => `${canonical}#breadcrumb`;

// ─── Root-level entities (emitted once in the layout, referenced by @id elsewhere) ───

const postalAddressNode = () => ({
	'@type': 'PostalAddress',
	streetAddress: OFFICE.streetAddress,
	postalCode: OFFICE.postalCode,
	addressLocality: OFFICE.addressLocality,
	addressRegion: OFFICE.addressRegion,
	addressCountry: OFFICE.addressCountry
});

export const organizationNode = () => ({
	'@type': ['LegalService', 'Attorney', 'LocalBusiness'],
	'@id': ORG_ID,
	name: BRAND_NAME,
	legalName: LEGAL_NAME,
	alternateName: [PREVIOUS_NAME, 'Hans Rohde'],
	url: SITE_URL,
	telephone: CONTACT.phone,
	email: CONTACT.email,
	vatID: `DK${CONTACT.cvr}`,
	taxID: CONTACT.cvr,
	priceRange: '$$',
	address: postalAddressNode(),
	geo: {
		'@type': 'GeoCoordinates',
		latitude: OFFICE.latitude,
		longitude: OFFICE.longitude
	},
	areaServed: AREAS_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
	knowsAbout: [...KNOWS_ABOUT],
	memberOf: { '@type': 'Organization', '@id': ADVOKATSAMFUNDET_ID, name: 'Advokatsamfundet' },
	founder: { '@id': PERSON_HANS_ROHDE_ID },
	employee: [{ '@id': PERSON_HANS_ROHDE_ID }],
	description:
		'Uvildig rådgivning om boligkøb, finansiering, byggeri og ejendomsprojekter hos Ejendomsadvokaterne v/ Hans Rohde.',
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: CONTACT.phone,
		email: CONTACT.email,
		contactType: 'customer service',
		areaServed: 'DK',
		availableLanguage: ['Danish', 'English']
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '17:00'
		}
	],
	...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {})
});

export const websiteNode = () => ({
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: SITE_URL,
	name: BRAND_NAME,
	publisher: { '@id': ORG_ID },
	inLanguage: 'da-DK'
});

export const personHansRohdeNode = () => ({
	'@type': 'Person',
	'@id': PERSON_HANS_ROHDE_ID,
	name: 'Hans Rohde',
	jobTitle: 'Advokat (cand.jur.)',
	description:
		'Advokat cand.jur. med over 20 års erfaring inden for fast ejendom, bolighandler, byggeri og ejendomsudvikling.',
	worksFor: { '@id': ORG_ID },
	memberOf: { '@type': 'Organization', '@id': ADVOKATSAMFUNDET_ID, name: 'Advokatsamfundet' },
	knowsLanguage: ['da', 'en'],
	knowsAbout: [...KNOWS_ABOUT],
	url: `${SITE_URL}/om-os`,
	...(SAME_AS.length > 0 ? { sameAs: SAME_AS } : {})
});

/** The root @graph injected once in the layout. */
export const rootGraph = () => ({
	'@context': 'https://schema.org',
	'@graph': [organizationNode(), websiteNode(), personHansRohdeNode()]
});

// ─── Per-page builders ──────────────────────────────────────────────────────────

const baseWebPage = (
	title: string,
	description: string,
	canonical: string,
	opts: { breadcrumbs?: BreadcrumbItem[]; image?: string; type?: string } = {}
) => ({
	'@type': opts.type ?? 'WebPage',
	'@id': webPageId(canonical),
	url: canonical,
	name: title,
	description,
	inLanguage: 'da-DK',
	isPartOf: { '@id': WEBSITE_ID },
	about: { '@id': ORG_ID },
	...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: absoluteImage(opts.image) } } : {}),
	...(opts.breadcrumbs && opts.breadcrumbs.length > 1
		? { breadcrumb: { '@id': breadcrumbId(canonical) } }
		: {})
});

const breadcrumbListNode = (canonical: string, items: BreadcrumbItem[]) => ({
	'@type': 'BreadcrumbList',
	'@id': breadcrumbId(canonical),
	itemListElement: items.map((item, i) => ({
		'@type': 'ListItem',
		position: i + 1,
		name: item.label,
		...(item.href ? { item: `${SITE_URL}${item.href}` } : {})
	}))
});

/** Wrap any per-page node array in a `@graph` envelope referencing root @ids. */
const graph = (nodes: unknown[]) => ({ '@context': 'https://schema.org', '@graph': nodes });

export const buildJsonLd = {
	/** Generic content page (home, ydelser hub, gode-råd hub, priser, boligadvokat hub, legal pages). */
	page(
		title: string,
		description: string,
		canonical: string,
		opts: { breadcrumbs?: BreadcrumbItem[]; image?: string } = {}
	) {
		const nodes: unknown[] = [baseWebPage(title, description, canonical, opts)];
		if (opts.breadcrumbs && opts.breadcrumbs.length > 1) {
			nodes.push(breadcrumbListNode(canonical, opts.breadcrumbs));
		}
		return graph(nodes);
	},

	/** Service detail page — `Service` with provider ref to org and standard `Offer`. */
	service(
		service: Service,
		canonical: string,
		opts: { breadcrumbs?: BreadcrumbItem[] } = {}
	) {
		const title = service.seo?.title ?? service.title;
		const description = service.seo?.description ?? service.shortDescription;
		const nodes: unknown[] = [
			baseWebPage(title, description, canonical, {
				breadcrumbs: opts.breadcrumbs,
				image: service.heroImage.src
			}),
			{
				'@type': 'Service',
				'@id': `${canonical}#service`,
				name: service.title,
				serviceType: service.title,
				description: service.shortDescription,
				url: canonical,
				provider: { '@id': ORG_ID },
				areaServed: AREAS_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
				audience: { '@type': 'PeopleAudience', audienceType: 'Boligkøbere og boligsælgere' },
				offers: {
					'@type': 'Offer',
					priceCurrency: 'DKK',
					availability: 'https://schema.org/InStock',
					businessFunction: 'http://purl.org/goodrelations/v1#ProvideService',
					eligibleRegion: { '@type': 'Country', name: 'Denmark' },
					termsOfService: `${SITE_URL}/forretningsbetingelser`,
					url: `${SITE_URL}/priser`
				},
				mainEntityOfPage: { '@id': webPageId(canonical) }
			}
		];
		if (opts.breadcrumbs && opts.breadcrumbs.length > 1) {
			nodes.push(breadcrumbListNode(canonical, opts.breadcrumbs));
		}
		return graph(nodes);
	},

	/** Article (gode-råd) detail page — full E-E-A-T attribution with author + publisher refs. */
	article(
		article: GodtRaad,
		canonical: string,
		opts: { breadcrumbs?: BreadcrumbItem[] } = {}
	) {
		const title = article.seo?.title ?? article.title;
		const description = article.seo?.description ?? article.shortDescription;
		const nodes: unknown[] = [
			baseWebPage(title, description, canonical, {
				breadcrumbs: opts.breadcrumbs,
				image: article.heroImage.src
			}),
			{
				'@type': 'Article',
				'@id': `${canonical}#article`,
				headline: article.title,
				description: article.shortDescription,
				url: canonical,
				image: { '@type': 'ImageObject', url: absoluteImage(article.heroImage.src) },
				datePublished: article.publishedAt,
				dateModified: article.updatedAt ?? article.publishedAt,
				author: { '@id': PERSON_HANS_ROHDE_ID },
				publisher: { '@id': ORG_ID },
				inLanguage: 'da-DK',
				mainEntityOfPage: { '@id': webPageId(canonical) }
			}
		];
		if (opts.breadcrumbs && opts.breadcrumbs.length > 1) {
			nodes.push(breadcrumbListNode(canonical, opts.breadcrumbs));
		}
		return graph(nodes);
	},

	/**
	 * Location landing page — one `Service` per area, referencing the canonical org.
	 * Avoids duplicating LegalService entities (one firm, many service-areas).
	 */
	locationPage(
		location: { name: string; type: 'by' | 'kommune' | 'bydel' | 'region'; inflected: string },
		title: string,
		description: string,
		canonical: string,
		opts: { breadcrumbs?: BreadcrumbItem[]; image?: string } = {}
	) {
		const areaType =
			location.type === 'region' || location.type === 'kommune'
				? 'AdministrativeArea'
				: 'City';
		const placeId = `${canonical}#place`;
		const nodes: unknown[] = [
			baseWebPage(title, description, canonical, {
				breadcrumbs: opts.breadcrumbs,
				image: opts.image
			}),
			{
				'@type': areaType,
				'@id': placeId,
				name: location.name
			},
			{
				'@type': 'Service',
				'@id': `${canonical}#service`,
				name: `Boligadvokat ${location.inflected}`,
				serviceType: 'Boligadvokat',
				description: `Juridisk rådgivning om bolighandler ${location.inflected} – fra advokatforbehold og købsaftale til tinglysning.`,
				url: canonical,
				provider: { '@id': ORG_ID },
				areaServed: { '@id': placeId },
				audience: { '@type': 'PeopleAudience', audienceType: 'Boligkøbere og boligsælgere' },
				offers: {
					'@type': 'Offer',
					priceCurrency: 'DKK',
					availability: 'https://schema.org/InStock',
					businessFunction: 'http://purl.org/goodrelations/v1#ProvideService',
					url: `${SITE_URL}/priser`
				},
				mainEntityOfPage: { '@id': webPageId(canonical) }
			}
		];
		if (opts.breadcrumbs && opts.breadcrumbs.length > 1) {
			nodes.push(breadcrumbListNode(canonical, opts.breadcrumbs));
		}
		return graph(nodes);
	},

	/** Home/page-level FAQ block — combine with `.page()` by spreading both graphs. */
	faqPage(faqs: FaqItem[], canonical: string) {
		return graph([
			{
				'@type': 'FAQPage',
				'@id': `${canonical}#faq`,
				mainEntity: faqs.map((f) => ({
					'@type': 'Question',
					name: f.question,
					acceptedAnswer: { '@type': 'Answer', text: f.answer }
				}))
			}
		]);
	},

	/** Contact page — uses ContactPage type and references org's contactPoint. */
	contactPage(
		title: string,
		description: string,
		canonical: string,
		opts: { breadcrumbs?: BreadcrumbItem[]; image?: string } = {}
	) {
		const nodes: unknown[] = [
			{
				...baseWebPage(title, description, canonical, opts),
				'@type': 'ContactPage',
				mainEntity: { '@id': ORG_ID }
			}
		];
		if (opts.breadcrumbs && opts.breadcrumbs.length > 1) {
			nodes.push(breadcrumbListNode(canonical, opts.breadcrumbs));
		}
		return graph(nodes);
	},

	/** About page — references the canonical Person (Hans Rohde). */
	aboutPage(
		title: string,
		description: string,
		canonical: string,
		opts: { breadcrumbs?: BreadcrumbItem[]; image?: string } = {}
	) {
		const nodes: unknown[] = [
			{
				...baseWebPage(title, description, canonical, opts),
				'@type': 'AboutPage',
				mainEntity: { '@id': PERSON_HANS_ROHDE_ID }
			}
		];
		if (opts.breadcrumbs && opts.breadcrumbs.length > 1) {
			nodes.push(breadcrumbListNode(canonical, opts.breadcrumbs));
		}
		return graph(nodes);
	}
};

// Keep export name for SITE_NAME consumers.
export { SITE_NAME };
