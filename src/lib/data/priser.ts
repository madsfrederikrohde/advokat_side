import type { BodySection } from '$lib/types';

export interface PriceExampleRow {
	label: string;
	price: string;
}

export interface PriceItem {
	service: string;
	href: string;
	fromPrice: string;
	description: string;
	examples: PriceExampleRow[];
}

export const priserContent: {
	title: string;
	shortDescription: string;
	heroImage: { src: string; alt: string };
	intro: BodySection;
	priceItems: PriceItem[];
	includes: BodySection;
	seo: { title: string; description: string };
} = {
	title: 'Ejendomsadvokaternes priser',
	shortDescription:
		'Prisen på en boligadvokat er en vigtig faktor, når du skal købe eller sælge bolig. En kompetent boligadvokat sikrer, at alle juridiske aspekter af din bolighandel håndteles korrekt. Hos Ejendomsadvokaterne tilbyder vi rådgivning til en fast lav pris, så du kan få professionel rådgivning uden uventede omkostninger.',
	heroImage: {
		src: '/copenhagencityy.jpg',
		alt: 'Ejendomsadvokaternes priser – fast pris på boligrådgivning'
	},
	intro: {
		heading: 'No cure – no pay',
		paragraphs: [
			'Hos Ejendomsadvokaterne tilbyder vi no cure – no pay. Det betyder, at du ikke betaler advokatsalær, hvis handlen ikke gennemføres. Et boligkøb er forbundet med mange usikkerhedsmomenter, og vi mener, at du som køber ikke bør bære den fulde økonomiske risiko alene. Med vores model er vi med dig hele vejen, og vores interesse er den samme som din: at handlen lykkes på de rigtige vilkår.',
			'Vi tilbyder fast pris på vores boligrådgivning, så du fra starten ved, hvad du kommer til at betale. Der er ingen skjulte gebyrer udover tinglysningsafgift til Staten (0,6 % af købesummen + 1.850 kr.) og ingen timepriset fakturering – blot en forudsigelig og konkurrencedygtig pris for en erfaren boligadvokat.'
		]
	},
	priceItems: [
		{
			service: 'Køb af villa',
			href: '/ydelser/boligkoeb/villa',
			fromPrice: 'fra 8.500 kr.',
			description:
				'Fuld juridisk gennemgang af købsaftale, tilstandsrapport, energimærke og øvrige dokumenter, samt tinglysning af skøde.',
			examples: [
				{ label: 'Villa op til 10.000.000 kr.', price: '9.995 kr.' },
				{ label: 'Villa over 10.000.000 kr.', price: 'efter aftale' }
			]
		},
		{
			service: 'Køb af ejerlejlighed',
			href: '/ydelser/boligkoeb/ejerlejlighed',
			fromPrice: 'fra 8.500 kr.',
			description:
				'Gennemgang af købsaftale, ejerforeningens regnskaber og vedtægter samt tinglysning af skøde. Prisen afhænger af handelssummen.',
			examples: [
				{ label: 'Ejerlejlighed op til 10.000.000 kr.', price: '9.995 kr.' },
				{ label: 'Ejerlejlighed over 10.000.000 kr.', price: 'efter aftale' }
			]
		},
		{
			service: 'Køb af sommerhus',
			href: '/ydelser/boligkoeb/sommerhus',
			fromPrice: 'fra 9.500 kr.',
			description:
				'Sommerhus op til 10.000.000 kr. 9.995kr.',
			examples: [
				{ label: 'Sommerhus op til 10.000.000 kr.', price: '9.995 kr.' },
				{ label: 'Sommerhus over 10.000.000 kr.', price: 'efter aftale' }
			]
		},
		{
			service: 'Køb af andelsbolig',
			href: '/ydelser/boligkoeb/andelsbolig',
			fromPrice: 'fra 7.500 kr.',
			description:
				'Vi gennemgår overdragelsesaftalen, foreningens regnskab og vedtægter samt vurderer andelsværdien og eventuelle forkøbsrettigheder.',
			examples: [
				{ label: 'Andelsbolig op til 2.000.000 kr.', price: '7.500 kr.' },
				{ label: 'Andelsbolig over 2.000.000 kr.', price: '9.500 kr.' }
			]
		},
		{
			service: 'Testamente',
			href: '/ydelser/familiearveret/testamente',
			fromPrice: 'fra 3.500 kr.',
			description:
				'Oprettelse af individuelt tilpasset testamente og rådgivning om arvefordeling. Prisen afhænger af antallet af testatorer og kompleksiteten af dine ønsker.',
			examples: [
				{ label: 'Enkelt testamente', price: '4.500 kr.' },
				{ label: 'Fælles testamente (par)', price: '6.500 kr.' }
			]
		},
		{
			service: 'Ægtepagt',
			href: '/ydelser/familiearveret/aegtepagt',
			fromPrice: 'fra 3.500 kr.',
			description:
				'Udarbejdelse og tinglysning af ægtepagt, herunder rådgivning om formuefællesskab, særeje og kombinationsmodeller.',
			examples: [
				{ label: 'Almindelig ægtepagt', price: '3.500 kr.' },
				{ label: 'Ægtepakt med særlige klausuler, f.eks. kombinationssæreje', price: '5.500 kr.' }
			]
		}
	],
	includes: {
		heading: 'Hvad er inkluderet i prisen?',
		bullets: [
			'Gennemgang af samtlige handelsdokumenter',
			'Rådgivning om forbehold og vilkår i købsaftalen',
			'Kommunikation med ejendomsmægler, sælger og bank',
			'Tinglysning af skøde og pantebrev',
			'Uforpligtende indledende samtale, inden vi går i gang'
		],
		paragraphs: [
			'Alle priser er inkl. moms. Der er ingen skjulte gebyrer udover tinglysningafgifter og andre afgifter til Staten. Ingen timepriset fakturering uden særlig aftale – du ved fra starten, hvad du kommer til at betale. Og udgiften til advokat, tinglysning mv. kan som oftest lægges ind i finansieringen af den samlede handel. Og ring altid for en gratis uforpligtende samtale, inden vi går i gang'
		]
	},
	seo: {
		title: 'Ejendomsadvokaternes priser',
		description:
			'Prisen på en boligadvokat er en vigtig faktor, når du skal købe eller sælge bolig. En kompetent boligadvokat sikrer, at alle juridiske aspekter af din bolighandel håndteres korrekt. Hos Ejendomsadvokaterne tilbyder vi erfarne boligadvokater til en fast lav pris, så du kan få professionel rådgivning uden uventede omkostninger.'
	}
};
