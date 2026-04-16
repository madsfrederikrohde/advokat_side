import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button, Section } from '@/src/components/ui/Primitives';

export default function Contact() {
  return (
    <main data-header-theme="light" className="bg-white pt-20 sm:pt-24">
      <Section className="pt-8 pb-20 sm:pt-10 sm:pb-24" containerClassName="max-w-[84rem]">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h1 className="mt-3 text-[clamp(1.85rem,3.6vw,2.85rem)] font-medium leading-[1.12] tracking-[-0.025em] text-[#454545]">
              Kontakt Advokatfirmaet Hans Rohde
            </h1>
            <p className="mt-5 max-w-xl text-[0.95rem] font-light leading-7 text-neutral-600 sm:text-[1rem]">
              Har du spørgsmål om boligkøb, finansiering, byggeri eller ejendomsudvikling, er du velkommen til at
              tage kontakt. Vi vender gerne tilbage med en indledende vurdering af sagen.
            </p>

            <div className="mt-8 grid gap-3">
              {[
                { icon: Phone, label: 'Telefon', value: '+45 20 31 78 79', href: 'tel:+4520317879' },
                { icon: Mail, label: 'E-mail', value: 'hr@hansrohde.dk', href: 'mailto:hr@hansrohde.dk' },
                { icon: MapPin, label: 'Adresse', value: 'Hviddingvej 47, 2610 Rødovre', href: undefined },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-[18px] border border-neutral-200/80 bg-white px-4 py-4 transition-colors duration-300 hover:border-neutral-300/80"
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#454545]/[0.07] text-[#454545]">
                        <Icon className="h-[16px] w-[16px]" strokeWidth={1.7} />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#7b7a73]">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="mt-0.5 block text-[0.95rem] font-medium tracking-tight text-[#454545] transition-colors duration-300 hover:text-[#2f2f2f]"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-0.5 text-[0.95rem] font-medium tracking-tight text-[#454545]">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-[20px] border border-neutral-200/80 bg-[#fbfaf7] px-6 py-8 sm:px-8 sm:py-10"
          >
            <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[#7b7a73]">Skriv til os</p>
            <h2 className="mt-3 text-xl font-medium leading-snug tracking-tight text-[#454545] sm:text-[1.45rem]">
              Fortæl kort hvad sagen handler om
            </h2>
            <p className="mt-3 max-w-lg text-[0.9rem] font-light leading-6 text-neutral-600 sm:text-[0.95rem]">
              Del gerne lidt om boligkøbet, finansieringen eller ejendomsprojektet, så bliver det lettere at vende
              hurtigt og præcist tilbage.
            </p>

            <form className="mt-6 space-y-4" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#7b7a73]">Navn</label>
                  <input
                    type="text"
                    className="mt-1.5 w-full rounded-[14px] border border-neutral-200 bg-white px-4 py-2.5 text-[0.9rem] font-light text-[#454545] outline-none transition-colors duration-200 placeholder:text-[#5c5c5c]/45 focus:border-[#454545]/25 focus:ring-2 focus:ring-[#454545]/10"
                    placeholder="Dit navn"
                  />
                </div>
                <div>
                  <label className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#7b7a73]">Telefon</label>
                  <input
                    type="tel"
                    className="mt-1.5 w-full rounded-[14px] border border-neutral-200 bg-white px-4 py-2.5 text-[0.9rem] font-light text-[#454545] outline-none transition-colors duration-200 placeholder:text-[#5c5c5c]/45 focus:border-[#454545]/25 focus:ring-2 focus:ring-[#454545]/10"
                    placeholder="+45 20 31 78 79"
                  />
                </div>
              </div>

              <div>
                <label className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#7b7a73]">E-mail</label>
                <input
                  type="email"
                  className="mt-1.5 w-full rounded-[14px] border border-neutral-200 bg-white px-4 py-2.5 text-[0.9rem] font-light text-[#454545] outline-none transition-colors duration-200 placeholder:text-[#5c5c5c]/45 focus:border-[#454545]/25 focus:ring-2 focus:ring-[#454545]/10"
                  placeholder="din@email.dk"
                />
              </div>

              <div>
                <label className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#7b7a73]">Besked</label>
                <textarea
                  rows={5}
                  className="mt-1.5 w-full resize-none rounded-[14px] border border-neutral-200 bg-white px-4 py-3 text-[0.9rem] font-light leading-6 text-[#454545] outline-none transition-colors duration-200 placeholder:text-[#5c5c5c]/45 focus:border-[#454545]/25 focus:ring-2 focus:ring-[#454545]/10"
                  placeholder="Beskriv kort boligen, projektet eller det juridiske spørgsmål."
                />
              </div>

              <div className="pt-1">
                <Button size="sm" className="h-10 rounded-full px-6 text-[0.85rem]">
                  Send besked
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </Section>
    </main>
  );
}
