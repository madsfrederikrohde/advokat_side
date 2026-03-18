import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { Footer, Header } from './Navigation';

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const location = useLocation();

  useEffect(() => {
    const id = location.hash.replace('#', '');

    if (!id) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);

      if (!target) {
        return;
      }

      const top = window.scrollY + target.getBoundingClientRect().top - 110;
      window.scrollTo({ top, behavior: 'smooth' });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return (
    <div className="min-h-screen bg-white text-[#454545]">
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={`${location.pathname}${location.hash}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
