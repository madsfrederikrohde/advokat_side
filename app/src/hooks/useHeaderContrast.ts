import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export type HeaderContrast = 'light' | 'dark';

function parseBackgroundColor(color: string) {
  if (!color || color === 'transparent') {
    return null;
  }

  const match = color.match(/rgba?\(([^)]+)\)/i);

  if (!match) {
    return null;
  }

  const parts = match[1].split(',').map((part) => Number.parseFloat(part.trim()));

  if (parts.length < 3) {
    return null;
  }

  const [r, g, b, a = 1] = parts;

  if (a < 0.15) {
    return null;
  }

  return { r, g, b, a };
}

function getRelativeLuminance(r: number, g: number, b: number) {
  const convert = (value: number) => {
    const channel = value / 255;

    return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
  };

  const red = convert(r);
  const green = convert(g);
  const blue = convert(b);

  return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
}

function getExplicitTheme(element: HTMLElement): HeaderContrast | null {
  const themedAncestor = element.closest<HTMLElement>('[data-header-theme]');

  if (!themedAncestor || themedAncestor.closest('[data-header-ignore="true"]')) {
    return null;
  }

  const explicitTheme = themedAncestor.dataset.headerTheme;

  return explicitTheme === 'dark' || explicitTheme === 'light' ? explicitTheme : null;
}

function detectHeaderContrast(): HeaderContrast {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return 'light';
  }

  const sampleX = window.innerWidth / 2;
  const sampleY = 48;
  const elements = document.elementsFromPoint(sampleX, sampleY);

  for (const element of elements) {
    if (!(element instanceof HTMLElement)) {
      continue;
    }

    if (element.closest('[data-header-ignore="true"]')) {
      continue;
    }

    const explicitTheme = getExplicitTheme(element);

    if (explicitTheme) {
      return explicitTheme;
    }

    const background = parseBackgroundColor(window.getComputedStyle(element).backgroundColor);

    if (!background) {
      continue;
    }

    const luminance = getRelativeLuminance(background.r, background.g, background.b);

    return luminance < 0.4 ? 'dark' : 'light';
  }

  return 'light';
}

export function useHeaderContrast() {
  const location = useLocation();
  const [headerContrast, setHeaderContrast] = useState<HeaderContrast>('light');

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      setHeaderContrast(detectHeaderContrast());
    };

    const scheduleUpdate = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(update);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, [location.hash, location.pathname]);

  return headerContrast;
}
