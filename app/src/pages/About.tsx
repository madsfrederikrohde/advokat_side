import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/Primitives';

const timeline = [
  {
    period: '2024-',
    role: 'EiGN ApS',
    detail: 'Arbejder videre med rådgivning og udvikling inden for fast ejendom og relaterede projekter.',
  },
  {
    period: '2018-2024',
    role: 'Vice President, Better Energy A/S',
    detail: 'Head of Legal Real Estate med ansvar for komplekse ejendomsforhold, strukturering og gennemførelse.',
  },
  {
    period: '2017-2018',
    role: 'Partner og medejer, Advokatfirmaet Gangsted-Rasmussen I/S',
    detail: 'Partnerskab med fokus på fast ejendom, transaktioner og klientrådgivning.',
  },
  {
    period: '2008-2017',
    role: 'Advokatfirmaet Hans Rohde',
    detail: 'Selvstændig advokatvirksomhed med fokus på bolighandel, rådgivning og juridisk håndtering af fast ejendom.',
  },
  {
    period: '2001-2008',
    role: 'Københavns Kommune og Advokatfirmaet Lademann',
    detail: 'Fra specialkonsulent og myndighedsarbejde til advokatfuldmægtig med solid praksisnær ballast.',
  },
  {
    period: '1996-2001',
    role: 'Københavns Kommune, By- og Boligministeriet og Erhvervsministeriet',
    detail: 'Tidlige år med fokus på offentlig forvaltning, regulering og rammerne omkring byggeri og bolig.',
  },
] as const;

export default function About() {
  return (
    <main data-header-theme="light" className="overflow-hidden bg-white pt-20 sm:pt-24">
      <section className="px-6 pb-16 pt-8 sm:pb-20 sm:pt-10 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mx-auto max-w-[92rem]"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.78fr)] lg:items-start">
            <div className="max-w-4xl">
              <p className="eyebrow">Om os</p>
              <h1 className="mt-5 text-[clamp(2.9rem,6vw,6rem)] font-semibold leading-[0.96] tracking-[-0.05em] text-neutral-900">
                Erfaring, ro og præcision i rådgivning om fast ejendom.
              </h1>
              <div className="mt-8 max-w-3xl space-y-5">
                <p className="text-base font-light leading-8 text-neutral-600 sm:text-[1.06rem]">
                  Advokatfirmaet Hans Rohde arbejder med fast ejendom, bolighandler, byggeri og ejendomsudvikling. Målet
                  er ikke blot korrekt jura, men et forløb der føles klart, trygt og ordentligt fra første vurdering til
                  endelig beslutning.
                </p>
                <p className="text-base font-light leading-8 text-neutral-600 sm:text-[1.06rem]">
                  Hans Rohde er advokat cand.jur. og har gennem mere end 20 år rådgivet om alle lag af fast ejendom.
                  Baggrunden spænder fra offentlig forvaltning og ministerier til selvstændig advokatvirksomhed,
                  partnerskab og ledende in-house ansvar inden for legal real estate.
                </p>
                <p className="text-base font-light leading-8 text-neutral-600 sm:text-[1.06rem]">
                  Det giver et perspektiv hvor dokumenter, risici og rettigheder altid ses i sammenhæng med de praktiske
                  og økonomiske konsekvenser. Rådgivningen skal være fagligt stærk, men også brugbar i virkeligheden.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/contact">
                  <Button size="lg" className="h-12 rounded-full px-8">
                    Book en afklarende samtale <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <a
                  href="tel:+4520317879"
                  className="inline-flex items-center rounded-full border border-[#454545]/12 px-6 py-3 text-sm font-medium text-[#454545] transition-colors duration-300 hover:bg-[#454545]/5"
                >
                  +45 20 31 78 79
                </a>
                <a
                  href="mailto:hr@hansrohde.dk"
                  className="inline-flex items-center rounded-full border border-[#454545]/12 px-6 py-3 text-sm font-medium text-[#454545] transition-colors duration-300 hover:bg-[#454545]/5"
                >
                  hr@hansrohde.dk
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[32px] bg-[#f2ede6] shadow-[0_34px_90px_-52px_rgba(15,23,42,0.26)]">
              <img
                src="/copenhagencityy.jpg"
                alt="Hans Rohde med udsigt over København"
                className="aspect-[4/5] h-full w-full object-cover object-[62%_center]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-20 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto grid max-w-[92rem] gap-12 border-t border-neutral-200/80 pt-14 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
          <div>
            <p className="eyebrow">Hvordan vi arbejder</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.7rem]">
              En mere enkel og gennemarbejdet måde at være advokat på.
            </h2>
          </div>

          <div className="space-y-5">
            <p className="text-base font-light leading-8 text-neutral-600 sm:text-[1.03rem]">
              Den bedste rådgivning er præcis, men også rolig at navigere i. Derfor lægges vægt på klare anbefalinger,
              tydelige forbehold og en proces, hvor klienten hele tiden ved hvad sagen handler om, og hvad næste skridt
              er.
            </p>
            <p className="text-base font-light leading-8 text-neutral-600 sm:text-[1.03rem]">
              Erfaringen fra både myndighed, advokatpraksis og in-house ledelse betyder, at juridiske spørgsmål ikke kun
              vurderes i teorien. De vurderes også i forhold til timing, forhandling, gennemførelse og det faktiske
              beslutningsrum i sagen.
            </p>
            <p className="text-base font-light leading-8 text-neutral-600 sm:text-[1.03rem]">
              Det gælder både ved privat boligkøb, større ejendomstransaktioner, udviklingsprojekter og andre sager,
              hvor fast ejendom og jura mødes i praksis.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:pb-24 lg:px-8 lg:pb-28">
        <div className="mx-auto max-w-[92rem] border-t border-neutral-200/80 pt-14">
          <div className="max-w-3xl">
            <p className="eyebrow">Udvalgt erfaring</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl lg:text-[2.7rem]">
              Et karriereforløb bygget op omkring fast ejendom og juridisk ansvar.
            </h2>
          </div>

          <div className="mt-10">
            {timeline.map((item, index) => (
              <motion.article
                key={`${item.period}-${item.role}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.42, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className="grid gap-4 border-b border-neutral-200/80 py-6 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-8"
              >
                <div>
                  <p className="text-[0.85rem] font-semibold tracking-[0.02em] text-[#7b7a73]">{item.period}</p>
                </div>
                <div className="max-w-4xl">
                  <h3 className="text-[1.05rem] font-semibold tracking-[-0.02em] text-neutral-900">{item.role}</h3>
                  <p className="mt-2 text-sm font-light leading-7 text-neutral-600 sm:text-[0.98rem]">{item.detail}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
