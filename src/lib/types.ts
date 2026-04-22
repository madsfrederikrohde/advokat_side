export type HeaderContrast = 'light' | 'dark';

export type NavItem =
	| { kind: 'route'; id: string; label: string; to: string }
	| { kind: 'dropdown'; id: string; label: string; to: string };

export type ServiceCategorySlug = 'boligkoeb' | 'fast-ejendom' | 'familiearveret';

export interface ServiceCategory {
	slug: ServiceCategorySlug;
	title: string;
	description: string;
	order: number;
}

export interface BodySection {
	heading?: string;
	paragraphs?: string[];
	bullets?: string[];
}

/** @deprecated use BodySection */
export type ServiceBodySection = BodySection;

export interface Service {
	slug: string;
	category: ServiceCategorySlug;
	title: string;
	navLabel: string;
	heroImage: { src: string; alt: string };
	shortDescription: string;
	body: ServiceBodySection[];
	seo?: { title?: string; description?: string };
}

export interface LifecycleCard {
	title: string;
	description: string;
}

export interface LifecycleBlock {
	id: string;
	eyebrow: string;
	title: string;
	description: string;
	image: string;
	imageAlt: string;
	roundedClass: string;
	ctaLabel: string;
	ctaTo: string;
	cards: LifecycleCard[];
	reverse?: boolean;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface TimelineItem {
	period: string;
	role: string;
	detail: string;
}

export interface Article {
	id: string;
	title: string;
	excerpt: string;
	category: string;
}

export interface ArticleDetail {
	category: string;
	title: string;
	intro: string;
	paragraphs: string[];
}

export interface GodtRaad {
	slug: string;
	title: string;
	navLabel: string;
	heroImage: { src: string; alt: string };
	shortDescription: string;
	body: ServiceBodySection[];
	seo?: { title?: string; description?: string };
}

export type LegalVariant =
	| 'advokatsamfundet'
	| 'politikker'
	| 'forretningsbetingelser'
	| 'gdpr'
	| 'cookies';

export interface LegalSection {
	heading: string;
	paragraphs: string[];
	bullets?: string[];
}

export interface LegalContent {
	eyebrow: string;
	title: string;
	intro: string;
	sections: LegalSection[];
}
