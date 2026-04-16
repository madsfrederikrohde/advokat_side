import { AnimatePresence, motion } from 'motion/react';
import {
  ChevronDown,
  CircleHelp,
  CircleUserRound,
  Home,
  Landmark,
  Mail,
  Menu,
  type LucideIcon,
  Package2,
  Phone,
  X,
} from 'lucide-react';
import type { MouseEvent } from 'react';
import { useEffect, useRef, useState } from 'react';
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

function HeaderWordmark({ inverted, collapsed }: { inverted: boolean; collapsed: boolean }) {
  return (
    <span className="flex items-center gap-2 sm:gap-2.5">
      <span
        className={cn(
          'font-serif text-[1.35rem] font-medium leading-none tracking-[-0.035em] sm:text-[1.75rem]',
          inverted ? 'text-white' : 'text-[#454545]'
        )}
        style={inverted ? { textShadow: '0 2px 14px rgba(0,0,0,0.22)' } : undefined}
      >
        Rohde
      </span>
      <span
        aria-hidden={collapsed}
        className={cn(
          'flex items-center overflow-hidden transition-all duration-300 ease-out',
          collapsed
            ? 'max-w-0 -translate-x-1 gap-0 opacity-0'
            : 'max-w-[260px] translate-x-0 gap-2 opacity-100 sm:gap-2.5'
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'h-4 w-px shrink-0 sm:h-5',
            inverted ? 'bg-white/30' : 'bg-[#454545]/25'
          )}
        />
        <span
          className={cn(
            'whitespace-nowrap text-[0.66rem] font-medium uppercase leading-none tracking-[0.2em] sm:text-[0.72rem]',
            inverted ? 'text-white/80' : 'text-[#7b7a73]'
          )}
        >
          Ejendomsadvokaterne
        </span>
      </span>
    </span>
  );
}

function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) {
    return;
  }

  const top = window.scrollY + target.getBoundingClientRect().top - (window.innerWidth >= 768 ? 110 : 88);
  window.scrollTo({ top, behavior: 'smooth' });
}

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const headerContrast = useHeaderContrast();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!mobileMenuRef.current?.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const isDarkBg = headerContrast === 'dark';
  const isItemActive = (item: NavItem) =>
    item.kind === 'section' ? location.pathname === '/' && activeSection === item.id : location.pathname === item.to;

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
      <AnimatePresence>
        {isMobileMenuOpen ? (
          <motion.button
            type="button"
            aria-label="Luk navigation"
            onClick={() => setIsMobileMenuOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-[110] bg-[rgba(17,17,19,0.04)] backdrop-blur-[1px] md:hidden"
            data-header-ignore="true"
          />
        ) : null}
      </AnimatePresence>

      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="fixed left-0 right-0 top-0 z-[120]"
        data-header-ignore="true"
      >
        <nav className="w-full px-4 pb-2 pt-3 sm:px-6 sm:pb-3 sm:pt-5">
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              className={cn(
                'relative z-20 shrink-0 translate-x-1.5 px-0 py-0 [-webkit-tap-highlight-color:transparent] transition-opacity duration-300 hover:opacity-100 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 active:outline-none sm:translate-x-2.5',
                isDarkBg ? 'opacity-100' : 'opacity-95'
              )}
              aria-label="Ejendomsadvokaterne Rohde"
            >
              <HeaderWordmark inverted={isDarkBg} collapsed={isScrolled} />
            </Link>

            <div ref={mobileMenuRef} className="relative z-30 md:hidden">
              <button
                type="button"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-site-navigation"
                onClick={() => setIsMobileMenuOpen((open) => !open)}
                className={cn(
                  'flex items-center gap-1.5 px-0 py-0 text-[0.68rem] font-semibold tracking-[0.01em] shadow-none backdrop-blur-none transition-opacity duration-200 hover:opacity-80 focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 active:outline-none',
                  isDarkBg ? 'text-white' : 'text-[#4f4f4f]'
                )}
                data-header-ignore="true"
              >
                {isMobileMenuOpen ? <X className="h-4 w-4" strokeWidth={1.9} /> : <Menu className="h-4 w-4" strokeWidth={1.9} />}
                <span>{isMobileMenuOpen ? 'Luk' : 'Menu'}</span>
              </button>

              <AnimatePresence>
                {isMobileMenuOpen ? (
                  <motion.div
                    id="mobile-site-navigation"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.32, 0.72, 0, 1] }}
                    className="absolute right-0 top-full mt-2.5 w-[min(16rem,calc(100vw-2.25rem))] overflow-hidden rounded-[24px] border border-white/70 bg-white/90 text-[#454545] shadow-[0_24px_48px_-34px_rgba(15,23,42,0.28)] backdrop-blur-xl"
                    data-header-ignore="true"
                  >
                    <div className="px-3.5 pb-1.5 pt-3.5">
                      <p className="text-[0.58rem] font-semibold uppercase tracking-[0.18em] text-[#8a877f]">
                        Navigation
                      </p>
                    </div>

                    <nav aria-label="Mobil navigation" className="px-2.5 pb-2.5">
                      {navItems.map((item) => {
                        const Icon = item.icon;
                        const active = isItemActive(item);
                        const itemClass = cn(
                          'flex w-full items-center justify-between rounded-[18px] px-3.5 py-2.5 text-left text-[0.84rem] font-medium transition-colors duration-200',
                          active
                            ? 'bg-[#454545]/[0.055] text-[#454545]'
                            : 'text-[#66645f] hover:bg-[#454545]/[0.035] hover:text-[#454545]'
                        );

                        return item.kind === 'section' ? (
                          <a
                            key={item.id}
                            href={item.id === 'hero' ? '/' : `/#${item.id}`}
                            onClick={(event) => {
                              setIsMobileMenuOpen(false);
                              handleSectionNavigation(item.id)(event);
                            }}
                            className={itemClass}
                          >
                            <span className="flex items-center gap-3">
                              <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                              <span>{item.label}</span>
                            </span>
                          </a>
                        ) : (
                          <Link
                            key={item.id}
                            to={item.to}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={itemClass}
                          >
                            <span className="flex items-center gap-3">
                              <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
                              <span>{item.label}</span>
                            </span>
                          </Link>
                        );
                      })}
                    </nav>

                    <div className="border-t border-neutral-200/80 px-3.5 py-3">
                      <a
                        href="tel:+4520317879"
                        className="flex items-center justify-between rounded-[18px] bg-[#454545]/[0.045] px-3.5 py-2.5 text-[#454545] transition-colors duration-200 hover:bg-[#454545]/[0.07]"
                      >
                        <span className="flex flex-col">
                          <span className="text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-[#8a877f]">
                            Ring direkte
                          </span>
                          <span className="mt-1 text-[0.82rem] font-medium">20 31 78 79</span>
                        </span>
                        <Phone className="h-4 w-4" strokeWidth={1.7} />
                      </a>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <HeaderContactMenu isDarkBg={isDarkBg} />

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
                    const isActive = isItemActive(item);

                    const baseClass = cn(
                      'flex flex-col items-center gap-1 rounded-2xl px-2.5 py-2 transition-colors duration-200',
                      isActive
                        ? isDarkBg
                          ? 'bg-white/15 text-white shadow-sm'
                          : 'bg-white/70 text-[#454545] shadow-sm'
                        : isDarkBg
                          ? 'text-white/72 hover:bg-white/15 hover:text-white'
                          : 'text-neutral-500 hover:bg-white/40 hover:text-[#454545]'
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

    </>
  );
}

function HeaderContactMenu({ isDarkBg }: { isDarkBg: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const open = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setIsOpen(true);
  };

  const scheduleClose = () => {
    if (closeTimer.current !== null) {
      window.clearTimeout(closeTimer.current);
    }
    closeTimer.current = window.setTimeout(() => setIsOpen(false), 140);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onPointerDown = (event: PointerEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  useEffect(
    () => () => {
      if (closeTimer.current !== null) {
        window.clearTimeout(closeTimer.current);
      }
    },
    []
  );

  return (
    <div
      ref={containerRef}
      data-header-ignore="true"
      onMouseEnter={open}
      onMouseLeave={scheduleClose}
      onFocus={open}
      onBlur={(event) => {
        if (!containerRef.current?.contains(event.relatedTarget as Node | null)) {
          scheduleClose();
        }
      }}
      className="relative z-30 hidden -translate-x-0.5 md:block"
    >
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          'flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[0.78rem] font-medium tracking-[-0.005em] transition-colors duration-300',
          isDarkBg
            ? 'text-white/85 hover:text-white'
            : 'text-[#454545]/80 hover:text-[#454545]'
        )}
      >
        <span>Kontakt</span>
        <ChevronDown
          className={cn('h-3 w-3 transition-transform duration-300', isOpen ? 'rotate-180' : 'rotate-0')}
          strokeWidth={2}
        />
      </button>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.32, 0.72, 0, 1] }}
            className="absolute right-0 top-full mt-2 w-[12rem] overflow-hidden rounded-[16px] border border-neutral-200/70 bg-white/96 shadow-[0_18px_40px_-24px_rgba(15,23,42,0.22)] backdrop-blur-xl"
          >
            <a
              href="tel:+4520317879"
              role="menuitem"
              className="flex items-center gap-2.5 px-3.5 py-2.5 text-[0.82rem] font-medium text-[#454545] transition-colors duration-200 hover:bg-[#454545]/[0.04]"
            >
              <Phone className="h-3.5 w-3.5 shrink-0 text-[#7b7a73]" strokeWidth={1.8} />
              <span>Ring 20 31 78 79</span>
            </a>
            <div className="h-px bg-neutral-200/70" />
            <a
              href="mailto:hr@hansrohde.dk"
              role="menuitem"
              className="flex items-center gap-2.5 px-3.5 py-2.5 text-[0.82rem] font-medium text-[#454545] transition-colors duration-200 hover:bg-[#454545]/[0.04]"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-[#7b7a73]" strokeWidth={1.8} />
              <span>Send mail</span>
            </a>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
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
    <footer className="bg-[#fafaf8]" data-header-theme="light">
      <div className="mx-auto max-w-[88rem] px-6 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.72fr)_minmax(0,0.8fr)_minmax(0,0.9fr)]">
          <div className="max-w-xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-[#7b7a73]">Ejendomsadvokaterne</p>
            <p className="mt-3 font-serif text-[2rem] font-medium leading-none tracking-[-0.045em] text-[#454545] sm:text-[2.35rem]">
              Rohde
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
                Ejendomsadvokaterne Rohde
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
          <p>© 2026 Ejendomsadvokaterne Rohde. Alle rettigheder forbeholdes.</p>
          <p>Denne side anvender nødvendige cookies til drift og sikkerhed. Se cookiepolitikken for mere information.</p>
        </div>
      </div>
    </footer>
  );
}
