import type { GodtRaad } from '$lib/types';

const defaultImage = { src: '/copenhagencityy.jpg', alt: 'Københavnsk boligområde' };

export const godtRaad: GodtRaad[] = [
	{
		slug: 'advokatforbehold',
		title: 'Advokatforbehold — hvad det er, og hvorfor du aldrig bør skrive under uden',
		navLabel: 'Advokatforbehold',
		heroImage: defaultImage,
		shortDescription:
			'Et advokatforbehold giver dig ret til at få købsaftalen gennemgået af en advokat, før handlen bliver endelig. Det er gratis — og det kan redde dig.',
		body: [
			{
				heading: 'Hvad er et advokatforbehold?',
				paragraphs: [
					'Et advokatforbehold er et vilkår i købsaftalen, der gør handlen betinget af din advokats godkendelse. Det betyder, at selvom du har skrevet under, er handlen ikke endelig, før advokaten har gennemgået den og sendt en godkendelsesskrivelse — eller meddelt mægleren, at advokaten ikke godkender handlen.',
					'Formuleringen er typisk kort og ligger som standardvilkår købsaftalens pkt. 11. Den ser ud i retningen af: "Nærværende købsaftale er fra købers side betinget af, at købers advokat kan godkende aftalen og handlens dokumenter i sin helhed. Eventuelle indsigelser skal være mægleren i hænde senest [dato]."',
					'Fristen er typisk mellem fem og ti hverdage efter underskrift. Den skal være lang nok til, at advokaten når at gennemgå alt materialet og forhandle eventuelle rettelser med mægleren og naturligvis drøfte alle forhold med dig, så alt står helt klart for dig.'
				]
			},
			{
				heading: 'Hvorfor det gør hele forskellen',
				paragraphs: [
					'Uden advokatforbehold er du bundet af handlen, så snart du har skrevet under. Du har som privatkøber en fortrydelsesret i seks hverdage — men den koster dig 1 % af købesummen i gebyr til sælger. På en handel til 4 mio. kr. er det 40.000 kr.',
					'Med advokatforbehold er det omvendt: handlen kan trækkes uden omkostninger, hvis advokaten gør indsigelse — og du får samtidig forhandlet eventuelle rettelser ind i købsaftalen, uden at sælger kan nægte at genforhandle. Uden forbeholdet er der ingen vej tilbage.',
					'Alt i alt betyder det, at advokatforbeholdet er det stærkeste forhandlingsværktøj, du har som køber — og det koster dig ingenting.'
				]
			},
			{
				heading: 'Hvad advokaten gennemgår i forbeholdsperioden',
				paragraphs: [
					'Når advokaten har modtaget sagen, gennemgås alle dokumenter systematisk. Det omfatter blandt andet:'
				],
				bullets: [
					'Selve købsaftalen med vilkår, forbehold og særlige bestemmelser',
					'Tilstandsrapport, elinstallationsrapport og energimærke',
					'Tilbud om ejerskifteforsikring',
					'Tingbogsattest og tinglyste servitutter',
					'BBR-meddelelsen',
					'Lokalplan og eventuelle byrådsbeslutninger af betydning',
					'Årsregnskab, vedtægter og referater fra generalforsamling, hvis der er tale om ejerforening eller andelsforening',
					'Eventuelle forbehold vedrørende finansiering'
				]
			},
			{
				heading: 'Hvis der findes problemer',
				paragraphs: [
					'Hvis der findes problemer — en uafsluttet byggesag, en servitut der begrænser dine planer, et mangelfuldt tilstandsrapport-grundlag eller et vilkår, der er ensidigt sælgers — rejser advokaten indsigelse. Mægleren får et klart svar, der enten fører til rettelse, prisnedslag eller annullering af handlen.'
				]
			},
			{
				heading: 'Gratis advokatforbehold — hvad betyder det egentlig?',
				paragraphs: [
					'Mange advokater tilbyder gratis rådgivning om selve formuleringen af advokatforbeholdet. Det betyder, at du kan ringe til advokaten, før du skriver under, og få hjælp til at sikre, at forbeholdet er korrekt formuleret og fristen er passende. Det er gratis og uforpligtende.',
					'Den efterfølgende gennemgang — selve advokatarbejdet — er ikke gratis, men hos os er den del af boligpakken til fast pris. Og hvis handlen ikke gennemføres efter advokatforbeholdet, betaler du ikke noget for gennemgangen.'
				]
			},
			{
				heading: 'Tre ting, du skal passe på',
				paragraphs: [
					'For det første: fristen. Mægleren kan forsøge at sætte en kort frist — tre dage er set. Insistér på minimum fem hverdage. Advokaten skal bruge tid på at få materiale, gennemgå det og forhandle.',
					'For det andet: formuleringen. Forbeholdet skal være "i sin helhed" — ikke begrænset til bestemte forhold. Hvis mægleren foreslår en indskrænket formulering, så ring til advokaten, før du skriver under.',
					'For det tredje: sælgeradvokatens rolle. Sælgers advokat er ikke din advokat. Selv hvis mægleren tilbyder at "lade handlen gå igennem sælgers advokat", er det ikke det samme som at have din egen uvildige rådgiver. Advokater er lovbestemt forpligtet til at være uvildige, men kun for egen klient.'
				]
			},
			{
				heading: 'Det korte råd',
				paragraphs: [
					'Skriv aldrig under på en købsaftale uden et advokatforbehold. Det er gratis at få formuleret, det koster ingenting at indskrive, og det kan spare dig for titusinder — eller hundredtusinder — hvis sagen viser sig at have problemer.'
				]
			}
		],
		seo: {
			description:
				'Et advokatforbehold giver dig ret til at få købsaftalen gennemgået af en advokat, før handlen bliver endelig. Det er gratis — og det kan redde dig.'
		}
	},
	{
		slug: 'servitutter',
		title: 'Servitutter — hvad er det, og hvorfor kan de være en deal-breaker?',
		navLabel: 'Servitutter',
		heroImage: defaultImage,
		shortDescription:
			'Servitutter er tinglyste rådighedsbegrænsninger, der følger ejendommen. Her er hvad de betyder — og hvornår de kan blokere dine planer.',
		body: [
			{
				heading: 'Hvad er en servitut?',
				paragraphs: [
					'En servitut er en tinglyst bestemmelse, der lægger en begrænsning eller en byrde på ejendommen. Den følger ejendommen, ikke ejeren — så når du køber, overtager du alle de servitutter, der er tinglyst på matriklen, uanset om du kender dem eller ej.',
					'Servitutter kan være enten negativ (forbud mod at gøre noget — fx "der må ikke opføres bebyggelse over 6 meter") eller positiv (pligt til at gøre noget — fx "ejeren skal vedligeholde vejen langs skel"). De kan også være enten ejendomsbetingede (gælder til fordel for en anden ejendom, typisk naboen) eller personlige (gælder til fordel for en bestemt person, en virksomhed eller en myndighed).',
					'De ældste servitutter stammer fra 1800-tallet. Mange er ligeså levende i dag, som dengang de blev tinglyst.'
				]
			},
			{
				heading: 'Hvor ser du servitutterne?',
				paragraphs: [
					'Alle tinglyste servitutter findes i tingbogen og kan slås op på tinglysning.dk. Tingbogsattesten, som din advokat indhenter i forbindelse med handlen, lister både ejerforhold, pantebreve og servitutter.',
					'Selve servitutteksten — dokumentet, der blev tinglyst dengang — kan også rekvireres. Her står den konkrete ordlyd, som afgør, hvad du må og ikke må. Det er den tekst, der skal læses med advokatbriller på.'
				]
			},
			{
				heading: 'De typiske servitutter, der skaber problemer',
				paragraphs: [
					'Byggelinjer og byggeforbud går ofte på tværs af ens planer. De er ofte tinglyst i forbindelse med udstykning af boligområder og kan forhindre tilbygninger, garager eller udestuer. Tjek altid, hvis du har planer om at bygge til.',
					'Vejret og færdselsret betyder, at privatveje ofte er belagt med servitutter, der giver naboer ret til at køre, parkere eller lægge ledninger. Du kan komme til at skulle vedligeholde vejen sammen med andre.',
					'Forsyningsledninger sikrer adgang for el, vand, kloak, fjernvarme eller telekommunikation, og kan betyde, at du ikke må bygge henover bestemte arealer — også selvom der ikke er synlige ledninger.',
					'Oversigtsservitutter og bebyggelsesregulerende servitutter kan begrænse højden, placeringen eller udformningen af byggeri. De er særligt udbredt i parcelhusområder fra 1960erne og 70erne.',
					'Påtaleret for grundejerforening betyder, at mange parcelhuskvarterer har en grundejerforening, der har påtaleret over servitutterne. Det betyder, at foreningen (ikke kommunen) kan kræve servitutten overholdt — og forlange nedrivning, hvis du har overtrådt den.',
					'Hjemfaldspligt er sjeldne ældre servitutter, typisk i Københavns Kommune, som kan give en offentlig myndighed ret til at overtage ejendommen til en bestemt pris på et bestemt tidspunkt. Det er sjældent, men konsekvenserne er dramatiske, når det rammer.'
				]
			},
			{
				heading: 'Kan servitutter aflyses?',
				paragraphs: [
					'Ja, men det er sjældent let. En servitut kan aflyses på tre måder:',
					'For det første ved accept fra den påtaleberettigede — den person, virksomhed eller myndighed, der har ret til at kræve servitutten overholdt. Her skal du finde ud af, hvem det er, og få en skriftlig samtykke. Det kan være alt fra en navngiven person (hvis død, så arvingerne) til Københavns Kommune.',
					'For det andet ved dom. Det kræver en retssag og er typisk dyrt og langvarigt.',
					'For det tredje ved forældelse. Nogle servitutter forældes, hvis de ikke har været påberåbt i mange år og ejendommen har været udnyttet i strid med dem i god tro. Reglerne er komplekse, og du bør få en advokat til at vurdere det konkret.'
				]
			},
			{
				heading: 'Hvad du bør gøre, før du skriver under',
				paragraphs: [
					'Hvis du har planer om at ombygge, udvide eller ændre anvendelsen af boligen, er servitut-tjekket det første, der skal laves. Det er her, gode handler nogle gange viser sig at være fælder — og hvor tidlig rådgivning kan afklare det hele på én dag.',
					'Din advokat skal som minimum indhente tingbogsattesten og alle servitutdokumenterne, læse hver servitut i sin fulde ordlyd, vurdere om dine konkrete planer er i konflikt med servitutterne, og hvis ja: undersøge, om aflysning eller dispensation er realistisk — og hvad det vil koste.'
				]
			},
			{
				heading: 'Det korte råd',
				paragraphs: [
					'Læs aldrig blot, hvad der står i salgsopstillingen om servitutter. Salgsopstillingen er en salgstekst, ikke en juridisk analyse. Den fulde servitutliste skal gennemgås af en advokat, før du skriver under — særligt hvis du har planer om at bygge, ændre eller udnytte ejendommen på en særlig måde.'
				]
			}
		],
		seo: {
			description:
				'Servitutter er tinglyste rådighedsbegrænsninger, der følger ejendommen. Her er hvad de betyder — og hvornår de kan blokere dine planer.'
		}
	},
	{
		slug: 'ulovligt-byggeri',
		title: 'Ulovligt byggeri i ejendommen — hvad gør du som køber?',
		navLabel: 'Ulovligt byggeri',
		heroImage: defaultImage,
		shortDescription:
			'Ulovligt byggeri på ejendommen kan ende hos dig som ny ejer. Her er hvad det betyder — og hvad du kan gøre, før og efter underskrift.',
		body: [
			{
				heading: 'Hvad er ulovligt byggeri?',
				paragraphs: [
					'Ulovligt byggeri er byggearbejde, der er udført uden den nødvendige byggetilladelse eller anmeldelse, eller som ikke er udført i overensstemmelse med den tilladelse, der blev givet. Det kan også være byggeri, der ikke er blevet færdigmeldt — hvor kommunens ibrugtagningstilladelse aldrig er indhentet.',
					'Byggeloven kræver som udgangspunkt byggetilladelse til tilbygninger, større ombygninger, nye bygninger over en vis størrelse, indretning af beboelse i tidligere uudnyttede arealer og til enhver ændring, der påvirker bærende konstruktioner eller brandforhold.',
					'Mange tænker, at "det er jo gjort for 30 år siden, så må det være lovliggjort ved passivitet". Det er det som hovedregel ikke. Kommunens adgang til at kræve lovliggørelse forældes ikke automatisk, selvom der er meget lang passivitet fra myndighedens side.'
				]
			},
			{
				heading: 'De typiske tilfælde, vi ser',
				paragraphs: [
					'Udestuer, overdækkede terrasser, skure og carporte uden byggetilladelse er meget almindelige. Udnyttet loftsrum eller kælder til beboelse uden godkendelse er ligeledes typisk. Indretning af ekstra badeværelse eller bryggers uden færdigmelding sker ofte, ligesom opdeling af enfamiliehus i to lejligheder uden tilladelse.',
					'Anneksser, gæstehuse eller udhuse på større ejendomme og sommerhuse, der aldrig er registreret, er også problematiske. Og så er der overskridelse af bebyggelsesprocent, byggehøjde eller afstandskrav til skel.',
					'I nogle tilfælde er der tale om lovliggørbare forhold — kommunen vil udstede en efterfølgende tilladelse, hvis man søger. I andre tilfælde er forholdene fysisk ulovlige, og eneste udvej er nedrivning.'
				]
			},
			{
				heading: 'Hvem hæfter — sælger eller køber?',
				paragraphs: [
					'Her skal du være opmærksom: kommunens påbud retter sig mod den aktuelle ejer, altså dig som køber — ikke mod den sælger, der oprindeligt byggede ulovligt. Kommunen er ligeglad med, hvem der byggede; de ser kun på ejendommens aktuelle tilstand.',
					'Du har dog et juridisk krav mod sælger, hvis sælger har undladt at oplyse om forholdet. Sælgers loyale oplysningspligt er et grundprincip i dansk aftaleret: væsentlige forhold, sælger kendte eller burde have kendt, skal oplyses. Hvis sælger fx selv byggede ulovligt og ikke fortalte det, kan du typisk kræve prisafslag, erstatning eller i værste fald ophævelse af handlen.',
					'Problemet er blot, at du skal finde sælger — og sælger skal have noget at betale med. Derfor er tidlig opdagelse altid bedre end efterklog opdagelse.'
				]
			},
			{
				heading: 'Lovliggørelse — fysisk eller retlig',
				paragraphs: [
					'Retlig lovliggørelse betyder, at kommunen efterfølgende giver den tilladelse, der oprindeligt skulle have været givet. Det kan ske, hvis byggeriet i dag ville være tilladt. Du skal typisk betale et gebyr og indsende dokumentation, og så er sagen løst.',
					'Fysisk lovliggørelse betyder, at det ulovlige byggeri skal fjernes eller ændres. Det sker, hvis byggeriet ikke kan godkendes efter gældende regler — fx hvis det overskrider byggelinjer, ligger for tæt på skel eller bryder lokalplanen.',
					'Forskellen på de to udfald kan være hundredtusinder af kroner. Derfor er det afgørende at få en kvalificeret vurdering, før du skriver under — ikke efter.'
				]
			},
			{
				heading: 'Hvad du bør gøre, før du skriver under',
				paragraphs: [
					'Tjek BBR-meddelelsen og sammenhold den med det, du ser på ejendommen. Hvis der er væsentlig forskel mellem bygningerne og BBR-registreringen — en udvidet boligareal, en ekstra bygning, en ændret anvendelse — er det advarselssignal nummer et.',
					'Spørg sælger direkte, om alt byggearbejde er godkendt og færdigmeldt. Få svaret skriftligt, fx i sælgers udfyldelse af "spørgsmål til sælger"-skemaet. Det bliver bevis senere.',
					'Få din advokat til at indhente ejendommens byggesagshistorik fra kommunen. Kommunen opbevarer byggetilladelser, færdigmeldinger og ibrugtagningstilladelser i en byggesagsarkivmappe, der typisk kan rekvireres i byggesagsregisteret eller via kommunens aktindsigtsafdeling. Det tager nogle få dage og afslører næsten altid, om der mangler en tilladelse.'
				]
			},
			{
				heading: 'Hvad du gør, hvis du opdager det efter overtagelsen',
				paragraphs: [
					'Reager hurtigt. Reklamationsfrister over for sælger er korte, og jo længere du venter, jo svagere bliver dit krav. Tag fotos og dokumentation, kontakt advokat og rejs dit krav skriftligt til sælger — også selv om du endnu ikke har haft kommunen i tale.',
					'Overvej om ejerskifteforsikringen dækker. Som hovedregel dækker den ikke ulovligt byggeri, fordi det ikke er en "skjult mangel" i forsikringens forstand — men der er nuancer, og hver sag skal vurderes konkret.'
				]
			},
			{
				heading: 'Faglig dybde i byggesager',
				paragraphs: [
					'Byggesager og lovliggørelse er ikke et almindeligt advokatspeciale. De kræver kendskab til både Byggeloven, planforhold og kommunale procedurer. Tidlig faglig vurdering er derfor vigtig — den kan afdække, om et forhold overhovedet er lovliggørbart, eller om det er et knockout-argument i en handel.'
				]
			}
		],
		seo: {
			description:
				'Ulovligt byggeri på ejendommen kan ende hos dig som ny ejer. Her er hvad det betyder — og hvad du kan gøre, før og efter underskrift.'
		}
	},
	{
		slug: 'refusionsopgorelse',
		title: 'Refusionsopgørelsen forklaret — hvad betaler du, og hvad får du tilbage?',
		navLabel: 'Refusionsopgørelse',
		heroImage: defaultImage,
		shortDescription:
			'Refusionsopgørelsen er den sidste regning i en bolighandel. Her er hvad den indeholder — og hvor der typisk findes fejl til flere tusinde kroner.',
		body: [
			{
				heading: 'Hvad er en refusionsopgørelse?',
				paragraphs: [
					'Når en ejendomshandel gennemføres, overtager du som køber alle ejendommens udgifter og forpligtelser fra og med overtagelsesdagen — også kaldt skæringsdagen. Sælger har typisk allerede betalt en række af disse udgifter forud (ejendomsskat, forsikring, fællesudgifter osv.) for perioder, der strækker sig hen over skæringsdagen.',
					'Refusionsopgørelsen er simpelthen den opgørelse, der fordeler disse forud-betalinger og eventuelle restbetalinger mellem sælger og køber, så hver part betaler sin andel.',
					'Resultatet er enten et beløb, du skal betale til sælger (hvis sælger har betalt mere forud, end din andel udgør), eller et beløb, du skal have tilbage fra sælger (hvis du er forpligtet for noget, sælger ikke har dækket).'
				]
			},
			{
				heading: 'Hvornår laves refusionsopgørelsen?',
				paragraphs: [
					'Opgørelsen udarbejdes efter overtagelsesdagen — typisk inden for 30 dage — af købers advokat. Sælgers advokat eller sælger selv godkender eller kommer med indsigelser. Når opgørelsen er godkendt, frigives det eventuelle resterende deponeringsbeløb i banken, og handlen er endeligt afsluttet økonomisk.',
					'Det er vigtigt at forstå, at opgørelsen ikke er sjældent — den laves ved stort set alle almindelige bolighandler.'
				]
			},
			{
				heading: 'Hvad indgår typisk i opgørelsen?',
				paragraphs: [
					'Ejendomsskat og grundskyld betales af sælger forud for et kvartal eller halvår. Din andel opgøres fra skæringsdagen. Ejendomsforsikring: hvis du overtager sælgers forsikring, refunderes den forud-betalte præmie fra skæringsdagen og året ud. Hvis du tegner en ny forsikring, bortfalder denne post.',
					'Fællesudgifter i ejerforening eller andelsforening betales ofte månedsvis eller kvartalsvis. Sælgers betaling for den igangværende periode fordeles. Forbrug af vand, varme og el opgøres ved aflæsning på skæringsdagen. Refusion sker typisk med acontobeløb, og det endelige forbrug opgøres senere direkte med forsyningsselskabet.',
					'Skorstensfejer, renovation og rottebekæmpelse betales typisk sammen med ejendomsskatten. Antenneforening, vejlaug og grundejerforening skal også med, hvis der er sådanne. Og eventuel restgæld på pantebreve eller andre forpligtelser, der følger med ejendommen, skal opgøres.'
				]
			},
			{
				heading: 'Et praktisk eksempel',
				paragraphs: [
					'Forestil dig, at du overtager et hus i Rødovre den 1. juli. Sælger har i januar betalt grundskyld på 20.000 kr. for hele året. Din andel fra 1. juli og året ud er 10.000 kr. Du skal derfor refundere sælger 10.000 kr. i opgørelsen.',
					'Samtidig har sælger betalt forsikringspræmie på 8.000 kr. for året, der løber til og med 31. december. Din andel fra 1. juli er 4.000 kr. — og dem refunderer du også sælger.',
					'Til gengæld skal sælger dække de sidste fem dage af juni i fællesudgifter, som beboerforeningen har opkrævet i juli, og forbruget frem til skæringsdagen. Typisk ender opgørelsen med en enkel nettoberegning: et beløb, der enten overføres fra køber til sælger, eller modregnes i resterende deponering.'
				]
			},
			{
				heading: 'De typiske fejl, vi finder',
				paragraphs: [
					'Efter at have gennemgået hundredvis af refusionsopgørelser ser vi de samme fejl dukke op igen og igen. Forkert skæringsdag betyder, at hvis skæringsdagen er flyttet, efter købsaftalen blev underskrevet, glemmer man ofte at opdatere alle udregninger.',
					'Manglende forbrugsaflæsning betyder, at uden dokumentation for aflæsningerne på skæringsdagen bliver forbruget skønsmæssigt fordelt — næsten altid til købers disfavør. Fejl i grundskylden opstår, når den fastsættes årligt, og hvis ejendommen har fået ny vurdering, bruger man nogle gange den forkerte sats.',
					'Ejendomsforsikring uden overdragelse: sælgers advokat beregner forsikringsrefusion, selvom køber har tegnet ny forsikring, og den gamle er opsagt. Der glemt fjernvarme-acontobetaling eller acontobeløb til vandforsyning. Og ejerforeningens rullende istandsættelsesopkrævning er med — eller netop ikke med — ved en fejl.',
					'Samlet set kan de fejl nemt løbe op i 10.000–15.000 kr. i køberens disfavør.'
				]
			},
			{
				heading: 'Det korte råd',
				paragraphs: [
					'Du bør ikke selv godkende en refusionsopgørelse uden advokatgennemgang. Hos os er gennemgang af refusionsopgørelsen del af boligpakkerne — ikke en ekstra ydelse. Det handler om, at handlen først er virkelig afsluttet, når opgørelsen er korrekt og deponeringsbeløbet er frigivet.'
				]
			}
		],
		seo: {
			description:
				'Refusionsopgørelsen er den sidste regning i en bolighandel. Her er hvad den indeholder — og hvor der typisk findes fejl til flere tusinde kroner.'
		}
	},
	{
		slug: 'tilstandsrapport-og-ejerskifteforsikring',
		title: 'Tilstandsrapport og ejerskifteforsikring — hvad de dækker, og hvad de ikke dækker',
		navLabel: 'Tilstandsrapport og forsikring',
		heroImage: defaultImage,
		shortDescription:
			'Tilstandsrapporten og ejerskifteforsikringen giver tryghed — men dækker ikke alt. Her er hvad du bør vide, før du skriver under.',
		body: [
			{
				heading: 'Huseftersynsordningen — hvad det handler om',
				paragraphs: [
					'Tilstandsrapporten, elinstallationsrapporten og ejerskifteforsikringen er dele af den såkaldte huseftersynsordning. Ordningen er frivillig for sælger, men den har en vigtig juridisk virkning: hvis sælger får udarbejdet tilstandsrapport og elrapport og tilbyder at betale halvdelen af den første præmie på en ejerskifteforsikring, fralægger sælger sig en stor del af sit ansvar for mangler ved ejendommen.',
					'Det betyder, at dit retlige krav mod sælger efter handlen er begrænset. Til gengæld har du ejerskifteforsikringen, hvis du tegnede den. Kun hvis forsikringen ikke dækker, og sælger har handlet groft uagtsomt eller tilbageholdt oplysninger, kan du gå tilbage på sælger.',
					'I praksis vil det sige, at ejerskifteforsikringen bliver dit primære sikkerhedsnet. Og derfor er det vigtigt at vide, hvad den reelt dækker.'
				]
			},
			{
				heading: 'Hvad er tilstandsrapporten?',
				paragraphs: [
					'Tilstandsrapporten er en bygningsgennemgang foretaget af en beskikket bygningssagkyndig. Den gennemgår ejendommens synlige stand og angiver fejl og skader i karakterer: K0 (kosmetisk), K1 (mindre alvorlig), K2 (alvorlig) og K3 (kritisk). Desuden kan rapporten indeholde UN-mærkninger (undersøges nærmere).',
					'Rapporten er gyldig i seks måneder og danner grundlag for forsikringstilbuddet.'
				]
			},
			{
				heading: 'Hvad er elinstallationsrapporten?',
				paragraphs: [
					'Elinstallationsrapporten er tilsvarende en gennemgang foretaget af en autoriseret elinstallatør med fokus på ejendommens elinstallationer. Fejl markeres med tilsvarende karaktersystem.'
				]
			},
			{
				heading: 'Hvad er ejerskifteforsikringen?',
				paragraphs: [
					'Ejerskifteforsikringen er en frivillig forsikring, køber kan tegne i forbindelse med bolighandlen. Den dækker skjulte mangler — altså forhold, der var til stede på overtagelsesdagen, men som ikke fremgik af tilstandsrapporten eller elrapporten, og som køber ikke kendte til eller burde have kendt til.',
					'Præmien betales halvt af sælger (af det laveste tilbud) og halvt af køber som engangsbeløb — og forsikringen dækker i mellem fem og ti år, afhængigt af hvilken løsning du vælger.'
				]
			},
			{
				heading: 'Hvad forsikringen ikke dækker — og her ligger fælderne',
				paragraphs: [
					'Det er vigtigt at forstå, at ejerskifteforsikringen har mange undtagelser. Typiske områder, der ikke dækkes, er:'
				],
				bullets: [
					'Almindeligt slid og ælde. Tage, der er udtjente, men ikke defekte. Vinduer med termorudeklemme, der er ved at bryde sammen. Disse forhold er "forventelige" og ikke mangler i forsikringens forstand.',
					'Vedligeholdelsesmangler. Manglende maling, lappet puds, rustne tagplader osv. Sælger havde ansvar for løbende vedligeholdelse, men forsikringen dækker ikke resultatet.',
					'Forhold, der burde være fundet ved bygningsgennemgangen. Hvis den bygningssagkyndig burde have opdaget en fejl, men undlod det, er forholdet sælgers eller den sagkyndiges ansvar, ikke forsikringens.',
					'Ulovligt byggeri og myndighedsforhold. Dækkes som udgangspunkt ikke. Et ulovligt byggeri, der senere kræver lovliggørelse, er ikke en "skjult mangel" i forsikringens forstand.',
					'Stikledninger og kloak. Mange standardforsikringer dækker ikke — eller kun med betydelige forbehold — fejl i stikledninger (fra skel til bygning) eller hovedkloakken. Udvidelser til disse områder koster ekstra.',
					'Olietanke, nedgravede olietanke og jordforurening. Dækkes typisk ikke. Bør særskilt undersøges.',
					'Termoruder og punkterede ruder. Nogle forsikringer dækker, andre ikke.',
					'Ejendomme tilbygget eller ombygget inden for få år før salg. Nogle forsikringer har karensperiode eller særlige undtagelser.',
					'Selvrisiko. Forsikringen har typisk selvrisiko på 6.000–30.000 kr. pr. skade. Små skader dækkes derfor i praksis ikke, selvom de formelt er dækkede.'
				]
			},
			{
				heading: 'Hvad du skal tjekke, før du skriver under',
				paragraphs: [
					'Forsikringstilbuddet skal læses grundigt — ikke bare taget for givet. Særligt skal du se på hvilken forsikring du har valgt (basis, udvidet, kommerciel variant), selvrisikoens størrelse, dækningsperioden (fem eller ti år), om stikledninger og kloak er medtaget som tilkøb, og om der er særlige undtagelser knyttet til denne konkrete ejendom.',
					'Særligt kritisk er det at læse, om forsikringsselskabet har taget forbehold for bestemte forhold, fordi tilstandsrapporten har markeret dem som UN (undersøges nærmere). Forhold med UN-mærke er som udgangspunkt ikke dækket — medmindre de undersøges og godkendes inden tegning.'
				]
			},
			{
				heading: 'Tre typiske fælder',
				paragraphs: [
					'For det første: "Forsikringen dækker alt" — den gør den ikke. Mægleren kan godt formulere det, som om forsikringen er et totalkasko-produkt. Det er den aldrig.',
					'For det andet: UN-markeringer, der ikke undersøges. Hvis rapporten har markeret noget som UN, og det ikke undersøges nærmere, er det ikke dækket senere. Mange købere tror, forsikringen "tager over" — den gør den ikke.',
					'For det tredje: anmeldelse glemmes eller sker for sent. Skader skal anmeldes, så snart du opdager dem. Forsikringen kan afslå dækning, hvis du har ventet for længe, eller har fået forholdet forværret ved at udskyde reparation.'
				]
			},
			{
				heading: 'Det korte råd',
				paragraphs: [
					'Tilstandsrapporten og ejerskifteforsikringen er gode produkter, men de er ikke et sikkerhedsnet, der dækker alt. De dækker skjulte mangler — ikke slid, vedligeholdelse, ulovligheder eller forhold, den bygningssagkyndig burde have fundet.',
					'Få din advokat til at læse tilstandsrapport, elrapport og forsikringstilbud, før du skriver under. Det er her, de fleste problemer findes — ikke efter underskrift.'
				]
			}
		],
		seo: {
			description:
				'Tilstandsrapporten og ejerskifteforsikringen giver tryghed — men dækker ikke alt. Her er hvad du bør vide, før du skriver under.'
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
