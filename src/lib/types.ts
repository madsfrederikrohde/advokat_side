export type HeaderContrast = 'light' | 'dark';

export type NavItem =
	| { kind: 'section'; id: string; label: string }
	| { kind: 'route'; id: string; label: string; to: string };

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
