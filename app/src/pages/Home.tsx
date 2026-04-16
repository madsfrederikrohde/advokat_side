import type { KeyboardEvent } from 'react';
import { useRef, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/src/components/ui/Primitives';
import { CtaTextLink } from '@/src/components/ui/CtaTextLink';
import { cn } from '@/src/lib/utils';

type FeatureTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  media: string;
  mediaAlt: string;
};

type LifecycleCard = {
  title: string;
  description: string;
};

type LifecycleBlock = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  desktopRoundedClass: string;
  ctaLabel: string;
  ctaTo: string;
  cards: LifecycleCard[];
  reverse?: boolean;
};

const heroImage = '/copenhagencityy.jpg';

const featureTabs: FeatureTab[] = [
  {
    id: 'boligkoeb',
    label: 'Boligkøb',
    title: 'Tryg køberrådgivning fra advokatforbehold til nøgleoverdragelse.',
    description:
      'Vi gennemgår købsaftale og dokumenter, forhandler vilkår, udarbejder godkendelsesskrivelse og følger handlen helt frem til skøde og refusionsopgørelse.',
    media:
      'https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?auto=format&fit=crop&q=80&w=1800',
    mediaAlt: 'Huskøb og dokumentgennemgang',
  },
  {
    id: 'finansiering',
    label: 'Finansiering',
    title: 'Uvildig second opinion på bankens finansieringsforslag.',
    description:
      'Få sparring om lån, rente og vilkår, og brug vores erfaring til at vurdere finansieringen en gang til, før du binder dig. Vi hjælper også, hvis du vil have sagen vurderet igen ved bankskifte.',
    media:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1800',
    mediaAlt: 'Finansieringsrådgivning med tal og dokumenter',
  },
  {
    id: 'raadgivning',
    label: 'Rådgivning',
    title: 'Juridisk rådgivning om bolig, byggeri og fast ejendom.',
    description:
      'Vi bistår med blandt andet entreprise, hegn, servitutter, lejeret og andre spørgsmål, hvor fast ejendom, byggeri og jura mødes i praksis.',
    media:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1800',
    mediaAlt: 'Byggeri og juridisk rådgivning',
  },
  {
    id: 'ejendomsudvikling',
    label: 'Udvikling',
    title: 'Erfaring med strukturering og gennemførelse af ejendomsprojekter.',
    description:
      'Fra udvikling og investering til komplekse transaktioner og energiprojekter. Vi skaber overblik over de juridiske lag og fører processen sikkert videre.',
    media:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1800',
    mediaAlt: 'Ejendomsudvikling og bygningsprojekter',
  },
];

const lifecycleBlocks: LifecycleBlock[] = [
  {
    id: 'uvildig',
    eyebrow: 'Uvildig rådgivning',
    title: 'Få en advokat på din side før du skriver under.',
    description:
      'Alle kan i princippet tilbyde køberrådgivning. Men kun advokater er lovmæssigt forpligtet til at yde uvildig rådgivning uden provision eller binding til bestemte banker, kreditforeninger eller forsikringsselskaber.',
    image:
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&q=80&w=1800',
    imageAlt: 'Bolig og tryg boligrådgivning',
    desktopRoundedClass: 'lg:rounded-r-full',
    ctaLabel: 'Book en afklarende samtale',
    ctaTo: '/contact',
    cards: [
      {
        title: 'Gratis advokatforbehold',
        description: 'Vi hjælper gerne med formuleringen, så du kan få handlen undersøgt før den bliver endelig.',
      },
      {
        title: 'Grundig gennemgang',
        description: 'Købsaftale, bilag og servitutter bliver læst med fokus på fejl, risici og skjulte konsekvenser.',
      },
      {
        title: 'Ingen handel, ingen regning',
        description: 'Hvis handlen ikke gennemføres efter advokatforbeholdet, koster rådgivningen ikke noget.',
      },
    ],
  },
  {
    id: 'erfaring',
    eyebrow: 'Mere end 20 års erfaring',
    title: 'Erfaring fra både privat boligkøb, komplekse transaktioner og store energiprojekter.',
    description:
      'Hans Rohde har arbejdet med alle aspekter af fast ejendom i over 20 år og har baggrund fra blandt andet Københavns Kommune, By- og Boligministeriet, Better Energy og egen advokatvirksomhed.',
    image:
      'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&q=80&w=1800',
    imageAlt: 'Erfaring med ejendomsprojekter og transaktioner',
    desktopRoundedClass: 'lg:rounded-l-full',
    ctaLabel: 'Læs mere om Hans Rohde',
    ctaTo: '/about',
    reverse: true,
    cards: [
      {
        title: 'Praktisk erfaring',
        description: 'Rådgivningen er formet af både myndighedsarbejde, advokatpraksis og in-house erfaring.',
      },
      {
        title: 'Juridisk tyngde',
        description: 'Vi arbejder med både privat bolighandel, byggeri, udvikling, investering og tvister om fast ejendom.',
      },
      {
        title: 'Projektforståelse',
        description: 'Komplekse ejendomsprojekter kræver mere end jura alene. Vi ser også på struktur, timing og gennemførlighed.',
      },
    ],
  },
];

const packages = [
  {
    name: 'Boligpakke 1',
    price: '6.995 kr.',
    subtitle: 'Advokatgennemgang af købsaftale og dokumenter',
    description:
      'Til dig der vil have en grundig juridisk gennemgang af handlen og et sikkert beslutningsgrundlag, før du godkender købet.',
    features: [
      'Gennemgang af købsaftale og bilag',
      'Vurdering af servitutter og juridiske risici',
      'Skriftlig tilbagemelding og anbefalinger',
      'Gratis advokatforbehold før underskrift',
    ],
    cta: 'Vælg boligpakke 1',
    to: '/contact',
    dark: false,
  },
  {
    name: 'Boligpakke 2',
    price: '9.995 kr.',
    subtitle: 'Gennemgang, forhandling og godkendelsesskrivelse',
    description:
      'Til dig der vil have juridisk sparring hele vejen gennem forhandling og accept af handlen, ikke kun en dokumentgennemgang.',
    features: [
      'Alt i boligpakke 1',
      'Forhandling af juridiske vilkår',
      'Udarbejdelse af godkendelsesskrivelse',
      'Dialog med mægler frem til endelig handel',
    ],
    cta: 'Vælg boligpakke 2',
    to: '/contact',
    dark: true,
  },
  {
    name: 'Boligpakke 3',
    price: '14.495 kr.',
    subtitle: 'Komplet pakke med finansieringsrådgivning',
    description:
      'Til dig der vil kombinere juridisk køberrådgivning med uvildig sparring om finansiering, lån og bankens løsningsforslag.',
    features: [
      'Alt i boligpakke 2',
      'Uvildig second opinion på finansiering',
      'Sparring om lån, rente og vilkår',
      'Vejledning om forhandlingsmuligheder over for bank og realkredit',
    ],
    cta: 'Vælg boligpakke 3',
    to: '/contact',
    dark: false,
  },
] as const;

const faqs = [
  {
    question: 'Skal jeg skrive under uden et advokatforbehold?',
    answer:
      'Nej. Et advokatforbehold giver dig mulighed for at få handlen undersøgt, før den bliver endelig. Det kan være afgørende, hvis der dukker noget op i dokumenterne eller finansieringen.',
  },
  {
    question: 'Kan en second opinion på finansieringen betale sig?',
    answer:
      'Ja, ofte. Mange købere er i tvivl om lånetyper, rente og forhandlingsrum. En uvildig vurdering kan give et bedre grundlag for at tale med bank og realkredit.',
  },
  {
    question: 'Hvad skal jeg være opmærksom på ved selve boligen?',
    answer:
      'Beliggenhed, stand, fejl og mangler, ejerskifteforsikring, servitutter og de praktiske forhold omkring overtagelsen er alle forhold, der bør vurderes grundigt.',
  },
  {
    question: 'Hvorfor er tinglysning og refusionsopgørelse vigtige?',
    answer:
      'Korrekt tinglysning sikrer, at du bliver den retmæssige ejer. Refusionsopgørelsen er vigtig, fordi udgifter mellem køber og sælger skal opgøres korrekt på overtagelsesdagen.',
  },
];

function PackageCheck({ dark }: { dark: boolean }) {
  return (
    <svg
      viewBox="0 0 18 14"
      className={cn('h-[0.75rem] w-[0.9rem] shrink-0', dark ? 'text-white' : 'text-[#454545]')}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.5 7.5L5.5 11.5L16.5 1.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const handleTabNavigation = (nextIndex: number) => {
    const total = featureTabs.length;
    const normalizedIndex = (nextIndex + total) % total;
    setActiveTab(normalizedIndex);
    tabRefs.current[normalizedIndex]?.focus();
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        event.preventDefault();
        handleTabNavigation(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        event.preventDefault();
        handleTabNavigation(index - 1);
        break;
      case 'Home':
        event.preventDefault();
        handleTabNavigation(0);
        break;
      case 'End':
        event.preventDefault();
        handleTabNavigation(featureTabs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <main data-header-theme="light" className="relative min-h-screen overflow-hidden bg-white pt-20 sm:pt-24">
      <section
        id="hero"
        data-header-theme="dark"
        className="relative isolate mx-4 overflow-hidden rounded-2xl px-6 pb-32 pt-16 sm:mx-6 sm:pt-20 lg:mx-8 lg:pb-44 lg:pt-28 [contain:paint]"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 42%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="pointer-events-none absolute -inset-4 z-10 opacity-50 blur-[10px]"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 42%',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-20 bg-black/15" />
        <div className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(0,0,0,0.16),rgba(0,0,0,0.08)_45%,rgba(0,0,0,0.25))]" />

        <div className="relative z-30 mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1], delay: 0.04 }}
            className="mb-6 text-[11px] font-medium uppercase tracking-[0.18em] text-white/80"
          >
            Fast ejendom, byggeri og ejendomsudvikling
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
            className="font-serif text-[clamp(2.25rem,5vw,4.5rem)] font-normal leading-[1.08] tracking-tight text-white"
            style={{ textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 0 24px rgba(0,0,0,0.2)' }}
          >
            Kom sikkert gennem boligkøbet
            <span className="mt-4 block text-white sm:mt-6">med erfaren juridisk sparring hele vejen.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1], delay: 0.18 }}
            className="mx-auto mt-8 max-w-2xl text-base font-light leading-7 text-white/82 sm:text-lg"
          >
            Få uvildig rådgivning om boligkøb, finansiering, byggeri og ejendomsprojekter. Vi hjælper også gerne med et
            gratis advokatforbehold, før du skriver under.
          </motion.p>
        </div>

        <div className="pointer-events-none absolute bottom-6 left-1/2 z-30 flex -translate-x-1/2 justify-center">
          <ChevronDown className="h-8 w-8 text-white/80 drop-shadow-sm" strokeWidth={2} />
        </div>
      </section>

      <section
        id="features"
        data-header-theme="light"
        className="relative scroll-mt-28 px-6 pb-24 pt-48 sm:px-8 sm:pb-28 sm:pt-56 lg:px-8 lg:pb-32 lg:pt-64"
      >
        <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[minmax(22rem,0.96fr)_minmax(20rem,1.04fr)] lg:items-stretch lg:gap-12 xl:grid-cols-[minmax(24rem,0.95fr)_minmax(22rem,1.05fr)] xl:gap-14">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="mx-auto flex h-full min-h-0 w-full max-w-[42rem] flex-col gap-8 sm:gap-9 lg:mx-0 lg:max-w-none lg:gap-0 lg:pr-1 lg:pt-1 xl:pr-4"
          >
            <div className="shrink-0 space-y-5">
              <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-neutral-400">Fagområder</p>
              <h2 className="text-[1.85rem] font-semibold leading-[1.1] tracking-[-0.028em] text-[#5c5c5c] sm:text-[2.1rem] lg:text-[2.35rem]">
                {featureTabs[activeTab].title}
              </h2>
              <p className="max-w-2xl text-[1.02rem] font-light leading-7 text-[rgba(92,92,92,0.82)] sm:text-[1.08rem] sm:leading-8">
                {featureTabs[activeTab].description}
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Hans Rohde fagområder"
              className="grid shrink-0 grid-cols-2 gap-2.5 sm:gap-3 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-1.5 md:gap-y-2 lg:mt-auto"
            >
              {featureTabs.map((tab, index) => (
                <div key={tab.id} className="contents">
                  <button
                    ref={(node) => {
                      tabRefs.current[index] = node;
                    }}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={activeTab === index}
                    aria-controls={`panel-${tab.id}`}
                    tabIndex={activeTab === index ? 0 : -1}
                    onClick={() => setActiveTab(index)}
                    onKeyDown={(event) => handleTabKeyDown(event, index)}
                    className={cn(
                      'h-11 min-w-0 rounded-full border px-4 text-[0.8rem] font-medium tracking-[-0.01em] transition-colors duration-300 sm:px-4 sm:text-[0.85rem] focus-visible:outline-none focus-visible:ring-0',
                      activeTab === index
                        ? 'border-[#5c5c5c] bg-[#5c5c5c] text-white shadow-[0_10px_24px_-16px_rgba(15,23,42,0.24)]'
                        : 'border-transparent bg-[#ececea] text-[#6b6b6b] shadow-none hover:bg-[#e3e3e0] hover:text-[#525252]'
                    )}
                  >
                    {tab.label}
                  </button>

                  {index < featureTabs.length - 1 ? (
                    <div className="hidden items-center justify-center px-0.5 text-[#c8c1b7] md:flex">
                      <ArrowRight className="h-4 w-4" strokeWidth={1.9} />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: 0.05 }}
            className="relative mx-auto aspect-[4/3] w-full max-w-[40rem] rounded-[24px] bg-[#ede7df] shadow-[0_32px_64px_-20px_rgba(15,23,42,0.32),0_14px_32px_-6px_rgba(15,23,42,0.18),0_4px_12px_-2px_rgba(15,23,42,0.1)] sm:aspect-[16/10] sm:max-w-[44rem] sm:rounded-[28px] lg:mx-0 lg:aspect-[7/5] lg:max-w-[min(100%,50rem)] lg:w-full lg:justify-self-start lg:rounded-[28px] xl:aspect-[5/3] xl:max-w-[min(100%,54rem)]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[24px] sm:rounded-[28px] lg:rounded-[28px]">
              {featureTabs.map((tab, index) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`panel-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                  className={cn(
                    'absolute inset-0 transition-opacity duration-500 ease-out',
                    activeTab === index ? 'z-20 opacity-100' : 'z-0 opacity-0'
                  )}
                >
                  <img src={tab.media} alt={tab.mediaAlt} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(69,69,69,0.06),rgba(69,69,69,0.12)_55%,rgba(69,69,69,0.32))]" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="lifecycle" data-header-theme="light" className="overflow-hidden py-20 sm:py-28 lg:py-40">
        <div className="flex flex-col gap-y-20 sm:gap-y-24 lg:gap-y-48">
          {lifecycleBlocks.map((block) => (
            <motion.div
              key={block.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
              className={cn(
                'flex w-full flex-col items-center gap-8 sm:gap-10 lg:gap-0',
                block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
              )}
            >
              <div className="w-full px-6 sm:px-8 lg:flex-1 lg:px-0">
                <div className="mx-auto w-full max-w-[40rem] lg:max-w-none">
                  <div
                    className={cn(
                      'overflow-hidden rounded-[30px] bg-[#D5C6B1] shadow-sm sm:rounded-[34px] lg:h-[340px] lg:rounded-[0] xl:h-[370px] 2xl:h-[400px]',
                      block.desktopRoundedClass
                    )}
                  >
                    <img
                      src={block.image}
                      alt={block.imageAlt}
                      className="aspect-[4/3] h-full w-full object-cover mix-blend-multiply opacity-80 sm:aspect-[16/10] lg:aspect-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full px-6 sm:px-8 lg:flex-[0_0_46rem] lg:px-12 xl:flex-[0_0_50rem] xl:px-16 2xl:px-20">
                <div className={cn('mx-auto w-full max-w-[40rem] lg:w-auto lg:max-w-[42rem]', block.reverse ? 'lg:mr-auto' : 'lg:ml-auto')}>
                  <p className="eyebrow">{block.eyebrow}</p>
                  <h2 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-[#454545] sm:text-4xl">
                    {block.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-neutral-500">
                    {block.description}
                  </p>

                  <div className="mt-10 grid gap-8 sm:grid-cols-2">
                    {block.cards.map((card) => (
                      <div key={card.title} className="flex gap-4">
                        <div>
                          <h3 className="text-base font-semibold text-[#454545]">{card.title}</h3>
                          <p className="mt-2 text-sm font-light text-neutral-600">{card.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10">
                    <CtaTextLink to={block.ctaTo} className="text-base">
                      {block.ctaLabel}
                    </CtaTextLink>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="packages" data-header-theme="light" className="px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Boligpakker</p>
            <h2 className="mt-4 section-heading">Vælg den boligpakke der passer til dit køb og dit behov for sparring.</h2>
            <p className="mt-5 max-w-lg section-copy">
              Pakkerne her er målrettet bolighandler op til 10 mio. kr. Ved større handler eller særlige forhold aftales
              opgaven konkret.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((pack) => (
              <motion.article
                key={pack.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
                className={cn(
                  'flex h-full flex-col rounded-[28px] border px-8 pb-10 pt-10 transition-all duration-500 hover:-translate-y-0.5 md:px-10 md:pb-12 md:pt-12',
                  pack.dark
                    ? 'border-white/[0.06] bg-[#454545] shadow-[0_40px_92px_-34px_rgba(17,17,19,0.50),0_18px_34px_-24px_rgba(17,17,19,0.22)]'
                    : 'border-[#e8e1d6] bg-[#fbf8f3] shadow-[0_38px_88px_-34px_rgba(15,23,42,0.20),0_18px_34px_-24px_rgba(15,23,42,0.10)]'
                )}
              >
                <div>
                  <h3
                    className={cn(
                      'text-[1.15rem] font-semibold tracking-[-0.01em]',
                      pack.dark ? 'text-white' : 'text-[#454545]'
                    )}
                  >
                    {pack.name}
                  </h3>
                  <div className={cn('mt-4 h-px w-12', pack.dark ? 'bg-white/20' : 'bg-[#454545]/15')} />
                  <p className={cn('mt-4 text-[1.65rem] font-semibold tracking-tight', pack.dark ? 'text-white' : 'text-[#454545]')}>
                    {pack.price}
                  </p>
                  <p className={cn('mt-3 text-[15px] font-light', pack.dark ? 'text-white/75' : 'text-neutral-500')}>
                    {pack.subtitle}
                  </p>
                  <p className={cn('mt-5 text-sm font-light', pack.dark ? 'text-white/70' : 'text-neutral-600')}>
                    {pack.description}
                  </p>
                </div>

                <div className={cn('mt-6 border-t pt-6', pack.dark ? 'border-white/10' : 'border-[#454545]/10')}>
                  <ul className="space-y-4">
                    {pack.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <PackageCheck dark={pack.dark} />
                        <span className={cn('text-sm font-light', pack.dark ? 'text-white/82' : 'text-neutral-600')}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-2">
                  <Link to={pack.to}>
                    <Button
                      variant={pack.dark ? 'secondary' : 'primary'}
                      className={cn(
                        'px-6 py-3 text-sm font-medium',
                        pack.dark
                          ? 'bg-white text-[#454545] shadow-[0_2px_12px_rgba(255,255,255,0.15)]'
                          : 'bg-[#454545] text-white shadow-[0_8px_24px_-8px_rgba(17,17,19,0.4)]'
                      )}
                    >
                      {pack.cta}
                    </Button>
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" data-header-theme="light" className="px-6 py-24 sm:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-2xl">
            <p className="eyebrow">Gode råd før du skriver under</p>
            <h2 className="mt-4 section-heading">De vigtigste ting at have styr på ved boligkøb.</h2>
            <p className="mt-5 section-copy">
              Her er en koncentreret version af de temaer Hans Rohde fremhæver til købere, der gerne vil undgå
              usikkerhed i handlen.
            </p>
          </div>

          <div className="mt-12 divide-y divide-neutral-200 rounded-[28px] border border-neutral-200/80 bg-white shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div key={faq.question} className="px-6 py-5 sm:px-8">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 text-left"
                  >
                    <span className="text-[15px] font-medium text-[#454545]">{faq.question}</span>
                    <ChevronDown
                      className={cn('h-5 w-5 shrink-0 text-neutral-500 transition-transform duration-300', isOpen ? 'rotate-180' : '')}
                      strokeWidth={1.8}
                    />
                  </button>
                  <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr] pt-4' : 'grid-rows-[0fr]')}>
                    <div className="overflow-hidden">
                      <p className="text-sm font-light leading-relaxed text-neutral-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section data-header-theme="light" className="px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:pb-40 lg:pt-24">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-2xl border border-[#454545] bg-[#454545] px-8 py-14 text-center sm:px-12 sm:py-20"
          >
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500">Klar til næste skridt</p>
            <h2 className="mx-auto max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Få afklaret købet, finansieringen eller det juridiske setup før du binder dig.
            </h2>
            <p className="mx-auto mt-5 max-w-md text-base font-light leading-relaxed text-neutral-400">
              Ring på 20 31 78 79 eller skriv til hr@hansrohde.dk, hvis du vil have en hurtig og erfaren vurdering af
              din sag.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a href="tel:+4520317879">
                <Button className="h-12 rounded-full border-0 bg-white px-8 text-[15px] font-medium text-[#454545] shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45),0_10px_24px_-6px_rgba(0,0,0,0.32),0_3px_10px_-2px_rgba(0,0,0,0.22)] hover:bg-neutral-100 hover:shadow-[0_28px_52px_-14px_rgba(0,0,0,0.42),0_12px_28px_-6px_rgba(0,0,0,0.3),0_4px_12px_-2px_rgba(0,0,0,0.2)]">
                  Ring nu <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <a href="mailto:hr@hansrohde.dk">
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-white/20 bg-white/5 px-8 text-[15px] text-white shadow-[0_24px_48px_-16px_rgba(0,0,0,0.45),0_10px_24px_-6px_rgba(0,0,0,0.32),0_3px_10px_-2px_rgba(0,0,0,0.22)] hover:bg-white/10 hover:shadow-[0_28px_52px_-14px_rgba(0,0,0,0.42),0_12px_28px_-6px_rgba(0,0,0,0.3),0_4px_12px_-2px_rgba(0,0,0,0.2)]"
                >
                  Skriv en mail
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
