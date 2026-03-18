import { motion } from 'motion/react';
import {
  CircleHelp,
  CircleUserRound,
  Home,
  Landmark,
  type LucideIcon,
  Package2,
  Phone,
} from 'lucide-react';
import type { MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useHeaderContrast } from '@/src/hooks/useHeaderContrast';
import { cn } from '@/src/lib/utils';

type NavItem =
  | { kind: 'section'; id: string; label: string; icon: LucideIcon }
  | { kind: 'route'; id: string; label: string; icon: LucideIcon; to: string };

const navItems: NavItem[] = [
  { kind: 'section', id: 'hero', label: 'Boligkøb', icon: Home },
  { kind: 'section', id: 'features', label: 'Specialer', icon: Landmark },
  { kind: 'section', id: 'packages', label: 'Boligpakker', icon: Package2 },
  { kind: 'section', id: 'faq', label: 'Gode råd', icon: CircleHelp },
  { kind: 'route', id: 'about', label: 'Om os', icon: CircleUserRound, to: '/about' },
] as const;

const headerVariants = {
  hidden: { opacity: 0, scale: 0.98, y: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1], staggerChildren: 0.035, delayChildren: 0.03 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: [0.32, 0.72, 0, 1] } },
};

function HeaderWordmark({ inverted }: { inverted: boolean }) {
  return (
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          'text-[0.47rem] font-semibold uppercase tracking-[0.42em] sm:text-[0.54rem]',
          inverted ? 'text-white/78' : 'text-[#7b7a73]'
        )}
      >
        Advokatfirmaet
      </span>
      <span
        className={cn(
          'mt-1 font-serif text-[1.4rem] font-medium tracking-[-0.045em] sm:text-[1.65rem]',
          inverted ? 'text-white/95' : 'text-[#7b7a73]'
        )}
        style={inverted ? { textShadow: '0 2px 14px rgba(0,0,0,0.22)' } : undefined}
      >
        Hans Rohde
      </span>
    </span>
  );
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const top = window.scrollY + target.getBoundingClientRect().top - 110;
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const headerContrast = useHeaderContrast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);

      if (location.pathname !== '/') {
        return;
      }

      const midpoint = window.scrollY + window.innerHeight * 0.35;
      const sections = navItems
        .filter((item): item is Extract<NavItem, { kind: 'section' }> => item.kind === 'section')
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section));

      let nextActive = 'hero';

      sections.forEach((section) => {
        if (section.offsetTop - 130 <= midpoint) {
          nextActive = section.id;
        }
      });

      setActiveSection(nextActive);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveSection(hash);
      return;
    }

    setActiveSection('hero');
  }, [location.hash, location.pathname]);

  const isDarkBg = headerContrast === 'dark';

  const handleSectionNavigation = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate(id === 'hero' ? '/' : `/#${id}`);
      return;
    }

    if (id === 'hero') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    navigate(`/#${id}`);
    scrollToSection(id);
    setActiveSection(id);
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-0 right-0 top-0 z-[120]"
        data-header-ignore="true"
      >
        <nav className="w-full px-5 pb-3 pt-5 sm:px-6">
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              className={cn(
                'relative z-20 shrink-0 transition-opacity duration-300 hover:opacity-100',
                isDarkBg ? 'opacity-100' : 'opacity-95'
              )}
              aria-label="Advokatfirmaet Hans Rohde"
            >
              <HeaderWordmark inverted={isDarkBg} />
            </Link>

            <motion.div
              variants={headerVariants}
              className="absolute left-1/2 z-10 hidden -translate-x-1/2 md:block"
            >
              <div className="relative">
                <div
                  className={cn(
                    'pointer-events-none absolute inset-0 rounded-[20px] border transition-all duration-300 ease-in-out',
                    isScrolled
                      ? isDarkBg
                        ? 'border-white/15 bg-white/10 opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md'
                        : 'border-neutral-200/40 bg-white/40 opacity-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md'
                      : 'border-transparent bg-transparent opacity-0 shadow-none backdrop-blur-none'
                  )}
                />

                <div className="relative flex items-end gap-1 px-2 py-2 sm:gap-4 md:gap-8">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive =
                      item.kind === 'section'
                        ? location.pathname === '/' && activeSection === item.id
                        : location.pathname === item.to;

                    const baseClass = cn(
                      'flex flex-col items-center gap-1 rounded-2xl px-2.5 py-2 transition-colors duration-200',
                      isActive
                        ? isDarkBg
                          ? 'bg-white/15 text-white shadow-sm'
                          : 'bg-white/70 text-neutral-900 shadow-sm'
                        : isDarkBg
                          ? 'text-white/72 hover:bg-white/15 hover:text-white'
                          : 'text-neutral-500 hover:bg-white/40 hover:text-neutral-800'
                    );

                    return (
                      <motion.div key={item.id} variants={itemVariants} className="flex items-center gap-4">
                        {item.kind === 'section' ? (
                          <a
                            href={item.id === 'hero' ? '/' : `/#${item.id}`}
                            onClick={handleSectionNavigation(item.id)}
                            className={baseClass}
                          >
                            <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                            <span className="whitespace-nowrap text-[10px] font-medium leading-none">{item.label}</span>
                          </a>
                        ) : (
                          <Link to={item.to} className={baseClass}>
                            <Icon className="h-[18px] w-[18px]" strokeWidth={1.5} />
                            <span className="whitespace-nowrap text-[10px] font-medium leading-none">{item.label}</span>
                          </Link>
                        )}

                        {index === 3 ? (
                          <div
                            className={cn(
                              'hidden self-center md:block h-8 w-px',
                              isDarkBg ? 'bg-white/25' : 'bg-neutral-200'
                            )}
                          />
                        ) : null}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </nav>
      </motion.header>

      <a
        href="tel:+4520317879"
        data-header-ignore="true"
        className={cn(
          'fixed right-5 top-5 z-[120] flex flex-col items-center gap-1 rounded-2xl px-2 py-1.5 text-[10px] font-medium leading-none transition-all duration-300 sm:right-6 sm:top-6',
          isDarkBg
            ? 'border border-white/15 bg-white/10 text-white backdrop-blur-sm hover:bg-white/15'
            : 'border border-neutral-200/50 bg-white/80 text-[#454545] shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-md hover:bg-white'
        )}
      >
        <Phone className="h-[18px] w-[18px]" strokeWidth={1.5} />
        <span>20 31 78 79</span>
      </a>
    </>
  );
}

export function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleFooterSectionNavigation = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    if (location.pathname !== '/') {
      navigate(id === 'hero' ? '/' : `/#${id}`);
      return;
    }

    if (id === 'hero') {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigate(`/#${id}`);
    scrollToSection(id);
  };

  return (
    <footer className="border-t border-neutral-200/80 bg-[#fafaf8]" data-header-theme="light">
      <div className="mx-auto max-w-[88rem] px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.72fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#7b7a73]">Advokatfirmaet</p>
            <p className="mt-3 font-serif text-[2rem] font-medium leading-none tracking-[-0.045em] text-[#454545] sm:text-[2.35rem]">
              Hans Rohde
            </p>
            <p className="mt-6 max-w-md text-[0.98rem] font-light leading-7 text-neutral-600">
              Uvildig rådgivning om boligkøb, finansiering, byggeri og fast ejendom med fokus på klarhed, kvalitet og
              ordentlighed i hele forløbet.
            </p>
          </div>

          <div>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">Navigation</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href="/" onClick={handleFooterSectionNavigation('hero')} className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Boligkøb
              </a>
              <a href="/#features" onClick={handleFooterSectionNavigation('features')} className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Specialer
              </a>
              <a href="/#packages" onClick={handleFooterSectionNavigation('packages')} className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Boligpakker
              </a>
              <Link to="/about" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Om os
              </Link>
              <Link to="/contact" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Kontakt
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">Juridisk</p>
            <div className="mt-4 flex flex-col gap-3">
              <Link to="/advokatsamfundet" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Advokatsamfundet
              </Link>
              <Link to="/politikker" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Politikker
              </Link>
              <Link to="/forretningsbetingelser" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Forretningsbetingelser
              </Link>
              <Link to="/gdpr" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                GDPR
              </Link>
              <Link to="/cookies" className="text-[0.95rem] font-medium text-[#454545] hover:text-neutral-400">
                Cookiepolitik
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-neutral-400">Kontakt</p>
            <div className="mt-4 space-y-3 text-[0.95rem] font-light leading-7 text-neutral-600">
              <p>
                Advokatfirmaet Hans Rohde
                <br />
                Hviddingvej 47,
                <br />
                2610 Rødovre
                <br />
                CVR nr.: 31 30 46 87
              </p>
              <p>
                <a href="tel:+4520317879" className="font-medium text-[#454545] hover:text-neutral-400">
                  +45 20 31 78 79
                </a>
                <br />
                <a href="mailto:hr@hansrohde.dk" className="font-medium text-[#454545] hover:text-neutral-400">
                  hr@hansrohde.dk
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-neutral-200/80 pt-6 text-[0.8rem] font-medium tracking-wide text-[#45454570] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Advokatfirmaet Hans Rohde. Alle rettigheder forbeholdes.</p>
          <p>Denne side anvender nødvendige cookies til drift og sikkerhed. Se cookiepolitikken for mere information.</p>
        </div>
      </div>
    </footer>
  );
}
