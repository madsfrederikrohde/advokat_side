import { SITE_URL, SITE_NAME } from '$lib/config';
import type { Service, GodtRaad } from '$lib/types';

export interface MetaInput {
	title: string;
	description: string;
	pathname: string;
	image?: string;
	type?: 'website' | 'article' | 'profile';
}

export const buildCanonical = (pathname: string) => `${SITE_URL}${pathname}`;

export const absoluteImage = (src?: string) =>
	src ? (src.startsWith('http') ? src : `${SITE_URL}${src}`) : undefined;

export const buildJsonLd = {
	service(service: Service, canonical: string) {
		return {
			'@context': 'https://schema.org',
			'@type': 'LegalService',
			name: SITE_NAME,
			serviceType: service.title,
			description: service.shortDescription,
			url: canonical,
			areaServed: 'Denmark',
			telephone: '+4520317879'
		};
	},
	article(article: GodtRaad, canonical: string) {
		return {
			'@context': 'https://schema.org',
			'@type': 'Article',
			headline: article.title,
			description: article.shortDescription,
			url: canonical,
			image: absoluteImage(article.heroImage.src),
			author: { '@type': 'Organization', name: SITE_NAME },
			publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
		};
	},
	webPage(title: string, description: string, canonical: string) {
		return {
			'@context': 'https://schema.org',
			'@type': 'WebPage',
			name: title,
			description,
			url: canonical,
			isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL }
		};
	},
	faqPage(faqs: { question: string; answer: string }[]) {
		return {
			'@context': 'https://schema.org',
			'@type': 'FAQPage',
			mainEntity: faqs.map((f) => ({
				'@type': 'Question',
				name: f.question,
				acceptedAnswer: { '@type': 'Answer', text: f.answer }
			}))
		};
	},
	aboutPage(
		canonical: string,
		person: { name: string; jobTitle: string; description: string }
	) {
		return {
			'@context': 'https://schema.org',
			'@type': 'AboutPage',
			url: canonical,
			mainEntity: {
				'@type': 'Person',
				name: person.name,
				jobTitle: person.jobTitle,
				description: person.description,
				worksFor: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL }
			}
		};
	},
	contactPage(
		canonical: string,
		contact: { phone: string; email: string; address?: string }
	) {
		return {
			'@context': 'https://schema.org',
			'@type': 'ContactPage',
			url: canonical,
			mainEntity: {
				'@type': 'Organization',
				name: SITE_NAME,
				url: SITE_URL,
				contactPoint: {
					'@type': 'ContactPoint',
					telephone: contact.phone,
					email: contact.email,
					contactType: 'customer service',
					areaServed: 'Denmark',
					availableLanguage: ['Danish', 'English']
				},
				...(contact.address ? { address: contact.address } : {})
			}
		};
	}
};
