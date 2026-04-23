import type { BodySection } from '$lib/types';

export interface PriceExample {
	service: string;
	href: string;
	price: string;
	note?: string;
}

export const priserContent: {
	title: string;
	shortDescription: string;
	heroImage: { src: string; alt: string };
	intro: BodySection;
	priceExamples: PriceExample[];
	includes: BodySection;
	seo: { title: string; description: string };
} = {
	title: 'Ejendomsadvokaternes priser',
	shortDescription:
		'Prisen på en boligadvokat er en vigtig faktor, når du skal købe eller sælge bolig. En kompetent boligadvokat sikrer, at alle juridiske aspekter af din bolighandel håndteres korrekt. Hos Ejendomsadvokaterne tilbyder vi erfarne boligadvokater til en fast lav pris, så du kan få professionel rådgivning uden uventede omkostninger.',
	heroImage: {
		src: '/copenhagencityy.jpg',
		alt: 'Ejendomsadvokaternes priser – fast pris på boligrådgivning'
	},
	intro: {
		heading: 'No cure – no pay',
		paragraphs: [
			'Hos Ejendomsadvokaterne arbejder vi på no cure – no pay-vilkår. Det betyder, at du ikke betaler advokatsalær, hvis handlen ikke gennemføres. Vores honorar forfalder først til betaling, når du har overtaget din nye bolig – og det er der en god grund til. Et boligkøb er forbundet med mange usikkerhedsmomenter, og vi mener, at du som køber ikke bør bære den fulde økonomiske risiko alene. Med vores model er vi med dig hele vejen, og vores interesse er den samme som din: at handlen lykkes.',
			'Vi tilbyder fast pris på vores boligrådgivning, så du fra starten ved, hvad du kommer til at betale. Der er ingen skjulte gebyrer og ingen timepriset fakturering – blot en forudsigelig og konkurrencedygtig pris for en erfaren boligadvokat.'
		]
	},
	priceExamples: [
		{ service: 'Køb af villa', href: '/ydelser/boligkoeb/villa', price: '8.500 kr.' },
		{
			service: 'Køb af ejerlejlighed',
			href: '/ydelser/boligkoeb/ejerlejlighed',
			price: '8.500 kr.'
		},
		{ service: 'Køb af sommerhus', href: '/ydelser/boligkoeb/sommerhus', price: '9.500 kr.' },
		{
			service: 'Køb af andelsbolig',
			href: '/ydelser/boligkoeb/andelsbolig',
			price: '7.500 kr.'
		},
		{
			service: 'Testamente',
			href: '/ydelser/familiearveret/testamente',
			price: 'fra 3.500 kr.'
		},
		{
			service: 'Ægtepagt',
			href: '/ydelser/familiearveret/aegtepagt',
			price: 'fra 3.500 kr.'
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
			'Alle priser er inkl. moms. Der er ingen skjulte gebyrer og ingen timepriset fakturering – du ved fra starten, hvad du kommer til at betale.'
		]
	},
	seo: {
		title: 'Ejendomsadvokaternes priser',
		description:
			'Prisen på en boligadvokat er en vigtig faktor, når du skal købe eller sælge bolig. En kompetent boligadvokat sikrer, at alle juridiske aspekter af din bolighandel håndteres korrekt. Hos Ejendomsadvokaterne tilbyder vi erfarne boligadvokater til en fast lav pris, så du kan få professionel rådgivning uden uventede omkostninger.'
	}
};
