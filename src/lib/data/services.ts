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
			`Hos Ejendomsadvokaterne har vi specialiseret os i ${category.toLowerCase()} og rådgiver dagligt klienter om ${title.toLowerCase()}. Vi sikrer, at alle juridiske forhold er afklaret, så du kan træffe beslutninger på et oplyst grundlag.`,
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
		body: [
			{
				heading: 'Villakøb — vi følger dig sikkert til dørs',
				paragraphs: [
					'Du har fundet huset, vi sørger for at købsaftalen er juridisk i orden. Før handlen bliver endelig, skal alle relevante forhold være på plads.',
					'En villahandel er for de fleste den største investering, man foretager i livet. Og det er også den, hvor fejl kan være dyre. Vi læser købsaftalen, alle ejendommens dokumenter samt tilstandsrapporten og ejerskifteforsikringens vilkår. Vi tjekker servitutter, BBR og eventuelle byggesager, der ikke er lukket. Og vi forhandler det, der skal rettes, på plads med mægleren under advokatforbeholdet.',
					'Når handlen er på plads, tager vi os af tinglysningen af skødet og refusionsopgørelsen. Du står ikke alene på noget tidspunkt.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Erfaringsmæssigt kan en almindelig villahandel til op til 6 mio. kr. klares for 9.995 kr. inkl. moms (men eksl. tinglysningsafgift). Ligger handlen over det, eller er der særlige forhold — ulovligt byggeri, uklare servitutter, komplicerede finansieringsforhold — aftaler vi honorar på forhånd. Altid klare aftaler og fuld transparens.'
				]
			},
			{
				heading: 'Ingen handel — ingen regning',
				paragraphs: [
					'Trækker du dig under advokatforbeholdet på baggrund af vores rådgivning, koster det ikke noget. Falder handlen af andre årsager — fx at sælger trækker sig, eller at dit forbehold for eget salg ikke opfyldes — afregner vi arbejdet som aftalt.'
				]
			}
		]
	},
	{
		slug: 'ejerlejlighed',
		category: 'boligkoeb',
		title: 'Køb af ejerlejlighed',
		navLabel: 'Ejerlejlighed',
		heroImage: defaultImage,
		shortDescription:
			'Ejerlejlighedskøb rummer særlige juridiske forhold — ejerforening, vedtægter og fordelingstal. Vi guider dig sikkert gennem processen.',
		body: [
			{
				heading: 'Ejerlejlighed — du køber dig også ind i en forening',
				paragraphs: [
					'Når du køber en ejerlejlighed, køber du ikke kun en bolig. Du køber dig ind i en forening — og foreningens økonomi og vedtægter kan være lige så afgørende som selve ejerlejligheden.',
					'Vi gennemgår vedtægter, seneste årsregnskab og referater fra generalforsamling. Hvis der er store vedligeholdelsesarbejder på vej, skal du vide det, før du skriver under — ikke bagefter, når fællesudgifterne fordobles.',
					'Vi tjekker også købsaftalen, energimærke, servitutter og BBR. Særligt ved nyere lejligheder: er tidligere ombygninger godkendt? Hvis ikke, kan problemet ende hos dig som ny ejer.',
					'Vi står på sagen hele vejen — fra gennemgang til tinglysning og endelig refusionsopgørelse.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Erfaringsmæssigt kan en almindelig ejerlejlighedshandel til op til 6 mio. kr. klares for 9.995 kr. inkl. moms (men eksl. tinglysningsafgift). Ligger handlen over det, eller er der særlige forhold, aftaler vi honorar på forhånd. Altid klare aftaler og fuld transparens.'
				]
			},
			{
				heading: 'Ingen handel — ingen regning',
				paragraphs: [
					'Trækker du dig under advokatforbeholdet på baggrund af vores rådgivning, koster det ikke noget. Falder handlen af andre årsager — fx at sælger trækker sig, eller at dit forbehold for eget salg ikke opfyldes — afregner vi arbejdet som aftalt.'
				]
			}
		]
	},
	{
		slug: 'sommerhus',
		category: 'boligkoeb',
		title: 'Køb af sommerhus',
		navLabel: 'Sommerhus',
		heroImage: defaultImage,
		shortDescription:
			'Køb af sommerhus er en drøm for mange — men der er særlige regler om bopælspligt, udlejning og zonelovgivning at være opmærksom på.',
		body: [
			{
				heading: 'Sommerhus — enkelt ser det ud, enkelt er det sjældent',
				paragraphs: [
					'Et sommerhus ser ofte enkelt ud. Reglerne bag er sjældent så enkle.',
					'Bopælspligt, sommerhusreglementet, planforhold, naturbeskyttelseslinjer, udlejningsregler og gamle servitutter kan få afgørende betydning for, hvad du må bruge huset til, færdselsret mv. Vi gennemgår det hele, før du skriver under — ikke efter.',
					'Vi tjekker også tidligere ombygninger: er tilbygningen godkendt? Er annekset registreret? Og hvad med drikkevand, kloak mv? Ældre sommerhuse har ofte en historik, der ikke fremgår af salgsopstillingen.',
					'Vi står på handlen hele vejen — gennemgang, forhandling, tinglysning og refusion.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Erfaringsmæssigt kan en almindelig sommerhushandel til op til 6 mio. kr. klares for 9.995 kr. inkl. moms (men eksl. tinglysningsafgift). Ligger handlen over det, eller er der særlige forhold, aftaler vi honorar på forhånd. Altid klare aftaler og fuld transparens.'
				]
			},
			{
				heading: 'Ingen handel — ingen regning',
				paragraphs: [
					'Trækker du dig under advokatforbeholdet på baggrund af vores rådgivning, koster det ikke noget. Falder handlen af andre årsager — fx at sælger trækker sig, eller at dit forbehold for eget salg ikke opfyldes — afregner vi arbejdet som aftalt.'
				]
			}
		]
	},
	{
		slug: 'anpart',
		category: 'boligkoeb',
		title: 'Køb af anpart / villalejlighed',
		navLabel: 'Anpart',
		heroImage: defaultImage,
		shortDescription:
			'En anpart eller villalejlighed er en attraktiv måde at opnå en god beliggenhed — men stiller særlige krav til samejeoverenskomsten.',
		body: [
			{
				heading: 'Anpart — ikke det samme som en ejerlejlighed',
				paragraphs: [
					'En anpart lyder som en blanding af ejerbolig og andelsbolig — og juridisk er det heller ikke helt det ene eller det andet. Du ejer en ideel andel af en fast ejendom og får en eksklusiv brugsret til en bestemt del. Men reglerne for salg, vedligehold og især finansiering er anderledes — og ofte mindre beskyttede.',
					'Vi gennemgår købsaftalen, anpartshaveroverenskomsten, fordelingstal, brugsret, videresalgsret og eventuelle forkøbsrettigheder. Vi tjekker også servitutter, BBR og ejendommens øvrige dokumenter.',
					'Anpartsboliger har ofte særlige forhold med belåning — vi rådgiver realistisk om finansieringen, før du går videre.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Priserne ligger typisk på niveau med en almindelig bolighandel — under 10.000 kr. inkl. moms for handler uden komplikationer. Ved særlige forhold, fx ved usædvanlige fordelingsnøgler eller uklare brugsrettigheder, aftaler vi honorar efter et konkret estimat.'
				]
			},
			{
				heading: 'Ingen handel — ingen regning',
				paragraphs: [
					'Trækker du dig under advokatforbeholdet på baggrund af vores rådgivning, koster det ikke noget. Falder handlen af andre årsager — fx at sælger trækker sig, eller at dit forbehold for eget salg ikke opfyldes — afregner vi arbejdet som aftalt.'
				]
			}
		]
	},
	{
		slug: 'byggegrund',
		category: 'boligkoeb',
		title: 'Køb af byggegrund',
		navLabel: 'Byggegrund',
		heroImage: defaultImage,
		shortDescription:
			'Skal du købe grund til nybyggeri? Vi gennemgår lokalplan, servitutter og byggemulighederne, så du ved præcis hvad du køber.',
		body: [
			{
				heading: 'Byggegrund — først noget værd, når du ved, hvad du må bygge',
				paragraphs: [
					'En byggegrund er først noget værd, når du reelt kan bygge det hus, du drømmer om. Det er her, vi starter.',
					'Vi undersøger, om lokalplan, kommuneplan, servitutter og byggelovgivning tillader dit projekt. Vi gennemgår skøde og købsaftale, tjekker vejret, byggemodning, forsyninger (kloak, vand, varme, el, internet), jordbund og eventuel forurening. Hvis der er servitutter, der begrænser byggehøjde, udnyttelsesgrad eller anvendelse, får du det at vide — før handlen bliver endelig. Har du brug for et dybere myndighedstjek, kan du læse mere om <a href="/ydelser/fast-ejendom/planlovgivning" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">planlovgivning</a>.',
					'Grunde med uafklarede forhold, beskyttelseslinjer eller en lokalplan under udarbejdelse er særligt risikable. Det er også her, tidlig rådgivning ofte redder projektet eller dig ud af en ufordelagtig situation. Hvis projektet allerede er i gang og er kørt fast, hjælper vi også med <a href="/ydelser/fast-ejendom/byggesag" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">byggesager</a>.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'En almindelig gennemgang af en ubebygget grund til op til 3 mio. kr. kan erfaringsmæssigt klares for 9.995 kr. inkl. moms. Ved større handler eller uafklarede planforhold afregner vi på timepris efter et estimat, vi giver up front.'
				]
			},
			{
				heading: 'Ingen handel — ingen regning',
				paragraphs: [
					'Trækker du dig under advokatforbeholdet på baggrund af vores rådgivning, koster det ikke noget. Falder handlen af andre årsager — fx at sælger trækker sig, eller at dit forbehold for eget salg ikke opfyldes — afregner vi arbejdet som aftalt.'
				]
			}
		]
	},
	{
		slug: 'andelsbolig',
		category: 'boligkoeb',
		title: 'Køb af andelsbolig',
		navLabel: 'Andelsbolig',
		heroImage: defaultImage,
		shortDescription:
			'Andelsboligens økonomi og vedtægter kræver nøje gennemgang. Vi sikrer, at foreningens økonomi er sund og papirerne er i orden.',
		body: [
			{
				heading: 'Andelsbolig — foreningens økonomi er lige så vigtig som boligen',
				paragraphs: [
					'Når du køber en andelsbolig, køber du ikke fast ejendom. Du køber en ret til at bo i boligen — gennem medlemskab af en andelsboligforening. Og foreningens gæld, rentebindinger og vedligeholdelsestilstand har direkte betydning for værdien af din andel.',
					'Vi gennemgår vedtægter, seneste årsregnskab, referater fra generalforsamling, valuarvurdering og foreningens lånesammensætning. Hvis der er planer om større vedligehold, eller hvis værdiansættelsen hviler på optimistiske forudsætninger, fortæller vi dig det. Før du skriver under, ikke efter.',
					'Vi kender fælderne i ældre andelsforeninger med renteswaps og kreative værdiansættelser. Og vi siger det som det er.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Erfaringsmæssigt kan en almindelig andelsboligshandel klares for ca. 8.000 kr. inkl. moms (men eksl. udlæg til 3. mand). Ved særlige forhold — fx foreninger med renteswap, uklart regnskab eller uafklaret værdiansættelse, tvister o.lign. — aftaler vi honorar på forhånd.'
				]
			},
			{
				heading: 'Ingen handel — ingen regning',
				paragraphs: [
					'Trækker du dig under advokatforbeholdet på baggrund af vores rådgivning, koster det ikke noget. Falder handlen af andre årsager — fx at sælger trækker sig, eller at dit forbehold for eget salg ikke opfyldes — afregner vi arbejdet som aftalt.'
				]
			}
		]
	},
	{
		slug: 'boligfinansiering',
		category: 'boligkoeb',
		title: 'Boligfinansiering',
		navLabel: 'Boligfinansiering',
		heroImage: defaultImage,
		shortDescription:
			'Valget af finansiering har stor betydning for din økonomi. Vi rådgiver uvildigt om lånemuligheder og har tæt kontakt til bankerne.',
		body: [
			{
				heading: 'Boligfinansiering — vi har ingen interesser i, hvor du låner',
				paragraphs: [
					'Banken og realkreditinstituttet har deres egne interesser, når de foreslår dig en finansieringsløsning. Vi varetager kun dine interesser. Som advokater er vi lovbestemt uvildige — ingen provision, ingen bindinger til bestemte banker, kreditforeninger eller forsikringsselskaber.',
					'Vi læser dit finansieringstilbud kritisk: renteform (fast, variabel, lang kort binding), løbetid, afdragsfrihed, bidragssats, gebyrer, samlede kreditomkostninger over lånets levetid og omkostninger ved indfrielse. Hvis der er bedre alternativer, peger vi på det.',
					'Vi rådgiver også om kurssikring, kursgevinst og -tab, og skattemæssige forhold ved rentebetaling.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Gennemgang af lånetilbud i forbindelse med en bolighandel er som regel inkluderet i det samlede honorar. Ønsker du en selvstændig second opinion uden tilknytning til en handel, aftaler vi et estimat efter sagens kompleksitet.'
				]
			}
		]
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
		body: [
			{
				heading: 'Boliglejeret — både for lejere og udlejere',
				paragraphs: [
					'Både lejere og udlejere står ofte med en fraflytningsopgørelse, de ikke forstår — eller en opsigelse, der ikke er lovlig.',
					'Vi bistår begge sider: tvister om fraflytningsopgørelse, vedligeholdelsespligt, lejeforhøjelse, varslinger, opsigelse og ophævelse. Vi fører sager ved huslejenævn, beboerklagenævn og domstolene og forhandler forlig, når det er den rigtige vej.',
					'Vi har ført mange huslejenævnssager og retssager på udlejerside og kender reglerne fra begge sider af bordet. Det betyder, at vi altid giver en realistisk vurdering af, om sagen er værd at føre — før du bruger tid og penge på den.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Gennemgang af lejekontrakt eller fraflytningsopgørelse kan typisk klares på 1–3 timer. Nævnssager og retssager afregner vi på timepris mod et estimat up front. Du ved, hvad du går ind til.'
				]
			}
		]
	},
	{
		slug: 'mangler-ved-fast-ejendom',
		category: 'fast-ejendom',
		title: 'Mangler ved fast ejendom',
		navLabel: 'Mangler ved fast ejendom',
		heroImage: defaultImage,
		shortDescription:
			'Er der opdaget mangler efter overtagelsen? Vi vurderer sagen og hjælper dig med at gøre krav gældende over for sælger.',
		body: [
			{
				heading: 'Mangler — du har rettigheder, men ikke i al evighed',
				paragraphs: [
					'Opdager du først efter overtagelsen, at der er noget galt — fugtskader, skjulte mangler, ulovligt byggeri, råd — så har du rettigheder. Men fristerne er korte. Jo hurtigere du reagerer, jo større er chancen for at få afhjælpning, prisafslag eller erstatning. Læs også vores guide til <a href="/gode-raad/tilstandsrapport-og-ejerskifteforsikring" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">tilstandsrapport og ejerskifteforsikring</a>.',
					'Vi vurderer, om kravet dækkes af <a href="/ydelser/fast-ejendom/ejerskifteforsikring" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">ejerskifteforsikringen</a> eller sælgers ansvar eller slet ikke. Vi forhandler først — og fører sag, hvis det er nødvendigt.',
					'Vigtigst: vi siger det, som det er. Hvis kravet er svagt, bruger vi ikke din tid og penge på en sag, du ikke kan vinde.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende vurdering af din sag kan typisk klares på 1–2 timer. Videre sagsgang afregner vi efter timepris, når vi kender omfanget — og du får altid et estimat up front.'
				]
			}
		]
	},
	{
		slug: 'ejerskifteforsikring',
		category: 'fast-ejendom',
		title: 'Ejerskifteforsikring',
		navLabel: 'Ejerskifteforsikring',
		heroImage: defaultImage,
		shortDescription:
			'Vi hjælper dig med at anmelde skader og håndtere uenighed med forsikringsselskabet om dækning af skjulte mangler.',
		body: [
			{
				heading: 'Ejerskifteforsikring — langt mindre end du tror',
				paragraphs: [
					'Ejerskifteforsikringen lyder som en fuld kaskoforsikring for din bolig. Det er den sjældent.',
					'Dækningen er i praksis snævert afgrænset: kun skjulte mangler, ikke nævnt i tilstandsrapporten, som du ikke burde have set. Slid, vedligeholdelse, ulovligt byggeri og forhold, den bygningssagkyndige burde have opdaget, er ikke med. Og selvrisikoen er ofte så høj, at små skader reelt ikke dækkes.',
					'Vi gennemgår forsikringsbetingelserne, før du vælger — og bistår med anmeldelse og tvist, hvis selskabet afslår. Vi kender de typiske afslagsårsager, og vi siger klart til, når det er værd at klage, og når det ikke er. Er skaden allerede opstået, kan du også læse om <a href="/ydelser/fast-ejendom/mangler-ved-fast-ejendom" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">mangler ved fast ejendom</a>.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende gennemgang er ofte del af vores rådgivning i en bolighandel. Tvister om dækning afregnes på timepris efter et estimat.'
				]
			}
		]
	},
	{
		slug: 'entrepriseret',
		category: 'fast-ejendom',
		title: 'Entrepriseret',
		navLabel: 'Entrepriseret',
		heroImage: defaultImage,
		shortDescription:
			'Rådgivning om entreprisekontrakter, AB 18, mangler, forsinkelse og tvister i byggesager.',
		body: [
			{
				heading: 'Entrepriseret — detaljerne bliver til penge, når noget går galt',
				paragraphs: [
					'Entrepriseret handler om detaljerne. Hvem har ansvaret, hvornår går arbejdet i gang, hvem hæfter for mangler, hvordan håndteres ekstraarbejder, og hvad sker der, når tidsplanen skrider? Det er i detaljerne, pengene ligger — både gevinsterne og tabene.',
					'Vi rådgiver private bygherrer, mindre entreprenører og rådgivere om kontraktindgåelse (AB 18, ABT 18, ABR 18), igangværende byggerier, mangler, tvister og syn og skøn.',
					'Med over 20 års arbejde med byggesager og baggrund fra Københavns Kommunes byggesagsbehandling og By- og Boligministeriet har vi en særlig fordel, når myndighedssiden spiller ind — fx ved påbud, stop for arbejde eller manglende tilladelser.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende kontraktgennemgang kan typisk klares på 2–4 timer. Løbende rådgivning og tvister afregnes efter timepris mod et estimat up front.'
				]
			}
		]
	},
	{
		slug: 'naboret',
		category: 'fast-ejendom',
		title: 'Naboret',
		navLabel: 'Naboret',
		heroImage: defaultImage,
		shortDescription:
			'Uenighed om hæk, skel, indbliks- eller støjgener? Vi rådgiver om naboretlige spørgsmål og hjælper med mediation eller retssag.',
		body: [
			{
				heading: 'Naboret — når forholdet til naboen bliver en sag',
				paragraphs: [
					'Et godt naboskab kan ødelægges af en hæk, et byggeri der skygger, en støjgene eller en skellinje, der aldrig blev afklaret. Vi ved, hvornår det er en juridisk sag — og hvornår det er en forhandling, der kan løses ved en samtale med begge parter.',
					'Vi finder ud af, hvem der har ret, og hvad der realistisk kan lade sig gøre. Forhandling først: en tilpasset hæk og et skriftligt forlig er næsten altid bedre end en retssag. Kan sagen ikke forliges, fører vi den.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende vurdering af sagen kan typisk klares på 1–2 timer. Retssager og sager ved klagenævn afregnes på timepris mod et estimat.'
				]
			}
		]
	},
	{
		slug: 'forurenet-jord',
		category: 'fast-ejendom',
		title: 'Forurenet jord',
		navLabel: 'Forurenet jord',
		heroImage: defaultImage,
		shortDescription:
			'Har du opdaget jordforurening på din grund? Vi rådgiver om ansvar, oprydning og eventuelle krav mod sælger eller myndigheder.',
		body: [
			{
				heading: 'Forurenet jord — ansvaret følger ejendommen, ikke forureneren',
				paragraphs: [
					'Forurening er ofte usynlig — indtil nogen bygger, sælger eller ændrer anvendelsen. Så dukker den op som et problem, ingen vil betale for.',
					'Reglerne i jordforureningsloven er komplekse, og ansvaret kan ende hos både ejer, køber og tidligere forurener. Vi rådgiver om kortlægning (V1 og V2), undersøgelsesforpligtelser, § 8-tilladelser ved ændret anvendelse, erstatningskrav og forsikringsforhold. Særligt ved køb af ejendomme med tidligere erhvervsanvendelse — værksted, benzintank, renseri — er tidlig advokatrådgivning ofte det, der redder handlen eller projektet.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende vurdering af forureningsrisikoen kan typisk klares på 1–3 timer. Videre sagsgang afregnes efter timepris mod et estimat.'
				]
			}
		]
	},
	{
		slug: 'tvister-og-klagesager',
		category: 'fast-ejendom',
		title: 'Tvister og klagesager',
		navLabel: 'Tvister og klagesager',
		heroImage: defaultImage,
		shortDescription:
			'Vi fører retssager og klagesager om fast ejendom — fra Ankenævn for Ejendomsmæglervirksomhed til byret og landsret.',
		body: [
			{
				heading: 'Tvister — vi fører sagen der, hvor den har bedst chance',
				paragraphs: [
					'Ikke alle tvister skal føres i retten. Mange af de vigtigste afgørelser om fast ejendom træffes i forvaltningens klageinstanser — huslejenævn, beboerklagenævn, Planklagenævnet, Miljø- og Fødevareklagenævnet, Ankenævnet for Huseftersyn, Skatteankestyrelsen.',
					'Vi vurderer, hvor din sag har bedst chance, og om en forligsforhandling er realistisk. Vi har ført sager i de fleste relevante nævn og ved byret, landsret og Planklagenævnet — og siger klart til, når en sag ikke er værd at føre.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende vurdering af sagen kan typisk klares på 2–4 timer. Nævnssager og retssager afregnes efter timepris mod et estimat up front.'
				]
			}
		]
	},
	{
		slug: 'ejerforening',
		category: 'fast-ejendom',
		title: 'Ejerforening',
		navLabel: 'Ejerforening',
		heroImage: defaultImage,
		shortDescription:
			'Rådgivning til ejerforeninger og enkeltmedlemmer om vedtægter, generalforsamling, fællesudgifter og tvister.',
		body: [
			{
				heading: 'Ejerforening — fra stiftelse til den svære generalforsamling',
				paragraphs: [
					'En ejerforening har brug for juridisk hjælp på flere stadier: stiftelse, vedtægtsændringer, fordelingstal, forberedelse af generalforsamling, tvister med ejere, byggesager i fællesejendommen, fortolkning af servitutter, pantsætning og bestyrelsesansvar.',
					'Vi kommer også gerne som ekstern juridisk rådgiver på en konkret sag — uden fast engagement — når bestyrelsen har brug for et hurtigt og neutralt svar.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Enkle opgaver som gennemlæsning af et dokument kan klares på 1–2 timer. Større sager afregnes efter timepris mod et estimat up front.'
				]
			}
		]
	},
	{
		slug: 'planlovgivning',
		category: 'fast-ejendom',
		title: 'Planlovgivning',
		navLabel: 'Planlovgivning',
		heroImage: defaultImage,
		shortDescription:
			'Vi hjælper med klager over lokalplaner, dispensationer, landzonetilladelser og andre planretlige afgørelser.',
		body: [
			{
				heading: 'Planlovgivning — fra lokalplan til Planklagenævnet',
				paragraphs: [
					'Lokalplan, kommuneplan og dispensation afgør, hvad du må bygge og ændre på din ejendom. Vi kender både reglerne og forvaltningspraksis. Hvis du står før et grundkøb, kan du med fordel læse om <a href="/ydelser/boligkoeb/byggegrund" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">køb af byggegrund</a>.',
					'Med baggrund fra Københavns Kommune, By- og Boligministeriet og 20+ års arbejde med plan- og byggesager har vi en særlig indsigt i sagsgangen, klagesystemets nåleøjer og domstolenes tilgang. Vi rådgiver ejere, investorer, bygherrer og grundejerforeninger. Er sagen allerede låst i kommunen, hjælper vi også med <a href="/ydelser/fast-ejendom/byggesag" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">hjælp til din byggesag</a>.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Enkle vurderinger kan klares på 2–4 timer. Dispensationsansøgninger og klagesager afregnes efter timepris mod et estimat up front.'
				]
			}
		]
	},
	{
		slug: 'byggesag',
		category: 'fast-ejendom',
		title: 'Hjælp til din byggesag',
		navLabel: 'Byggesag',
		heroImage: defaultImage,
		shortDescription:
			'Fra byggetilladelse til færdigmelding — vi bistår dig gennem byggesagen og sikrer, at kommunens krav er opfyldt.',
		body: [
			{
				heading: 'Byggesag — vi får den i gang igen',
				paragraphs: [
					'Byggesagen er ofte den del af byggeriet, der går i stå. Kommunens sagsbehandling trækker ud, nabohøringen giver modstand, eller I modtager et påbud om lovliggørelse, ingen havde regnet med.',
					'Vi hjælper private, virksomheder og mæglere med både almindelige byggesager og de komplicerede: ulovligt byggeri, manglende færdigmelding, BBR-fejl, nabohøring med modstand, byggeri inden for beskyttelseslinjer. Vi rykker hurtigt og kender sagsgangene indefra. Vi har særligt kendskab til fredede ejendomme fra mange sager. Mange byggesager hænger tæt sammen med <a href="/ydelser/fast-ejendom/planlovgivning" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">planlovgivning</a> og starter allerede ved <a href="/ydelser/boligkoeb/byggegrund" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">køb af byggegrund</a>.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende vurdering af en byggesag kan typisk klares på 1–3 timer. Videre arbejde — ansøgning, dispensation, lovliggørelse — afregnes efter timepris mod et estimat up front.'
				]
			}
		]
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
		body: [
			{
				heading: 'Testamente — så fordelingen sker, som du vil',
				paragraphs: [
					'Uden testamente fordeles dine værdier efter arvelovens standardregler. De passer sjældent til moderne familier — særligt ved sammenbragte familier, ugifte samlevende, børn af flere relationer eller ejendomme i udlandet.',
					'Vi rådgiver om testamentform, båndlæggelse, særeje og samspil med ægtepagt, gaver og forsikringer.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Et almindeligt testamente kan typisk klares for 7.000–9.500 kr. inkl. moms. Ved særlige forhold aftaler vi honorar på forhånd.'
				]
			}
		]
	},
	{
		slug: 'aegtepagt',
		category: 'familiearveret',
		title: 'Ægtepagt',
		navLabel: 'Ægtepagt',
		heroImage: defaultImage,
		shortDescription:
			'Med en ægtepagt bestemmer I selv, hvordan jeres formue skal fordeles. Vi rådgiver om særeje, skilsmissesæreje og kombinationsløsninger.',
		body: [
			{
				heading: 'Ægtepagt — så I ved, hvad der er hvad',
				paragraphs: [
					'En ægtepagt kan give klarhed om, hvad der er dit, og hvad der er fælles — enten ved skilsmisse, dødsfald eller begge dele. Særligt ved virksomhed, arv eller usædvanlige familieforhold.',
					'Vi rådgiver om valg mellem skilsmissesæreje, fuldstændigt særeje, brøkdelssæreje og kombinationer — og samspillet med testamente og arvesikring.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'En almindelig ægtepagt kan typisk klares for 3.500–6.500 kr. inkl. moms. Ved komplekse forhold aftaler vi honorar på forhånd.'
				]
			}
		]
	},
	{
		slug: 'fremtidsfuldmagt',
		category: 'familiearveret',
		title: 'Fremtidsfuldmagt',
		navLabel: 'Fremtidsfuldmagt',
		heroImage: defaultImage,
		shortDescription:
			'En fremtidsfuldmagt sikrer, at dine nærmeste kan handle på dine vegne, hvis du mister evnen til selv at tage beslutninger.',
		body: [
			{
				heading: 'Fremtidsfuldmagt — for det, du håber aldrig sker',
				paragraphs: [
					'Hvis du en dag ikke selv kan træffe beslutninger — på grund af sygdom eller alderdom — skal nogen kunne handle på dine vegne. Uden en fremtidsfuldmagt risikerer dine pårørende at skulle gå gennem et værgemål, som er både langvarigt og indgribende.',
					'Vi rådgiver om rammerne, formuleringen og registreringen, så fuldmagten træder i kraft, præcis som du ønsker.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'En almindelig fremtidsfuldmagt kan typisk klares for 2.500–4.000 kr. inkl. moms.'
				]
			}
		]
	},
	{
		slug: 'doedsbobehandling',
		category: 'familiearveret',
		title: 'Hjælp til dødsbobehandling',
		navLabel: 'Dødsbobehandling',
		heroImage: defaultImage,
		shortDescription:
			'Vi bistår med privat skifte, bobestyrerbehandling og alle de praktiske og juridiske opgaver ved et dødsbo.',
		body: [
			{
				heading: 'Dødsbobehandling — vi tager hånd om det praktiske',
				paragraphs: [
					'Efter et dødsfald er der både følelsesmæssige og praktiske ting, der skal ordnes hurtigt. Vi hjælper familier trygt igennem: valg af skifteform (privat skifte, bobestyrerbo, uskiftet bo), opgørelse af aktiver og passiver, skatteforhold, arvedeling og tinglysning af udlægsskøde.',
					'Vi påtager os også rollen som bobestyrer, når boet er komplekst, eller arvingerne er uenige.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Ukomplicerede privatskifter kan typisk klares for 10.000–15.000 kr. inkl. moms. Mere komplekse boer afregnes på timepris mod et estimat efter boets størrelse, det forbundne ansvar og tidsforbruget. Eller til fast pris efter aftale.'
				]
			}
		]
	},
	{
		slug: 'retssager-tvister',
		category: 'familiearveret',
		title: 'Retssager og andre tvister',
		navLabel: 'Retssager og tvister',
		heroImage: defaultImage,
		shortDescription:
			'Opstår der strid om arv, testamente eller ægtefælleskifte, fører vi sagen gennem forhandling, skifteretten eller ved domstolene.',
		body: [
			{
				heading: 'Retssager — vi fører sagen, men kun hvis den er værd at føre',
				paragraphs: [
					'De fleste tvister kan løses uden retssag. Forhandling, forlig eller klageinstans er billigere, hurtigere og mere forudsigelige. Men når modparten ikke vil forhandle, eller sagen kun kan afgøres af retten, fører vi den.',
					'Vi har ført sager for byretten, og flere klagenævn inden for fast ejendom, entrepriseret, erhvervsleje og naboforhold. Har din sag primært karakter af en ejendomstvist, kan du læse mere om <a href="/ydelser/fast-ejendom/tvister-og-klagesager" class="text-[var(--color-accent)] underline underline-offset-2 hover:opacity-80">tvister og klagesager</a>. Og vi vurderer realistisk, før vi går i gang — chancer, omkostninger og risici.'
				]
			},
			{
				heading: 'Priseksempel',
				paragraphs: [
					'Indledende vurdering af din sag er gratis. Selve retssagen afregnes på timepris mod et estimat up front.'
				]
			}
		]
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
