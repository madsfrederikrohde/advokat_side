import type { Service, ServiceCategory, ServiceCategorySlug } from '$lib/types';

export const categories: ServiceCategory[] = [
	{
		slug: 'boligkoeb',
		title: 'Boligkøb',
		description:
			'Juridisk rådgivning når du skal købe bolig — fra villa og ejerlejlighed til sommerhus, anpart og finansiering.',
		order: 1
	},
	{
		slug: 'fast-ejendom',
		title: 'Fast ejendom',
		description:
			'Specialiseret rådgivning om fast ejendom, byggesager, entreprise, naboforhold og tvister.',
		order: 2
	},
	{
		slug: 'familiearveret',
		title: 'Familie- og arveret',
		description:
			'Testamente, ægtepagt, fremtidsfuldmagt, dødsbobehandling og retssager inden for familie- og arveretten.',
		order: 3
	}
];

const defaultImage = {
	src: '/copenhagencityy.jpg',
	alt: 'Københavnsk boligområde'
};

const makePlaceholderBody = (title: string, category: string): Service['body'] => [
	{
		heading: `Boligadvokat med +25 års erfaring i rådgivning om ${title.toLowerCase()}`,
		paragraphs: [
			`Hos Advokatfirmaet Hans Rohde har vi specialiseret os i ${category.toLowerCase()} og rådgiver dagligt klienter om ${title.toLowerCase()}. Vi sikrer, at alle juridiske forhold er afklaret, så du kan træffe beslutninger på et oplyst grundlag.`,
			'Vi gennemgår alle relevante dokumenter, rådgiver dig om indholdet og sørger for, at dine interesser bliver varetaget gennem hele forløbet.'
		]
	},
	{
		heading: 'Vi hjælper blandt andet med følgende',
		bullets: [
			'Vi gennemgår alle ejendommens dokumenter og købsaftalen og rådgiver dig om indholdet heraf',
			'Vi har kontakten til ejendomsmægler mhp. vilkårsforhandling',
			'Vi rådgiver om finansiering og har kontakt til bankerne i sagen',
			'Vi sørger for tinglysning, udarbejder skøde og laver refusionsopgørelse mv.'
		]
	},
	{
		heading: `Der er mange forhold at holde styr på ved ${title.toLowerCase()}`,
		paragraphs: [
			'Det kan virke fristende at springe den juridiske rådgivning over, men erfaringen viser, at det kan være en dyr beslutning. Vores fornemmeste opgave som din boligadvokat er at sikre dig en tryg og sikker bolighandel.',
			'Kontakt os i dag for en uforpligtende snak om, hvordan vi kan hjælpe dig videre.'
		]
	}
];

export const services: Service[] = [
	// Boligkøb
	{
		slug: 'villa',
		category: 'boligkoeb',
		title: 'Køb af villa',
		navLabel: 'Villa',
		heroImage: defaultImage,
		shortDescription:
			'En villa er for mange livets største investering. Vi sikrer, at du kommer sikkert gennem handlen med erfaren juridisk rådgivning hele vejen.',
		body: makePlaceholderBody('Køb af villa', 'Boligkøb')
	},
	{
		slug: 'ejerlejlighed',
		category: 'boligkoeb',
		title: 'Køb af ejerlejlighed',
		navLabel: 'Ejerlejlighed',
		heroImage: defaultImage,
		shortDescription:
			'Ejerlejlighedskøb rummer særlige juridiske forhold — ejerforening, vedtægter og fordelingstal. Vi guider dig sikkert gennem processen.',
		body: makePlaceholderBody('Køb af ejerlejlighed', 'Boligkøb')
	},
	{
		slug: 'sommerhus',
		category: 'boligkoeb',
		title: 'Køb af sommerhus',
		navLabel: 'Sommerhus',
		heroImage: defaultImage,
		shortDescription:
			'Køb af sommerhus er en drøm for mange — men der er særlige regler om bopælspligt, udlejning og zonelovgivning at være opmærksom på.',
		body: makePlaceholderBody('Køb af sommerhus', 'Boligkøb')
	},
	{
		slug: 'anpart',
		category: 'boligkoeb',
		title: 'Køb af anpart / villalejlighed',
		navLabel: 'Anpart',
		heroImage: defaultImage,
		shortDescription:
			'En anpart eller villalejlighed er en attraktiv måde at opnå en god beliggenhed — men stiller særlige krav til samejeoverenskomsten.',
		body: makePlaceholderBody('Køb af anpart', 'Boligkøb')
	},
	{
		slug: 'byggegrund',
		category: 'boligkoeb',
		title: 'Køb af byggegrund',
		navLabel: 'Byggegrund',
		heroImage: defaultImage,
		shortDescription:
			'Skal du købe grund til nybyggeri? Vi gennemgår lokalplan, servitutter og byggemulighederne, så du ved præcis hvad du køber.',
		body: makePlaceholderBody('Køb af byggegrund', 'Boligkøb')
	},
	{
		slug: 'andelsbolig',
		category: 'boligkoeb',
		title: 'Køb af andelsbolig',
		navLabel: 'Andelsbolig',
		heroImage: defaultImage,
		shortDescription:
			'Andelsboligens økonomi og vedtægter kræver nøje gennemgang. Vi sikrer, at foreningens økonomi er sund og papirerne er i orden.',
		body: makePlaceholderBody('Køb af andelsbolig', 'Boligkøb')
	},
	{
		slug: 'boligfinansiering',
		category: 'boligkoeb',
		title: 'Boligfinansiering',
		navLabel: 'Boligfinansiering',
		heroImage: defaultImage,
		shortDescription:
			'Valget af finansiering har stor betydning for din økonomi. Vi rådgiver uvildigt om lånemuligheder og har tæt kontakt til bankerne.',
		body: makePlaceholderBody('Boligfinansiering', 'Boligkøb')
	},

	// Fast ejendom
	{
		slug: 'boliglejeret',
		category: 'fast-ejendom',
		title: 'Boliglejeret',
		navLabel: 'Boliglejeret',
		heroImage: defaultImage,
		shortDescription:
			'Rådgivning om lejekontrakter, opsigelser, lejeforhøjelser og tvister mellem udlejer og lejer.',
		body: makePlaceholderBody('Boliglejeret', 'Fast ejendom')
	},
	{
		slug: 'mangler-ved-fast-ejendom',
		category: 'fast-ejendom',
		title: 'Mangler ved fast ejendom',
		navLabel: 'Mangler ved fast ejendom',
		heroImage: defaultImage,
		shortDescription:
			'Er der opdaget mangler efter overtagelsen? Vi vurderer sagen og hjælper dig med at gøre krav gældende over for sælger.',
		body: makePlaceholderBody('Mangler ved fast ejendom', 'Fast ejendom')
	},
	{
		slug: 'ejerskifteforsikring',
		category: 'fast-ejendom',
		title: 'Ejerskifteforsikring',
		navLabel: 'Ejerskifteforsikring',
		heroImage: defaultImage,
		shortDescription:
			'Vi hjælper dig med at anmelde skader og håndtere uenighed med forsikringsselskabet om dækning af skjulte mangler.',
		body: makePlaceholderBody('Ejerskifteforsikring', 'Fast ejendom')
	},
	{
		slug: 'entrepriseret',
		category: 'fast-ejendom',
		title: 'Entrepriseret',
		navLabel: 'Entrepriseret',
		heroImage: defaultImage,
		shortDescription:
			'Rådgivning om entreprisekontrakter, AB 18, mangler, forsinkelse og tvister i byggesager.',
		body: makePlaceholderBody('Entrepriseret', 'Fast ejendom')
	},
	{
		slug: 'naboret',
		category: 'fast-ejendom',
		title: 'Naboret',
		navLabel: 'Naboret',
		heroImage: defaultImage,
		shortDescription:
			'Uenighed om hæk, skel, indbliks- eller støjgener? Vi rådgiver om naboretlige spørgsmål og hjælper med mediation eller retssag.',
		body: makePlaceholderBody('Naboret', 'Fast ejendom')
	},
	{
		slug: 'forurenet-jord',
		category: 'fast-ejendom',
		title: 'Forurenet jord',
		navLabel: 'Forurenet jord',
		heroImage: defaultImage,
		shortDescription:
			'Har du opdaget jordforurening på din grund? Vi rådgiver om ansvar, oprydning og eventuelle krav mod sælger eller myndigheder.',
		body: makePlaceholderBody('Forurenet jord', 'Fast ejendom')
	},
	{
		slug: 'tvister-og-klagesager',
		category: 'fast-ejendom',
		title: 'Tvister og klagesager',
		navLabel: 'Tvister og klagesager',
		heroImage: defaultImage,
		shortDescription:
			'Vi fører retssager og klagesager om fast ejendom — fra Ankenævn for Ejendomsmæglervirksomhed til byret og landsret.',
		body: makePlaceholderBody('Tvister og klagesager', 'Fast ejendom')
	},
	{
		slug: 'ejerforening',
		category: 'fast-ejendom',
		title: 'Ejerforening',
		navLabel: 'Ejerforening',
		heroImage: defaultImage,
		shortDescription:
			'Rådgivning til ejerforeninger og enkeltmedlemmer om vedtægter, generalforsamling, fællesudgifter og tvister.',
		body: makePlaceholderBody('Ejerforening', 'Fast ejendom')
	},
	{
		slug: 'planlovgivning',
		category: 'fast-ejendom',
		title: 'Planlovgivning',
		navLabel: 'Planlovgivning',
		heroImage: defaultImage,
		shortDescription:
			'Vi hjælper med klager over lokalplaner, dispensationer, landzonetilladelser og andre planretlige afgørelser.',
		body: makePlaceholderBody('Planlovgivning', 'Fast ejendom')
	},
	{
		slug: 'byggesag',
		category: 'fast-ejendom',
		title: 'Hjælp til din byggesag',
		navLabel: 'Byggesag',
		heroImage: defaultImage,
		shortDescription:
			'Fra byggetilladelse til færdigmelding — vi bistår dig gennem byggesagen og sikrer, at kommunens krav er opfyldt.',
		body: makePlaceholderBody('Byggesag', 'Fast ejendom')
	},

	// Familiearveret
	{
		slug: 'testamente',
		category: 'familiearveret',
		title: 'Testamente',
		navLabel: 'Testamente',
		heroImage: defaultImage,
		shortDescription:
			'Et testamente giver tryghed og klarhed. Vi udarbejder testamente tilpasset din familie, dine ønsker og de skattemæssige forhold.',
		body: makePlaceholderBody('Testamente', 'Familie- og arveret')
	},
	{
		slug: 'aegtepagt',
		category: 'familiearveret',
		title: 'Ægtepagt',
		navLabel: 'Ægtepagt',
		heroImage: defaultImage,
		shortDescription:
			'Med en ægtepagt bestemmer I selv, hvordan jeres formue skal fordeles. Vi rådgiver om særeje, skilsmissesæreje og kombinationsløsninger.',
		body: makePlaceholderBody('Ægtepagt', 'Familie- og arveret')
	},
	{
		slug: 'fremtidsfuldmagt',
		category: 'familiearveret',
		title: 'Fremtidsfuldmagt',
		navLabel: 'Fremtidsfuldmagt',
		heroImage: defaultImage,
		shortDescription:
			'En fremtidsfuldmagt sikrer, at dine nærmeste kan handle på dine vegne, hvis du mister evnen til selv at tage beslutninger.',
		body: makePlaceholderBody('Fremtidsfuldmagt', 'Familie- og arveret')
	},
	{
		slug: 'doedsbobehandling',
		category: 'familiearveret',
		title: 'Hjælp til dødsbobehandling',
		navLabel: 'Dødsbobehandling',
		heroImage: defaultImage,
		shortDescription:
			'Vi bistår med privat skifte, bobestyrerbehandling og alle de praktiske og juridiske opgaver ved et dødsbo.',
		body: makePlaceholderBody('Dødsbobehandling', 'Familie- og arveret')
	},
	{
		slug: 'retssager-tvister',
		category: 'familiearveret',
		title: 'Retssager og andre tvister',
		navLabel: 'Retssager og tvister',
		heroImage: defaultImage,
		shortDescription:
			'Opstår der strid om arv, testamente eller ægtefælleskifte, fører vi sagen gennem forhandling, skifteretten eller ved domstolene.',
		body: makePlaceholderBody('Retssager og tvister', 'Familie- og arveret')
	}
];

export const getCategory = (slug: string): ServiceCategory | undefined =>
	categories.find((c) => c.slug === slug);

export const getService = (category: string, slug: string): Service | undefined =>
	services.find((s) => s.category === category && s.slug === slug);

export const servicesByCategory = (cat: ServiceCategorySlug): Service[] =>
	services.filter((s) => s.category === cat);

export const otherServices = (currentSlug: string, limit = 8): Service[] =>
	services.filter((s) => s.slug !== currentSlug).slice(0, limit);

export const servicePath = (s: Pick<Service, 'category' | 'slug'>) =>
	`/ydelser/${s.category}/${s.slug}`;

export const categoryPath = (c: Pick<ServiceCategory, 'slug'>) => `/ydelser/${c.slug}`;
