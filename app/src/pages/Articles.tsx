import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, Button } from '@/src/components/ui/Primitives';

const adviceArticles = [
  {
    id: 'advokatforbehold',
    title: 'Brug altid et advokatforbehold før du skriver under',
    excerpt:
      'Et korrekt formuleret advokatforbehold giver dig tid til at få handlen og dokumenterne gennemgået, før købet bliver endeligt.',
    category: 'Boligkøb',
  },
  {
    id: 'finansiering',
    title: 'Få en second opinion på finansieringen',
    excerpt:
      'Det kan gøre en stor forskel at få bankens forslag vurderet udefra, særligt hvis du er i tvivl om lån, rente eller vilkår.',
    category: 'Boligfinansiering',
  },
  {
    id: 'tinglysning',
    title: 'Tinglysning og refusionsopgørelse er ikke bare formaliteter',
    excerpt:
      'Korrekt tinglysning og en præcis refusionsopgørelse er centrale dele af en tryg overtagelse og et korrekt afsluttet køb.',
    category: 'Praktik',
  },
];

export default function Articles() {
  return (
    <main data-header-theme="light" className="bg-white pt-20 sm:pt-24">
      <Section className="pb-12 pt-10 sm:pb-16 sm:pt-14">
        <div className="max-w-3xl">
          <p className="eyebrow">Gode råd til boligkøb</p>
          <h1 className="mt-4 font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[1.04] tracking-tight text-neutral-900">
            Praktiske råd og juridiske opmærksomhedspunkter før boligkøbet bliver endeligt.
          </h1>
          <p className="mt-6 max-w-2xl text-base font-light leading-8 text-neutral-600 sm:text-lg">
            Her har vi samlet en håndfuld korte temaer, der afspejler de vigtigste råd fra Hans Rohde om advokatforbehold,
            finansiering, dokumentgennemgang og det praktiske omkring overtagelsen.
          </p>
        </div>
      </Section>

      <Section className="pt-4" containerClassName="max-w-5xl">
        <div className="grid gap-8 lg:grid-cols-3">
          {adviceArticles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-120px' }}
              transition={{ duration: 0.5, delay: index * 0.05, ease: [0.32, 0.72, 0, 1] }}
              className="rounded-[28px] border border-[#e8e1d6] bg-[#fbf8f3] px-7 py-8 shadow-[0_38px_88px_-34px_rgba(15,23,42,0.20),0_18px_34px_-24px_rgba(15,23,42,0.10)]"
            >
              <p className="eyebrow">{article.category}</p>
              <h2 className="mt-4 text-[1.35rem] font-semibold leading-tight tracking-tight text-neutral-900">
                {article.title}
              </h2>
              <p className="mt-4 text-sm font-light leading-7 text-neutral-600">{article.excerpt}</p>
              <div className="mt-8">
                <Link to={`/articles/${article.id}`}>
                  <Button variant="ghost" className="px-0 text-[#454545] shadow-none hover:bg-transparent hover:text-neutral-900">
                    Læs mere <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>
    </main>
  );
}
