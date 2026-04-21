import type { GodtRaad } from '$lib/types';

const defaultImage = { src: '/copenhagencityy.jpg', alt: 'Københavnsk boligområde' };

export const godtRaad: GodtRaad[] = [
	{
		slug: 'advokatforbehold',
		title: 'Brug altid et advokatforbehold før du skriver under',
		navLabel: 'Advokatforbehold',
		heroImage: defaultImage,
		shortDescription:
			'Et advokatforbehold giver dig mulighed for at få købet undersøgt, før du er endeligt bundet. Det er ofte den vigtigste sikkerhedsventil i hele processen.',
		body: [
			{
				heading: 'Hvad er et advokatforbehold?',
				paragraphs: [
					'Et advokatforbehold er en klausul i købsaftalen, der giver dig ret til at ophæve handlen, hvis din advokat finder juridiske eller praktiske forhold, der ikke er acceptable. Forbeholdet aktiveres typisk inden for 3–5 hverdage efter underskrift, og i den periode er du reelt ikke bundet af aftalen.',
					'Forbeholdet skal formuleres præcist i selve købsaftalen. Det er ikke nok at have en mundtlig aftale med sælger om, at du "vil have det set an" – kun et skriftligt og korrekt formuleret forbehold giver den nødvendige juridiske beskyttelse.',
					'Mange ejendomsmæglere bruger standardformuleringer, der kan være tilstrækkelige, men det er altid en god idé at sikre sig, at ordlyden faktisk dækker de forhold, du ønsker undersøgt.'
				]
			},
			{
				heading: 'Hvad gennemgås i forbeholdsperioden?',
				paragraphs: [
					'Når forbeholdet er aktiveret, gennemgår advokaten alle relevante dokumenter og forhold ved ejendommen. Det er her, det bliver klart, om der er problemstillinger, du bør tage stilling til, inden du binder dig endeligt.',
					'Typiske punkter i gennemgangen inkluderer:'
				],
				bullets: [
					'Servitutter og deklarationer tinglyst på ejendommen',
					'Ejerforeningens vedtægter, referater og økonomi (ved ejerlejligheder)',
					'Lokalplan og kommuneplanrammer for området',
					'Ejerskifteforsikring og tilstandsrapport',
					'Eventuel forurening eller VVM-screeninger',
					'Byggetilladelser og BBR-oplysninger',
					'Pantehæftelser og øvrige tinglyste rettigheder'
				]
			},
			{
				heading: 'Hvad sker der uden forbehold?',
				paragraphs: [
					'Skriver du under uden et advokatforbehold, er du som udgangspunkt bundet af handlen fra det øjeblik, begge parter har underskrevet. Det er stadig muligt at ophæve handlen, men det kræver enten sælgers accept eller anvendelse af fortrydelsesretten – og fortrydelsesretten er forbundet med en godtgørelse på 1 % af købesummen.',
					'Uden forbehold reduceres dit handlerum markant, og selv alvorlige juridiske problemer med ejendommen kan være svære at bruge som ophævelsesgrundlag, hvis de ikke var udtrykkeligt taget forbehold for.'
				]
			},
			{
				heading: 'Formulering og varighed',
				paragraphs: [
					'En typisk forbeholdsperiode er på 3–5 hverdage fra aftalens indgåelse. Det er vigtigt, at perioden er lang nok til, at alle dokumenter kan indhentes og gennemgås – særligt ved ejerlejligheder, hvor ejerforeningens materiale kan tage tid at fremskaffe.',
					'Formulér gerne forbeholdet bredt, så det dækker både juridiske og faktiske forhold. Et snævert formuleret forbehold, der kun nævner "juridisk gennemgang", kan skabe tvivl om, hvorvidt for eksempel tekniske forbehold i tilstandsrapporten er dækket.'
				]
			},
			{
				heading: 'Hvis der opstår problemer',
				paragraphs: [
					'Finder advokaten forhold, der giver anledning til bekymring, er der som regel tre muligheder: ophæve handlen inden fristens udløb, forhandle en ændret pris eller særlige vilkår med sælger, eller acceptere forholdene som de er og gå videre med købet.',
					'Selv i tilfælde, hvor forbeholdet ikke udløser en ophævelse, er det sjældent spildt. Kendskab til ejendommens forhold giver et langt bedre grundlag for at tage den rigtige beslutning – og for at vide, hvad du køber.'
				]
			}
		],
		seo: {
			description:
				'Forstå hvad et advokatforbehold er, hvad der gennemgås i perioden, og hvorfor det er afgørende at have ét på plads, inden du underskriver en købsaftale.'
		}
	},
	{
		slug: 'finansiering',
		title: 'Få en second opinion på finansieringen',
		navLabel: 'Boligfinansiering',
		heroImage: defaultImage,
		shortDescription:
			'Finansieringen er en stor del af boligkøbet, og det er ikke altid oplagt, hvilken kombination af lån og vilkår der passer bedst til din situation.',
		body: [
			{
				heading: 'Bankens rolle i boligfinansieringen',
				paragraphs: [
					'Når du køber bolig, vil banken typisk præsentere dig for et finansieringsforslag, der kombinerer realkreditlån og eventuelt et banklån. Forslaget er udarbejdet på baggrund af dine oplysninger og bankens egne produkter – og det er ikke altid det, der er billigst eller mest hensigtsmæssigt for dig på lang sigt.',
					'Banken har naturligvis interesse i at sælge sine egne produkter, og rådgivningen foregår inden for rammerne af bankens eget sortiment. Det er ikke nødvendigvis dårlig rådgivning, men det er en begrænsning, der kan betyde, at du ikke ser det fulde billede.'
				]
			},
			{
				heading: 'Fast eller variabel rente?',
				paragraphs: [
					'Et af de store valg i finansieringen er, om du ønsker et fastforrentet lån eller et lån med variabel rente. Begge har fordele og ulemper, og det rigtige valg afhænger af din økonomi, din tidshorisont og din risikovilje.',
					'Centrale spørgsmål at overveje:'
				],
				bullets: [
					'Fastforrentet lån: sikkerhed og forudsigelighed, men typisk højere startydelse',
					'F1/F3/F5-lån: lavere rente på kort sigt, men risiko for rentestigninger ved refinansiering',
					'Afdragsfrihed: lavere ydelse i en periode, men stigende gæld i afdragsfriheden',
					'Lånets løbetid og den samlede tilbagebetalte sum over lånets levetid',
					'Kursskæring og gebyrer ved optagelse af realkreditlån'
				]
			},
			{
				heading: 'Hvad indebærer en second opinion?',
				paragraphs: [
					'En uvildig vurdering af finansieringsforslaget handler ikke om at anfægte bankens rådgivning, men om at sikre, at du forstår, hvad du skriver under på, og at du har overvejet alternativer. Det kan dreje sig om at sammenligne renter på tværs af realkreditinstitutter, vurdere om lånestørrelsen er hensigtsmæssig, eller gennemgå vilkårene for banklånet.',
					'Gennemgangen kan også afdække, om der er elementer i forslaget, som er unødigt dyre eller kan forhandles. Gebyrer, bidragssatser og kurser varierer mellem institutter og kan have stor betydning for den samlede låneomkostning.'
				]
			},
			{
				heading: 'Afslag og bankskifte',
				paragraphs: [
					'Har du fået afslag på finansiering, er det ikke nødvendigvis et udtryk for, at du ikke kan finansiere boligkøbet. Afslag kan skyldes måden, sagen er struktureret og præsenteret – og en genfremsendelse til en anden bank eller et andet realkreditinstitut kan give et andet resultat.',
					'I forbindelse med bankskifte kan det være relevant at få vurderet, om din økonomi præsenteres bedst muligt, herunder hvilke aktiver og forpligtelser der er mest relevante at fremhæve, og om der er dokumentation, der kan styrke sagen.'
				]
			},
			{
				heading: 'At se på den samlede risiko',
				paragraphs: [
					'Formålet er ikke at komplicere købet, men at skabe ro om en beslutning, der typisk skal bæres i mange år. En finansieringsstruktur, der passer til dit liv i dag, passer ikke nødvendigvis, hvis renten stiger, hvis din indkomst ændrer sig, eller hvis du om fem år ønsker at sælge.',
					'At bruge lidt tid på at forstå de lange linjer i finansieringen er sjældent spildt – og det er næsten altid billigere end at opdage det for sent.'
				]
			}
		],
		seo: {
			description:
				'Forstå dit finansieringsforslag, forskellen på fast og variabel rente, og hvornår en second opinion på bankens låneforslag kan gøre en reel forskel.'
		}
	},
	{
		slug: 'tinglysning',
		title: 'Tinglysning og refusionsopgørelse er ikke bare formaliteter',
		navLabel: 'Tinglysning',
		heroImage: defaultImage,
		shortDescription:
			'Købet slutter ikke ved underskrift. Det er afgørende, at skøde og opgørelser bliver håndteret korrekt, så overtagelsen og ejerskiftet falder på plads som de skal.',
		body: [
			{
				heading: 'Hvad er tinglysning?',
				paragraphs: [
					'Tinglysning er den officielle registrering af rettigheder over fast ejendom i det digitale tinglysningssystem, der administreres af Tinglysningsretten. Når du køber en ejendom, sikrer tinglysningen af skødet, at du er registreret som den retmæssige ejer i det offentlige register.',
					'Tinglysning er ikke blot en formalitet – det er den juridiske bekræftelse af dit ejerskab og en forudsætning for, at du kan sælge ejendommen igen eller optage lån med sikkerhed i den. Uden tinglyst skøde er dit ejerskab ikke beskyttet over for tredjemand.'
				]
			},
			{
				heading: 'Tinglysningsprocessen i praksis',
				paragraphs: ['I forbindelse med et boligkøb er der typisk flere dokumenter, der skal tinglyses:'],
				bullets: [
					'Skøde — overdragelsen af ejendommen fra sælger til køber',
					'Pantebrev — hvis der optages realkreditlån eller banklån med pant i ejendommen',
					'Servitutter — særlige rettigheder eller rådighedsindskrænkninger, der følger med ejendommen',
					'Aflysning af sælgers eksisterende pantehæftelser, der ikke overtages'
				]
			},
			{
				heading: 'Hvad er en refusionsopgørelse?',
				paragraphs: [
					'Refusionsopgørelsen er en opgørelse over, hvordan løbende udgifter og indtægter ved ejendommen fordeles mellem køber og sælger pr. overtagelsesdagen. Det gælder for eksempel ejendomsskat, fællesudgifter til ejerforeningen, vand- og varmeforbrug, forudbetalt leje (ved udlejningsejendomme) og lignende poster.',
					'En korrekt refusionsopgørelse sikrer, at ingen af parterne betaler mere end deres andel af de løbende udgifter. Fejl i opgørelsen kan medføre, at køber eller sælger ender med at betale for perioder, de ikke har haft glæde af ejendommen.'
				]
			},
			{
				heading: 'Typiske fejlkilder',
				paragraphs: [
					'Selv om processen virker rutinepræget, opstår der fejl oftere end man skulle tro. Hyppige problemstillinger inkluderer forkert opgørelse af ejerudgifter ved ejerforeninger, manglende aflysning af sælgers pantehæftelser, forsinkelse i tinglysningen som skaber usikkerhed om ejerskab, og fejl i skødets beskrivelse af ejendommens areal eller matrikelnummer.',
					'Digitale fejl i Tinglysningssystemet kan desuden opstå, hvis dokumenterne ikke er udfyldt korrekt – og afvisninger fra systemet kan forsinke processen og i værste fald give køber et problem, hvis sælger i mellemtiden får kreditorer eller andre rettigheder registreret.'
				]
			},
			{
				heading: 'Hvornår er handlen juridisk afsluttet?',
				paragraphs: [
					'Mange opfatter underskriften på købsaftalen som handelens afslutning, men juridisk set er processen ikke komplet, før skødet er tinglyst uden anmærkning, alle betalinger er gennemført, og refusionsopgørelsen er godkendt og afregnet af begge parter.',
					'Selv om det kan lyde som baggrundsarbejde, er det netop her de sidste praktiske fejl kan opstå, hvis processen ikke følges tæt. En grundig afslutning af handlen er ikke bare god skik – det er den eneste måde at sikre, at du som køber står med et fuldstændigt og ubestrideligt ejerskab.'
				]
			}
		],
		seo: {
			description:
				'Lær hvad tinglysning og refusionsopgørelse indebærer, hvilke dokumenter der skal tinglyses ved boligkøb, og hvordan fejl i processen kan undgås.'
		}
	}
];

export function getGodtRaad(slug: string): GodtRaad | undefined {
	return godtRaad.find((a) => a.slug === slug);
}

export function otherGodtRaad(currentSlug: string, limit = 8): GodtRaad[] {
	return godtRaad.filter((a) => a.slug !== currentSlug).slice(0, limit);
}

export function godtRaadPath(a: GodtRaad): string {
	return `/gode-raad/${a.slug}`;
}
