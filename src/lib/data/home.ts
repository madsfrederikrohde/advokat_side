import type { LifecycleBlock, FaqItem, BodySection } from '$lib/types';

export const homeContent: {
	title: string;
	shortDescription: string;
	heroImage: { src: string; alt: string };
	body: BodySection[];
	seo: { title: string; description: string };
} = {
	title: 'Boligadvokat med erfaren juridisk sparring fra første vurdering til handlen er i hus.',
	shortDescription:
		'Få uvildig rådgivning om boligkøb, finansiering, byggeri og ejendomsprojekter. Vi hjælper også gerne med et gratis advokatforbehold, før du skriver under.',
	heroImage: {
		src: '/copenhagencityy.jpg',
		alt: 'København — fast ejendom og boligkøb'
	},
	body: [
		{
			heading: 'Uvildig rådgivning om boligkøb og fast ejendom',
			paragraphs: [
				'Alle kan i princippet tilbyde køberrådgivning. Men kun advokater er lovmæssigt forpligtet til at yde uvildig rådgivning uden provision eller binding til bestemte banker, kreditforeninger eller forsikringsselskaber.',
				'Ejendomsadvokaterne arbejder med fast ejendom, bolighandler, byggeri og ejendomsudvikling. Målet er ikke blot korrekt jura, men et forløb der føles klart, trygt og ordentligt fra første vurdering til endelig beslutning.'
			]
		},
		{
			heading: 'Vi hjælper blandt andet med følgende',
			bullets: [
				'Gratis advokatforbehold, så handlen kan undersøges før den bliver endelig',
				'Grundig gennemgang af købsaftale, bilag og servitutter',
				'Uvildig second opinion på finansiering og lånetyper',
				'Tinglysning, skøde og refusionsopgørelse',
				'Rådgivning om byggeri, entreprise og ejendomsudvikling'
			]
		}
	],
	seo: {
		title: 'Boligadvokat i København – uvildig rådgivning ved boligkøb',
		description:
			'Boligadvokat i København og omegn. Uvildig rådgivning om boligkøb, advokatforbehold, finansiering og tinglysning. Fast pris, no cure – no pay.'
	}
};

export const lifecycleBlocks: LifecycleBlock[] = [
	{
		id: 'uvildig',
		eyebrow: 'Uvildig rådgivning',
		title: 'Få en advokat på din side før du skriver under.',
		description:
			'Alle kan i princippet tilbyde køberrådgivning. Men kun advokater er lovmæssigt forpligtet til at yde uvildig rådgivning uden provision eller binding til bestemte banker, kreditforeninger eller forsikringsselskaber.',
		image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1800',
		imageAlt: 'Bolig og tryg boligrådgivning',
		roundedClass: 'rounded-r-full',
		ctaLabel: 'Book en afklarende samtale',
		ctaTo: '/kontakt',
		cards: [
			{
				title: 'Gratis advokatforbehold',
				description:
					'Vi hjælper gerne med formuleringen, så du kan få handlen undersøgt før den bliver endelig.'
			},
			{
				title: 'Grundig gennemgang',
				description:
					'Købsaftale, bilag og servitutter bliver læst med fokus på fejl, risici og skjulte konsekvenser.'
			},
			{
				title: 'Ingen handel, ingen regning',
				description:
					'Hvis handlen ikke gennemføres efter advokatforbeholdet, koster rådgivningen ikke noget.'
			}
		]
	}
];

export const faqs: FaqItem[] = [
	{
		question: 'Skal jeg skrive under uden et advokatforbehold?',
		answer:
			'Nej. Et advokatforbehold giver dig mulighed for at få handlen undersøgt, før den bliver endelig. Det kan være afgørende, hvis der dukker noget op i dokumenterne eller finansieringen.'
	},
	{
		question: 'Kan en second opinion på finansieringen betale sig?',
		answer:
			'Ja, ofte. Mange købere er i tvivl om lånetyper, rente og forhandlingsrum. En uvildig vurdering kan give et bedre grundlag for at tale med bank og realkredit.'
	},
	{
		question: 'Hvad skal jeg være opmærksom på ved selve boligen?',
		answer:
			'Beliggenhed, stand, fejl og mangler, ejerskifteforsikring, servitutter og de praktiske forhold omkring overtagelsen er alle forhold, der bør vurderes grundigt.'
	},
	{
		question: 'Hvorfor er tinglysning og refusionsopgørelse vigtige?',
		answer:
			'Korrekt tinglysning sikrer, at du bliver den retmæssige ejer. Refusionsopgørelsen er vigtig, fordi udgifter mellem køber og sælger skal opgøres korrekt på overtagelsesdagen.'
	}
];
