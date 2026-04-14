import type { Article, ArticleDetail } from '$lib/types';

export const articles: Article[] = [
	{
		id: 'advokatforbehold',
		title: 'Brug altid et advokatforbehold før du skriver under',
		excerpt:
			'Et korrekt formuleret advokatforbehold giver dig tid til at få handlen og dokumenterne gennemgået, før købet bliver endeligt.',
		category: 'Boligkøb'
	},
	{
		id: 'finansiering',
		title: 'Få en second opinion på finansieringen',
		excerpt:
			'Det kan gøre en stor forskel at få bankens forslag vurderet udefra, særligt hvis du er i tvivl om lån, rente eller vilkår.',
		category: 'Boligfinansiering'
	},
	{
		id: 'tinglysning',
		title: 'Tinglysning og refusionsopgørelse er ikke bare formaliteter',
		excerpt:
			'Korrekt tinglysning og en præcis refusionsopgørelse er centrale dele af en tryg overtagelse og et korrekt afsluttet køb.',
		category: 'Praktik'
	}
];

export const articleDetails: Record<string, ArticleDetail> = {
	advokatforbehold: {
		category: 'Boligkøb',
		title: 'Brug altid et advokatforbehold før du skriver under',
		intro:
			'Et advokatforbehold giver dig mulighed for at få købet undersøgt, før du er endeligt bundet. Det er ofte den vigtigste sikkerhedsventil i hele processen.',
		paragraphs: [
			'Når købsaftalen er underskrevet uden forbehold, er dit handlerum meget mindre. Med et advokatforbehold kan dokumenterne blive læst grundigt igennem, og du kan få vurderet de juridiske og praktiske forhold, før handlen låses fast.',
			'Det er også her, det bliver tydeligt om der er forhold i servitutter, ejerforening, lokalplan, forurening eller andre dokumenter, som bør give anledning til yderligere spørgsmål eller forhandling.',
			'Hvis du er i tvivl om formuleringen, kan det betale sig at få professionel hjælp med teksten. Et uklart forbehold kan i værste fald give mindre sikkerhed, end du tror.'
		]
	},
	finansiering: {
		category: 'Boligfinansiering',
		title: 'Få en second opinion på finansieringen',
		intro:
			'Finansieringen er en stor del af boligkøbet, og det er ikke altid oplagt, hvilken kombination af lån og vilkår der passer bedst til din situation.',
		paragraphs: [
			'En uvildig vurdering kan være nyttig, hvis du vil forstå forskellen på de lån, banken foreslår, eller hvis du er i tvivl om renteniveau, fleksibilitet og den samlede risiko i løsningen.',
			'Det kan også være relevant, hvis du har fået afslag og gerne vil have sagen set på igen i forbindelse med bankskifte. Nogle gange ligger forskellen i, hvordan sagen er struktureret og forklaret.',
			'Formålet er ikke at komplicere købet, men at skabe ro om en beslutning, der typisk skal bæres i mange år.'
		]
	},
	tinglysning: {
		category: 'Praktik',
		title: 'Tinglysning og refusionsopgørelse er ikke bare formaliteter',
		intro:
			'Købet slutter ikke ved underskrift. Det er afgørende, at skøde og opgørelser bliver håndteret korrekt, så overtagelsen og ejerskiftet falder på plads som de skal.',
		paragraphs: [
			'Tinglysningen sikrer, at du bliver registreret som retmæssig ejer. Hvis den del ikke håndteres korrekt og rettidigt, kan det skabe usikkerhed om et ellers afsluttet køb.',
			'Refusionsopgørelsen er vigtig, fordi udgifter mellem køber og sælger skal fordeles præcist omkring overtagelsesdagen. Det gælder for eksempel ejerudgifter, forbrug og andre løbende poster.',
			'Selv om det kan lyde som baggrundsarbejde, er det ofte netop her de sidste praktiske fejl kan opstå, hvis processen ikke er styret ordentligt.'
		]
	}
};
