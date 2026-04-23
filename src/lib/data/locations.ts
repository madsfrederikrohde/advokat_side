import type { BodySection } from '$lib/types';

export type LocationType = 'by' | 'kommune' | 'bydel' | 'region';

export interface Location {
	slug: string;
	name: string;
	/** Danish inflected form with preposition, e.g. "på Frederiksberg", "i København" */
	inflected: string;
	type: LocationType;
	/** True while content is templated; excluded from sitemap and served with noindex. */
	draft: boolean;
	heroImage: { src: string; alt: string };
	/** Short pitch used as page lead and meta description. */
	intro: string;
	body: BodySection[];
	seo: { title: string; description: string };
}

const defaultHero = (name: string) => ({
	src: '/copenhagencityy.jpg',
	alt: `Boligadvokat i ${name}`
});

const servicesSection = (inflected: string): BodySection => ({
	heading: `Sådan hjælper vi dig med din bolighandel`,
	paragraphs: [
		`Vi gennemgår købsaftalen og samtlige bilag – herunder tilstandsrapport, elinstallationsrapport, energimærke, BBR-meddelelse, tingbogsattest, servitutter og lokalplaner – og sikrer, at de nødvendige forbehold er indsat i aftalen. Vi varetager tinglysning af skøde og pantebrev og holder øje med, at de aftalte frister bliver overholdt. Du får en erfaren boligadvokat, der står på din side – ikke på ejendomsmæglerens.`,
		`Vi arbejder på <a href="/priser" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">no cure – no pay</a>-vilkår til en fast pris. Det betyder, at du kender udgiften på forhånd, og at der ikke er noget advokatsalær, hvis handlen ikke gennemføres. Kontakt os for en uforpligtende snak om din kommende bolighandel ${inflected}.`
	]
});

export const locations: Location[] = [
	{
		slug: 'frederiksberg',
		name: 'Frederiksberg',
		inflected: 'på Frederiksberg',
		type: 'kommune',
		draft: false,
		heroImage: defaultHero('Frederiksberg'),
		intro:
			'Søger du en boligadvokat på Frederiksberg? Vi kender området. En bolighandel er en stor beslutning – vores opgave er at sikre, at du ikke køber bolig for dyrt eller oplever ubehagelige overraskelser ved køb eller salg af bolig.',
		body: [
			{
				heading: 'Boligmarkedet på Frederiksberg',
				paragraphs: [
					'Frederiksberg er en af hovedstadsområdets mest eftertragtede bydele. Området kombinerer klassisk karréarkitektur, grønne åndehuller som Frederiksberg Have og Søndermarken og et pulserende byliv omkring Værnedamsvej, Gammel Kongevej og Frederiksberg Allé. Efterspørgslen er høj, og priserne er blandt de højeste i landet, hvilket stiller ekstra krav til en grundig juridisk gennemgang, når handlen skal lukkes.',
					'Boligmassen er domineret af ejerlejligheder i ældre ejendomme fra slutningen af 1800-tallet og begyndelsen af 1900-tallet. Mod Søndermarken og langs de mindre villaveje finder man desuden byvillaer og enkelte rækkehuse, mens der også opføres nybyggeri i de få ledige karréer. Hver bygningstype har sine juridiske særheder – fredede ejendomme, fællesudgifter, gårdlaug og servitutter er eksempler på forhold, der kan have stor betydning for handlen.'
				]
			},
			{
				heading: 'Særlige forhold ved en ejerlejlighed på Frederiksberg',
				paragraphs: [
					'Når du køber en <a href="/ydelser/boligkoeb/ejerlejlighed" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">ejerlejlighed</a> på Frederiksberg, er foreningens økonomi og vedtægter helt afgørende. Vi gennemgår regnskab, budget, referater fra generalforsamlingen og vedligeholdelsesplan og vurderer, om der er udsigt til større fællesudgifter – eksempelvis altanprojekter, tagudskiftning eller facaderenovering. En ejendom midt i en større renovering kan få væsentlig indflydelse på både pris og finansiering.',
					'Mange ejendomme på Frederiksberg har desuden bevaringsværdi eller er decideret fredet. Det begrænser, hvad du må ændre ved lejligheden og facaden, og kræver i nogle tilfælde særlig tilladelse fra kommunen. Vi sikrer, at du kender rammerne, før du skriver under.'
				]
			},
			servicesSection('på Frederiksberg')
		],
		seo: {
			title: 'Boligadvokat på Frederiksberg',
			description:
				'Boligadvokat på Frederiksberg til fast pris og no cure – no pay. Vi kender området og sikrer, at din bolighandel gennemføres trygt.'
		}
	},
	{
		slug: 'koebenhavn',
		name: 'København',
		inflected: 'i København',
		type: 'by',
		draft: false,
		heroImage: defaultHero('København'),
		intro:
			'Søger du en boligadvokat i København? Vi rådgiver købere og sælgere i hele byen – fra Indre By og brokvartererne til Amager, Nordhavn og Ørestad. Vi sikrer, at du ikke køber bolig for dyrt eller oplever juridiske overraskelser undervejs.',
		body: [
			{
				heading: 'Et nuanceret boligmarked',
				paragraphs: [
					'København består af vidt forskellige bydele med hver deres boligmarked. Indre By og Christianshavn byder på historiske ejendomme med servitutter, bevaringspligter og i mange tilfælde komplicerede gårdforhold. Brokvartererne – Østerbro, Nørrebro og Vesterbro – er domineret af klassiske karréejendomme, hvor ejerforeningens vedtægter og vedligeholdelsesstand er afgørende for handlens tryghed. I Nordhavn, Ørestad og Sydhavn opføres der løbende nybyggeri, som har sine helt egne juridiske faldgruber omkring bygherreansvar, fejl og mangler samt manglende referencer på byggeriets kvalitet.',
					'Uanset hvilken bydel du kigger efter, sikrer vi, at du får det fulde overblik over den bolig, du er ved at købe – juridisk, økonomisk og teknisk.'
				]
			},
			{
				heading: 'Ejerlejlighed, andelsbolig eller nybyggeri?',
				paragraphs: [
					'I København handler langt de fleste boliger som <a href="/ydelser/boligkoeb/ejerlejlighed" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">ejerlejlighed</a> eller <a href="/ydelser/boligkoeb/andelsbolig" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">andelsbolig</a>. Ved andelsboliger er foreningens regnskab, vedtægter, eventuelle swap-lån og maksimalpriser helt centrale for din sikkerhed som køber. Ved ejerlejligheder ligger fokus typisk på vedtægter, fordelingstal og igangværende eller forestående projekter.',
					'Køber du nybyggeri – for eksempel i Ørestad, Nordhavn eller på de nye havnearealer – rådgiver vi om særlige forhold som sælgers fortrydelsesret, 1- og 5-års gennemgang, mangelsliste og sikkerhedsstillelse. Mange købere af nybyggeri opdager desværre først for sent, at deres forbehold var utilstrækkelige.'
				]
			},
			servicesSection('i København')
		],
		seo: {
			title: 'Boligadvokat i København',
			description:
				'Boligadvokat i København – rådgivning ved køb og salg af ejerlejlighed, andelsbolig, villa og nybyggeri i hele hovedstaden. Fast pris, no cure – no pay.'
		}
	},
	{
		slug: 'roedovre',
		name: 'Rødovre',
		inflected: 'i Rødovre',
		type: 'kommune',
		draft: false,
		heroImage: defaultHero('Rødovre'),
		intro:
			'Søger du en boligadvokat i Rødovre? Vi rådgiver købere og sælgere i hele kommunen – fra villakvartererne omkring Rødovre Centrum til rækkehusene i Islev og lejlighederne langs Roskildevej. Vi sikrer en tryg handel uden ubehagelige overraskelser.',
		body: [
			{
				heading: 'Boligmarkedet i Rødovre',
				paragraphs: [
					'Rødovre er en af de københavnske forstæder, hvor mange familier bosætter sig, når pladsen i byen bliver for trang. Kommunen ligger tæt på København med hurtig adgang via S-togslinjerne og Ring 3, og den tilbyder en kombination af relativt overkommelige priser, grønne områder og solid infrastruktur. Boligmassen er præget af <a href="/ydelser/boligkoeb/villa" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">villaer</a> og parcelhuse fra 1950’erne, 60’erne og 70’erne samt rækkehuse og mindre lejlighedskomplekser.',
					'Selvom Rødovre ofte fremstår som et mere overskueligt marked end det centrale København, betyder det ikke, at en handel er mindre kompleks. Ældre parcelhuse har typisk en lang vedligeholdelseshistorik, og tilstandsrapport, fugtforhold, tag, kloak og elinstallationer skal gennemgås med særlig omhu.'
				]
			},
			{
				heading: 'Hvad skal du være særligt opmærksom på?',
				paragraphs: [
					'I parcelhuskvartererne i Rødovre støder vi ofte på servitutter om byggelinjer, fælles ledninger og adgangsveje, som kan have stor betydning for, hvad du senere kan bygge til eller om. Vi undersøger lokalplaner, tingbog og kommunale registreringer grundigt, så du ikke står med en overraskelse, når drømmen om en tilbygning eller en ny carport skal realiseres.',
					'Hvis du køber en ældre ejendom, er det desuden vigtigt at få styr på, om tidligere om- eller tilbygninger er lovligt opført og registreret i BBR. Ulovligt opførte kvadratmeter kan blive dyre at legalisere – og ansvaret er som udgangspunkt dit, når først skødet er tinglyst.'
				]
			},
			servicesSection('i Rødovre')
		],
		seo: {
			title: 'Boligadvokat i Rødovre',
			description:
				'Boligadvokat i Rødovre til fast pris og no cure – no pay. Vi gennemgår din bolighandel grundigt og sikrer, at der er styr på BBR, servitutter og tilstand.'
		}
	},
	{
		slug: 'hvidovre',
		name: 'Hvidovre',
		inflected: 'i Hvidovre',
		type: 'kommune',
		draft: false,
		heroImage: defaultHero('Hvidovre'),
		intro:
			'Søger du en boligadvokat i Hvidovre? Vi hjælper dig sikkert igennem bolighandlen – uanset om du køber parcelhus i Risbjerggård-kvarteret, rækkehus i Avedøre Stationsby eller lejlighed tæt på Hvidovre Station.',
		body: [
			{
				heading: 'Boligmarkedet i Hvidovre',
				paragraphs: [
					'Hvidovre er en af de klassiske københavnske forstæder og et populært valg for børnefamilier, der ønsker egen have uden at flytte langt fra byen. Kommunen har en varieret boligmasse med parcelhuse fra efterkrigstiden, nyere rækkehuse, andelsboliger og ejerlejligheder. Området er velforsynet med skoler, daginstitutioner og grønne områder, og S-togslinjen A samt motorvejsnettet giver hurtig adgang til både København og resten af hovedstadsområdet.',
					'Som boligkøber i Hvidovre er det typisk det enkelte hus eller den enkelte ejendoms historik, der afgør, om handlen bliver en god investering. En grundig juridisk gennemgang er derfor vigtig – også på et marked, der umiddelbart virker overskueligt.'
				]
			},
			{
				heading: 'Avedøre Holme, strandgrunde og ældre ejendomme',
				paragraphs: [
					'Dele af Hvidovre – særligt omkring Avedøre Holme og kystnære områder – er underlagt lokalplaner og servitutter, der kan have betydning for anvendelse, tilbygning og erhvervsmæssig brug. Ved ejendomme tæt på kysten skal man være opmærksom på strandbeskyttelseslinjen, som kan begrænse byggeretten markant.',
					'I ældre parcelhuse ser vi ofte renoveringer, tilbygninger og inddragede kældre, der ikke altid er korrekt registreret. Vi gennemgår BBR, byggesagsarkiv og lokalplan, så du har klarhed over, hvad du reelt køber, og hvad du må i fremtiden. Skal handlen finansieres, rådgiver vi også om <a href="/ydelser/boligkoeb/boligfinansiering" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">boligfinansiering</a> og sammensætningen af dit lån.'
				]
			},
			servicesSection('i Hvidovre')
		],
		seo: {
			title: 'Boligadvokat i Hvidovre',
			description:
				'Boligadvokat i Hvidovre – fast pris og no cure – no pay. Vi sikrer tryg bolighandel af parcelhus, rækkehus og lejlighed i hele Hvidovre Kommune.'
		}
	},
	{
		slug: 'broendby',
		name: 'Brøndby',
		inflected: 'i Brøndby',
		type: 'kommune',
		draft: false,
		heroImage: defaultHero('Brøndby'),
		intro:
			'Søger du en boligadvokat i Brøndby? Vi rådgiver købere og sælgere i Brøndbyøster, Brøndbyvester og Brøndby Strand. Vi sikrer, at din bolighandel gennemføres trygt – uden skjulte overraskelser.',
		body: [
			{
				heading: 'Boligmarkedet i Brøndby',
				paragraphs: [
					'Brøndby Kommune strækker sig fra Brøndbyøster og Brøndbyvester i nord til Brøndby Strand ved kysten og tilbyder en varieret boligmasse. Her finder man alt fra klassiske parcelhuse og rækkehuse til større andels- og ejerlejlighedskomplekser, særligt i Brøndby Strand. Kommunen har god trafikal forbindelse via S-togslinje A og motorvejsnettet og byder på gode grønne områder, strand og idrætsfaciliteter – herunder Brøndby Stadion.',
					'Prisniveauet er ofte mere overkommeligt end længere inde mod byen, hvilket gør Brøndby attraktiv for førstegangskøbere og børnefamilier. Men et lavere prisniveau betyder ikke, at bolighandlen er mindre juridisk kompleks.'
				]
			},
			{
				heading: 'Andelsboliger og storskala-bebyggelser i Brøndby Strand',
				paragraphs: [
					'Særligt omkring Brøndby Strand er der mange større bebyggelser opført som <a href="/ydelser/boligkoeb/andelsbolig" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">andelsboliger</a> eller almene lejeboliger. Ved køb af andelsbolig skal foreningens økonomi, vedtægter, eventuelle swap-lån og maksimalpriser gennemgås nøje. Flere foreninger har tidligere oplevet udfordringer med finansiering og renovering, og en grundig gennemgang af regnskaber, budget og vedtægter er afgørende for, at du ikke overtager en forening med skjulte problemer.',
					'Køber du parcelhus eller rækkehus i Brøndbyøster eller Brøndbyvester, gennemgår vi tilstandsrapport, BBR, lokalplan og servitutter, så du har fuldt overblik over ejendommens lovlighed og stand.'
				]
			},
			servicesSection('i Brøndby')
		],
		seo: {
			title: 'Boligadvokat i Brøndby',
			description:
				'Boligadvokat i Brøndby til fast pris og no cure – no pay. Rådgivning ved køb og salg af andelsbolig, parcelhus og rækkehus i hele Brøndby Kommune.'
		}
	},
	{
		slug: 'glostrup',
		name: 'Glostrup',
		inflected: 'i Glostrup',
		type: 'kommune',
		draft: false,
		heroImage: defaultHero('Glostrup'),
		intro:
			'Søger du en boligadvokat i Glostrup? Vi hjælper dig trygt igennem købet eller salget af din bolig – uanset om det drejer sig om villa, rækkehus eller lejlighed i en af hovedstadens bedst beliggende forstæder.',
		body: [
			{
				heading: 'Boligmarkedet i Glostrup',
				paragraphs: [
					'Glostrup er en af Vestegnens mest centralt beliggende kommuner med et af regionens vigtigste trafikknudepunkter. Glostrup Station betjener både S-tog, regionaltog og busser, og der er direkte forbindelse til både København, Roskilde og lufthavnen. Det gør Glostrup populær blandt pendlere, der vil bo roligt uden at give afkald på hurtig adgang til byen.',
					'Boligmassen er overvejende <a href="/ydelser/boligkoeb/villa" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">villaer</a> og parcelhuse, men der er også betydelige mængder rækkehuse, ejerlejligheder og andelsboliger – blandt andet i de ældre karréer omkring stationen og i de nyere byudviklingsområder. Kommunen arbejder aktivt med fortætning omkring stationen, hvilket betyder, at lokalplaner kan ændre sig, og at nybyggeri spiller en stadig større rolle på markedet.'
				]
			},
			{
				heading: 'Lokalplaner og nye udviklingsprojekter',
				paragraphs: [
					'På grund af den aktive byudvikling omkring Glostrup Station, Hovedvejen og flere af de centrale erhvervsområder er lokalplaner særligt vigtige at gennemgå. Lokalplanen bestemmer, hvad der må bygges på og omkring din grund – og kan have afgørende betydning for både udsyn, trafik og ejendomsværdi i årene fremover.',
					'Vi undersøger også, om der er planlagte infrastrukturprojekter, letbanestop eller andre ændringer i nærområdet, som kan få konsekvenser for boligen. Det er langt billigere at opdage inden handlen – end efter.'
				]
			},
			servicesSection('i Glostrup')
		],
		seo: {
			title: 'Boligadvokat i Glostrup',
			description:
				'Boligadvokat i Glostrup – fast pris og no cure – no pay. Vi gennemgår lokalplan, tilstand og servitutter grundigt, så din bolighandel i Glostrup bliver tryg.'
		}
	},
	{
		slug: 'albertslund',
		name: 'Albertslund',
		inflected: 'i Albertslund',
		type: 'kommune',
		draft: false,
		heroImage: defaultHero('Albertslund'),
		intro:
			'Søger du en boligadvokat i Albertslund? Vi rådgiver købere og sælgere i hele kommunen og sikrer, at handlen af dit rækkehus, gårdhavehus eller parcelhus gennemføres trygt og uden skjulte omkostninger.',
		body: [
			{
				heading: 'Boligmarkedet i Albertslund',
				paragraphs: [
					'Albertslund er en planlagt by fra 1960’erne og 70’erne og står som et af Danmarks mest karakteristiske eksempler på modernistisk forstadsplanlægning. Store dele af boligmassen består af arkitekttegnede rækkehuse, gårdhavehuse og typehuse med fælles grønne arealer og gangstrøg. Byen er velforsynet med skoler, biblioteker, grønne områder og har god S-togsforbindelse via linje B og C.',
					'For mange købere er Albertslund et overkommeligt skridt på boligstigen med adgang til egen have og en stærk lokal fællesskabsfølelse. For andre er det arkitekturen, det grønne og den overkommelige kvadratmeterpris, der trækker.'
				]
			},
			{
				heading: 'Særlige forhold ved rækkehuse og gårdhavehuse',
				paragraphs: [
					'Mange af Albertslunds rækkehuse og gårdhavehuse er omfattet af særlige ejer- eller grundejerforeninger med vedtægter, fælles vedligeholdelsesforpligtelser og servitutter om facader, tage, hegn og fælles arealer. Vi gennemgår foreningens økonomi, regnskaber og vedtægter, så du kender dine forpligtelser – og ved, hvad der må ændres og hvad der ikke må.',
					'En stor del af husene er bygget i samme periode med samme materialer og kendte problemstillinger – eksempelvis eternittage, ventilationsløsninger og betonelementer. Tilstandsrapport og elinstallationsrapport skal gennemgås grundigt, og vi sikrer, at forbehold og ansvarsforsikring dækker det, de skal.'
				]
			},
			servicesSection('i Albertslund')
		],
		seo: {
			title: 'Boligadvokat i Albertslund',
			description:
				'Boligadvokat i Albertslund til fast pris og no cure – no pay. Rådgivning ved køb og salg af rækkehus, gårdhavehus og parcelhus i hele Albertslund Kommune.'
		}
	},
	{
		slug: 'vanloese',
		name: 'Vanløse',
		inflected: 'i Vanløse',
		type: 'bydel',
		draft: false,
		heroImage: defaultHero('Vanløse'),
		intro:
			'Søger du en boligadvokat i Vanløse? Vi hjælper dig trygt igennem din bolighandel i en af Københavns mest eftertragtede bydele for børnefamilier – med villakvarterer, rækkehuse og ejerlejligheder i attraktivt prisleje.',
		body: [
			{
				heading: 'Boligmarkedet i Vanløse',
				paragraphs: [
					'Vanløse er en af de københavnske bydele, der har oplevet størst stigende popularitet i de senere år – særligt blandt børnefamilier, der ønsker nærhed til byen, men med haveliv og egen indkørsel. Bydelen byder på et bredt udbud af <a href="/ydelser/boligkoeb/villa" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">villaer</a> fra 1920’erne og 30’erne, rækkehuse og <a href="/ydelser/boligkoeb/ejerlejlighed" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">ejerlejligheder</a> – fra klassiske karréejendomme til nyere byggeri omkring Flintholm Station.',
					'Med metro, S-tog og flere buslinjer er Vanløse velforbundet til både det centrale København og den vestlige hovedstad. Det afspejler sig i et robust boligmarked med høj omsætning og stigende kvadratmeterpriser.'
				]
			},
			{
				heading: 'Ældre villaer og ombygninger',
				paragraphs: [
					'Vanløses villaer er ofte velholdte, men også gamle. Fugt i kældre, utætte tage, nedslidte installationer og tilbygninger fra forskellige tidsperioder er ikke ualmindeligt. Vi gennemgår tilstandsrapport, elinstallationsrapport og BBR, så du får et retvisende billede af boligen, før du forpligter dig.',
					'Mange huse er løbende blevet udvidet – med kviste, tilbygninger, udestuer og inddragede tagetager. Vi undersøger, om ombygningerne er lovligt opført, byggetilladt og korrekt registreret i BBR, så du ikke overtager et ansvar, der hurtigt kan blive kostbart at lovliggøre.'
				]
			},
			servicesSection('i Vanløse')
		],
		seo: {
			title: 'Boligadvokat i Vanløse',
			description:
				'Boligadvokat i Vanløse – fast pris og no cure – no pay. Vi gennemgår tilstand, BBR og servitutter, så din bolighandel i Vanløse bliver tryg og gennemskuelig.'
		}
	},
	{
		slug: 'valby',
		name: 'Valby',
		inflected: 'i Valby',
		type: 'bydel',
		draft: false,
		heroImage: defaultHero('Valby'),
		intro:
			'Søger du en boligadvokat i Valby? Vi rådgiver ved køb og salg af ejerlejligheder, rækkehuse og villaer i hele bydelen – fra det gamle Valby omkring Valby Langgade til det nye byområde på Grønttorvet.',
		body: [
			{
				heading: 'Boligmarkedet i Valby',
				paragraphs: [
					'Valby kombinerer gammel københavnsk stationsby-charme med moderne byudvikling. Omkring Valby Langgade, Toftegårds Plads og de gamle villakvarterer mod Vigerslev finder man en blanding af klassiske karréejendomme, stationsbybygninger og velholdte byvillaer. Samtidig er tidligere industri- og grøntorvsområder under omdannelse til nye boligkvarterer – senest med Grønttorvet, der har forvandlet området omkring Ny Ellebjerg.',
					'Denne kombination af gammelt og nyt gør Valby til et spændende – og juridisk varieret – boligmarked. Hver ejendomstype bringer sine egne forhold med sig, og det stiller krav til gennemgangen af dokumenterne.'
				]
			},
			{
				heading: 'Nybyggeri på Grønttorvet og i Ny Ellebjerg',
				paragraphs: [
					'I omdannelsesområderne som Grønttorvet og ved Ny Ellebjerg opføres der fortsat store mængder nybyggeri. Køb af nybyggeri adskiller sig grundlæggende fra køb af en eksisterende bolig – du køber ofte på projektstadiet, uden at kunne se det færdige byggeri, og forholdet reguleres af en særlig købsaftale med sikkerhedsstillelse, sælgers fortrydelsesret og 1- og 5-års gennemgang af fejl og mangler.',
					'I de ældre dele af Valby handler det oftere om klassiske ejerforeningsforhold, bevaringsværdige ejendomme og ombygninger gennem tiden. Uanset bolighistorik sikrer vi, at du kender de juridiske rammer og risici, før du skriver under.'
				]
			},
			servicesSection('i Valby')
		],
		seo: {
			title: 'Boligadvokat i Valby',
			description:
				'Boligadvokat i Valby til fast pris og no cure – no pay. Rådgivning ved køb af ejerlejlighed, villa og nybyggeri – fra Valby Langgade til Grønttorvet.'
		}
	},
	{
		slug: 'nordsjaelland',
		name: 'Nordsjælland',
		inflected: 'i Nordsjælland',
		type: 'region',
		draft: false,
		heroImage: defaultHero('Nordsjælland'),
		intro:
			'Søger du en boligadvokat i Nordsjælland? Vi rådgiver ved køb og salg af boliger i hele regionen – fra Whisky-bæltet langs Strandvejen og Hørsholm til Hillerød, Helsingør, Gilleleje og Tisvilde. Vi sikrer, at din bolighandel gennemføres trygt.',
		body: [
			{
				heading: 'Boligmarkedet i Nordsjælland',
				paragraphs: [
					'Nordsjælland rummer nogle af Danmarks mest eftertragtede boligområder. Langs Strandvejen – fra Hellerup og Charlottenlund over Klampenborg, Rungsted og op til Humlebæk – finder man klassiske kystnære villaer og herskabsejendomme i et eksklusivt prissegment. Længere inde i landet byder kommuner som Hørsholm, Fredensborg, Hillerød og Rudersdal på et bredt udvalg af villaer, rækkehuse og mindre herregårde, ofte med gode skoler og solid infrastruktur.',
					'Nord for motorvejen – omkring Gilleleje, Tisvildeleje og Hornbæk – er markedet domineret af <a href="/ydelser/boligkoeb/sommerhus" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">sommerhuse</a> og helårshuse tæt på kysten. Her gælder der særlige regler, som man skal være særligt opmærksom på som køber.'
				]
			},
			{
				heading: 'Kystnære ejendomme, strandbeskyttelse og sommerhusregler',
				paragraphs: [
					'Ved kystnære ejendomme i Nordsjælland er strandbeskyttelseslinjen og klitfredningslinjen afgørende. Disse beskyttelseszoner begrænser, hvad du må bygge, om- og tilbygge, og kan i visse tilfælde gøre selv mindre ændringer umulige uden dispensation. Vi undersøger altid, om en ejendom er omfattet, inden du forpligter dig.',
					'Ved køb af sommerhus skal man desuden være opmærksom på, om ejendommen er godkendt til helårsbeboelse, om der gælder særlige opholdsregler, og – for købere bosat i udlandet – om der er behov for særlig tilladelse efter sommerhusloven. Ved større helårsejendomme mod Strandvejen spiller servitutter, fredninger og lokalplaner en meget konkret rolle for både nuværende brug og fremtidig værdi.'
				]
			},
			servicesSection('i Nordsjælland')
		],
		seo: {
			title: 'Boligadvokat i Nordsjælland',
			description:
				'Boligadvokat i Nordsjælland – fast pris og no cure – no pay. Rådgivning om villaer, sommerhuse og kystnære ejendomme i hele Nordsjælland.'
		}
	}
];

export const getLocation = (slug: string): Location | undefined =>
	locations.find((l) => l.slug === slug);

export const locationPath = (l: Pick<Location, 'slug'>) => `/boligadvokat/${l.slug}`;
