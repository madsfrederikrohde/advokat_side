import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Section } from '@/src/components/ui/Primitives';

const articles = {
  advokatforbehold: {
    category: 'Boligkøb',
    title: 'Brug altid et advokatforbehold før du skriver under',
    intro:
      'Et advokatforbehold giver dig mulighed for at få købet undersøgt, før du er endeligt bundet. Det er ofte den vigtigste sikkerhedsventil i hele processen.',
    paragraphs: [
      'Når købsaftalen er underskrevet uden forbehold, er dit handlerum meget mindre. Med et advokatforbehold kan dokumenterne blive læst grundigt igennem, og du kan få vurderet de juridiske og praktiske forhold, før handlen låses fast.',
      'Det er også her, det bliver tydeligt om der er forhold i servitutter, ejerforening, lokalplan, forurening eller andre dokumenter, som bør give anledning til yderligere spørgsmål eller forhandling.',
      'Hvis du er i tvivl om formuleringen, kan det betale sig at få professionel hjælp med teksten. Et uklart forbehold kan i værste fald give mindre sikkerhed, end du tror.',
    ],
  },
  finansiering: {
    category: 'Boligfinansiering',
    title: 'Få en second opinion på finansieringen',
    intro:
      'Finansieringen er en stor del af boligkøbet, og det er ikke altid oplagt, hvilken kombination af lån og vilkår der passer bedst til din situation.',
    paragraphs: [
      'En uvildig vurdering kan være nyttig, hvis du vil forstå forskellen på de lån, banken foreslår, eller hvis du er i tvivl om renteniveau, fleksibilitet og den samlede risiko i løsningen.',
      'Det kan også være relevant, hvis du har fået afslag og gerne vil have sagen set på igen i forbindelse med bankskifte. Nogle gange ligger forskellen i, hvordan sagen er struktureret og forklaret.',
      'Formålet er ikke at komplicere købet, men at skabe ro om en beslutning, der typisk skal bæres i mange år.',
    ],
  },
  tinglysning: {
    category: 'Praktik',
    title: 'Tinglysning og refusionsopgørelse er ikke bare formaliteter',
    intro:
      'Købet slutter ikke ved underskrift. Det er afgørende, at skøde og opgørelser bliver håndteret korrekt, så overtagelsen og ejerskiftet falder på plads som de skal.',
    paragraphs: [
      'Tinglysningen sikrer, at du bliver registreret som retmæssig ejer. Hvis den del ikke håndteres korrekt og rettidigt, kan det skabe usikkerhed om et ellers afsluttet køb.',
      'Refusionsopgørelsen er vigtig, fordi udgifter mellem køber og sælger skal fordeles præcist omkring overtagelsesdagen. Det gælder for eksempel ejerudgifter, forbrug og andre løbende poster.',
      'Selv om det kan lyde som baggrundsarbejde, er det ofte netop her de sidste praktiske fejl kan opstå, hvis processen ikke er styret ordentligt.',
    ],
  },
} as const;

export default function ArticleDetail() {
  const { id = 'advokatforbehold' } = useParams();
  const article = articles[id as keyof typeof articles] ?? articles.advokatforbehold;

  return (
    <main data-header-theme="light" className="bg-white pt-20 sm:pt-24">
      <Section className="pb-12 pt-10 sm:pb-16 sm:pt-14" containerClassName="max-w-4xl">
        <Link
          to="/articles"
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-400 hover:text-[#454545]"
        >
          <ArrowLeft className="h-4 w-4" />
          Tilbage til gode råd
        </Link>

        <div className="mt-8">
          <p className="eyebrow">{article.category}</p>
          <h1 className="mt-4 font-serif text-[clamp(2.2rem,4.8vw,4.2rem)] leading-[1.06] tracking-tight text-neutral-900">
            {article.title}
          </h1>
          <p className="mt-6 max-w-3xl text-base font-light leading-8 text-neutral-600 sm:text-lg">{article.intro}</p>
        </div>
      </Section>

      <Section className="pt-2" containerClassName="max-w-3xl">
        <div className="rounded-[28px] border border-neutral-200/80 bg-white px-7 py-8 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)] sm:px-10 sm:py-10">
          <div className="rich-prose">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
