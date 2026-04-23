import type { TimelineItem, BodySection } from '$lib/types';

export const aboutContent: {
	title: string;
	shortDescription: string;
	heroImage: { src: string; alt: string };
	body: BodySection[];
	seo: { title: string; description: string };
	person: { name: string; jobTitle: string; description: string };
} = {
	title: 'Erfaring, ro og præcision i rådgivning om fast ejendom.',
	shortDescription:
		'Ejendomsadvokaterne arbejder med fast ejendom, bolighandler, byggeri og ejendomsudvikling. Målet er ikke blot korrekt jura, men et forløb der føles klart, trygt og ordentligt fra første vurdering til endelig beslutning.',
	heroImage: {
		src: '/copenhagencityy.jpg',
		alt: 'Hans Rohde med udsigt over København'
	},
	body: [
		{
			heading: 'Over 20 års erfaring med fast ejendom',
			paragraphs: [
				'Hans Rohde er advokat cand.jur. og har gennem mere end 20 år rådgivet om alle lag af fast ejendom. Baggrunden spænder fra offentlig forvaltning og ministerier til selvstændig advokatvirksomhed, partnerskab og ledende in-house ansvar inden for legal real estate.',
				'Det giver et perspektiv hvor dokumenter, risici og rettigheder altid ses i sammenhæng med de praktiske og økonomiske konsekvenser. Rådgivningen skal være fagligt stærk, men også brugbar i virkeligheden.'
			]
		},
		{
			heading: 'En mere enkel og gennemarbejdet måde at være advokat på',
			paragraphs: [
				'Den bedste rådgivning er præcis, men også rolig at navigere i. Derfor lægges vægt på klare anbefalinger, tydelige forbehold og en proces, hvor klienten hele tiden ved hvad sagen handler om, og hvad næste skridt er.',
				'Erfaringen fra både myndighed, advokatpraksis og in-house ledelse betyder, at juridiske spørgsmål ikke kun vurderes i teorien. De vurderes også i forhold til timing, forhandling, gennemførelse og det faktiske beslutningsrum i sagen.',
				'Det gælder både ved privat boligkøb, større ejendomstransaktioner, udviklingsprojekter og andre sager, hvor fast ejendom og jura mødes i praksis.'
			]
		}
	],
	seo: {
		title: 'Om os',
		description:
			'Hans Rohde er advokat cand.jur. med over 20 års erfaring inden for fast ejendom, bolighandler, byggeri og ejendomsudvikling.'
	},
	person: {
		name: 'Hans Rohde',
		jobTitle: 'Advokat',
		description:
			'Advokat cand.jur. med over 20 års erfaring inden for fast ejendom, bolighandler, byggeri og ejendomsudvikling.'
	}
};

export const timeline: TimelineItem[] = [
	{
		period: '2024-',
		role: 'EiGN ApS',
		detail: 'Arbejder videre med rådgivning og udvikling inden for fast ejendom og relaterede projekter.'
	},
	{
		period: '2018-2024',
		role: 'Vice President, Better Energy A/S',
		detail: 'Head of Legal Real Estate med ansvar for komplekse ejendomsforhold, strukturering og gennemførelse.'
	},
	{
		period: '2017-2018',
		role: 'Partner og medejer, Advokatfirmaet Gangsted-Rasmussen I/S',
		detail: 'Partnerskab med fokus på fast ejendom, transaktioner og klientrådgivning.'
	},
	{
		period: '2008-2017',
		role: 'Advokatfirmaet Hans Rohde',
		detail:
			'Selvstændig advokatvirksomhed med fokus på bolighandel, rådgivning og juridisk håndtering af fast ejendom.'
	},
	{
		period: '2001-2008',
		role: 'Københavns Kommune og Advokatfirmaet Lademann',
		detail:
			'Fra specialkonsulent og myndighedsarbejde til advokatfuldmægtig med solid praksisnær ballast.'
	},
	{
		period: '1996-2001',
		role: 'Københavns Kommune, By- og Boligministeriet og Erhvervsministeriet',
		detail:
			'Tidlige år med fokus på offentlig forvaltning, regulering og rammerne omkring byggeri og bolig.'
	}
];
