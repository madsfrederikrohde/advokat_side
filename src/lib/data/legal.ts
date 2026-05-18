import type { LegalVariant, LegalContent } from '$lib/types';

export const legalContent: Record<LegalVariant, LegalContent> = {
	advokatsamfundet: {
		eyebrow: 'Advokatsamfundet',
		title: 'Oplysninger om branchetilknytning og de rammer, vi arbejder under.',
		intro:
			'Ejendomsadvokaterne udøver advokatvirksomhed under de regler, der gælder for advokater i Danmark. Siden her samler de overordnede oplysninger om tilsyn, etiske regler og den professionelle ramme omkring rådgivningen.',
		sections: [
			{
				heading: 'Professionel ramme',
				paragraphs: [
					'Advokatvirksomhed i Danmark er underlagt særlige regler om uafhængighed, fortrolighed og god advokatskik. Det er en væsentlig del af grundlaget for den rådgivning, der ydes til klienter.',
					'For klienten betyder det blandt andet, at rådgivningen skal være loyal, fagligt forsvarlig og uden uvedkommende interesser.'
				]
			},
			{
				heading: 'Tilsyn og ansvar',
				paragraphs: [
					'Advokatvirksomhed er underlagt de regler og det tilsyn, som gælder efter dansk ret. Hvis du ønsker nærmere information om klagemuligheder eller de generelle regler for advokater, kan du kontakte virksomheden for nærmere vejledning.'
				]
			}
		]
	},
	politikker: {
		eyebrow: 'Politikker',
		title: 'Overordnede principper for fortrolighed, ordentlighed og ansvarlig sagsbehandling.',
		intro:
			'Her beskrives de bærende principper for, hvordan henvendelser, sager og oplysninger håndteres i praksis. Politikkerne skal skabe gennemsigtighed om arbejdsgange, kommunikation og forventninger.',
		sections: [
			{
				heading: 'Fortrolighed',
				paragraphs: [
					'Oplysninger behandles fortroligt og med respekt for sagens karakter. Der deles ikke oplysninger med uvedkommende, og materialet håndteres med fokus på diskretion og professionel ansvarlighed.'
				]
			},
			{
				heading: 'Kommunikation',
				paragraphs: [
					'Målet er en klar og præcis kommunikation, så klienten forstår både de juridiske forhold, de praktiske konsekvenser og de valg, der skal træffes undervejs.'
				]
			},
			{
				heading: 'Kvalitet og ansvar',
				paragraphs: [
					'Sager håndteres med vægt på faglig kvalitet, tydelige anbefalinger og realistiske forventninger til proces, risici og tidsforløb.'
				]
			}
		]
	},
	forretningsbetingelser: {
		eyebrow: 'Forretningsbetingelser',
		title: 'De generelle vilkår for samarbejde, opgaveomfang og honorar.',
		intro:
			'Forretningsbetingelserne beskriver de generelle rammer for samarbejdet. Det konkrete opgaveomfang og eventuelle særlige vilkår aftales altid i relation til den enkelte sag. Du modtager altid en skriftlig ordrebekræftelse med de aftalte vilkår, inden opgaven sættes i gang.',
		sections: [
			{
				heading: 'Opgavens omfang',
				paragraphs: [
					'Rådgivningen afgrænses efter den konkrete aftale. Det er vigtigt, at der er klarhed om, hvilke forhold der indgår i opgaven, og hvilke forhold der eventuelt kræver særskilt aftale.'
				]
			},
			{
				heading: 'Honorar og udlæg',
				paragraphs: [
					'Honorar fastsættes ud fra opgavens karakter, omfang, tidsforbrug, kompleksitet og det ansvar, den indebærer. Eventuelle udlæg og tredjemandsomkostninger håndteles efter nærmere aftale.'
				]
			},
			{
				heading: 'Samarbejde og forudsætninger',
				paragraphs: [
					'Et godt forløb forudsætter rettidige oplysninger og relevant dokumentation. Rådgivningen bygger på det materiale og de oplysninger, der er til rådighed på tidspunktet for vurderingen.'
				]
			}
		]
	},
	gdpr: {
		eyebrow: 'GDPR - Persondatalovgivningen og dine rettigheder',
		title: 'GDPR - Persondatalovgivningen og dine rettigheder',
		intro:
			'Databeskyttelse og behandling af personoplysninger',
		sections: [
			{
				heading: 'Formål og retsgrundlag',
				paragraphs: [
					'I forbindelse med den juridiske bistand og rådgivning, som Advokat Hans Rohde leverer til dig, er det nødvendigt at behandle personoplysninger om dig. Behandlingen sker for at kunne varetage dine interesser og yde korrekt, relevant og fagligt forsvarlig rådgivning.'
				],
				bullets: [
					'Databeskyttelsesforordningens artikel 6, stk. 1, litra b (opfyldelse af en kontrakt)',
					'Databeskyttelsesforordningens artikel 6, stk. 1, litra c (opfyldelse af retlige forpligtelser, herunder bogførings- og hvidvaskregler)',
					'Databeskyttelsesforordningens artikel 6, stk. 1, litra f (legitim interesse, når relevant)',
					'Databeskyttelsesforordningens artikel 9, stk. 2, litra f (retskrav), hvis behandling af følsomme oplysninger er nødvendig',
					'Databeskyttelseslovens §§ 6 og 7',
					'Databeskyttelseslovens § 11, stk. 2, nr. 3 og 4 (CPR-numre)',
					'Hvidvaskloven, når dette er relevant for klientidentifikation'
				]
			},
			{
				heading: 'Kategorier af personoplysninger',
				paragraphs: [
					'De oplysninger, der behandles, omfatter blandt andet:',
					'Der kan løbende blive behov for yderligere oplysninger, og du informeres, når vi beder om dem.'
				],
				bullets: [
					'Identifikations- og kontaktoplysninger',
					'Sags- og dokumentationsoplysninger',
					'Eventuelle følsomme oplysninger, hvis det er nødvendigt for sagen',
					'CPR-nummer, når det er nødvendigt for fx tinglysning eller identifikation',
					'Oplysninger indhentet fra modparter, myndigheder og andre involverede i sagen'
				]
			},
			{
				heading: 'Modtagere af personoplysninger',
				paragraphs: [
					'Videregivelse af oplysninger sker alene, når det er nødvendigt for at varetage dine interesser, herunder til:',
					'Advokater er underlagt streng tavshedspligt efter retsplejeloven. Oplysninger videregives ikke til uvedkommende.',
					'Digitale oplysninger opbevares hos vores IT-leverandør, som fungerer som databehandler og alene behandler oplysninger efter instruks. Der er indgået databehandleraftale i overensstemmelse med databeskyttelsesreglerne.',
					'Tredjelande Der sker som udgangspunkt ingen overførsel til lande uden for EU/EØS. Hvis det bliver nødvendigt, vil du blive informeret særskilt.'
				],
				bullets: [
					'Domstole',
					'Myndigheder',
					'Modparter og deres repræsentanter',
					'Andre relevante aktører i sagen'
				]
			},
			{
				heading: 'Hvor stammer oplysningerne fra',
				paragraphs: [
					'Oplysningerne stammer primært fra dig selv. Herudover kan der modtages nødvendige oplysninger fra modparter, myndigheder eller andre aktører involveret i sagen.'
				]
			},
			{
				heading: 'Opbevaring af oplysninger',
				paragraphs: [
					'Oplysninger opbevares, så længe sagen er aktiv, og normalt i fem år efter sagens afslutning. Dette sker af hensyn til dokumentation, krav om bogføring og almindelig advokatansvarspraksis. I særlige tilfælde kan længere opbevaring være nødvendig.'
				]
			},
			{
				heading: 'Dine rettigheder',
				paragraphs: [
					'Du har efter databeskyttelsesforordningen en række rettigheder, herunder:',
					'Der kan i advokatforhold forekomme begrænsninger i rettighederne, særligt henset til tavshedspligt, dokumentationskrav og varetagelse af retskrav.',
					'Hvis du ønsker at gøre brug af dine rettigheder, kan du kontakte os direkte.'
				],
				bullets: [
					'Ret til indsigt',
					'Ret til berigtigelse',
					'Ret til sletning (med de begrænsninger der følger af bl.a. advokatens pligt til dokumentation)',
					'Ret til begrænsning af behandling',
					'Ret til dataportabilitet',
					'Ret til indsigelse mod behandlingen'
				]
			},
			{
				heading: 'Klageadgang',
				paragraphs: [
					'Hvis du ønsker at klage over behandlingen af dine personoplysninger, kan du rette henvendelse til:',
					'Datatilsynet Carl Jacobsens Vej 35 2500 Valby www.datatilsynet.dk',
					'Du er altid velkommen til først at rette henvendelse til os med spørgsmål.',
					'17.05.2026'
				]
			}
		]
	},
	cookies: {
		eyebrow: 'Cookiepolitik',
		title: 'Information om brugen af cookies og lignende teknologier på siden.',
		intro:
			'Siden anvender nødvendige cookies og tekniske funktioner, der understøtter drift, sikkerhed og basal funktionalitet. Der lægges vægt på en enkel og tilbageholdende brug af teknologier, som ikke forstyrrer oplevelsen unødigt.',
		sections: [
			{
				heading: 'Nødvendige cookies',
				paragraphs: [
					'Nødvendige cookies kan bruges til at sikre, at siden fungerer teknisk korrekt, og at essentielle funktioner som navigation, grundlæggende sikkerhed og sessionsrelateret drift virker som forventet.'
				]
			}
		]
	}
};
