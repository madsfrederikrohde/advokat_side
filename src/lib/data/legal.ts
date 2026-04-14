import type { LegalVariant, LegalContent } from '$lib/types';

export const legalContent: Record<LegalVariant, LegalContent> = {
	advokatsamfundet: {
		eyebrow: 'Advokatsamfundet',
		title: 'Oplysninger om branchetilknytning og de rammer, vi arbejder under.',
		intro:
			'Advokatfirmaet Hans Rohde udøver advokatvirksomhed under de regler, der gælder for advokater i Danmark. Siden her samler de overordnede oplysninger om tilsyn, etiske regler og den professionelle ramme omkring rådgivningen.',
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
			'Forretningsbetingelserne beskriver de generelle rammer for samarbejdet. Det konkrete opgaveomfang og eventuelle særlige vilkår aftales altid i relation til den enkelte sag.',
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
					'Honorar fastsættes ud fra opgavens karakter, omfang, kompleksitet og det ansvar, den indebærer. Eventuelle udlæg og tredjemandsomkostninger håndteres efter nærmere aftale.'
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
		eyebrow: 'GDPR',
		title: 'Behandling af personoplysninger med respekt for nødvendighed, sikkerhed og fortrolighed.',
		intro:
			'Når du kontakter Advokatfirmaet Hans Rohde eller indgår i et sagsforløb, kan der behandles personoplysninger som led i kommunikationen og den juridiske rådgivning. Behandlingen sker med fokus på nødvendighed og fortrolighed.',
		sections: [
			{
				heading: 'Formål',
				paragraphs: [
					'Personoplysninger behandles alene i det omfang, det er relevant for at besvare henvendelser, administrere et muligt eller eksisterende klientforhold og gennemføre den aftalte rådgivning.'
				]
			},
			{
				heading: 'Typer af oplysninger',
				paragraphs: [
					'Det kan for eksempel være kontaktoplysninger, sagsmateriale, korrespondance og andre oplysninger, som er nødvendige for den konkrete vurdering eller sagsbehandling.'
				]
			},
			{
				heading: 'Opbevaring og sikkerhed',
				paragraphs: [
					'Oplysninger opbevares kun så længe, det er relevant eller nødvendigt efter sagens karakter og de regler, der gælder for advokatvirksomhed. Der arbejdes løbende med passende organisatoriske og tekniske sikkerhedsforanstaltninger.'
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
			},
			{
				heading: 'Formål og transparens',
				paragraphs: [
					'Formålet er at holde siden stabil, sikker og brugbar. Hvis der senere anvendes yderligere kategorier af cookies eller lignende teknologier, bør dette beskrives særskilt og tydeligt.'
				]
			}
		]
	}
};
