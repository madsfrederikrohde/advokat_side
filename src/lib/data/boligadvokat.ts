import type { BodySection } from '$lib/types';

export const boligadvokatContent: {
	title: string;
	shortDescription: string;
	heroImage: { src: string; alt: string };
	body: BodySection[];
	seo: { title: string; description: string };
} = {
	title: 'Boligadvokat – specialiseret i boligrådgivning.',
	shortDescription:
		'Hos Ejendomsadvokaterne har vi mere end 25 års erfaring som boligadvokater. Vi er specialister i at rådgive om de mange forhold, der gør sig gældende ved køb og salg af bolig.',
	heroImage: {
		src: '/copenhagencityy.jpg',
		alt: 'Boligadvokat – specialiseret rådgivning om bolighandel'
	},
	body: [
		{
			heading: 'Boligadvokater til lavere pris: No cure – no pay',
			paragraphs: [
				'Hos Ejendomsadvokaterne arbejder vi på <a href="/priser" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">no cure – no pay</a>-vilkår. Det betyder, at du ikke betaler advokatsalær, hvis handlen ikke gennemføres. Vores honorar forfalder først til betaling, når du har overtaget din nye bolig – og det er der en god grund til. Et boligkøb er forbundet med mange usikkerhedsmomenter, og vi mener, at du som køber ikke bør bære den fulde økonomiske risiko alene. Med vores model er vi med dig hele vejen, og vores interesse er den samme som din: at handlen lykkes.',
				'Vi tilbyder <a href="/priser" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">fast pris</a> på vores boligrådgivning, så du fra starten ved, hvad du kommer til at betale. Der er ingen skjulte gebyrer eller timepriset fakturering. Du får en erfaren boligadvokat til en forudsigelig og konkurrencedygtig pris.'
			]
		},
		{
			heading: 'Hvorfor skal man benytte en boligadvokat?',
			paragraphs: [
				'Et boligkøb er for de fleste den største investering i livet, og der følger en stor mængde juridiske dokumenter med – uanset om du køber en <a href="/ydelser/boligkoeb/villa" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">villa</a>, en <a href="/ydelser/boligkoeb/ejerlejlighed" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">ejerlejlighed</a> eller et <a href="/ydelser/boligkoeb/sommerhus" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">sommerhus</a>. Købsaftale, tilstandsrapport, elinstallationsrapport, energimærke, BBR-meddelelse og tingbogsattest er blot nogle af de dokumenter, der kræver grundig gennemgang. Fejl eller oversete forbehold kan koste dig dyrt – både økonomisk og juridisk.',
				'En boligadvokat sikrer, at du forstår, hvad du skriver under på. Vi gennemgår samtlige dokumenter, vurderer risici og rådgiver dig om, hvilke forbehold der bør indsættes i købsaftalen. Det kan eksempelvis dreje sig om finansieringsforbehold, advokatforbehold eller forbehold for byggetilladelser. Bruger du en boligadvokat, slipper du for selv at være eksperten, når dokumenterne kommer i spil.'
			]
		},
		{
			heading: 'Kan man klare handlen uden en boligadvokat?',
			paragraphs: [
				'Det er juridisk muligt at gennemføre et boligkøb uden en advokat. Men de færreste har den juridiske viden, der skal til for at gennemskue samtlige klausuler, servitutter og betingelser i en handlens dokumentpakke. En sælgers ejendomsmægler varetager sælgerens interesser – ikke dine. Det er derfor vigtigt, at du som køber har din egen rådgiver.',
				'Særligt ved komplekse handler – som køb af <a href="/ydelser/boligkoeb/andelsbolig" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">andelsbolig</a>, <a href="/ydelser/boligkoeb/anpart" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">anpart</a> eller <a href="/ydelser/boligkoeb/byggegrund" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">byggegrund</a> – er der mange faldgruber, som kun en erfaren boligadvokat vil kende til. En andelsbolighandel kræver eksempelvis gennemgang af foreningens regnskaber og vedtægter, vurdering af andelsværdi og stillingtagen til eventuelle forkøbsrettigheder. Her kan en fejl have store konsekvenser.'
			]
		},
		{
			heading: 'Hvad kan en boligadvokat hjælpe med?',
			paragraphs: [
				'En boligadvokat hjælper dig med alle juridiske forhold i forbindelse med køb og salg af bolig. Det dækker over gennemgang af købsaftalen og alle tilhørende bilag, forhandling med sælger eller sælgers advokat, tinglysning af skøde og pantebrev samt sikring af, at handlen overholdes inden for de aftalte frister.',
				'Vi rådgiver også om <a href="/ydelser/boligkoeb/boligfinansiering" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">boligfinansiering</a> – herunder valg af låntype, realkreditlån versus banklån og sammensætning af din samlede finansiering. En god finansieringsstruktur kan spare dig for mange penge over lånets løbetid, og det er en beslutning, der fortjener grundig rådgivning.',
				'Hos Ejendomsadvokaterne er vi specialiserede i netop disse opgaver. Vi har hjulpet hundredvis af boligkøbere og -sælgere sikkert igennem handlen, og vi er klar til at hjælpe dig med din næste.'
			]
		}
	],
	seo: {
		title: 'Boligadvokat – specialiseret i boligrådgivning',
		description:
			'Hos Ejendomsadvokaterne har vi mere end 25 års erfaring som boligadvokater. Vi kender boligmarkedet til bunds, og er specialiseret i at rådgive omkring de mange forhold, der gør sig gældende i forbindelse med køb og salg af bolig. Bruger du en boligadvokat slipper du for selv at være eksperten, når de mange dokumenter kommer i spil.'
	}
};
