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
	/** Show the "vi dækker hele København og omegn" line in body copy. */
	inGreaterCopenhagen: boolean;
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

const templatedBody = (l: {
	name: string;
	inflected: string;
	type: LocationType;
	inGreaterCopenhagen: boolean;
}): BodySection[] => {
	const areaPhrase = l.inGreaterCopenhagen
		? 'Vi rådgiver boligkøbere og -sælgere i hele København og omegn – herunder ' + l.name + '.'
		: 'Vi rådgiver boligkøbere og -sælgere i ' + l.name + ' og omegn.';

	return [
		{
			heading: `Boligadvokat ${l.inflected}`,
			paragraphs: [
				`Skal du købe eller sælge bolig ${l.inflected}? Hos Advokatfirmaet Hans Rohde har vi mere end 25 års erfaring med bolighandler, og vi sikrer, at du ikke køber bolig for dyrt eller oplever ubehagelige overraskelser undervejs. ${areaPhrase}`,
				`En bolighandel er for de fleste den største økonomiske beslutning, de træffer. Vi gennemgår købsaftale, tilstandsrapport, elinstallationsrapport, energimærke, BBR-meddelelse og tingbogsattest – og sørger for, at de nødvendige forbehold er på plads, før du skriver under.`
			]
		},
		{
			heading: `Fast pris og no cure – no pay`,
			paragraphs: [
				`Vi arbejder på <a href="/priser" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">no cure – no pay</a>-vilkår til en fast, konkurrencedygtig pris. Det betyder, at du ikke betaler advokatsalær, hvis handlen ikke gennemføres, og du ved fra starten præcis, hvad rådgivningen koster.`
			]
		},
		{
			heading: `Hvad kan vi hjælpe med ${l.inflected}?`,
			paragraphs: [
				`Vi hjælper med alle typer bolighandler ${l.inflected} – uanset om det drejer sig om <a href="/ydelser/boligkoeb/villa" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">villa</a>, <a href="/ydelser/boligkoeb/ejerlejlighed" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">ejerlejlighed</a>, <a href="/ydelser/boligkoeb/andelsbolig" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">andelsbolig</a>, <a href="/ydelser/boligkoeb/sommerhus" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">sommerhus</a> eller <a href="/ydelser/boligkoeb/byggegrund" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">byggegrund</a>. Vi rådgiver også om <a href="/ydelser/boligkoeb/boligfinansiering" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">boligfinansiering</a>, så du får den samlede økonomi på plads på de bedst mulige vilkår.`,
				`Kontakt os i dag for en uforpligtende snak om din kommende bolighandel ${l.inflected}.`
			]
		}
	];
};

const build = (l: {
	slug: string;
	name: string;
	inflected: string;
	type: LocationType;
	draft?: boolean;
	inGreaterCopenhagen?: boolean;
	heroImage?: { src: string; alt: string };
	intro?: string;
	body?: BodySection[];
}): Location => {
	const inGreaterCopenhagen = l.inGreaterCopenhagen ?? true;
	const intro =
		l.intro ??
		`Søger du en boligadvokat ${l.inflected}? Vi kender området. En bolighandel er en stor beslutning – vores opgave er at sikre, at du ikke køber bolig for dyrt eller oplever ubehagelige overraskelser ved køb eller salg af bolig.`;
	return {
		slug: l.slug,
		name: l.name,
		inflected: l.inflected,
		type: l.type,
		draft: l.draft ?? true,
		inGreaterCopenhagen,
		heroImage: l.heroImage ?? defaultHero(l.name),
		intro,
		body:
			l.body ??
			templatedBody({
				name: l.name,
				inflected: l.inflected,
				type: l.type,
				inGreaterCopenhagen
			}),
		seo: {
			title: `Boligadvokat ${l.inflected}`,
			description: intro
		}
	};
};

export const locations: Location[] = [
	build({ slug: 'frederiksberg', name: 'Frederiksberg', inflected: 'på Frederiksberg', type: 'kommune' }),
	build({ slug: 'koebenhavn', name: 'København', inflected: 'i København', type: 'by' }),
	build({ slug: 'roedovre', name: 'Rødovre', inflected: 'i Rødovre', type: 'kommune' }),
	build({ slug: 'hvidovre', name: 'Hvidovre', inflected: 'i Hvidovre', type: 'kommune' }),
	build({ slug: 'broendby', name: 'Brøndby', inflected: 'i Brøndby', type: 'kommune' }),
	build({ slug: 'glostrup', name: 'Glostrup', inflected: 'i Glostrup', type: 'kommune' }),
	build({ slug: 'albertslund', name: 'Albertslund', inflected: 'i Albertslund', type: 'kommune' }),
	build({ slug: 'vanloese', name: 'Vanløse', inflected: 'i Vanløse', type: 'bydel' }),
	build({ slug: 'valby', name: 'Valby', inflected: 'i Valby', type: 'bydel' }),
	build({
		slug: 'nordsjaelland',
		name: 'Nordsjælland',
		inflected: 'i Nordsjælland',
		type: 'region',
		inGreaterCopenhagen: false
	})
];

export const getLocation = (slug: string): Location | undefined =>
	locations.find((l) => l.slug === slug);

export const locationPath = (l: Pick<Location, 'slug'>) => `/boligadvokat/${l.slug}`;
