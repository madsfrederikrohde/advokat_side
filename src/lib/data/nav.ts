import type { NavItem } from '$lib/types';

export const navItems: NavItem[] = [
	{ kind: 'dropdown', id: 'ydelser', label: 'Ydelser', to: '/ydelser' },
	{ kind: 'route', id: 'articles', label: 'Gode råd', to: '/articles' },
	{ kind: 'route', id: 'about', label: 'Om os', to: '/about' },
	{ kind: 'route', id: 'contact', label: 'Kontakt', to: '/contact' }
];
