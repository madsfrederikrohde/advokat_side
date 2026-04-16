import { motion } from 'motion/react';
import { CtaTextLink } from '@/src/components/ui/CtaTextLink';

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
      <section className="px-6 pb-12 pt-6 sm:pb-16 sm:pt-8 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
          className="mx-auto max-w-[92rem]"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.72fr)] lg:items-start lg:gap-10">
            <div className="max-w-3xl">
              <p className="eyebrow">Om os</p>
              <h1 className="mt-3 text-[clamp(2rem,4vw,3.25rem)] font-medium leading-[1.12] tracking-[-0.03em] text-[#454545]">
                Erfaring, ro og præcision i rådgivning om fast ejendom.
              </h1>
              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-[0.94rem] font-light leading-7 text-neutral-600 sm:text-[1rem]">
                  Advokatfirmaet Hans Rohde arbejder med fast ejendom, bolighandler, byggeri og ejendomsudvikling. Målet
                  er ikke blot korrekt jura, men et forløb der føles klart, trygt og ordentligt fra første vurdering til
                  endelig beslutning.
                </p>
                <p className="text-[0.94rem] font-light leading-7 text-neutral-600 sm:text-[1rem]">
                  Hans Rohde er advokat cand.jur. og har gennem mere end 20 år rådgivet om alle lag af fast ejendom.
                  Baggrunden spænder fra offentlig forvaltning og ministerier til selvstændig advokatvirksomhed,
                  partnerskab og ledende in-house ansvar inden for legal real estate.
                </p>
                <p className="text-[0.94rem] font-light leading-7 text-neutral-600 sm:text-[1rem]">
                  Det giver et perspektiv hvor dokumenter, risici og rettigheder altid ses i sammenhæng med de praktiske
                  og økonomiske konsekvenser. Rådgivningen skal være fagligt stærk, men også brugbar i virkeligheden.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
                <CtaTextLink to="/contact">Book en afklarende samtale</CtaTextLink>
                <a
                  href="tel:+4520317879"
                  className="inline-flex items-center rounded-full border border-[#454545]/12 px-5 py-2.5 text-[0.8125rem] font-medium text-[#454545] transition-colors duration-300 hover:bg-[#454545]/5"
                >
                  +45 20 31 78 79
                </a>
                <a
                  href="mailto:hr@hansrohde.dk"
                  className="inline-flex items-center rounded-full border border-[#454545]/12 px-5 py-2.5 text-[0.8125rem] font-medium text-[#454545] transition-colors duration-300 hover:bg-[#454545]/5"
                >
                  hr@hansrohde.dk
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] bg-[#f2ede6] shadow-[0_22px_56px_-40px_rgba(15,23,42,0.22)]">
              <img
                src="/copenhagencityy.jpg"
                alt="Hans Rohde med udsigt over København"
                className="aspect-[4/5] h-full w-full object-cover object-[62%_center]"
              />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="px-6 pb-16 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto grid max-w-[92rem] gap-8 border-t border-neutral-200/80 pt-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-10">
          <div>
            <p className="eyebrow">Hvordan vi arbejder</p>
            <h2 className="mt-3 text-2xl font-medium leading-snug tracking-tight text-[#454545] sm:text-[1.65rem] lg:text-[1.85rem]">
              En mere enkel og gennemarbejdet måde at være advokat på.
            </h2>
          </div>

          <div className="space-y-4">
            <p className="text-[0.94rem] font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
              Den bedste rådgivning er præcis, men også rolig at navigere i. Derfor lægges vægt på klare anbefalinger,
              tydelige forbehold og en proces, hvor klienten hele tiden ved hvad sagen handler om, og hvad næste skridt
              er.
            </p>
            <p className="text-[0.94rem] font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
              Erfaringen fra både myndighed, advokatpraksis og in-house ledelse betyder, at juridiske spørgsmål ikke kun
              vurderes i teorien. De vurderes også i forhold til timing, forhandling, gennemførelse og det faktiske
              beslutningsrum i sagen.
            </p>
            <p className="text-[0.94rem] font-light leading-7 text-neutral-600 sm:text-[0.98rem]">
              Det gælder både ved privat boligkøb, større ejendomstransaktioner, udviklingsprojekter og andre sager,
              hvor fast ejendom og jura mødes i praksis.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-[92rem] border-t border-neutral-200/80 pt-10">
          <div className="max-w-2xl">
            <p className="eyebrow">Udvalgt erfaring</p>
            <h2 className="mt-3 text-2xl font-medium leading-snug tracking-tight text-[#454545] sm:text-[1.65rem] lg:text-[1.85rem]">
              Et karriereforløb bygget op omkring fast ejendom og juridisk ansvar.
            </h2>
          </div>

          <ol className="relative mt-10 pl-6 sm:pl-8">
            <span
              aria-hidden
              className="pointer-events-none absolute bottom-3 left-[5px] top-3 w-px bg-gradient-to-b from-transparent via-neutral-300/90 to-transparent sm:left-[7px]"
            />

            {timeline.map((item, index) => (
              <motion.li
                key={`${item.period}-${item.role}`}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-120px' }}
                transition={{ duration: 0.42, delay: index * 0.04, ease: [0.32, 0.72, 0, 1] }}
                className="relative pb-10 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute left-[-22px] top-[0.45rem] inline-flex h-2.5 w-2.5 items-center justify-center sm:left-[-28px]"
                >
                  <span className="absolute inset-0 rounded-full bg-[#454545]/12" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-[#454545]" />
                </span>

                <p className="text-[0.78rem] font-medium tracking-[0.02em] text-[#7b7a73]">{item.period}</p>
                <h3 className="mt-1.5 text-[1rem] font-medium tracking-[-0.015em] text-[#454545]">{item.role}</h3>
                <p className="mt-1.5 max-w-3xl text-[0.8125rem] font-light leading-6 text-neutral-600 sm:text-[0.9375rem]">
                  {item.detail}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
