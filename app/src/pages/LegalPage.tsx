import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button, Section } from '@/src/components/ui/Primitives';

export type LegalPageVariant =
  | 'advokatsamfundet'
  | 'politikker'
  | 'forretningsbetingelser'
  | 'gdpr'
  | 'cookies';

type LegalSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

const content: Record<
  LegalPageVariant,
  {
    eyebrow: string;
    title: string;
    intro: string;
    sections: LegalSection[];
  }
> = {
  advokatsamfundet: {
    eyebrow: 'Advokatsamfundet',
    title: 'Oplysninger om branchetilknytning og de rammer, vi arbejder under.',
    intro:
      'Advokatfirmaet Hans Rohde udøver advokatvirksomhed under de regler, der gælder for advokater i Danmark. Siden her samler de overordnede oplysninger om tilsyn, etiske regler og den professionelle ramme omkring rådgivningen.',
    sections: [
      {
        heading: 'Professionel ramme',
        paragraphs: [
          'Advokatvirksomhed i Danmark er underlagt særlige regler om uafhængighed, fortrolighed og god advokatskik. Det er en væsentlig del af grundlaget for den rådgivning, der ydes til klienter.',
          'For klienten betyder det blandt andet, at rådgivningen skal være loyal, fagligt forsvarlig og uden uvedkommende interesser.',
        ],
      },
      {
        heading: 'Tilsyn og ansvar',
        paragraphs: [
          'Advokatvirksomhed er underlagt de regler og det tilsyn, som gælder efter dansk ret. Hvis du ønsker nærmere information om klagemuligheder eller de generelle regler for advokater, kan du kontakte virksomheden for nærmere vejledning.',
        ],
      },
    ],
  },
  politikker: {
    eyebrow: 'Politikker',
    title: 'Overordnede principper for fortrolighed, ordentlighed og ansvarlig sagsbehandling.',
    intro:
      'Her beskrives de bærende principper for, hvordan henvendelser, sager og oplysninger håndteres i praksis. Politikkerne skal skabe gennemsigtighed om arbejdsgange, kommunikation og forventninger.',
    sections: [
      {
        heading: 'Fortrolighed',
        paragraphs: [
          'Oplysninger behandles fortroligt og med respekt for sagens karakter. Der deles ikke oplysninger med uvedkommende, og materialet håndteres med fokus på diskretion og professionel ansvarlighed.',
        ],
      },
      {
        heading: 'Kommunikation',
        paragraphs: [
          'Målet er en klar og præcis kommunikation, så klienten forstår både de juridiske forhold, de praktiske konsekvenser og de valg, der skal træffes undervejs.',
        ],
      },
      {
        heading: 'Kvalitet og ansvar',
        paragraphs: [
          'Sager håndteres med vægt på faglig kvalitet, tydelige anbefalinger og realistiske forventninger til proces, risici og tidsforløb.',
        ],
      },
    ],
  },
  forretningsbetingelser: {
    eyebrow: 'Forretningsbetingelser',
    title: 'De generelle vilkår for samarbejde, opgaveomfang og honorar.',
    intro:
      'Forretningsbetingelserne beskriver de generelle rammer for samarbejdet. Det konkrete opgaveomfang og eventuelle særlige vilkår aftales altid i relation til den enkelte sag.',
    sections: [
      {
        heading: 'Opgavens omfang',
        paragraphs: [
          'Rådgivningen afgrænses efter den konkrete aftale. Det er vigtigt, at der er klarhed om, hvilke forhold der indgår i opgaven, og hvilke forhold der eventuelt kræver særskilt aftale.',
        ],
      },
      {
        heading: 'Honorar og udlæg',
        paragraphs: [
          'Honorar fastsættes ud fra opgavens karakter, omfang, kompleksitet og det ansvar, den indebærer. Eventuelle udlæg og tredjemandsomkostninger håndteres efter nærmere aftale.',
        ],
      },
      {
        heading: 'Samarbejde og forudsætninger',
        paragraphs: [
          'Et godt forløb forudsætter rettidige oplysninger og relevant dokumentation. Rådgivningen bygger på det materiale og de oplysninger, der er til rådighed på tidspunktet for vurderingen.',
        ],
      },
    ],
  },
  gdpr: {
    eyebrow: 'GDPR',
    title: 'Behandling af personoplysninger med respekt for nødvendighed, sikkerhed og fortrolighed.',
    intro:
      'Når du kontakter Advokatfirmaet Hans Rohde eller indgår i et sagsforløb, kan der behandles personoplysninger som led i kommunikationen og den juridiske rådgivning. Behandlingen sker med fokus på nødvendighed og fortrolighed.',
    sections: [
      {
        heading: 'Formål',
        paragraphs: [
          'Personoplysninger behandles alene i det omfang, det er relevant for at besvare henvendelser, administrere et muligt eller eksisterende klientforhold og gennemføre den aftalte rådgivning.',
        ],
      },
      {
        heading: 'Typer af oplysninger',
        paragraphs: [
          'Det kan for eksempel være kontaktoplysninger, sagsmateriale, korrespondance og andre oplysninger, som er nødvendige for den konkrete vurdering eller sagsbehandling.',
        ],
      },
      {
        heading: 'Opbevaring og sikkerhed',
        paragraphs: [
          'Oplysninger opbevares kun så længe, det er relevant eller nødvendigt efter sagens karakter og de regler, der gælder for advokatvirksomhed. Der arbejdes løbende med passende organisatoriske og tekniske sikkerhedsforanstaltninger.',
        ],
      },
    ],
  },
  cookies: {
    eyebrow: 'Cookiepolitik',
    title: 'Information om brugen af cookies og lignende teknologier på siden.',
    intro:
      'Siden anvender nødvendige cookies og tekniske funktioner, der understøtter drift, sikkerhed og basal funktionalitet. Der lægges vægt på en enkel og tilbageholdende brug af teknologier, som ikke forstyrrer oplevelsen unødigt.',
    sections: [
      {
        heading: 'Nødvendige cookies',
        paragraphs: [
          'Nødvendige cookies kan bruges til at sikre, at siden fungerer teknisk korrekt, og at essentielle funktioner som navigation, grundlæggende sikkerhed og sessionsrelateret drift virker som forventet.',
        ],
      },
      {
        heading: 'Formål og transparens',
        paragraphs: [
          'Formålet er at holde siden stabil, sikker og brugbar. Hvis der senere anvendes yderligere kategorier af cookies eller lignende teknologier, bør dette beskrives særskilt og tydeligt.',
        ],
      },
    ],
  },
};

export default function LegalPage({ variant }: { variant: LegalPageVariant }) {
  const page = content[variant];

  return (
    <main data-header-theme="light" className="bg-white pt-20 sm:pt-24">
      <Section className="pb-12 pt-10 sm:pb-16 sm:pt-14" containerClassName="max-w-[90rem]">
        <div className="max-w-4xl">
          <p className="eyebrow">{page.eyebrow}</p>
          <h1 className="mt-4 font-serif text-[clamp(2.35rem,5vw,4.6rem)] leading-[1.04] tracking-tight text-neutral-900">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base font-light leading-8 text-neutral-600 sm:text-lg">{page.intro}</p>
        </div>
      </Section>

      <Section className="pt-2" containerClassName="max-w-[90rem]">
        <div className="grid gap-5">
          {page.sections.map((section, index) => (
            <motion.article
              key={section.heading}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.45, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
              className="rounded-[28px] border border-neutral-200/80 bg-[#fbf8f3] px-6 py-7 shadow-[0_24px_60px_-42px_rgba(15,23,42,0.16)] sm:px-8 sm:py-8"
            >
              <h2 className="text-[1.35rem] font-semibold tracking-[-0.02em] text-neutral-900">{section.heading}</h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="max-w-4xl text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
                      <span className="mt-[0.7rem] h-1.5 w-1.5 rounded-full bg-[#454545]/65" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </motion.article>
          ))}
        </div>
      </Section>

      <Section className="pt-0" containerClassName="max-w-[90rem]">
        <div className="flex flex-col gap-4 rounded-[28px] border border-[#454545] bg-[#454545] px-7 py-8 text-white shadow-[0_38px_88px_-38px_rgba(17,17,19,0.42)] sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/50">Kontakt</p>
            <p className="mt-3 text-[1.05rem] font-light leading-7 text-white/80">
              Hvis du ønsker nærmere oplysninger om vilkår, personoplysninger eller den konkrete rådgivning, er du
              velkommen til at tage kontakt.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="secondary" size="lg" className="h-12 rounded-full px-8">
              Kontakt os <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </Section>
    </main>
  );
}
