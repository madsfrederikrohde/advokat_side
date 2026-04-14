import type { FeatureTab, LifecycleBlock, Package, FaqItem } from '$lib/types';

export const featureTabs: FeatureTab[] = [
	{
		id: 'boligkoeb',
		label: 'Boligkøb',
		title: 'Tryg køberrådgivning fra advokatforbehold til nøgleoverdragelse.',
		description:
			'Vi gennemgår købsaftale og dokumenter, forhandler vilkår, udarbejder godkendelsesskrivelse og følger handlen helt frem til skøde og refusionsopgørelse.',
		media: 'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80&w=1800',
		mediaAlt: 'Huskøb og dokumentgennemgang'
	},
	{
		id: 'finansiering',
		label: 'Finansiering',
		title: 'Uvildig second opinion på bankens finansieringsforslag.',
		description:
			'Få sparring om lån, rente og vilkår, og brug vores erfaring til at vurdere finansieringen en gang til, før du binder dig. Vi hjælper også, hvis du vil have sagen vurderet igen ved bankskifte.',
		media: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1800',
		mediaAlt: 'Finansieringsrådgivning med tal og dokumenter'
	},
	{
		id: 'raadgivning',
		label: 'Rådgivning',
		title: 'Juridisk rådgivning om bolig, byggeri og fast ejendom.',
		description:
			'Vi bistår med blandt andet entreprise, hegn, servitutter, lejeret og andre spørgsmål, hvor fast ejendom, byggeri og jura mødes i praksis.',
		media: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1800',
		mediaAlt: 'Byggeri og juridisk rådgivning'
	},
	{
		id: 'ejendomsudvikling',
		label: 'Udvikling',
		title: 'Erfaring med strukturering og gennemførelse af ejendomsprojekter.',
		description:
			'Fra udvikling og investering til komplekse transaktioner og energiprojekter. Vi skaber overblik over de juridiske lag og fører processen sikkert videre.',
		media: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1800',
		mediaAlt: 'Ejendomsudvikling og bygningsprojekter'
	}
];

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
		ctaTo: '/contact',
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
	},
	{
		id: 'erfaring',
		eyebrow: 'Mere end 20 års erfaring',
		title: 'Erfaring fra både privat boligkøb, komplekse transaktioner og store energiprojekter.',
		description:
			'Hans Rohde har arbejdet med alle aspekter af fast ejendom i over 20 år og har baggrund fra blandt andet Københavns Kommune, By- og Boligministeriet, Better Energy og egen advokatvirksomhed.',
		image: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1800',
		imageAlt: 'Erfaring med ejendomsprojekter og transaktioner',
		roundedClass: 'rounded-l-full',
		ctaLabel: 'Læs mere om Hans Rohde',
		ctaTo: '/about',
		reverse: true,
		cards: [
			{
				title: 'Praktisk erfaring',
				description:
					'Rådgivningen er formet af både myndighedsarbejde, advokatpraksis og in-house erfaring.'
			},
			{
				title: 'Juridisk tyngde',
				description:
					'Vi arbejder med både privat bolighandel, byggeri, udvikling, investering og tvister om fast ejendom.'
			},
			{
				title: 'Projektforståelse',
				description:
					'Komplekse ejendomsprojekter kræver mere end jura alene. Vi ser også på struktur, timing og gennemførlighed.'
			}
		]
	}
];

export const packages: Package[] = [
	{
		name: 'Boligpakke 1',
		price: '6.995 kr.',
		subtitle: 'Advokatgennemgang af købsaftale og dokumenter',
		description:
			'Til dig der vil have en grundig juridisk gennemgang af handlen og et sikkert beslutningsgrundlag, før du godkender købet.',
		features: [
			'Gennemgang af købsaftale og bilag',
			'Vurdering af servitutter og juridiske risici',
			'Skriftlig tilbagemelding og anbefalinger',
			'Gratis advokatforbehold før underskrift'
		],
		cta: 'Vælg boligpakke 1',
		to: '/contact',
		dark: false
	},
	{
		name: 'Boligpakke 2',
		price: '9.995 kr.',
		subtitle: 'Gennemgang, forhandling og godkendelsesskrivelse',
		description:
			'Til dig der vil have juridisk sparring hele vejen gennem forhandling og accept af handlen, ikke kun en dokumentgennemgang.',
		features: [
			'Alt i boligpakke 1',
			'Forhandling af juridiske vilkår',
			'Udarbejdelse af godkendelsesskrivelse',
			'Dialog med mægler frem til endelig handel'
		],
		cta: 'Vælg boligpakke 2',
		to: '/contact',
		dark: true
	},
	{
		name: 'Boligpakke 3',
		price: '14.495 kr.',
		subtitle: 'Komplet pakke med finansieringsrådgivning',
		description:
			'Til dig der vil kombinere juridisk køberrådgivning med uvildig sparring om finansiering, lån og bankens løsningsforslag.',
		features: [
			'Alt i boligpakke 2',
			'Uvildig second opinion på finansiering',
			'Sparring om lån, rente og vilkår',
			'Vejledning om forhandlingsmuligheder over for bank og realkredit'
		],
		cta: 'Vælg boligpakke 3',
		to: '/contact',
		dark: false
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
