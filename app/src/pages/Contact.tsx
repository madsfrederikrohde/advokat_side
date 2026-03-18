import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button, Section } from '@/src/components/ui/Primitives';

export default function Contact() {
  return (
    <main data-header-theme="light" className="bg-white pt-20 sm:pt-24">
      <Section className="pt-10 sm:pt-14" containerClassName="max-w-[90rem]">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="eyebrow">Kontakt</p>
            <h1 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.04] tracking-tight text-neutral-900">
              Kontakt Advokatfirmaet Hans Rohde
            </h1>
            <p className="mt-6 max-w-2xl text-base font-light leading-8 text-neutral-600 sm:text-lg">
              Har du spørgsmål om boligkøb, finansiering, byggeri eller ejendomsudvikling, er du velkommen til at
              tage kontakt. Vi vender gerne tilbage med en indledende vurdering af sagen.
            </p>

            <div className="mt-10 grid gap-4">
              {[
                { icon: Phone, label: 'Telefon', value: '+45 20 31 78 79', href: 'tel:+4520317879' },
                { icon: Mail, label: 'E-mail', value: 'hr@hansrohde.dk', href: 'mailto:hr@hansrohde.dk' },
                { icon: MapPin, label: 'Adresse', value: 'Hviddingvej 47, 2610 Rødovre', href: undefined },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-[24px] border border-neutral-200 bg-[#fbf8f3] px-5 py-5 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.15)]">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#454545]/10 text-[#454545]">
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </div>
                      <div>
                        <p className="eyebrow">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="mt-2 block text-lg font-semibold tracking-tight text-[#454545] hover:text-neutral-900">
                            {item.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-lg font-semibold tracking-tight text-[#454545]">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.55, ease: [0.32, 0.72, 0, 1] }}
            className="rounded-[28px] border border-[#454545] bg-[#454545] px-8 py-10 text-white shadow-[0_40px_92px_-34px_rgba(17,17,19,0.50),0_18px_34px_-24px_rgba(17,17,19,0.22)] sm:px-10 sm:py-12"
          >
            <p className="eyebrow text-neutral-500">Skriv til os</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Fortæl kort hvad sagen handler om
            </h2>
            <p className="mt-5 max-w-xl text-base font-light leading-7 text-neutral-300">
              Del gerne lidt om boligkøbet, finansieringen eller ejendomsprojektet, så bliver det lettere at vende
              hurtigt og præcist tilbage.
            </p>

            <form className="mt-8 space-y-5" onSubmit={(event) => event.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="eyebrow block text-neutral-400">Navn</label>
                  <input type="text" className="input-luxury mt-2 border-white/10 bg-white text-[#454545]" placeholder="Dit navn" />
                </div>
                <div>
                  <label className="eyebrow block text-neutral-400">Telefon</label>
                  <input type="tel" className="input-luxury mt-2 border-white/10 bg-white text-[#454545]" placeholder="+45 20 31 78 79" />
                </div>
              </div>

              <div>
                <label className="eyebrow block text-neutral-400">E-mail</label>
                <input type="email" className="input-luxury mt-2 border-white/10 bg-white text-[#454545]" placeholder="din@email.dk" />
              </div>

              <div>
                <label className="eyebrow block text-neutral-400">Besked</label>
                <textarea
                  rows={6}
                  className="input-luxury mt-2 min-h-[10rem] resize-none border-white/10 bg-white text-[#454545]"
                  placeholder="Beskriv kort boligen, projektet eller det juridiske spørgsmål."
                />
              </div>

              <div className="pt-2">
                <Button className="h-12 rounded-full bg-white px-8 text-[15px] font-medium text-neutral-900 hover:bg-neutral-100">
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
