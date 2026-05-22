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
		title: 'Stamoplysninger, klientoplysning og forretningsbetingelser for Ejendomsadvokaterne (Advokatfirmaet Hans Rohde)',
		intro:
			'Stamoplysninger, klientoplysning og forretningsbetingelser for Ejendomsadvokaterne.',
		sections: [
			{
				heading: 'Stamoplysninger',
				paragraphs: [
					'Advokat Hans Rohde er beskikket af Justitsministeriet i Danmark og er medlem af Advokatsamfundet.',
					'Adresse: Hviddingvej 47 2610 Rødovre',
					'Kontakt: Telefon: +45 20 31 78 79 E-mail: hr@hansrohde.dk',
					'CVR-nummer 31 30 46 87'
				]
			},
			{
				heading: 'Opgaven',
				paragraphs: [
					'Den juridiske bistands karakter, omfang og afgrænsning aftales ved opstart og løbende. Rådgivningen tilpasses den enkelte klients forhold og må ikke anvendes til andre formål uden forudgående skriftlig accept.',
					'Klienten får de nødvendige brugsrettigheder til det udarbejdede materiale, mens Ejendomsadvokaterne bevarer immaterielle rettigheder, herunder ophavsrettigheder.',
					'Advokatfirmaet kan ophøre med at repræsentere klienten, hvis klienten misligholder disse betingelser, undlader betaling, bliver insolvent eller hvis andre væsentlige forhold gør fortsat bistand uforsvarlig.',
					'Advokatfirmaet er underlagt god advokatskik, jf. retsplejelovens § 126, samt de advokatetiske regler. Reglerne kan findes på www.advokatsamfundet.dk.'
				]
			},
			{
				heading: 'Interessekonflikter',
				paragraphs: [
					'Før en sag påtages, kontrolleres det, at der ikke foreligger interesse- eller loyalitetskonflikter i overensstemmelse med Advokatsamfundets regler og firmaets interne procedurer.'
				]
			},
			{
				heading: 'Hvidvasklovgivningen',
				paragraphs: [
					'Advokatfirmaet er omfattet af lov om forebyggende foranstaltninger mod hvidvask af penge og finansiering af terrorisme. Dette indebærer, at der skal indsamles og opbevares identitetsoplysninger i minimum fem år.',
					'Ved sagens oprettelse skal klienten oplyse navn, adresse og CPR- eller CVR-nummer samt fremvise nødvendig legitimation. For selskaber skal der desuden foreligge oplysninger om reelle ejere.',
					'Hvis der opstår mistanke om hvidvask eller terrorfinansiering, kan firmaet være forpligtet til at undersøge transaktioner og eventuelt underrette relevante myndigheder.',
					'Klienten er forpligtet til at gennemgå kundekendskabsprocedure via advokatfirmaets onboardingsystem, leveret af Visma Creditro.'
				]
			},
			{
				heading: 'Fortrolighed',
				paragraphs: [
					'Alle oplysninger, der modtages som led i en sag, behandles som fortrolige efter gældende ret, de advokatetiske regler og firmaets interne politikker.'
				]
			},
			{
				heading: 'Forsikring og ansvarsbegrænsning',
				paragraphs: [
					'Ejendomsadvokaterne er ansvarlig for rådgivningen efter dansk rets almindelige regler.',
					'Rådgivningen omfatter alene direkte tab. Følgeskader og indirekte tab, herunder driftstab, tab af data og goodwill, erstattes ikke. Advokatfirmaet er ikke ansvarlig for ydelser leveret af tredjemand, selv om disse er anbefalet eller koordineret af advokatfirmaet.'
				]
			},
			{
				heading: 'Ansvarsforsikring',
				paragraphs: [
					'Advokat Hans Rohde har tegnet ansvarsforsikring og garantiordning hos CNA Insurance Company (Europe) S.A. Forsikringsdækningen opfylder Advokatsamfundets minimumskrav og omfatter advokatvirksomhed med en dækningssum på 2,5 mio. kr. pr. skade samt garantiordning på 5 mio. kr.'
				]
			},
			{
				heading: 'Ansvarsbegrænsning',
				paragraphs: [
					'Advokatfirmaets ansvar i en konkret sag er begrænset til et beløb, der maksimalt svarer til tre gange det fakturerede honorar i den pågældende sag, medmindre andet er skriftligt aftalt.',
					'Ved større sager eller transaktioner kan der efter særskilt aftale tegnes udvidet eller supplerende forsikringsdækning med højere dækningssum. Klienten informeres herom, hvis sagens karakter giver anledning til øget risiko.'
				]
			},
			{
				heading: 'Honorar',
				paragraphs: [
					'Honorar fastsættes efter en samlet vurdering, hvor bl.a. følgende forhold indgår:',
					'Visse af firmaets forbrugerrettede advokatydelser udføres til fast pris. Se nærmere prisoplysning på vores hjemmeside: www.ejendomsadvokaterne.dk. Forbrugere modtager altid forud for igangsætning af sagen en skriftlig ordrebekræftelse med prisoplysning.',
					'I henhold til retsplejelovens § 126, stk. 2, må honoraret ikke overstige, hvad der kan anses for rimeligt.',
					'Tvister om salær kan indbringes for Advokatnævnet.'
				],
				bullets: [
					'Tidsforbrug',
					'Specialkompetencer',
					'Opgavens kompleksitet',
					'Tidsmæssigt pres',
					'Opgavens betydning for klienten',
					'Det ansvar, opgaven indebærer',
					'Resultatet'
				]
			},
			{
				heading: 'Fakturering og betalingsbetingelser',
				paragraphs: [
					'Ved længerevarende eller større opgaver faktureres der som udgangspunkt månedligt bagud. Ved mindre opgaver faktureres ved opgavens afslutning.',
					'Betalingsfristen er otte dage netto. Der tillægges moms efter gældende regler. Ved forsinket betaling beregnes morarenter i henhold til renteloven.',
					'Advokatfirmaet kan kræve forudbetaling, hvis sagens karakter eller klientens forhold begrunder det.',
					'Klientmidler forvaltes i overensstemmelse med Advokatsamfundets regler. Eventuelle renter tilfalder klienten, og eventuelle negative renter afholdes af klienten.'
				]
			},
			{
				heading: 'Udlæg',
				paragraphs: [
					'Klienten betaler særskilt for omkostninger til tredjemand, herunder retsafgifter, tinglysningsafgifter, gebyrer, rejseomkostninger, forsendelse, samt større kopieringsopgaver.',
					'Hvis advokaten skal stille sikkerhed for syn og skøn, og der ikke er retshjælpsdækning eller fri proces, debiteres klienten de forventede omkostninger.'
				]
			},
			{
				heading: 'Opbevaring af sagsakter',
				paragraphs: [
					'Originale dokumenter udleveres senest ved sagens afslutning. Sagsakter opbevares i mindst fem år derefter.'
				]
			},
			{
				heading: 'Lovvalg og værneting',
				paragraphs: [
					'Enhver tvist mellem klienten og Ejendomsadvokaterne afgøres efter dansk ret med Københavns Byret som aftalt værneting.',
					'Dato 17. april 2026'
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
					'I forbindelse med den juridiske bistand og rådgivning, som Ejendomsadvokaterne leverer til dig, er det nødvendigt at behandle personoplysninger om dig. Behandlingen sker for at kunne varetage dine interesser og yde korrekt, relevant og fagligt forsvarlig rådgivning.'
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
