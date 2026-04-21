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

export interface ServiceBodySection {
	heading?: string;
	paragraphs?: string[];
	bullets?: string[];
}

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

export interface FeatureTab {
	id: string;
	label: string;
	title: string;
	description: string;
	media: string;
	mediaAlt: string;
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

export interface Package {
	name: string;
	price: string;
	subtitle: string;
	description: string;
	features: string[];
	cta: string;
	to: string;
	dark: boolean;
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
