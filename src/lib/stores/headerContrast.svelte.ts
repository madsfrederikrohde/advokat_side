import type { HeaderContrast } from '$lib/types';

function parseBackgroundColor(color: string) {
	if (!color || color === 'transparent') return null;

	const match = color.match(/rgba?\(([^)]+)\)/i);
	if (!match) return null;

	const parts = match[1].split(',').map((p) => Number.parseFloat(p.trim()));
	if (parts.length < 3) return null;

	const [r, g, b, a = 1] = parts;
	if (a < 0.15) return null;

	return { r, g, b };
}

function getRelativeLuminance(r: number, g: number, b: number): number {
	const convert = (v: number) => {
		const c = v / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	};
	return 0.2126 * convert(r) + 0.7152 * convert(g) + 0.0722 * convert(b);
}

function getExplicitTheme(element: HTMLElement): HeaderContrast | null {
	const themed = element.closest<HTMLElement>('[data-header-theme]');
	if (!themed || themed.closest('[data-header-ignore="true"]')) return null;
	const t = themed.dataset.headerTheme;
	return t === 'dark' || t === 'light' ? t : null;
}

function detectContrast(): HeaderContrast {
	if (typeof window === 'undefined') return 'light';

	const sampleX = window.innerWidth / 2;
	const sampleY = 48;
	const elements = document.elementsFromPoint(sampleX, sampleY);

	for (const el of elements) {
		if (!(el instanceof HTMLElement)) continue;
		if (el.closest('[data-header-ignore="true"]')) continue;

		const explicit = getExplicitTheme(el);
		if (explicit) return explicit;

		const bg = parseBackgroundColor(window.getComputedStyle(el).backgroundColor);
		if (!bg) continue;

		return getRelativeLuminance(bg.r, bg.g, bg.b) < 0.4 ? 'dark' : 'light';
	}

	return 'light';
}

class HeaderContrastStore {
	value = $state<HeaderContrast>('light');

	setup() {
		let frame = 0;

		const update = () => {
			frame = 0;
			this.value = detectContrast();
		};

		const schedule = () => {
			if (frame) return;
			frame = window.requestAnimationFrame(update);
		};

		schedule();
		window.addEventListener('scroll', schedule, { passive: true });
		window.addEventListener('resize', schedule);

		return () => {
			if (frame) window.cancelAnimationFrame(frame);
			window.removeEventListener('scroll', schedule);
			window.removeEventListener('resize', schedule);
		};
	}
}

export const headerContrast = new HeaderContrastStore();
