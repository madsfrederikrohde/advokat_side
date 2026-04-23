import type { BodySection } from '$lib/types';

export const contactInfo = {
	phone: '+4520317879',
	phoneDisplay: '+45 20 31 78 79',
	email: 'hr@hansrohde.dk',
	address: 'Hviddingvej 47, 2610 Rødovre'
};

export const contactContent: {
	title: string;
	shortDescription: string;
	heroImage: { src: string; alt: string };
	body: BodySection[];
	seo: { title: string; description: string };
} = {
	title: 'Kontakt Ejendomsadvokaterne',
	shortDescription:
		'Har du spørgsmål om boligkøb, finansiering, byggeri eller ejendomsudvikling, er du velkommen til at tage kontakt. Vi vender gerne tilbage med en indledende vurdering af sagen.',
	heroImage: {
		src: '/copenhagencityy.jpg',
		alt: 'Ejendomsadvokaterne v/ Hans Rohde – Rødovre'
	},
	body: [
		{
			heading: 'Ring, skriv eller brug kontaktformularen',
			paragraphs: [
				'Du kan altid ringe eller skrive direkte. Vi vender som hovedregel tilbage samme dag med en indledende afklaring af, hvordan vi bedst kan hjælpe videre.',
				'Hvis du foretrækker det, kan du også bruge kontaktformularen nedenfor og kort beskrive boligen, projektet eller det juridiske spørgsmål.'
			]
		}
	],
	seo: {
		title: 'Kontakt',
		description:
			'Kontakt Ejendomsadvokaterne v/ Hans Rohde. Ring, skriv eller brug kontaktformularen for en uforpligtende snak om din sag.'
	}
};
