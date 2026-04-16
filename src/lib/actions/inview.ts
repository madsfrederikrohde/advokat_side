import type { Action } from 'svelte/action';

interface InviewOptions {
	threshold?: number;
	margin?: string;
}

export const inview: Action<HTMLElement, InviewOptions | undefined> = (node, options = {}) => {
	const { threshold = 0.12, margin = '-80px' } = options;

	const observer = new IntersectionObserver(
		([entry]) => {
			if (entry.isIntersecting) {
				node.classList.add('is-visible');
				observer.unobserve(node);
			}
		},
		{ threshold, rootMargin: margin }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
};
